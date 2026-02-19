param(
  [Parameter(Mandatory=$true)][string]$Url
)

$resp = Invoke-WebRequest -UseBasicParsing $Url
$html = $resp.Content

$pattern = '\/_next\/static\/chunks\/[^\s\"<>]+\.js'
$matches = Select-String -InputObject $html -AllMatches -Pattern $pattern
$chunks = @()
foreach($m in $matches.Matches){ $chunks += $m.Value }
$chunks = $chunks | Sort-Object -Unique

"CHUNK_COUNT=$($chunks.Count)"
$chunks | Select-Object -First 50
