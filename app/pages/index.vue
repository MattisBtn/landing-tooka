<template>
  <div>
    <HeroSection />

    <section class="relative py-12 md:py-16">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-full blur-3xl opacity-20"></div>
        <div class="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div class="mx-auto max-w-5xl px-6">
        <div class="text-center mb-8">
          <TkBadge label="Découvrez Tooka en action" />
        </div>

        <div class="relative perspective-midrange">
          <div class="relative p-3 rounded-3xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1),0_10px_30px_-15px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/60 before:to-transparent before:pointer-events-none origin-top transform-gpu" :style="wrapperStyle">
            <div class="relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
              <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10"></div>
              <div class="relative w-full" style="padding-bottom: 56.25%;">
                <iframe
                  class="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/wI74QiSCQyY?rel=0&modestbranding=1&controls=1"
                  title="Vidéo de présentation Tooka - Le CRM qui libère les créatifs"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ProblemsSection />
    <FeaturesSection />
    <RoadmapSection />
    <PricingSection />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  showFaq: true
})
useHead({
  titleTemplate: '%s'
})
// SEO Meta tags avec Nuxt SEO
useSeoMeta({
  title: 'Tooka | Le CRM qui libère les créatifs.',
  description: 'La plateforme qui accompagne les créatifs du brief initial à la livraison finale. Gérez vos projets clients sans stress, avec style.',
  ogTitle: 'Tooka | Le CRM qui libère les créatifs',
  ogDescription: 'La solution tout-en-un pour les photographes. Gagnez du temps, augmentez vos revenus et paraissez plus professionnel.',
  ogType: 'website',
  ogUrl: 'https://tooka.io',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Tooka | Le CRM qui libère les créatifs',
  twitterDescription: 'La solution tout-en-un pour les photographes. Gagnez du temps, augmentez vos revenus et paraissez plus professionnel.'
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