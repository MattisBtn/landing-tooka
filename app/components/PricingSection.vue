<template>
  <section id="pricing" class="scroll-mt-28 py-16 md:py-10" aria-labelledby="pricing-title">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">
        <TkBadge label="Tarifs" />
        <h2 id="pricing-title" class="mt-8 text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">
          Des formules adaptées à chaque photographe.
        </h2>
        <p class="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Que vous soyez freelance, agence ou studio, Tooka grandit avec vous et vous accompagne dans votre succès.
        </p>
      </div>

      <div class="mt-10">
        <nav
          aria-label="Type de facturation"
          class="grid grid-cols-2 gap-2 p-2 rounded-2xl bg-slate-100/80 ring-1 ring-black/5 shadow-2xl shadow-black/5 max-w-md mx-auto"
        >
          <button
            type="button"
            :aria-pressed="billingCycle === 'monthly' ? 'true' : 'false'"
            :class="[
              'w-full inline-flex items-center justify-center gap-2 px-4 py-2 md:py-3 rounded-xl text-sm font-medium transition relative',
              billingCycle === 'monthly'
                ? 'text-slate-900 backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),_0_8px_16px_-4px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/60 before:to-transparent before:pointer-events-none'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/70'
            ]"
            @click="billingCycle = 'monthly'"
          >
            Mensuel
          </button>
          <button
            type="button"
            :aria-pressed="billingCycle === 'yearly' ? 'true' : 'false'"
            :class="[
              'w-full inline-flex items-center justify-center gap-2 px-4 py-2 md:py-3 rounded-xl text-sm font-medium transition relative',
              billingCycle === 'yearly'
                ? 'text-slate-900 backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),_0_8px_16px_-4px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/60 before:to-transparent before:pointer-events-none'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/70'
            ]"
            @click="billingCycle = 'yearly'"
          >
            Annuel
          </button>
        </nav>

        <div class="mt-12 overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-2xl shadow-black/20">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-slate-200/60">
                  <th class="sticky left-0 z-10 bg-white/70 backdrop-blur-2xl px-6 py-6 text-left">
                    <span class="text-sm font-medium text-slate-600"></span>
                  </th>
                  <th
                    v-for="plan in plans"
                    :key="plan.key"
                    :class="[
                      'px-6 py-6 text-center min-w-[200px]',
                      plan.key === 'pro' ? 'bg-slate-50/50' : ''
                    ]"
                  >
                    <div class="flex flex-col items-center gap-2">
                      <div class="h-6 flex items-center justify-center">
                        <div v-if="plan.key === 'pro'" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white">
                          Populaire
                        </div>
                      </div>
                      <h3 class="text-lg font-bold text-slate-900">{{ plan.name }}</h3>
                      <p class="text-sm text-slate-600">{{ plan.target }}</p>
                      <div class="mt-2">
                        <div class="text-2xl font-extrabold text-slate-900">
                          {{ displayPrice(plan) }}
                          <span class="text-sm font-medium text-slate-600">/ mois</span>
                        </div>
                        <div v-if="billingCycle === 'yearly'" class="text-xs text-slate-500">HT, facturé annuellement</div>
                        <div v-else class="text-xs text-slate-500">HT</div>
                      </div>
                      <TkButton
                        href="https://app.tooka.io/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        :variant="plan.key === 'pro' ? 'primary' : 'secondary'"
                        class="mt-2 w-full"
                        @click="handleAppAccessCta(`pricing-${plan.key}`)"
                      >
                        Commencer
                      </TkButton>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(category, catIndex) in featureCategories" :key="category.name">
                  <tr :class="catIndex > 0 ? 'border-t-2 border-slate-200/60' : ''">
                    <td colspan="4" class="px-6 py-4 bg-slate-50/30">
                      <h4 class="text-sm font-semibold text-slate-900">{{ category.name }}</h4>
                    </td>
                  </tr>
                  <tr
                    v-for="(feature, featIndex) in category.features"
                    :key="feature.id"
                    :class="[
                      'border-t border-slate-200/30',
                      featIndex % 2 === 0 ? 'bg-white/20' : 'bg-white/40'
                    ]"
                  >
                    <td class="sticky left-0 z-10 backdrop-blur-2xl px-6 py-4 text-sm text-slate-700" :class="featIndex % 2 === 0 ? 'bg-white/20' : 'bg-white/40'">
                      <div class="flex items-start gap-2">
                        <span>{{ feature.label }}</span>
                        <button
                          v-if="feature.tooltip"
                          type="button"
                          class="text-slate-400 hover:text-slate-600 transition"
                          :title="feature.tooltip"
                          :aria-label="`Information: ${feature.tooltip}`"
                        >
                          <UIcon name="i-heroicons-information-circle" class="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                    <td
                      v-for="plan in plans"
                      :key="`${plan.key}-${feature.id}`"
                      :class="[
                        'px-6 py-4 text-center',
                        plan.key === 'pro' ? 'bg-slate-50/50' : ''
                      ]"
                    >
                      <div class="flex items-center justify-center">
                        <UIcon
                          v-if="getFeatureValue(plan, feature.id) === true"
                          name="i-heroicons-check-circle-20-solid"
                          class="h-5 w-5 text-slate-900"
                        />
                        <UIcon
                          v-else-if="getFeatureValue(plan, feature.id) === false"
                          name="i-heroicons-x-circle-20-solid"
                          class="h-5 w-5 text-slate-300"
                        />
                        <span v-else class="text-sm font-medium text-slate-900">
                          {{ getFeatureValue(plan, feature.id) }}
                        </span>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-10 text-center">
          <p class="text-sm text-slate-600">
            Tous les prix sont en euros HT. TVA applicable selon votre pays.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type BillingCycle = 'monthly' | 'yearly'

type FeatureValue = boolean | string | number

interface Feature {
  id: string
  label: string
  tooltip?: string
}

interface FeatureCategory {
  name: string
  features: Feature[]
}

interface PricingPlan {
  key: string
  name: string
  target: string
  monthly: number
  yearlyPerMonth: number
  featureValues: Record<string, FeatureValue>
}

const billingCycle = ref<BillingCycle>('monthly')

const { handleAppAccessCta } = useAppCta()

const featureCategories: FeatureCategory[] = [
  {
    name: 'Gestion de projets',
    features: [
      { id: 'projects', label: 'Nombre de projets' },
      { id: 'clients', label: 'Gestion clients illimitée' },
      { id: 'galleries', label: 'Galeries de présentation' }
    ]
  },
  {
    name: 'Stockage & Fichiers',
    features: [
      { id: 'storage', label: 'Espace de stockage' },
      { id: 'upload-size', label: 'Taille max par fichier', tooltip: 'Taille maximale pour un fichier uploadé' },
      { id: 'raw-conversion', label: 'Conversion automatique RAW', tooltip: 'Conversion automatique des fichiers RAW en JPEG pour la galerie' },
      { id: 'backup', label: 'Sauvegarde automatique' }
    ]
  },
  {
    name: 'Partage & Livraison',
    features: [
      { id: 'client-selection', label: 'Sélection client', tooltip: 'Vos clients peuvent sélectionner leurs photos préférées' },
      { id: 'password-protection', label: 'Protection par mot de passe' },
      { id: 'watermark', label: 'Filigrane personnalisé' },
      { id: 'download-original', label: 'Téléchargement haute résolution' }
    ]
  },
  {
    name: 'Signature & Documents',
    features: [
      { id: 'e-signature', label: 'Signature électronique', tooltip: 'Devis et contrats signables en ligne' },
      { id: 'invoicing', label: 'Facturation intégrée' }
    ]
  },
  {
    name: 'Support & Accompagnement',
    features: [
      { id: 'support', label: 'Support client' },
      { id: 'response-time', label: 'Temps de réponse' },
      { id: 'onboarding', label: 'Onboarding personnalisé' },
      { id: 'beta-access', label: 'Accès anticipé aux nouveautés' }
    ]
  }
]

const plans: PricingPlan[] = [
  {
    key: 'starter',
    name: 'Standard',
    target: 'Freelance',
    monthly: 34.99,
    yearlyPerMonth: 29.99,
    featureValues: {
      'projects': '20 projets/mois',
      'clients': true,
      'galleries': true,
      'storage': '50 Go',
      'upload-size': '500 Mo',
      'raw-conversion': false,
      'backup': true,
      'client-selection': true,
      'password-protection': false,
      'watermark': false,
      'download-original': true,
      'e-signature': true,
      'invoicing': true,
      'support': 'E-mail',
      'response-time': '≤ 48h',
      'onboarding': false,
      'beta-access': false
    }
  },
  {
    key: 'pro',
    name: 'Pro',
    target: 'Agence',
    monthly: 54.99,
    yearlyPerMonth: 46.75,
    featureValues: {
      'projects': 'Illimité',
      'clients': true,
      'galleries': true,
      'storage': '350 Go',
      'upload-size': '2 Go',
      'raw-conversion': true,
      'backup': true,
      'client-selection': true,
      'password-protection': true,
      'watermark': true,
      'download-original': true,
      'e-signature': true,
      'invoicing': true,
      'support': 'Chat & E-mail',
      'response-time': '≤ 24h',
      'onboarding': false,
      'beta-access': false
    }
  },
  {
    key: 'business',
    name: 'Business',
    target: 'Studio',
    monthly: 99,
    yearlyPerMonth: 84.25,
    featureValues: {
      'projects': 'Illimité',
      'clients': true,
      'galleries': true,
      'storage': '1 To',
      'upload-size': '5 Go',
      'raw-conversion': true,
      'backup': true,
      'client-selection': true,
      'password-protection': true,
      'watermark': true,
      'download-original': true,
      'e-signature': true,
      'invoicing': true,
      'support': 'Chat prioritaire',
      'response-time': '≤ 12h',
      'onboarding': true,
      'beta-access': true
    }
  }
]

function displayPrice(plan: PricingPlan): string {
  const value = billingCycle.value === 'monthly' ? plan.monthly : plan.yearlyPerMonth
  return `${value}€`
}

function getFeatureValue(plan: PricingPlan, featureId: string): FeatureValue {
  return plan.featureValues[featureId] ?? false
}
</script>

<style scoped>
</style>


