import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import MotionResolver from "motion-v/resolver";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/fontaine",
    "@nuxtjs/color-mode",
    "nuxt-og-image",
    "nuxt-link-checker",
    "@nuxtjs/i18n",
    "nuxt-gtag",
    "shadcn-nuxt",
    "motion-v/nuxt",
  ],

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
      Components({
        dts: true,
        resolvers: [MotionResolver()],
      }),
    ],
  },

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
  },

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  colorMode: {
    classSuffix: "",
  },
});
