<template>
  <section id="pricing" class="scroll-mt-28 py-16 md:py-10" aria-labelledby="pricing-title">
    <div class="mx-auto max-w-6xl px-6">
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

        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="plan in plans"
            :key="plan.key"
            :class="[
              'relative rounded-2xl backdrop-blur-2xl bg-white/70 ring-1 shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:pointer-events-none',
              plan.key === 'pro' ? 'ring-slate-900 after:border-slate-900/40 scale-105 md:scale-110 pt-4' : 'ring-white/60 after:border-white/40'
            ]"
          >
            <div v-if="plan.key === 'pro'" class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <span class="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-lg">
                Populaire
              </span>
            </div>
            <span class="pointer-events-none absolute -top-14 left-1/2 h-24 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"></span>
            <span class="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></span>
            <div :class="['relative z-10 p-6 flex flex-col items-center text-center gap-4', plan.key === 'pro' ? 'pt-2' : '']">
              <div>
                <h3 class="text-xl font-semibold text-slate-900">{{ plan.name }}</h3>
                <p class="mt-1 text-sm text-slate-600">{{ plan.target }}</p>
              </div>

              <div class="mt-2">
                <div class="text-3xl font-extrabold text-slate-900">
                  {{ displayPrice(plan) }}
                  <span class="text-base font-medium text-slate-600">/ mois HT</span>
                </div>
                <div v-if="billingCycle === 'yearly'" class="mt-1 text-xs text-slate-500">facturé annuellement</div>
              </div>

              <ul class="mt-6 w-full space-y-2 text-left">
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

        <div class="mt-10 flex justify-center">
          <TkButton href="#hero" size="lg" variant="primary" icon="i-heroicons-arrow-right">
            Commencer maintenant
          </TkButton>
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
  target: string
  monthly: number
  yearlyPerMonth: number
  features: string[]
}

const billingCycle = ref<BillingCycle>('monthly')

const plans: PricingPlan[] = [
  {
    key: 'starter',
    name: 'Standard',
    target: 'Freelance',
    monthly: 34.99,
    yearlyPerMonth: 29.99,
    features: [
      '25 projets / mois',
      'Stockage 50 Go',
      'Support Standard (≤48h)'
    ]
  },
  {
    key: 'pro',
    name: 'Pro',
    target: 'Agence',
    monthly: 54.99,
    yearlyPerMonth: 46.75,
    features: [
      'Projets illimités',
      'Stockage 350 Go',
      'Support Prioritaire (≤24h)'
    ]
  },
  {
    key: 'pro-plus',
    name: 'Business',
    target: 'Studio',
    monthly: 99,
    yearlyPerMonth: 84.25,
    features: [
      'Projets illimités',
      'Stockage 1 To',
      'Support Premium (≤12h)'
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


