<script setup></script>

<template>
  <section class="hero" aria-labelledby="home-title">
    <div class="hero-copy">
      <p class="hero-kicker"><span class="hero-kicker__dot"></span> Academic developer tooling</p>
      <h1 id="home-title" class="hero-title">CODE<span>COMPRESS</span></h1>
      <p class="hero-description">
        AI-Focused Source Code Compression<br />
        <span class="hero-description__accent">and Repository Packaging</span>
      </p>
      <p class="hero-note">Transform a software repository into a compact, structured, AI-ready context package for source analysis.</p>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="hero-art__topline"><span>codecompress.context</span><span>ready</span></div>
      <div class="hero-art__body">
        <span class="hero-art__prompt">&gt;</span>
        <span class="hero-art__command">compress --analyze</span>
        <span class="hero-art__cursor"></span>
      </div>
      <div class="hero-art__files">
        <span>src/</span><span>tests/</span><span>README.md</span><strong>+ 42 files</strong>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 64px;
  align-items: center;
  text-align: left;
  padding: 34px 20px 52px;
  max-width: 1120px;
  margin: 0 auto;
}

.hero-copy {
  animation: hero-rise 0.6s ease both;
}

.hero-kicker {
  margin: 0 0 22px;
  color: var(--vp-c-brand-1);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-kicker__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
}

.hero-title {
  margin: 0 0 18px;
  color: var(--vp-c-text-1);
  font-size: clamp(64px, 9vw, 112px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.08em;
}

.hero-title__mark {
  color: var(--vp-c-brand-1);
}

.hero-description {
  max-width: 620px;
  font-size: clamp(24px, 3vw, 38px);
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
}

.hero-description__accent {
  color: var(--vp-c-brand-1);
}

.hero-tagline {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.hero-note {
  max-width: 440px;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.6;
}

.hero-art {
  overflow: hidden;
  border: 1px solid var(--cc-ink);
  border-radius: 4px;
  background: var(--cc-ink);
  color: #f9f4e9;
  box-shadow: 10px 10px 0 var(--vp-c-brand-1);
  animation: hero-rise 0.7s 0.12s ease both;
}

.hero-art__topline,
.hero-art__files {
  display: flex;
  justify-content: space-between;
  padding: 13px 16px;
  border-bottom: 1px solid rgba(249, 244, 233, 0.2);
  color: #bfc6be;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
}

.hero-art__topline span:last-child {
  color: var(--cc-lime);
}

.hero-art__body {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 150px;
  padding: 24px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 22px;
}

.hero-art__prompt {
  color: var(--cc-lime);
}

.hero-art__command {
  color: #f9f4e9;
}

.hero-art__cursor {
  width: 9px;
  height: 24px;
  background: var(--cc-orange);
  animation: blink 1s steps(2) infinite;
}

.hero-art__files {
  flex-wrap: wrap;
  gap: 10px 18px;
  border-top: 1px solid rgba(249, 244, 233, 0.2);
  border-bottom: 0;
}

.hero-art__files strong {
  color: var(--cc-lime);
  font-weight: 400;
}

@keyframes hero-rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 34px;
    padding-top: 20px;
  }

  .hero-title {
    font-size: 72px;
  }

  .hero-description {
    font-size: 24px;
  }

  .hero-tagline {
    font-size: 16px;
  }

  .hero-art {
    box-shadow: 6px 6px 0 var(--vp-c-brand-1);
  }
}
</style>
