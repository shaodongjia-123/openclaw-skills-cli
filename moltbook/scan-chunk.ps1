param(
  [Parameter(Mandatory=$true)][string]$ChunkUrl,
  [string[]]$Needles = @('/api/v1/posts','posts','comment','create','POST','/continue','graphql','api')
)

$base = 'https://www.moltbook.com'
if($ChunkUrl -notmatch '^https?://'){ $u = $base + $ChunkUrl } else { $u = $ChunkUrl }

$js = (Invoke-WebRequest -UseBasicParsing $u).Content

"URL=$u"
foreach($n in $Needles){
  $hits = Select-String -InputObject $js -AllMatches -SimpleMatch $n
  if($hits){ "HIT:$n COUNT=$($hits.Matches.Count)" }
}

# print a few surrounding lines for likely endpoints
$endpointRegex = '/api/v1/[^"\s]+'
$eps = Select-String -InputObject $js -AllMatches -Pattern $endpointRegex
$vals = @()
foreach($m in $eps.Matches){ $vals += $m.Value }
$vals = $vals | Sort-Object -Unique
"ENDPOINTS=$($vals.Count)"
$vals | Select-Object -First 80
