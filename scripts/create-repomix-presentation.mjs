import pptxgen from 'pptxgenjs';

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Repomix';
pptx.subject = 'Repomix website and security scanning';
pptx.title = 'Repomix: From Repository to AI Context';
pptx.company = 'Repomix';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'en-US',
};
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: '0D1117' },
  objects: [
    { rect: { x: 0, y: 7.18, w: 13.333, h: 0.32, fill: { color: '161D26' }, line: { color: '161D26' } } },
    { text: { text: 'REPOMIX  /  AI-FRIENDLY REPOSITORY PACKING', options: { x: 0.55, y: 7.23, w: 7, h: 0.12, fontFace: 'Aptos', fontSize: 7, color: '8492A6', margin: 0, charSpacing: 1.3 } } },
  ],
  slideNumber: { x: 12.2, y: 7.22, color: '8492A6', fontFace: 'Aptos', fontSize: 8 },
});

const C = { bg: '0D1117', panel: '161D26', panel2: '1D2733', text: 'F4F7FA', muted: '9AA8B8', orange: 'FF7A18', cyan: '5ED8FF', green: '54D68A', red: 'FF6B6B', line: '2B3948', white: 'FFFFFF' };
const W = 13.333;

function addTitle(slide, eyebrow, title, subtitle = '') {
  slide.addText(eyebrow.toUpperCase(), { x: 0.65, y: 0.42, w: 5.5, h: 0.22, fontSize: 9, bold: true, charSpacing: 2, color: C.orange, margin: 0 });
  slide.addText(title, { x: 0.62, y: 0.78, w: 11.6, h: 0.58, fontFace: 'Aptos Display', fontSize: 27, bold: true, color: C.text, margin: 0, breakLine: false, fit: 'shrink' });
  if (subtitle) slide.addText(subtitle, { x: 0.65, y: 1.48, w: 11.4, h: 0.32, fontSize: 11.5, color: C.muted, margin: 0, fit: 'shrink' });
}

function panel(slide, x, y, w, h, fill = C.panel) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { color: C.line, width: 0.8 } });
}

function pill(slide, text, x, y, w, color = C.orange) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h: 0.32, rectRadius: 0.08, fill: { color }, line: { color }, transparency: 5 });
  slide.addText(text, { x, y: y + 0.065, w, h: 0.13, fontSize: 8.5, bold: true, color: C.bg, align: 'center', margin: 0, fit: 'shrink' });
}

function bulletList(slide, items, x, y, w, h, color = C.text, size = 15) {
  slide.addText(items.map((text) => ({ text, options: { bullet: { indent: size * 1.15 }, hanging: size * 0.35 } })), { x, y, w, h, fontSize: size, color, breakLine: true, paraSpaceAfterPt: 13, margin: 0.06, fit: 'shrink', valign: 'mid' });
}

function code(slide, text, x, y, w, h, accent = C.cyan) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.04, fill: { color: '0A0F14' }, line: { color: C.line, width: 0.8 } });
  slide.addShape(pptx.ShapeType.rect, { x, y, w: 0.07, h, fill: { color: accent }, line: { color: accent } });
  slide.addText(text, { x: x + 0.2, y: y + 0.13, w: w - 0.35, h: h - 0.2, fontFace: 'Courier New', fontSize: 12, color: C.text, margin: 0, breakLine: false, fit: 'shrink', valign: 'mid' });
}

function addFlowArrow(slide, x, y, w, color = C.orange) {
  slide.addShape(pptx.ShapeType.chevron, { x, y, w, h: 0.34, fill: { color }, line: { color } });
}

// 1
{
  const s = pptx.addSlide('MASTER');
  s.background = { color: C.bg };
  s.addShape(pptx.ShapeType.arc, { x: 9.7, y: -1.1, w: 4.7, h: 4.7, adjustPoint: 0.18, line: { color: C.orange, width: 2, transparency: 25 }, fill: { color: C.bg, transparency: 100 } });
  s.addShape(pptx.ShapeType.arc, { x: 10.45, y: -0.35, w: 3.2, h: 3.2, adjustPoint: 0.18, line: { color: C.cyan, width: 1.2, transparency: 25 }, fill: { color: C.bg, transparency: 100 } });
  s.addText('REPOMIX', { x: 0.72, y: 1.16, w: 7.2, h: 0.55, fontFace: 'Aptos Display', fontSize: 32, bold: true, color: C.text, margin: 0 });
  s.addText('From repository to\nAI-ready context', { x: 0.7, y: 1.92, w: 7.3, h: 1.35, fontFace: 'Aptos Display', fontSize: 34, bold: true, color: C.orange, margin: 0, breakLine: false, fit: 'shrink' });
  s.addText('A practical walkthrough of packing, compression, web processing, and security-aware output.', { x: 0.74, y: 3.52, w: 6.7, h: 0.65, fontSize: 16, color: C.muted, margin: 0, fit: 'shrink' });
  pill(s, 'PROJECT PRESENTATION', 0.74, 4.62, 1.95, C.cyan);
  s.addText('One codebase. One context file. Better conversations with AI.', { x: 0.75, y: 5.18, w: 7.4, h: 0.3, fontSize: 13, italic: true, color: C.text, margin: 0 });
  panel(s, 8.42, 3.08, 3.8, 2.1, C.panel);
  s.addText('REPOSITORY', { x: 8.75, y: 3.42, w: 1.55, h: 0.18, fontSize: 9, bold: true, charSpacing: 1.5, color: C.muted, margin: 0 });
  s.addText('→', { x: 10.15, y: 3.85, w: 0.5, h: 0.4, fontSize: 25, bold: true, color: C.orange, margin: 0, align: 'center' });
  s.addText('AI CONTEXT', { x: 10.65, y: 3.42, w: 1.15, h: 0.18, fontSize: 9, bold: true, charSpacing: 1.2, color: C.muted, margin: 0, align: 'center' });
  s.addText('XML  ·  Markdown  ·  JSON  ·  Plain text', { x: 8.75, y: 4.55, w: 3.05, h: 0.23, fontSize: 11, color: C.cyan, margin: 0, align: 'center' });
}

// 2
{
  const s = pptx.addSlide('MASTER');
  addTitle(s, '01 / The idea', 'Why pack a repository at all?', 'AI tools work better when the relevant codebase arrives as one coherent context.');
  panel(s, 0.7, 2.18, 3.55, 3.9); panel(s, 4.9, 2.18, 3.55, 3.9); panel(s, 9.1, 2.18, 3.55, 3.9);
  const cards = [
    ['01', 'Many files', 'Source, tests, configuration, and docs are scattered across a tree.', C.cyan],
    ['02', 'One context', 'Repomix preserves paths and structure while merging content.', C.orange],
    ['03', 'Useful answers', 'Claude, ChatGPT, and other AI tools can reason across the project.', C.green],
  ];
  cards.forEach(([num, title, body, color], i) => {
    const x = [0.7, 4.9, 9.1][i];
    s.addText(num, { x: x + 0.3, y: 2.52, w: 0.48, h: 0.28, fontSize: 16, bold: true, color, margin: 0 });
    s.addShape(pptx.ShapeType.line, { x: x + 0.3, y: 3.0, w: 2.9, h: 0, line: { color: C.line, width: 1 } });
    s.addText(title, { x: x + 0.3, y: 3.26, w: 2.9, h: 0.32, fontSize: 21, bold: true, color: C.text, margin: 0 });
    s.addText(body, { x: x + 0.3, y: 3.88, w: 2.9, h: 1.05, fontSize: 14, color: C.muted, margin: 0.02, breakLine: false, fit: 'shrink', valign: 'mid' });
  });
  code(s, 'project/  →  repomix-output.md', 3.2, 6.42, 6.9, 0.52, C.orange);
}

// 3
{
  const s = pptx.addSlide('MASTER');
  addTitle(s, '02 / Workflow', 'Three ways to create the pack', 'The same packager supports local folders, GitHub repositories, and command-line pipelines.');
  const xs = [0.8, 4.65, 8.5];
  const data = [
    ['LOCAL FOLDER', 'Upload a folder\nor ZIP archive', 'Browser → ZIP → API', C.cyan],
    ['GITHUB URL', 'Paste a public\nrepository link', 'API → clone → pack', C.orange],
    ['CLI', 'Run locally or\nin automation', 'npx repomix --compress', C.green],
  ];
  data.forEach(([label, title, flow, color], i) => {
    panel(s, xs[i], 2.25, 3.25, 3.65);
    s.addShape(pptx.ShapeType.ellipse, { x: xs[i] + 0.3, y: 2.65, w: 0.65, h: 0.65, fill: { color }, line: { color } });
    s.addText(String(i + 1), { x: xs[i] + 0.3, y: 2.83, w: 0.65, h: 0.16, fontSize: 13, bold: true, color: C.bg, align: 'center', margin: 0 });
    s.addText(label, { x: xs[i] + 1.15, y: 2.79, w: 1.75, h: 0.17, fontSize: 9, bold: true, charSpacing: 1.2, color, margin: 0 });
    s.addText(title, { x: xs[i] + 0.3, y: 3.65, w: 2.65, h: 0.75, fontSize: 22, bold: true, color: C.text, margin: 0, breakLine: false, fit: 'shrink' });
    s.addShape(pptx.ShapeType.line, { x: xs[i] + 0.3, y: 4.72, w: 2.6, h: 0, line: { color: C.line, width: 1 } });
    s.addText(flow, { x: xs[i] + 0.3, y: 5.05, w: 2.6, h: 0.35, fontFace: 'Courier New', fontSize: 11, color: C.muted, margin: 0, fit: 'shrink' });
  });
  addFlowArrow(s, 4.05, 3.77, 0.38, C.orange); addFlowArrow(s, 7.9, 3.77, 0.38, C.orange);
}

// 4
{
  const s = pptx.addSlide('MASTER');
  addTitle(s, '03 / Output', 'What Repomix puts into one file', 'The output is structured for both humans and language models.');
  panel(s, 0.75, 2.08, 5.0, 4.55, C.panel);
  s.addText('PACKED OUTPUT', { x: 1.05, y: 2.42, w: 2.2, h: 0.18, fontSize: 9, bold: true, charSpacing: 1.5, color: C.orange, margin: 0 });
  const rows = [['<file_summary>', 'project metadata'], ['<directory_structure>', 'repository map'], ['<files>', 'path + content'], ['<instruction>', 'optional guidance']];
  rows.forEach((row, i) => {
    const y = 3.0 + i * 0.7;
    s.addShape(pptx.ShapeType.roundRect, { x: 1.05, y, w: 4.4, h: 0.48, rectRadius: 0.04, fill: { color: i === 2 ? '253545' : '1A242F' }, line: { color: C.line, width: 0.6 } });
    s.addText(row[0], { x: 1.25, y: y + 0.14, w: 2.15, h: 0.15, fontFace: 'Courier New', fontSize: 11, color: C.cyan, margin: 0 });
    s.addText(row[1], { x: 3.55, y: y + 0.15, w: 1.55, h: 0.14, fontSize: 10, color: C.muted, margin: 0, align: 'right' });
  });
  panel(s, 6.35, 2.08, 6.25, 4.55, C.panel2);
  s.addText('CHOOSE THE FORMAT FOR THE JOB', { x: 6.7, y: 2.42, w: 4.0, h: 0.18, fontSize: 9, bold: true, charSpacing: 1.2, color: C.cyan, margin: 0 });
  const formats = [['XML', 'structured AI context'], ['Markdown', 'human-readable review'], ['JSON', 'programmatic processing'], ['Plain', 'simple text pipelines']];
  formats.forEach(([name, desc], i) => {
    const y = 3.0 + i * 0.68;
    s.addText(name, { x: 6.72, y, w: 1.05, h: 0.22, fontSize: 16, bold: true, color: C.text, margin: 0 });
    s.addText(desc, { x: 8.05, y: y + 0.03, w: 3.9, h: 0.16, fontSize: 12, color: C.muted, margin: 0 });
  });
}

// 5
{
  const s = pptx.addSlide('MASTER');
  addTitle(s, '04 / Compression', 'Smaller context, preserved structure', 'Compression is code-aware reduction, not ZIP compression.');
  panel(s, 0.75, 2.2, 5.7, 3.85);
  panel(s, 6.85, 2.2, 5.7, 3.85);
  s.addText('WITHOUT --compress', { x: 1.1, y: 2.58, w: 2.6, h: 0.2, fontSize: 10, bold: true, charSpacing: 1.2, color: C.muted, margin: 0 });
  s.addText('Full implementation detail', { x: 1.1, y: 3.05, w: 4.5, h: 0.35, fontSize: 21, bold: true, color: C.text, margin: 0 });
  bulletList(s, ['Complete source content', 'Best for exact refactoring', 'Higher token count'], 1.1, 3.75, 4.6, 1.55, C.muted, 14);
  s.addText('WITH --compress', { x: 7.2, y: 2.58, w: 2.6, h: 0.2, fontSize: 10, bold: true, charSpacing: 1.2, color: C.orange, margin: 0 });
  s.addText('Essential code structure', { x: 7.2, y: 3.05, w: 4.5, h: 0.35, fontSize: 21, bold: true, color: C.text, margin: 0 });
  bulletList(s, ['Classes, functions, interfaces', 'Good for architecture review', 'Reduced token usage'], 7.2, 3.75, 4.6, 1.55, C.muted, 14);
  code(s, 'repomix --compress --style markdown', 3.28, 6.42, 6.75, 0.52, C.orange);
}

// 6
{
  const s = pptx.addSlide('MASTER');
  addTitle(s, '05 / Security', 'Security Scan: detect, exclude, explain', 'The feature protects the generated context without displaying secret values.');
  const steps = [['SCAN', 'Secretlint +\ncredential patterns', C.cyan], ['FILTER', 'Suspicious files\nleave the output', C.orange], ['REPORT', 'File path +\nline numbers only', C.green]];
  steps.forEach(([label, body, color], i) => {
    const x = 0.9 + i * 4.15;
    s.addShape(pptx.ShapeType.ellipse, { x, y: 2.45, w: 1.05, h: 1.05, fill: { color }, line: { color } });
    s.addText(String(i + 1), { x, y: 2.78, w: 1.05, h: 0.2, fontSize: 19, bold: true, color: C.bg, align: 'center', margin: 0 });
    s.addText(label, { x: x + 1.35, y: 2.55, w: 1.8, h: 0.18, fontSize: 10, bold: true, charSpacing: 1.5, color, margin: 0 });
    s.addText(body, { x: x + 1.35, y: 2.93, w: 2.25, h: 0.6, fontSize: 18, bold: true, color: C.text, margin: 0, fit: 'shrink' });
    if (i < 2) addFlowArrow(s, x + 3.25, 2.8, 0.46, C.line);
  });
  panel(s, 1.0, 4.55, 11.35, 1.25, C.panel);
  s.addText('Example warning', { x: 1.35, y: 4.83, w: 1.4, h: 0.17, fontSize: 10, bold: true, color: C.red, margin: 0 });
  s.addText('Potential sensitive information detected  ·  .env  ·  Line 1', { x: 2.95, y: 4.8, w: 7.6, h: 0.24, fontSize: 16, bold: true, color: C.text, margin: 0 });
  s.addText('The key itself is never returned to the browser.', { x: 2.95, y: 5.22, w: 5.5, h: 0.18, fontSize: 11, color: C.muted, margin: 0 });
}

// 7
{
  const s = pptx.addSlide('MASTER');
  addTitle(s, '06 / Control', 'Ignore exactly what you do not need', 'Patterns are comma-separated glob expressions.');
  panel(s, 0.75, 2.15, 5.55, 3.95);
  s.addText('WEBSITE INPUT', { x: 1.1, y: 2.52, w: 2, h: 0.18, fontSize: 10, bold: true, charSpacing: 1.4, color: C.orange, margin: 0 });
  code(s, 'node_modules/**,**/.env', 1.08, 3.0, 4.85, 0.72, C.orange);
  s.addText('Comma-separated patterns\ncan target folders or files.', { x: 1.1, y: 4.15, w: 3.8, h: 0.65, fontSize: 17, bold: true, color: C.text, margin: 0 });
  s.addText('Use /** for everything inside a folder.', { x: 1.1, y: 5.25, w: 4.4, h: 0.2, fontSize: 12, color: C.muted, margin: 0 });
  panel(s, 6.75, 2.15, 5.8, 3.95, C.panel2);
  s.addText('PATTERN CHEAT SHEET', { x: 7.1, y: 2.52, w: 2.4, h: 0.18, fontSize: 10, bold: true, charSpacing: 1.4, color: C.cyan, margin: 0 });
  const patterns = [['data/**', 'folder'], ['**/*.log', 'extension'], ['config/secrets.json', 'file'], ['src/tmp/**', 'nested folder']];
  patterns.forEach(([p, d], i) => {
    const y = 3.0 + i * 0.62;
    s.addText(p, { x: 7.1, y, w: 2.7, h: 0.18, fontFace: 'Courier New', fontSize: 12, color: C.text, margin: 0 });
    s.addText(d, { x: 10.2, y: y + 0.02, w: 1.6, h: 0.15, fontSize: 11, color: C.muted, margin: 0, align: 'right' });
  });
}

// 8
{
  const s = pptx.addSlide('MASTER');
  addTitle(s, '07 / Engineering fixes', 'What was solved in the working demo', 'The final workflow is local, testable, and consistent across input types.');
  const items = [
    ['Website API', 'Restored the local backend and fixed localhost / 127.0.0.1 CORS.', C.cyan],
    ['Public GitHub', 'Handled Apple Silicon / Rosetta Git execution during cloning.', C.orange],
    ['Large uploads', 'Removed artificial size, file-count, and processing time limits.', C.green],
    ['Security UX', 'Added scan toggle, ignored-file handling, and line-level warnings.', C.red],
  ];
  items.forEach(([title, body, color], i) => {
    const x = i % 2 === 0 ? 0.85 : 6.85;
    const y = i < 2 ? 2.25 : 4.35;
    panel(s, x, y, 5.6, 1.55);
    s.addShape(pptx.ShapeType.rect, { x, y, w: 0.08, h: 1.55, fill: { color }, line: { color } });
    s.addText(title, { x: x + 0.35, y: y + 0.3, w: 2.05, h: 0.24, fontSize: 17, bold: true, color: C.text, margin: 0 });
    s.addText(body, { x: x + 2.4, y: y + 0.27, w: 2.75, h: 0.72, fontSize: 12.5, color: C.muted, margin: 0, fit: 'shrink', valign: 'mid' });
  });
}

// 9
{
  const s = pptx.addSlide('MASTER');
  addTitle(s, '08 / Demonstration', 'A simple professor-ready demo', 'Show the capability in under two minutes.');
  const demo = [
    ['1', 'Paste a public GitHub URL', 'https://github.com/...', C.cyan],
    ['2', 'Enable Security Scan', 'File Processing Options', C.orange],
    ['3', 'Pack the repository', 'Watch cloning → processing', C.green],
    ['4', 'Open Security Alert', 'File path + line, no secret value', C.red],
  ];
  demo.forEach(([num, title, detail, color], i) => {
    const y = 2.18 + i * 0.98;
    s.addShape(pptx.ShapeType.ellipse, { x: 0.95, y, w: 0.55, h: 0.55, fill: { color }, line: { color } });
    s.addText(num, { x: 0.95, y: y + 0.17, w: 0.55, h: 0.14, fontSize: 12, bold: true, color: C.bg, align: 'center', margin: 0 });
    s.addText(title, { x: 1.85, y: y + 0.02, w: 3.4, h: 0.22, fontSize: 17, bold: true, color: C.text, margin: 0 });
    s.addText(detail, { x: 6.0, y: y + 0.06, w: 4.8, h: 0.17, fontFace: i === 0 ? 'Courier New' : 'Aptos', fontSize: 12, color: C.muted, margin: 0 });
    s.addShape(pptx.ShapeType.line, { x: 1.85, y: y + 0.56, w: 9.2, h: 0, line: { color: C.line, width: 0.8 } });
  });
  panel(s, 1.0, 6.2, 11.3, 0.54, C.panel2);
  s.addText('Takeaway: Repomix turns a messy repository into focused, explainable AI context.', { x: 1.25, y: 6.38, w: 10.8, h: 0.16, fontSize: 13, bold: true, color: C.orange, align: 'center', margin: 0 });
}

await pptx.writeFile({ fileName: 'repomix-project-presentation.pptx' });