import tailwindcss from "@tailwindcss/vite";

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
    "nuxt-og-image",
    "nuxt-link-checker",
    "@nuxtjs/i18n",
    "nuxt-gtag",
  ],

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});
