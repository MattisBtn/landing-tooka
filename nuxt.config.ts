// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@vueuse/motion/nuxt",
    "@weareheavy/nuxt-cookie-consent"
  ],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      titleTemplate: "%s | Tooka",
    },
  },

  // Site configuration for SEO
  site: {
    url: "https://tooka.io",
    name: "Tooka | Le CRM qui libère les créatifs.",
    description:
      "La plateforme qui accompagne les créatifs du brief initial à la livraison finale. Gérez vos projets clients sans stress, avec style.",
    defaultLocale: "fr",
  },

  // Performance & SEO
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  // OG Image configuration
  ogImage: {
    componentOptions: {
      global: true,
    },
  },

  // Image optimization
  image: {
    quality: 80,
    format: ["webp", "avif", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // Runtime config for environment variables
  runtimeConfig: {
    klaviyoPrivateKey: process.env.KLAVIYO_PRIVATE_KEY,
    klaviyoListId: process.env.KLAVIYO_LIST_ID,
  },

  // Cookie consent
  cookieConsent: {
    provider: "cookiebot",
    cbid: "77b1f19a-1850-40e5-98b1-bfa677c4f15f",
  }
});
