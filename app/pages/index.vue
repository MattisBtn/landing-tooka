<template>
  <div class="min-h-screen bg-slate-50">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-slate-900 focus:px-3 focus:py-2 focus:rounded-md">Aller au contenu</a>
    <AppHeader />

    <!-- Contenu principal -->
    <main id="main" class="pt-12" role="main" aria-labelledby="hero-title">
      <HeroSection />
      
      <!-- Section image de l'app -->
      <section class="py-4 md:py-6">
        <div class="mx-auto max-w-6xl px-6">
          <div class="relative perspective-midrange">
            <!-- Wrapper élégant avec ombres et bordures -->
            <div class="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/5 origin-top transform-gpu" :style="wrapperStyle">
              <!-- Effet de brillance en haut -->
              <div class="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-10"></div>
              
              <!-- Image responsive -->
              <NuxtImg 
                src="/images/tooka.png" 
                alt="Interface de l'application Tooka" 
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ProblemsSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
    </main>
  </div>
</template>

<script lang="ts" setup>
// SEO Meta tags avec Nuxt SEO
useSeoMeta({
  title: 'Tooka - Créez plus. Livrez mieux.',
  description: 'La plateforme qui accompagne les créatifs du brief initial à la livraison finale. Gérez vos projets clients sans stress, avec style.',
  keywords: 'créatifs, gestion de projets, plateforme, design, freelance, agence',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Tooka - Créez plus. Livrez mieux.',
  twitterDescription: 'La plateforme qui accompagne les créatifs du brief initial à la livraison finale.'
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
    logo: '/images/logo-light.png'
  })
])

const { y } = useWindowScroll()
const { height } = useWindowSize()
const threshold = computed(() => Math.max(1, height.value * 0.6))
const rotationDeg = computed(() => {
  const progress = Math.min(y.value, threshold.value) / threshold.value
  return 4 * (1 - progress)
})
const wrapperStyle = computed(() => ({
  transform: `perspective(1200px) rotateX(${rotationDeg.value}deg)`,
  transformOrigin: 'top',
  willChange: 'transform'
}))
</script>