# Save clipboard image to OpenClaw workspace
# Usage: Copy image -> Run this script

$workspace = "C:\Users\MECHREVO\.openclaw\workspace"
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$filename = "image_$timestamp.png"
$filepath = Join-Path $workspace $filename

# Check if clipboard has image
Add-Type -AssemblyName System.Windows.Forms
if ([System.Windows.Forms.Clipboard]::ContainsImage()) {
    $image = [System.Windows.Forms.Clipboard]::GetImage()
    $image.Save($filepath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "[OK] Image saved: $filepath" -ForegroundColor Green
    Write-Host ""
    Write-Host "[TIP] Tell OpenClaw:" -ForegroundColor Yellow
    Write-Host "      Image saved as: $filename" -ForegroundColor Cyan
    Write-Host "      Please analyze this image" -ForegroundColor Cyan
} else {
    Write-Host "[ERROR] No image in clipboard. Please copy an image first." -ForegroundColor Red
}
