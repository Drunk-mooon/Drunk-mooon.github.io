import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/',
  // 关闭 telemetry
  telemetry: false,
});