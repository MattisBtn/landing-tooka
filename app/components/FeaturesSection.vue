<template>
  <section id="features" class="scroll-mt-28 py-16 md:py-10" aria-labelledby="features-title">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center">
        <TkBadge label="Tout pour livrer" />
        <h2 id="features-title" class="mt-8 text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">
          Un seul outil pour tout gérer
        </h2>
        <p class="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Contrairement aux CRM généralistes, Tooka est pensé pour les créatifs : devis, contrats, galeries, livrables — tout est déjà inclus.
        </p>
      </div>

      <div class="mt-10">
        <nav
          aria-label="Navigation des fonctionnalités"
          class="md:grid md:grid-cols-5 md:gap-3 p-2 rounded-2xl bg-slate-100/80 ring-1 ring-black/5 shadow-2xl shadow-black/5"
        >
          <div class="flex md:contents overflow-x-auto gap-2 md:gap-0 scrollbar-hide snap-x snap-mandatory px-4 md:px-0">
            <button
              v-for="(item, index) in items"
              :key="item.key"
              type="button"
              :aria-selected="activeIndex === index ? 'true' : 'false'"
              :class="[
                'flex-shrink-0 snap-start inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition relative md:w-full',
                'px-3 py-1.5 md:px-4 md:py-3',
                activeIndex === index
                  ? 'text-slate-900 bg-white ring-1 ring-slate-200'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
              ]"
              @click="activeIndex = index"
            >
              <span class="whitespace-nowrap">{{ item.label }}</span>
            </button>
          </div>
        </nav>
        
        <div class="flex justify-center gap-1.5 mt-4 md:hidden">
          <button
            v-for="(item, index) in items"
            :key="`dot-${item.key}`"
            type="button"
            :aria-label="`Aller à ${item.label}`"
            :class="[
              'h-1.5 rounded-full transition-all',
              activeIndex === index
                ? 'w-6 bg-slate-900'
                : 'w-1.5 bg-slate-300 hover:bg-slate-400'
            ]"
            @click="activeIndex = index"
          />
        </div>

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-slate-900">{{ activeItem.title }}</h3>
            <p class="mt-4 text-slate-600">{{ activeItem.description }}</p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="point in activeItem.points"
                :key="point"
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm text-slate-800 bg-white/70 backdrop-blur-2xl ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),_0_8px_16px_-4px_rgba(0,0,0,0.15)] relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/60 before:to-transparent before:pointer-events-none"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                {{ point }}
              </span>
            </div>
          </div>

          <div 
            ref="imageContainer"
            class="relative perspective-midrange touch-pan-y select-none"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div class="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/5 origin-top transform-gpu">
              <div class="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-10"></div>
              <NuxtImg
                :src="activeItem.imageSrc"
                :alt="activeItem.imageAlt"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type FeatureItem = {
  key: string
  label: string
  title: string
  description: string
  points: string[]
  imageSrc: string
  imageAlt: string
}

const items: FeatureItem[] = [
  {
    key: 'dashboard',
    label: 'Tableau de bord',
    title: 'Pilotez votre activité photo en temps réel.',
    description: 'Revenus, projets signés, délais… tout est suivi dans un tableau de bord simple et actionnable.',
    points: [
      '📈 Indicateurs clés pour progresser',
      '🔎 Vue claire de votre activité',
      '⏱️ Délais maîtrisés'
    ],
    imageSrc: '/images/features/dashboard-kpi.png',
    imageAlt: 'Tableau de bord Tooka avec KPI'
  },
  {
    key: 'propositions',
    label: 'Propositions',
    title: 'Faites la différence dès la première proposition.',
    description: 'Offrez une expérience professionnelle dès le devis, et transformez plus de prospects en clients.',
    points: [
      '✍️ Signature électronique intégrée',
      '🎯 Propositions visuelles et personnalisées',
      '💳 Paiement d\'acompte en ligne'
    ],
    imageSrc: '/images/features/propositions.png',
    imageAlt: 'Interface de propositions Tooka'
  },
  {
    key: 'moodboard',
    label: 'Moodboard',
    title: 'Co-créez vos shootings avec vos clients.',
    description: 'Un moodboard vivant où chacun peut partager des visuels, commenter, liker et valider — pour une vision claire dès le départ.',
    points: [
      '📤 Uploads faciles côté client',
      '💬 Réactions & commentaires intégrés',
      '🔎 Transparence totale du process'
    ],
    imageSrc: '/images/features/moodboard.png',
    imageAlt: 'Moodboard Tooka'
  },
  {
    key: 'selection',
    label: 'Sélection',
    title: '📸 Sélection intelligente, plus simple et plus rentable.',
    description: 'Vos clients choisissent leurs photos directement en ligne, téléchargent même les RAW, et chaque sélection devient une opportunité de vendre plus.',
    points: [
      '📂 Support des RAW',
      '💸 Augmentez vos revenus → upsell d\'images en un clic',
      '⏱️ Gagnez du temps → sélection fluide, zéro allers-retours'
    ],
    imageSrc: '/images/features/selection.png',
    imageAlt: 'Interface de sélection Tooka'
  },
  {
    key: 'galerie',
    label: 'Galerie',
    title: 'La galerie qui simplifie vos échanges et vos paiements.',
    description: 'Plus besoin d\'allers-retours : tout est géré dans la galerie — sélection, paiement et validation finale.',
    points: [
      '💸 Paiements fluides et rapides',
      '🌟 Expérience premium pour vos clients',
      '🚀 Livraison déclenchée à la validation'
    ],
    imageSrc: '/images/features/galerie.png',
    imageAlt: 'Galerie Tooka avec médias'
  },

]

const activeIndex = ref<number>(0)
const activeItem = computed<FeatureItem>(() => items[activeIndex.value] ?? items[0]!)

const imageContainer = ref<HTMLElement | null>(null)
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0]!.screenX
}

const handleTouchMove = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0]!.screenX
}

const handleTouchEnd = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0 && activeIndex.value < items.length - 1) {
      activeIndex.value++
    } else if (diff < 0 && activeIndex.value > 0) {
      activeIndex.value--
    }
  }
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>


