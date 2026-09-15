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
  </section>
</template>

<style scoped>
.hero {
  text-align: left;
  padding: 56px 20px 64px;
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

@keyframes hero-rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero {
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

}
</style>
