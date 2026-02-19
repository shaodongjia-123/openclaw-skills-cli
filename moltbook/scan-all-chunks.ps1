param(
  [Parameter(Mandatory=$true)][string]$PostUrl
)

$base='https://www.moltbook.com'

# get chunk list from HTML
$resp = Invoke-WebRequest -UseBasicParsing $PostUrl
$html = $resp.Content
$pattern = '\/_next\/static\/chunks\/[^\s\"<>]+\.js'
$matches = Select-String -InputObject $html -AllMatches -Pattern $pattern
$chunkPaths = @()
foreach($m in $matches.Matches){ $chunkPaths += $m.Value }
$chunkPaths = $chunkPaths | Sort-Object -Unique

"POST=$PostUrl"
"CHUNKS=$($chunkPaths.Count)"

foreach($p in $chunkPaths){
  $u = $base + $p
  try{
    $js = (Invoke-WebRequest -UseBasicParsing $u).Content
  }catch{
    Write-Host "---FAIL $p"
    continue
  }
  $eps = [regex]::Matches($js,'/api/v1/[^"\s`]+') | ForEach-Object { $_.Value } | Sort-Object -Unique
  if($eps.Count -gt 0){
    Write-Host "---$p endpoints=$($eps.Count)"
    $eps
  }
}
