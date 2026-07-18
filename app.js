'use strict';
// bat-web デモ版: バックエンドなし。window.SAMPLE（コミクスの実分析結果）を
// 進捗アニメーション付きで描画する。PPTX は同梱の decks/comix.pptx をダウンロード。

const $ = (s) => document.querySelector(s);
const el = {
  form: $('#form'), url: $('#url'), submit: $('#submit'),
  sampleBtn: $('#sampleBtn'),
  progress: $('#progress'), phaseText: $('#phaseText'), phaseUrl: $('#phaseUrl'),
  elapsed: $('#elapsed'), steps: $('#steps'),
  report: $('#report'),
};
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const CAT = {
  automate: { label: '自動化推奨', icon: '🤖', cls: 'auto', color: '#1E7A5E' },
  collaborate: { label: '協働', icon: '🤝', cls: 'collab', color: '#2B5797' },
  human: { label: '人間専任', icon: '👤', cls: 'human', color: '#8C3463' },
};
// デモの疑似進捗（実ツールは 60〜120 秒。ここは 3.6 秒に短縮した再生）
const SCRIPT = [
  { t: 200, k: 'research', msg: '企業サイトを取得しています…' },
  { t: 1100, k: 'research', msg: '事業内容・サービスを読み取っています…' },
  { t: 2100, k: 'research', msg: '主要業務を洗い出し、3分類に仕分けしています…' },
  { t: 3000, k: 'pptx', msg: '株主総会レベルの PowerPoint を生成しています…', doneResearch: true },
  { t: 3600, k: 'done', msg: '完了', finish: true },
];

el.form.addEventListener('submit', (e) => { e.preventDefault(); run(); });
el.sampleBtn.addEventListener('click', () => run());

function run() {
  el.submit.disabled = true;
  el.report.hidden = true;
  el.report.innerHTML = '';
  el.progress.hidden = false;
  el.phaseUrl.textContent = el.url.value.trim() || 'https://www.comix.co.jp';
  ['research', 'pptx', 'done'].forEach((k) => setStep(k, ''));
  setStep('research', 'active');

  const start = performance.now();
  const tick = setInterval(() => { el.elapsed.textContent = ((performance.now() - start) / 1000).toFixed(1); }, 100);
  const timers = [];
  SCRIPT.forEach((s) => {
    timers.push(setTimeout(() => {
      el.phaseText.textContent = s.msg;
      if (s.doneResearch) { setStep('research', 'done'); setStep('pptx', 'active'); }
      if (s.finish) {
        clearInterval(tick);
        setStep('research', 'done'); setStep('pptx', 'done'); setStep('done', 'done');
        el.progress.hidden = true;
        el.submit.disabled = false;
        renderReport(window.SAMPLE);
      }
    }, s.t));
  });
}

function setStep(k, state) {
  const s = el.steps.querySelector(`[data-k="${k}"]`);
  if (s) s.className = 'step ' + state;
}

// ---- レポート描画（本体ツールと同一レイアウト） --------------------------
function renderReport(d) {
  const ops = d.operations || [];
  const byCat = (c) => ops.filter((o) => o.category === c).sort((a, b) => b.priority - a.priority);

  const dl = `<a class="dl-btn" href="decks/comix.pptx" download="automation_triage_comix.pptx">⬇ PowerPoint をダウンロード（12ページ）</a>`;

  let html = `
  <div class="rep-head">
    <div class="rep-title">
      <h2>${esc(d.company_name)}</h2>
      ${d.industry ? `<span class="ind">${esc(d.industry)}</span>` : ''}
      ${d.url ? `<div class="url">${esc(d.url)}</div>` : ''}
    </div>
    ${dl}
  </div>
  <div class="summary">${esc(d.executive_summary)}
    ${d.business_overview ? `<div class="overview">${esc(d.business_overview)}</div>` : ''}
  </div>
  <div class="tiles">
    ${tile('auto', d.counts.automate, '🤖 自動化推奨', 'AIで大半を代替')}
    ${tile('collab', d.counts.collaborate, '🤝 協働', 'AIが下書き→人が判断')}
    ${tile('human', d.counts.human, '👤 人間専任', '人がやるべき領域')}
  </div>`;

  html += catSection('automate', byCat('automate'), 'AI 活用手法');
  html += catSection('collaborate', byCat('collaborate'), '役割分担（AI / 人）');
  html += humanSection(byCat('human'));

  html += `<h3 class="sec-title">優先度マトリクス <span style="font-size:12px;color:var(--muted);font-weight:400">売上インパクト × 実装難易度</span></h3>
    <div class="card matrix-card">${matrixSvg(ops)}
      <div class="mx-legend">
        <span><i style="background:${CAT.automate.color}"></i>自動化推奨</span>
        <span><i style="background:${CAT.collaborate.color}"></i>協働</span>
        <span>バブル内の数字 = 優先度スコア（売上×2 − 難易度）</span>
      </div>
    </div>`;

  html += `<h3 class="sec-title">実装ロードマップ</h3>${roadmap(d.roadmap)}`;

  if ((d.recommended_actions || []).length) {
    html += `<h3 class="sec-title">推奨アクション</h3><ol class="actions">${d.recommended_actions.map((a) => `<li>${esc(a)}</li>`).join('')}</ol>`;
  }
  html += `<ul class="sources"><li style="list-style:none;font-weight:700;color:var(--ink);margin-bottom:6px">データソース</li>${(d.sources || []).map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`;
  html += `<p class="note" style="margin-top:16px">分析モデル: sonnet　·　所要 81 秒（実測）　·　この結果は AI による推定を含みます。数値は実データで裏取りの上ご活用ください。</p>
    <p class="note" style="margin-top:6px">🧪 これはデモ表示です。あなたの会社の URL でのライブ分析は、ローカル版ツール（<b>claude -p 駆動</b>）で実行できます。</p>`;

  el.report.innerHTML = html;
  el.report.hidden = false;
  el.report.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function tile(cls, n, lab, desc) {
  return `<div class="tile ${cls}"><div class="num">${n}</div><div class="lab">${lab}</div><div class="desc">${desc}</div></div>`;
}
function catSection(cat, list, col2) {
  if (!list.length) return '';
  const c = CAT[cat];
  const rows = list.map((o) => `
    <tr class="badge-${c.cls}">
      <td class="nm">${esc(o.name)}</td>
      <td>${esc(o.ai_approach || o.description)}</td>
      <td class="pri"><span>${o.priority}</span></td>
    </tr>`).join('');
  return `<h3 class="sec-title"><span class="pill ${c.cls}">${c.icon} ${c.label}</span> <span style="font-size:13px;color:var(--muted);font-weight:400">${list.length}件</span></h3>
    <table class="ops"><thead><tr><th>業務</th><th>${esc(col2)}</th><th>優先</th></tr></thead><tbody>${rows}</tbody></table>`;
}
function humanSection(list) {
  if (!list.length) return '';
  const rows = list.map((o) => `<tr><td class="nm">${esc(o.name)}</td><td>${esc(o.rationale || o.description)}</td></tr>`).join('');
  return `<h3 class="sec-title"><span class="pill human">👤 人間専任</span> <span style="font-size:13px;color:var(--muted);font-weight:400">${list.length}件 — AIに渡さず人が持つ領域</span></h3>
    <table class="ops"><thead><tr><th>業務</th><th>人が担う理由</th></tr></thead><tbody>${rows}</tbody></table>`;
}
function roadmap(rm) {
  rm = rm || { phase1: [], phase2: [], phase3: [] };
  const meta = [
    ['p1', 'PHASE 1', 'クイックウィン（高インパクト×低難易度）', rm.phase1],
    ['p2', 'PHASE 2', '本命（難易度中〜高だが効果大）', rm.phase2],
    ['p3', 'PHASE 3', '将来（費用対効果を見て段階導入）', rm.phase3],
  ];
  return `<div class="roadmap">${meta.map(([cls, t, sub, items]) => `
    <div class="phase ${cls}">
      <h4>${t}<small>${sub}</small></h4>
      ${(items && items.length) ? `<ul>${items.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>` : `<div class="empty">該当なし</div>`}
    </div>`).join('')}</div>`;
}
function matrixSvg(ops) {
  const W = 720, H = 440, pad = { l: 66, r: 24, t: 26, b: 52 };
  const plotW = W - pad.l - pad.r, plotH = H - pad.t - pad.b;
  const x = (d) => pad.l + ((d - 0.5) / 5) * plotW;
  const y = (v) => pad.t + (1 - (v - 0.5) / 5) * plotH;
  const targets = ops.filter((o) => o.category !== 'human');
  let g = '';
  for (let i = 0; i <= 5; i++) {
    const gx = pad.l + (i / 5) * plotW, gy = pad.t + (i / 5) * plotH;
    g += `<line x1="${gx}" y1="${pad.t}" x2="${gx}" y2="${pad.t + plotH}" stroke="#eef1f6"/>`;
    g += `<line x1="${pad.l}" y1="${gy}" x2="${pad.l + plotW}" y2="${gy}" stroke="#eef1f6"/>`;
  }
  const qwX = pad.l, qwW = x(2.5) - pad.l, qwY = pad.t, qwH = y(3.5) - pad.t;
  g += `<rect x="${qwX}" y="${qwY}" width="${qwW}" height="${qwH}" fill="rgba(30,122,94,.08)"/>`;
  g += `<text x="${qwX + 8}" y="${qwY + 16}" font-size="11" fill="#1E7A5E">▲ クイックウィン領域</text>`;
  g += `<rect x="${pad.l}" y="${pad.t}" width="${plotW}" height="${plotH}" fill="none" stroke="#c9d0dd"/>`;
  g += `<text x="${pad.l + plotW / 2}" y="${H - 14}" text-anchor="middle" font-size="13" font-weight="700" fill="#3c4357">実装難易度　低 ───────→ 高</text>`;
  g += `<text transform="translate(18,${pad.t + plotH / 2}) rotate(-90)" text-anchor="middle" font-size="13" font-weight="700" fill="#3c4357">売上インパクト　低 → 高</text>`;
  const seen = {};
  const bubbles = targets.map((o) => {
    const key = `${o.implementation_difficulty}:${o.revenue_impact}`;
    const k = (seen[key] = (seen[key] || 0) + 1) - 1;
    const off = k === 0 ? 0 : (k % 2 ? 1 : -1) * Math.ceil(k / 2) * 15;
    const cx = x(o.implementation_difficulty) + off;
    const cy = y(o.revenue_impact);
    const col = CAT[o.category].color;
    return `<g><circle cx="${cx}" cy="${cy}" r="15" fill="${col}" stroke="#fff" stroke-width="2"/>
      <text x="${cx}" y="${cy + 4}" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">${o.priority}</text>
      <title>${esc(o.name)}（売上${o.revenue_impact}/難易度${o.implementation_difficulty}）</title></g>`;
  }).join('');
  return `<svg class="matrix" viewBox="0 0 ${W} ${H}" role="img" aria-label="優先度マトリクス">${g}${bubbles}</svg>`;
}
