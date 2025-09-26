<template>
  <section id="features" class="scroll-mt-28 py-16 md:py-20" aria-labelledby="features-title">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center">
        <TkBadge label="Fonctionnalités">Tout pour livrer</TkBadge>
        <h2 id="features-title" class="mt-8 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Tout en un, simple
        </h2>
        <p class="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Gérez de A à Z sans friction, du brief au paiement.
        </p>
      </div>

      <div class="mt-10">
        <nav
          aria-label="Navigation des fonctionnalités"
          class="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-3 p-2 rounded-2xl bg-slate-100/80 ring-1 ring-black/5 shadow-2xl shadow-black/5"
        >
          <button
            v-for="(item, index) in items"
            :key="item.key"
            type="button"
            :aria-selected="activeIndex === index ? 'true' : 'false'"
            :class="[
              'w-full inline-flex items-center justify-center gap-2 px-4 py-2 md:py-3 rounded-xl text-sm font-medium transition relative',
              activeIndex === index
                ? 'text-slate-900 backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),_0_8px_16px_-4px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/60 before:to-transparent before:pointer-events-none'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/70'
            ]"
            @click="activeIndex = index"
          >
            <span>{{ item.label }}</span>
          </button>

          <div
            aria-disabled="true"
            class="w-full inline-flex items-center justify-center gap-2 px-4 py-2 md:py-3 rounded-xl text-sm font-medium relative text-slate-600 bg-white/50 backdrop-blur-2xl ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),_0_8px_16px_-4px_rgba(0,0,0,0.08)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/60 before:to-transparent before:pointer-events-none cursor-not-allowed select-none"
            title="Gestion des mannequins — bientôt disponible"
          >
            <span>Mannequins</span>
            <span class="inline-flex items-center px-2 py-0.5 rounded-lg text-xs text-white bg-slate-900/80 ring-1 ring-white/10">Bientôt</span>
          </div>
        </nav>

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

          <div class="relative perspective-midrange">
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
    title: 'Pilotez vos KPI en un coup d’œil',
    description: 'Un tableau clair pour suivre revenus, tâches, échéances et avancées de projet.',
    points: [
      'Vue consolidée de l’activité',
      'Alertes et priorités du jour',
      'Indicateurs de performance clés'
    ],
    imageSrc: '/images/features/dashboard-kpi.png',
    imageAlt: 'Tableau de bord Tooka avec KPI'
  },
  {
    key: 'galerie',
    label: 'Galerie',
    title: 'Vendez vos galeries, sans aller-retour',
    description: "Le client paie directement sa sélection. Gérez l'acompte et le solde au même endroit.",
    points: [
      'Paiement intégré sur la galerie',
      "Gestion d'acompte et solde",
      'Validation et livraison en un clic'
    ],
    imageSrc: '/images/features/galerie.png',
    imageAlt: 'Galerie Tooka avec médias'
  },
  {
    key: 'selection',
    label: 'Sélection',
    title: 'Sélection pro, formats RAW inclus',
    description: 'Proposez, faites choisir, upsellez vos médias et offrez des révisions maîtrisées.',
    points: [
      'Support des formats RAW',
      'Upsell de médias en un clic',
      'Demandes de révisions cadrées'
    ],
    imageSrc: '/images/features/selection.png',
    imageAlt: 'Interface de sélection Tooka'
  },
  {
    key: 'moodboard',
    label: 'Moodboard',
    title: 'Co-créez avec vos clients',
    description: 'Un moodboard vivant: le client peut uploader, réagir et commenter en contexte.',
    points: [
      'Uploads côté client',
      'Réactions et commentaires',
      'Historique clair des échanges'
    ],
    imageSrc: '/images/features/moodboard.png',
    imageAlt: 'Moodboard Tooka'
  }
]

const activeIndex = ref<number>(0)
const activeItem = computed<FeatureItem>(() => items[activeIndex.value] ?? items[0]!)
</script>

<style scoped>
</style>


