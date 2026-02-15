#!/usr/bin/env node
/**
 * Token usage & cost calculator.
 * Example:
 *   node scripts/calc.js --in 52600 --out 1227 --cap 272000 --budget 5 --fx 7.2
 */

function getArg(name, def = null) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return def;
  const v = process.argv[idx + 1];
  if (v == null) return def;
  return v;
}

function num(x, name) {
  const n = Number(x);
  if (!Number.isFinite(n)) throw new Error(`Invalid number for --${name}: ${x}`);
  return n;
}

function pct(x) {
  return (x * 100).toFixed(2) + '%';
}

function money(x) {
  return x.toFixed(2);
}

const inTok = num(getArg('in', '0'), 'in');
const outTok = num(getArg('out', '0'), 'out');
const capTok = getArg('cap', null) == null ? null : num(getArg('cap'), 'cap');
const budgetUsd = getArg('budget', null) == null ? null : num(getArg('budget'), 'budget');
const fx = getArg('fx', null) == null ? null : num(getArg('fx'), 'fx');

const totalTok = inTok + outTok;
const outRatio = totalTok > 0 ? outTok / totalTok : 0;

const result = {
  input_tokens: inTok,
  output_tokens: outTok,
  total_tokens: totalTok,
  output_ratio: outRatio,
};

if (capTok != null) {
  result.cap_tokens = capTok;
  result.used_pct = capTok > 0 ? totalTok / capTok : null;
  result.remaining_tokens = capTok - totalTok;
  result.remaining_pct = capTok > 0 ? 1 - (totalTok / capTok) : null;
}

if (capTok != null && budgetUsd != null) {
  const costPerToken = budgetUsd / capTok;
  result.budget_usd = budgetUsd;
  result.cost_per_token_usd = costPerToken;
  result.used_usd = totalTok * costPerToken;
  result.remaining_usd = (capTok - totalTok) * costPerToken;
  if (fx != null) {
    result.fx = fx;
    result.used_rmb = result.used_usd * fx;
    result.remaining_rmb = result.remaining_usd * fx;
  }
}

// Human-friendly print
console.log(`输入：${inTok.toLocaleString()} tokens`);
console.log(`输出：${outTok.toLocaleString()} tokens`);
console.log(`合计：${totalTok.toLocaleString()} tokens`);
console.log(`输出占比：${pct(outRatio)}`);

if (capTok != null) {
  console.log(`已用：${totalTok.toLocaleString()} / ${capTok.toLocaleString()} ≈ ${pct(result.used_pct)}`);
  console.log(`剩余：${result.remaining_tokens.toLocaleString()}（≈ ${pct(result.remaining_pct)}）`);
}

if (result.used_usd != null) {
  const usedUsd = result.used_usd;
  const usedRmb = result.used_rmb;
  if (usedRmb != null) {
    console.log(`折合人民币：$${money(usedUsd)} ≈ ¥${money(usedRmb)}（汇率 ${fx}）`);
  } else {
    console.log(`已用金额：$${money(usedUsd)} (no fx provided)`);
  }
}

// JSON output for programmatic use
if (process.argv.includes('--json')) {
  console.log(JSON.stringify(result, null, 2));
}
