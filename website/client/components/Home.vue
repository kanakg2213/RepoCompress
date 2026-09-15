<script setup>
import Hero from './Home/Hero.vue';
import TryIt from './Home/TryIt.vue';
</script>

<!-- Use <main> so the home page exposes a main landmark (VitePress home layout omits one). -->
<template>
  <main class="home">
    <Hero />
    <section id="workspace" class="workspace" aria-labelledby="workspace-title">
      <div class="section-heading">
        <p class="section-kicker">Repository workspace</p>
        <h2 id="workspace-title">Build an AI-ready context package</h2>
        <p>Choose a repository source, tune the processing options, and generate structured output for analysis.</p>
      </div>
      <TryIt />
    </section>

    <section id="how-it-works" class="information-section" aria-labelledby="workflow-title">
      <div class="section-heading">
        <p class="section-kicker">Workflow</p>
        <h2 id="workflow-title">How CodeCompress works</h2>
      </div>
      <ol class="workflow-list">
        <li><span>01</span><strong>Select repository</strong><small>Use a remote repository, folder, or ZIP archive.</small></li>
        <li><span>02</span><strong>Scan and filter</strong><small>Control included and ignored paths with patterns.</small></li>
        <li><span>03</span><strong>Analyze tokens</strong><small>Review the size and structure of the selected source.</small></li>
        <li><span>04</span><strong>Compress source</strong><small>Reduce implementation detail when compression is enabled.</small></li>
        <li><span>05</span><strong>Generate context</strong><small>Inspect, download, or share the generated output.</small></li>
      </ol>
    </section>

    <section id="about-codecompress" class="information-grid" aria-label="About CodeCompress">
      <article>
        <p class="section-kicker">About CodeCompress</p>
        <h2>Focused tooling for AI-assisted source analysis.</h2>
        <p>CodeCompress is an academic project for preparing software repositories for efficient AI-assisted analysis. It combines repository scanning, configurable filtering, token analysis, source-code compression, and structured context generation in one workflow.</p>
      </article>
      <article id="help">
        <p class="section-kicker">Help and information</p>
        <h2>Keep the context intentional.</h2>
        <p>Start with the smallest useful repository scope, use include and ignore patterns to remove noise, then compare the generated summary before sharing the final package.</p>
        <a class="inline-link" href="#workspace">Return to workspace <span aria-hidden="true">&#8593;</span></a>
      </article>
    </section>

    <footer class="codecompress-footer">
      <div>
        <strong>CodeCompress</strong>
        <span>AI-Focused Source Code Compression and Repository Packaging</span>
      </div>
      <div>
        <span>Academic Project</span>
        <a href="https://github.com/kanakg2213/RepoCompress" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>&copy; 2026 CodeCompress</span>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.home {
  padding-bottom: 0;
}

.workspace,
.information-section,
.information-grid {
  max-width: 1120px;
  margin: 0 auto;
  padding: 54px 20px;
}

.workspace {
  border-top: 1px solid var(--cc-line);
}

.section-heading {
  max-width: 680px;
  margin-bottom: 28px;
}

.section-kicker {
  margin: 0 0 10px;
  color: var(--cc-orange);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-heading h2,
.information-grid h2 {
  margin: 0 0 12px;
  color: var(--cc-ink);
  font-size: clamp(28px, 4vw, 46px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.section-heading p:not(.section-kicker),
.information-grid p:not(.section-kicker) {
  margin: 0;
  color: var(--cc-muted);
  line-height: 1.7;
}

.workflow-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.workflow-list li {
  min-height: 154px;
  padding: 18px;
  border: 1px solid var(--cc-line);
  background: var(--cc-panel);
}

.workflow-list span,
.workflow-list strong,
.workflow-list small {
  display: block;
}

.workflow-list span {
  margin-bottom: 28px;
  color: var(--cc-orange);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
}

.workflow-list strong {
  margin-bottom: 8px;
  color: var(--cc-ink);
}

.workflow-list small {
  color: var(--cc-muted);
  line-height: 1.5;
}

.information-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding-top: 0;
}

.information-grid article {
  padding: 28px;
  border: 1px solid var(--cc-line);
  background: var(--cc-panel);
}

.information-grid h2 {
  font-size: 30px;
}

.inline-link {
  display: inline-flex;
  gap: 8px;
  margin-top: 20px;
  color: var(--cc-orange);
  font-weight: 700;
}

.codecompress-footer {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 28px max(20px, calc((100% - 1080px) / 2));
  border-top: 1px solid var(--cc-line);
  color: var(--cc-muted);
  font-size: 13px;
}

.codecompress-footer div {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.codecompress-footer strong {
  color: var(--cc-ink);
  font-size: 16px;
}

.codecompress-footer a {
  color: var(--cc-orange);
  font-weight: 700;
}

@media (max-width: 800px) {
  .workflow-list,
  .information-grid {
    grid-template-columns: 1fr;
  }

  .workflow-list li {
    min-height: auto;
  }

  .workflow-list span {
    margin-bottom: 14px;
  }

  .codecompress-footer {
    flex-direction: column;
  }
}
</style>
