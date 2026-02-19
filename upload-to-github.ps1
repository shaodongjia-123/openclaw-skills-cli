# GitHub Upload Script
# Step 1: Create GitHub token with 'repo' permission
# Step 2: Save token to github-token.txt file
# Step 3: Run this script

$ErrorActionPreference = "Stop"

Write-Host "OpenClaw Skills CLI - GitHub Upload Tool" -ForegroundColor Green
Write-Host ""

# Check token file
$tokenFile = "github-token.txt"
if (-not (Test-Path $tokenFile)) {
    Write-Host "ERROR: Token file not found" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please create a token:" -ForegroundColor Yellow
    Write-Host "1. Visit: https://github.com/settings/tokens"
    Write-Host "2. Click 'Generate new token (classic)'"
    Write-Host "3. Name: upload-script"
    Write-Host "4. MUST check: repo (Full control)"
    Write-Host "5. Generate and copy token"
    Write-Host "6. Create github-token.txt in this directory"
    Write-Host "7. Paste token into the file"
    Write-Host ""
    exit 1
}

# Read token
$token = Get-Content $tokenFile -Raw
$token = $token.Trim()

if ([string]::IsNullOrEmpty($token)) {
    Write-Host "ERROR: Token is empty" -ForegroundColor Red
    exit 1
}

# GitHub config
$owner = "shaodongjia-123"
$repo = "openclaw-skills-cli"
$apiUrl = "https://api.github.com/repos/$owner/$repo/contents"

Write-Host "Token loaded successfully" -ForegroundColor Green
Write-Host ""

# Check if repo exists
Write-Host "Checking repository..." -ForegroundColor Cyan
try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/repos/$owner/$repo" -Method Get
    Write-Host "Repository exists: $repo" -ForegroundColor Green
} catch {
    Write-Host "Repository not found, creating..." -ForegroundColor Yellow

    # Create repo
    $createBody = @{
        name = $repo
        description = "OpenClaw Skills CLI - AI coding skills tool"
        private = $false
        auto_init = $false
    } | ConvertTo-Json

    Invoke-RestMethod -Uri "https://api.github.com/user/repos" `
        -Method Post `
        -Headers @{
            Authorization = "token $token"
            Accept = "application/vnd.github.v3+json"
        } `
        -Body $createBody

    Write-Host "Repository created!" -ForegroundColor Green
    Write-Host ""
}

Write-Host "Starting file upload..." -ForegroundColor Cyan
Write-Host ""

# Get all files
$files = Get-ChildItem -Recurse -File -Exclude "github-token.txt","upload-to-github.ps1","*.git*"

# Counters
$uploaded = 0
$failed = 0

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')

    Write-Host "Uploading: $relativePath" -NoNewline

    try {
        $content = [System.IO.File]::ReadAllBytes($file.FullName)
        $base64Content = [System.Convert]::ToBase64String($content)

        $uploadBody = @{
            message = "Upload $relativePath"
            content = $base64Content
        } | ConvertTo-Json

        try {
            # Check if file exists
            $existingFile = Invoke-RestMethod -Uri "$apiUrl/$relativePath" `
                -Method Get `
                -Headers @{
                    Authorization = "token $token"
                    Accept = "application/vnd.github.v3+json"
                } -ErrorAction SilentlyContinue

            if ($existingFile) {
                # Update file
                $uploadBody = @{
                    message = "Update $relativePath"
                    content = $base64Content
                    sha = $existingFile.sha
                } | ConvertTo-Json

                Invoke-RestMethod -Uri "$apiUrl/$relativePath" `
                    -Method Put `
                    -Headers @{
                        Authorization = "token $token"
                        Accept = "application/vnd.github.v3+json"
                    } `
                    -Body $uploadBody
            }
        } catch {
            # Create new file
            Invoke-RestMethod -Uri "$apiUrl/$relativePath" `
                -Method Put `
                -Headers @{
                    Authorization = "token $token"
                    Accept = "application/vnd.github.v3+json"
                } `
                -Body $uploadBody
        }

        Write-Host " OK" -ForegroundColor Green
        $uploaded++
    } catch {
        Write-Host " FAILED" -ForegroundColor Red
        Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor DarkRed
        $failed++
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Upload complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Success: $uploaded files" -ForegroundColor Green
Write-Host "Failed: $failed files" -if ($failed -gt 0) {ForegroundColor Red} else {ForegroundColor Green}
Write-Host ""
Write-Host "GitHub URL:" -ForegroundColor Cyan
Write-Host "https://github.com/$owner/$repo" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Open repository to verify files" -ForegroundColor White
Write-Host "2. Test CLI: npm install && npm link" -ForegroundColor White
Write-Host "3. Record video and publish" -ForegroundColor White
Write-Host ""
