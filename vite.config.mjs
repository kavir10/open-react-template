import { defineConfig } from 'vitest/config';

export default defineConfig({
  envPrefix: ['VITE_', 'REACT_APP_'],
  esbuild: { jsx: 'transform' },
  build: { outDir: 'build' },
  test: { environment: 'jsdom', globals: true },
});
