<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 -z-10">
      <!-- Gradient Background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800" />

      <!-- Animated Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] animate-pulse opacity-30" />

      <!-- Floating Geometric Shapes -->
      <motion.div
        class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-xl animate-float opacity-60"
        :style="{ y: shapesY }" />
      <motion.div
        class="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-lg animate-float-delayed opacity-50"
        :style="{ y: shapes2Y }" />
      <motion.div
        class="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-2xl animate-float-slow opacity-40"
        :style="{ y: shapes3Y }" />
      <motion.div
        class="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-full blur-xl animate-float opacity-30"
        :style="{ y: shapes4Y }" />

      <!-- Subtle Noise Texture -->
      <div class="absolute inset-0 opacity-[0.015] noise-texture" />
    </div>

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
        <!-- Logo -->
        <motion.div class="flex justify-center" :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }">
          <ClientOnly>
            <NuxtImg :src="isDark ? '/images/logo2-dark.png' : '/images/logo2-light.png'"
              alt="Tooka - Logo de la plateforme créative" class="h-12 w-auto" />
            <template #fallback>
              <div class="h-12 w-auto" />
            </template>
          </ClientOnly>
        </motion.div>

        <!-- Badge -->
        <motion.div :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6, delay: 0.3, ease: 'easeOut' }">
          <StatusBadge size="lg" status-text="Bientôt disponible"
            class="mx-auto text-gray-700 dark:text-gray-300 font-semibold">
            Bientôt disponible
          </StatusBadge>
        </motion.div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 dark:text-white">
          <motion.span class="inline-block" :initial="{
            opacity: 0,
            filter: 'blur(10px)',
            y: 20
          }" :animate="{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0
          }" :transition="{
            duration: 0.8,
            delay: 0.5,
            ease: 'easeOut'
          }">
            Créez
          </motion.span>
          {{ ' ' }}
          <motion.span class="inline-block" :initial="{
            opacity: 0,
            filter: 'blur(10px)',
            y: 20
          }" :animate="{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0
          }" :transition="{
            duration: 0.8,
            delay: 0.8,
            ease: 'easeOut'
          }">
            Plus.
          </motion.span>
          {{ ' ' }}
          <motion.span class="inline-block" :initial="{
            opacity: 0,
            filter: 'blur(10px)',
            y: 20
          }" :animate="{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0
          }" :transition="{
            duration: 0.8,
            delay: 1.1,
            ease: 'easeOut'
          }">
            Livrez
          </motion.span>
          {{ ' ' }}
          <motion.span class="inline-block" :initial="{
            opacity: 0,
            filter: 'blur(10px)',
            y: 20
          }" :animate="{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0
          }" :transition="{
            duration: 0.8,
            delay: 1.4,
            ease: 'easeOut'
          }">
            Mieux.
          </motion.span>
          <br>
          <motion.span class="font-serif font-normal italic text-gray-600 dark:text-gray-400 inline-block" :initial="{
            opacity: 0,
            filter: 'blur(8px)',
            y: 15
          }" :animate="{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0
          }" :transition="{
            duration: 1,
            delay: 1.8,
            ease: 'easeOut'
          }">
            En toute sérénité.
          </motion.span>
        </h1>

        <!-- Subtitle -->
        <motion.div class="max-w-2xl mx-auto" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.8, ease: 'easeOut' }">
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            La plateforme qui accompagne les créatifs du brief initial à la livraison finale. Gérez vos projets clients
            sans
            stress, avec style.
          </p>
        </motion.div>

        <!-- Email Form -->
        <motion.div class="max-w-lg mx-auto" :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 1.1, ease: 'easeOut' }">
          <form class="space-y-6" role="form" aria-labelledby="waitlist-title" @submit.prevent="joinWaitlist">
            <h2 id="waitlist-title" class="sr-only">Rejoindre la liste d'attente</h2>
            <motion.div class="flex flex-col sm:flex-row gap-3 sm:gap-4" :initial="{ opacity: 0, scale: 0.95 }"
              :animate="{ opacity: 1, scale: 1 }" :transition="{ duration: 0.6, delay: 1.3, ease: 'easeOut' }">
              <UInput v-model="email" type="email" placeholder="Entrez votre adresse email" class="flex-1"
                color="neutral" variant="outline" size="lg" :ui="{
                  base: 'h-12 sm:h-14 text-sm sm:text-base placeholder:text-gray-400 dark:placeholder:text-gray-500'
                }" aria-label="Adresse email pour rejoindre la liste d'attente" required />
              <Button type="submit" variant="glass" size="lg" :loading="loading"
                class="h-12 sm:h-14 text-sm sm:text-base" trailing-icon="i-lucide-arrow-up-right"
                :aria-label="loading ? 'Inscription en cours...' : 'Rejoindre la liste d\'attente'">
                <span v-if="!loading">Rejoindre la liste</span>
                <span v-else>Inscription...</span>
              </Button>
            </motion.div>

            <!-- Trust indicator -->
            <motion.p class="text-xs text-gray-500 dark:text-gray-400 text-center" :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }" :transition="{ duration: 0.5, delay: 1.5, ease: 'easeOut' }">
              ✨ Pas de spam, promis. Désinscription en un clic.
            </motion.p>
          </form>
        </motion.div>

        <!-- Avatar Group & Social -->
        <motion.div class="flex items-center justify-center gap-4 pt-4" :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.7, delay: 1.7, ease: 'easeOut' }">
          <!-- Avatar Group -->
          <motion.div :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.6, delay: 1.9, ease: 'easeOut' }">
            <UAvatarGroup :avatars="avatars" size="sm" class="flex-shrink-0" aria-label="Équipe Tooka">
              <UAvatar src="/images/avatars/damien.jpeg" alt="Damien - Membre de l'équipe Tooka" />
              <UAvatar src="/images/avatars/mattis.jpeg" alt="Mattis - Membre de l'équipe Tooka" />
              <UAvatar src="/images/avatars/tom.jpeg" alt="Tom - Membre de l'équipe Tooka" />
            </UAvatarGroup>
          </motion.div>

          <!-- Text -->
          <motion.span class="text-sm text-gray-600 dark:text-gray-400" :initial="{ opacity: 0, x: -10 }"
            :animate="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5, delay: 2.1, ease: 'easeOut' }">
            Déjà <strong class="text-gray-900 dark:text-white">127</strong> créatifs inscrits
          </motion.span>

          <!-- Pipe -->
          <motion.div :initial="{ opacity: 0 }" :animate="{ opacity: 1 }"
            :transition="{ duration: 0.4, delay: 2.3, ease: 'easeOut' }">
            <USeparator orientation="vertical" />
          </motion.div>

          <!-- LinkedIn Icon -->
          <motion.a href="#"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Suivez-nous sur LinkedIn" target="_blank" rel="noopener noreferrer"
            :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.5, delay: 2.5, ease: 'easeOut' }" :while-hover="{ scale: 1.1 }"
            :while-tap="{ scale: 0.95 }">
            <UIcon name="i-lucide-linkedin" class="w-4 h-4" />
            <UIcon name="i-lucide-instagram" class="ml-2 w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </main>

    <!-- Footer -->
    <motion.footer class="py-6 text-center" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }"
      :transition="{ duration: 0.6, delay: 2.7, ease: 'easeOut' }">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        © {{ new Date().getFullYear() }} Tooka. Tous droits réservés.
      </p>
    </motion.footer>
  </div>
</template>

<script lang="ts" setup>
import { motion, useScroll, useTransform } from 'motion-v'

// Scroll animations
const { scrollYProgress } = useScroll()
const shapesY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
const shapes2Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
const shapes3Y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
const shapes4Y = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

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

// Form state
const email = ref('')
const loading = ref(false)

// Real avatars from the avatars folder
const avatars = [
  {
    src: '/images/avatars/damien.jpeg',
    alt: 'Damien'
  },
  {
    src: '/images/avatars/mattis.jpeg',
    alt: 'Mattis'
  },
  {
    src: '/images/avatars/tom.jpeg',
    alt: 'Tom'
  }
]

const joinWaitlist = async () => {
  if (!email.value) return

  loading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Show success message
    alert('Parfait ! Vous serez parmi les premiers à découvrir Tooka.')
    email.value = ''
  } catch (error) {
    console.error('Error joining waitlist:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    loading.value = false
  }
}
</script>