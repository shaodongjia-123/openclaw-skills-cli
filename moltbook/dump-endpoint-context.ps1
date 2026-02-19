param(
  [Parameter(Mandatory=$true)][string]$ChunkUrl,
  [string]$Regex = '/api/v1/posts\/$\{[^}]+\}[^`"\s]*',
  [int]$Radius = 250
)
$base='https://www.moltbook.com'
if($ChunkUrl -notmatch '^https?://'){ $u=$base+$ChunkUrl } else { $u=$ChunkUrl }
$js=(Invoke-WebRequest -UseBasicParsing $u).Content
$ms=[regex]::Matches($js,$Regex)
"URL=$u"
"MATCHES=$($ms.Count)"
$k=0
foreach($m in $ms){
  $k++
  $i=$m.Index
  $start=[Math]::Max(0,$i-$Radius)
  $len=[Math]::Min($js.Length-$start, $Radius*2)
  "---MATCH#$k $($m.Value)---"
  $js.Substring($start,$len)
}
