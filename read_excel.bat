@echo off
chcp 65001 >nul 2>nul
setlocal enabledelayedexpansion
set "PATH=%SystemRoot%\System32;%SystemRoot%\System32\Wbem;C:\Python39\Scripts;"

cd /d C:\Users\MECHREVO\.openclaw\workspace

echo 正在读取Excel文件...
python -c "import csv; reader = csv.reader(open(r'input.csv', 'r', encoding='utf-8-sig'), delimiter=','); header = next(reader); print('表头:'); print(' | '.join(header)); print('-' * 100); print('数据：'); [print(f'{i+1}. | '.join([str(c)[:50] for c in row[:15]])) for i, row in enumerate(reader, 1) if i <= 30]" > fastmoss_data.txt

echo 完成！请把 fastmoss_data.txt 内容发给我
pause
