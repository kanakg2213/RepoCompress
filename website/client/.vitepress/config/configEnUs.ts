import { defineConfig } from 'vitepress';

export const configEnUs = defineConfig({
  lang: 'en-US',
  description: 'CodeCompress prepares software repositories for efficient AI-assisted source code analysis.',
  themeConfig: {
    nav: [
      { text: 'About', link: '/#about-codecompress' },
      { text: 'Documentation', link: '/#how-it-works' },
      { text: 'Help', link: '/#help' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Basic Usage', link: '/guide/usage' },
            { text: 'Prompt Examples', link: '/guide/prompt-examples' },
            { text: 'Use Cases', link: '/guide/use-cases' },
            { text: 'FAQ and Troubleshooting', link: '/guide/faq' },
          ],
        },
        {
          text: 'Guide',
          items: [
            { text: 'Output Formats', link: '/guide/output' },
            { text: 'Command Line Options', link: '/guide/command-line-options' },
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Custom Instructions', link: '/guide/custom-instructions' },
            { text: 'GitHub Repository Processing', link: '/guide/remote-repository-processing' },
            { text: 'Comment Removal', link: '/guide/comment-removal' },
            { text: 'Code Compression', link: '/guide/code-compress' },
            { text: 'Security', link: '/guide/security' },
          ],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'GitHub Actions', link: '/guide/github-actions' },
            { text: 'Using Repomix as a Library', link: '/guide/development/using-repomix-as-a-library' },
            { text: 'AI-Assisted Development Tips', link: '/guide/tips/best-practices' },
          ],
        },
        {
          text: 'Community',
          items: [
            { text: 'Community Projects', link: '/guide/community-projects' },
            { text: 'Contributing to Repomix', link: '/guide/development/' },
            { text: 'Sponsors', link: '/guide/sponsors' },
            { text: 'Privacy Policy', link: '/guide/privacy' },
          ],
        },
      ],
    },
  },
});
