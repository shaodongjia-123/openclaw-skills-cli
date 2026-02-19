param(
  [Parameter(Mandatory=$true)][string]$ChunkUrl,
  [string]$Needle = '/api/v1/posts',
  [int]$Radius = 300
)
$base='https://www.moltbook.com'
if($ChunkUrl -notmatch '^https?://'){ $u=$base+$ChunkUrl } else { $u=$ChunkUrl }
$js=(Invoke-WebRequest -UseBasicParsing $u).Content
"URL=$u"
$i=0
$k=0
while($true){
  $idx = $js.IndexOf($Needle, $i)
  if($idx -lt 0){ break }
  $k++
  $start=[Math]::Max(0,$idx-$Radius)
  $len=[Math]::Min($js.Length-$start, $Radius*2)
  "---HIT#$k idx=$idx---"
  $js.Substring($start,$len)
  $i = $idx + $Needle.Length
}
"HITS=$k"
