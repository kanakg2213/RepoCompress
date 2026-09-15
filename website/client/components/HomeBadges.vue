<template>
  <div class="home-badges">
    <a href="https://www.npmjs.com/package/repomix" target="_blank" rel="noopener noreferrer">
      <img
        src="https://img.shields.io/npm/v/repomix.svg?style=flat-square&label=npm"
        alt="npm version"
      />
    </a>
    <a href="https://www.npmjs.com/package/repomix" target="_blank" rel="noopener noreferrer">
      <img
        src="https://img.shields.io/npm/d18m/repomix?style=flat-square&label=downloads"
        alt="npm downloads"
      />
    </a>

    <a href="https://discord.gg/wNYzTwZFku" target="_blank" rel="noopener noreferrer">
      <img
        src="https://badgen.net/discord/online-members/wNYzTwZFku?icon=discord&label=community"
        alt="Discord"
      />
    </a>
    <a href="https://github.com/sponsors/yamadashy" target="_blank" rel="noopener noreferrer">
      <img
        src="https://img.shields.io/github/sponsors/yamadashy?style=flat-square&logo=github&label=sponsors"
        alt="Sponsors"
      />
    </a>
    <a href="https://github.com/yamadashy/repomix" target="_blank" rel="noopener noreferrer">
      <img
        src="https://img.shields.io/github/stars/yamadashy/repomix?style=flat-square&logo=github&label=stars"
        alt="GitHub stars"
      />
    </a>
  </div>
</template>

<style scoped>
.home-badges {
  margin: 12px auto 0;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.home-badges img {
  display: inline-block;
}

.home-badges a {
  display: inline-block;
  transition: opacity 0.2s ease;
}

.home-badges a:hover {
  opacity: 0.72;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .home-badges {
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 32px;
  }
}
</style>
