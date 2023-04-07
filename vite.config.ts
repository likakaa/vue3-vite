import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import type { ConfigEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
  return {
    base: "/",
    plugins: [
      vue(),
      // https://vite-pwa-org.netlify.app/guide/
      VitePWA({
        base: "/vue3-vite/",
        registerType: "autoUpdate",
        manifest: {
          name: "vue3-vite",
          short_name: "vue3-vite",
          theme_color: "#165dff",
          icons: [
            {
              src: "/vue3-vite/192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/vue3-vite/512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: "async",
      formatting: "minify",
      crittersOptions: {
        reduceInlineStyles: false,
      },
      // onFinished() { generateSitemap() },
    },
  };
});
