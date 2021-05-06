import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: [
      "monaco-editor",
      "vscode",
      "aoife",
      "aoife-ux",
      "vanilla-route",
      "flavorcss-base",
    ],
  },
  esbuild: {
    jsxFactory: "aoife",
    jsxFragment: "aoife.Frag",
  },
  server: {
    proxy: {
      "/test-proxy": {
        target: "http://127.0.0.1:4080",
        changeOrigin: true,
      },
    },
  },
});
