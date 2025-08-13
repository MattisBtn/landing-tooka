<template>
  <div>
    <!-- Page Loader -->
    <PageLoader :is-loading="isLoading" :loading-progress="loadingProgress" />

    <motion.div v-show="!isLoading" class="min-h-screen flex flex-col relative overflow-hidden"
      :initial="{ opacity: 0, scale: 0.95 }" :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 1, delay: 0.5, ease: 'easeOut' }">


      <!-- Background Elements -->
      <BackgroundElements :scroll-y-progress="scrollYProgress" />

      <!-- Skip to main content link for accessibility -->
      <a href="#main-content"
        class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
        Aller au contenu principal
      </a>

      <!-- Color Mode Switcher -->
      <header class="absolute top-4 left-4">
        <ClientOnly>
          <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="ghost" size="sm"
            :aria-label="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'" @click="toggleColorMode" />
          <template #fallback>
            <div class="size-8" />
          </template>
        </ClientOnly>
      </header>

      <!-- Main Content - Centered -->
      <main id="main-content" class="flex-1 flex items-center justify-center px-4 py-8">
        <div class="max-w-4xl w-full text-center space-y-8">
          <HeroSection :is-loading="isLoading" />
          <SocialSection :is-loading="isLoading" />
        </div>
      </main>

      <!-- Footer -->
      <motion.footer class="py-6 text-center" :initial="{ opacity: 0 }"
        :animate="!isLoading ? { opacity: 1 } : { opacity: 0 }"
        :transition="{ duration: 0.6, delay: 5.1, ease: 'easeOut' }">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          © {{ new Date().getFullYear() }} Tooka. Tous droits réservés.
        </p>
      </motion.footer>
    </motion.div>
  </div>
</template>

<script lang="ts" setup>
import { motion, useMotionValue, useScroll } from 'motion-v'

// Scroll animations
const { scrollYProgress } = useScroll()

// Page loader
const isLoading = ref(true)
const loadingProgress = useMotionValue(0)

// Loading sequence
const startLoading = async () => {
  // Simulate loading phases
  loadingProgress.set(0)

  // Phase 1: Quick start
  await new Promise(resolve => setTimeout(resolve, 300))
  loadingProgress.set(25)

  // Phase 2: Main loading
  await new Promise(resolve => setTimeout(resolve, 800))
  loadingProgress.set(65)

  // Phase 3: Final phase
  await new Promise(resolve => setTimeout(resolve, 600))
  loadingProgress.set(90)

  // Phase 4: Almost complete
  await new Promise(resolve => setTimeout(resolve, 400))
  loadingProgress.set(98)

  // Phase 5: Complete with pause
  await new Promise(resolve => setTimeout(resolve, 300))
  loadingProgress.set(100)

  // Wait for progress animation to complete + small delay for elegance
  await new Promise(resolve => setTimeout(resolve, 800))
  isLoading.value = false
}

onMounted(() => {
  // Start loading sequence
  startLoading()
})

// SEO Meta tags avec Nuxt SEO
useSeoMeta({
  title: 'Tooka - Créez plus. Livrez mieux.',
  description: 'La plateforme qui accompagne les créatifs du brief initial à la livraison finale. Gérez vos projets clients sans stress, avec style.',
  keywords: 'créatifs, gestion de projets, plateforme, design, freelance, agence',
  ogTitle: 'Tooka - Créez plus. Livrez mieux.',
  ogDescription: 'La plateforme qui accompagne les créatifs du brief initial à la livraison finale.',
  ogType: 'website',
  ogUrl: 'https://tooka.io',
  ogImage: '/images/logo2-dark.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Tooka - Créez plus. Livrez mieux.',
  twitterDescription: 'La plateforme qui accompagne les créatifs du brief initial à la livraison finale.',
  twitterImage: '/images/logo2-dark.png'
})

// Schema.org structured data
useSchemaOrg([
  defineWebSite({
    name: 'Tooka',
    url: 'https://tooka.io',
    description: 'La plateforme qui accompagne les créatifs du brief initial à la livraison finale.'
  }),
  defineOrganization({
    name: 'Tooka',
    url: 'https://tooka.io',
    logo: '/images/logo2-dark.png'
  })
])

// Color mode management
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value: boolean) {
    colorMode.preference = value ? 'dark' : 'light'
  }
})

const toggleColorMode = () => {
  isDark.value = !isDark.value
}
</script>