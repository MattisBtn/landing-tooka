<template>
  <section id="roadmap" class="scroll-mt-28 py-16 md:py-10" aria-labelledby="roadmap-title">
    <div class="mx-auto max-w-[100% - 2rem] px-6">
      <div class="relative overflow-hidden rounded-3xl">
        <div class="absolute inset-0 bg-black"></div>
        
        <div class="px-6 py-16 md:py-10 relative">
      <div class="text-center">
        <TkBadge label="Roadmap" />
        <h2 id="roadmap-title" class="mt-8 text-2xl md:text-4xl font-extrabold leading-tight text-white">
          Ce n'est que le début…
        </h2>
        <p class="mt-4 text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
          Chaque trimestre, nous déployons de nouvelles fonctionnalités pensées pour simplifier votre workflow et booster vos revenus.
        </p>
        <p class="mt-3 text-base md:text-lg font-medium text-white max-w-3xl mx-auto">
          Rejoindre Tooka aujourd'hui, c'est prendre une longueur d'avance.
        </p>
      </div>

      <div class="mt-16 relative">
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-700 via-slate-700/50 to-transparent -translate-x-1/2"></div>

        <div class="space-y-12 md:space-y-16">
          <div v-for="(quarter, index) in roadmap" :key="quarter.period" class="relative">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div :class="[
                'lg:flex',
                index % 2 === 0 ? 'lg:order-1 lg:justify-end' : 'lg:order-2 lg:justify-start'
              ]">
                <div class="flex w-full lg:w-auto lg:inline-flex items-center gap-4 px-3 py-2 md:px-5 md:py-3 rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 shadow-xl relative overflow-hidden group hover:ring-white/20 transition-all">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 ring-1 ring-white/20 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <span class="text-lg font-bold text-white relative">{{ index + 1 }}</span>
                  </div>
                  <div class="text-left relative">
                    <div class="text-sm md:text-base font-bold text-white">{{ quarter.period }}</div>
                  </div>
                </div>
              </div>

              <div :class="[
                index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
              ]">
                <div class="rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 relative overflow-hidden group hover:bg-white/[0.07] hover:ring-white/20 transition-all">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
                  
                  <button
                    @click="toggleStep(index)"
                    class="w-full px-5 py-3 flex items-center justify-between gap-4 text-left relative group/btn"
                    :aria-expanded="expandedSteps.has(index)"
                    :aria-controls="`roadmap-features-${index}`"
                  >
                    <span class="text-sm md:text-base font-bold text-white">{{ quarter.title }}</span>
                    <UIcon
                      name="i-heroicons-chevron-down-20-solid"
                      class="w-5 h-5 text-white/70 transition-transform duration-300 flex-shrink-0"
                      :class="{ 'rotate-180': expandedSteps.has(index) }"
                    />
                  </button>

                  <div
                    class="grid transition-all duration-300 ease-in-out"
                    :style="{
                      gridTemplateRows: expandedSteps.has(index) ? '1fr' : '0fr'
                    }"
                  >
                    <div
                      :id="`roadmap-features-${index}`"
                      class="overflow-hidden"
                    >
                      <ul class="space-y-3.5 relative px-5 pb-5 pt-2">
                        <li v-for="(feature, fIndex) in quarter.features" :key="fIndex" class="flex gap-3 text-sm md:text-base text-slate-300 items-start">
                          <div class="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 ring-1 ring-white/20 flex-shrink-0 mt-0.5">
                            <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                          </div>
                          <span class="leading-relaxed">{{ feature }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden lg:block absolute left-1/2 top-8 w-3 h-3 rounded-full bg-slate-900 ring-2 ring-slate-600 shadow-lg -translate-x-1/2 z-10"></div>
          </div>
        </div>
      </div>

      <!-- <div class="mt-20 md:mt-24">
        <div class="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm ring-1 ring-white/20 shadow-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          <div class="relative">
            <h3 class="text-2xl md:text-3xl font-bold text-white text-center">
              Pourquoi rejoindre dès aujourd'hui ?
            </h3>
            <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="benefit in benefits" :key="benefit.title" class="text-center group">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 ring-1 ring-white/20 mb-4 relative overflow-hidden group-hover:bg-white/15 transition-all">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <UIcon :name="benefit.icon" class="w-7 h-7 text-white relative" />
                </div>
                <div class="text-white font-bold text-lg md:text-xl">{{ benefit.title }}</div>
                <div class="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">{{ benefit.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type Quarter = {
  period: string
  title: string
  features: string[]
}

type Benefit = {
  icon: string
  title: string
  description: string
}

const expandedSteps = ref<Set<number>>(new Set([0]))

const toggleStep = (index: number) => {
  if (expandedSteps.value.has(index)) {
    expandedSteps.value.delete(index)
  } else {
    expandedSteps.value.add(index)
  }
}

const roadmap: Quarter[] = [
  {
    period: 'Q4 2025',
    title: 'Premières optimisations',
    features: [
      'Nouvelles galeries & moodboards : design modernisé, immersif et personnalisable.',
      'Templates de propositions commerciales pour envoyer vos offres en quelques clics.',
      'Statistiques & tracking : suivez l\'ouverture et la durée de consultation de vos propositions pour optimiser votre closing.'
    ]
  },
  {
    period: 'Q1 2026',
    title: 'Organisation & simplicité',
    features: [
      'Gestion de mannequins intégrée : proposez un catalogue de modèles avec tarifs & profils.',
      'Tri intelligent des fichiers : importez et organisez vos fichiers automatiquement.',
      'Multi-sélections par catégories : simplifiez vos livraisons quand un shooting couvre plusieurs univers.',
      'Workflows automatiques : devis signé → facture générée, acompte encaissé, projet créé.'
    ]
  },
  {
    period: 'Q2 2026',
    title: 'Le bureau du photographe 2.0',
    features: [
      'Générateur de contrats intelligents : créez et signez vos contrats directement dans Tooka.',
      'Dashboard avancé : suivez vos KPIs par projet (conversion, panier moyen, temps gagné).',
      'Rapports mensuels automatiques : revenus générés, taux de closing, clients actifs.',
      'Collaboration enrichie : commentaires visuels & annotations directement dans la galerie.'
    ]
  },
  {
    period: 'Q3 2026',
    title: 'Puissance & rentabilité',
    features: [
      'Multi-utilisateurs / équipes : invitez plusieurs photographes avec rôles et permissions.',
      'Classement par rentabilité client : identifiez vos meilleurs clients (et ceux qui prennent trop de temps).',
      'Marque blanche : personnalisez Tooka à 100% (logo, couleurs, URL dédiée).',
      'Intégrations & automatisations avancées : CRM, paiements, relances clients automatiques.'
    ]
  }
]

const benefits: Benefit[] = [
  {
    icon: 'i-heroicons-chart-bar-20-solid',
    title: 'Influencez la roadmap',
    description: 'Vos retours façonnent les prochaines fonctionnalités'
  },
  {
    icon: 'i-heroicons-bolt-20-solid',
    title: 'Accès anticipé',
    description: 'Testez les nouvelles features avant tout le monde'
  },
  {
    icon: 'i-heroicons-trophy-20-solid',
    title: 'Avantage compétitif',
    description: 'Gagnez du temps & de l\'argent avant vos concurrents'
  }
]
</script>

