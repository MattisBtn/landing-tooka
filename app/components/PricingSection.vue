<template>
  <section id="pricing" class="py-16 md:py-20" aria-labelledby="pricing-title">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center">
        <TkBadge label="Tarifs">Clairs et adaptés</TkBadge>
        <h2 id="pricing-title" class="mt-8 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Choisissez ce qui vous convient
        </h2>
        <p class="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Des plans simples pour démarrer, évoluer et accélérer.
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

        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="plan in plans"
            :key="plan.key"
            class="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/40 after:pointer-events-none"
          >
            <span class="pointer-events-none absolute -top-14 left-1/2 h-24 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"></span>
            <span class="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></span>
            <div class="relative z-10 p-6 flex flex-col items-center text-center gap-4">
              <div class="h-12 w-12 rounded-xl bg-slate-900 text-white grid place-items-center ring-1 ring-white/10 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.35)]">
                <UIcon :name="plan.icon" class="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-slate-900">{{ plan.name }}</h3>
                <p class="mt-1 text-sm text-slate-600">{{ plan.target }}</p>
              </div>

              <div class="mt-2">
                <div class="text-3xl font-extrabold text-slate-900">
                  {{ displayPrice(plan) }}
                  <span class="text-base font-medium text-slate-600">/ mois</span>
                </div>
                <div v-if="billingCycle === 'yearly'" class="mt-1 text-xs text-slate-500">facturé annuellement</div>
              </div>

              <TkButton size="md" variant="primary" class="mt-2" icon="i-heroicons-arrow-right">
                Choisir {{ plan.name }}
              </TkButton>

              <ul class="mt-4 w-full space-y-2 text-left">
                <li
                  v-for="feat in plan.features"
                  :key="feat"
                  class="flex items-start gap-2 text-slate-700"
                >
                  <UIcon name="i-heroicons-check-circle-20-solid" class="mt-0.5 h-5 w-5 text-slate-900" aria-hidden="true" />
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type BillingCycle = 'monthly' | 'yearly'

type PricingPlan = {
  key: string
  name: string
  icon: string
  target: string
  monthly: number
  yearlyPerMonth: number
  features: string[]
}

const billingCycle = ref<BillingCycle>('monthly')

const plans: PricingPlan[] = [
  {
    key: 'starter',
    name: 'Starter',
    icon: 'i-heroicons-rocket-launch-20-solid',
    target: 'Pour démarrer seul',
    monthly: 15,
    yearlyPerMonth: 12,
    features: [
      'Moodboard et galerie',
      'Sélection simple',
      'Paiements de base',
      '3 projets actifs',
      'Stockage 10 Go',
      'Support standard'
    ]
  },
  {
    key: 'pro',
    name: 'Pro',
    icon: 'i-heroicons-sparkles-20-solid',
    target: 'Pour créatifs réguliers',
    monthly: 29,
    yearlyPerMonth: 24,
    features: [
      'Galeries payantes',
      'Révisions cadrées',
      'Upsell de médias',
      'Projets illimités',
      'Stockage 100 Go',
      'Support prioritaire'
    ]
  },
  {
    key: 'pro-plus',
    name: 'Pro+',
    icon: 'i-heroicons-bolt-20-solid',
    target: 'Pour équipes exigeantes',
    monthly: 49,
    yearlyPerMonth: 39,
    features: [
      'RAW et livraisons avancées',
      'Workflow sur-mesure',
      'Rôles & permissions',
      'Marque blanche',
      'Stockage 1 To',
      'SLA & success manager'
    ]
  }
]

function displayPrice(plan: PricingPlan) {
  const value = billingCycle.value === 'monthly' ? plan.monthly : plan.yearlyPerMonth
  return `${value}€`
}
</script>

<style scoped>
</style>


