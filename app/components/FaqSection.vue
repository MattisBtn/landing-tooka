<template>
  <section id="faq" class="relative scroll-mt-28 py-20 overflow-hidden" aria-labelledby="faq-title">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-full blur-3xl opacity-20"></div>
      <div class="absolute bottom-1/3 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-full blur-3xl opacity-15"></div>
    </div>

    <div class="mx-auto max-w-4xl px-6 relative">
      <div class="text-center animate-fade-in-up">
        <TkBadge label="Pas encore convaincu ?" />
        <h2 id="faq-title" class="mt-8 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
          Les réponses à vos dernières hésitations
        </h2>
        <p class="mt-6 text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          On répond aux dernières questions qui freinent souvent les photographes avant de se lancer.
        </p>
      </div>

      <div class="mt-12 space-y-4">
        <div
          v-for="(item, idx) in faqs"
          :key="item.q"
          class="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/40 after:pointer-events-none transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] animate-fade-in-up"
          :style="`animation-delay: ${100 + idx * 50}ms;`"
        >
          <button
            type="button"
            class="relative z-10 w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
            :aria-expanded="openIndex === idx ? 'true' : 'false'"
            @click="toggle(idx)"
          >
            <span class="text-slate-900 text-base md:text-lg font-bold group-hover:text-slate-700 transition-colors">{{ item.q }}</span>
            <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900/10 flex items-center justify-center transition-all group-hover:bg-slate-900 group-hover:text-white">
              <UIcon
                :name="openIndex === idx ? 'i-heroicons-minus-small' : 'i-heroicons-plus-small'"
                class="h-5 w-5 transition-transform"
                aria-hidden="true"
              />
            </div>
          </button>
          <transition
            name="accordion"
            enter-active-class="transition duration-200 ease-out"
            leave-active-class="transition duration-150 ease-in"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div v-show="openIndex === idx" class="relative text-sm md:text-base z-10 px-6 pb-6 pt-0 text-slate-600 leading-relaxed" v-html="item.a.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>')">
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type FaqItem = { q: string; a: string }

const faqs: FaqItem[] = [
  { q: 'Puis-je arrêter si ça ne me convient pas ?', a: 'Bien sûr, il n\'y a aucun engagement. Vous arrêtez quand vous voulez.' },
  { q: 'Mes clients vont-ils réussir à s\'en servir sans problème ?', a: 'Oui, ils sélectionnent et paient en quelques clics, sans rien à installer.' },
  { q: 'Est-ce que mes photos sont vraiment en sécurité ?', a: 'Oui, elles sont stockées sur des serveurs sécurisés et protégés.' },
  { q: 'En quoi Tooka peut m\'aider à gagner plus ?', a: 'Tooka transforme votre workflow en véritable levier de revenus :\n\n✅ Vos clients vivent une meilleure expérience → ils sont plus satisfaits et vous recommandent davantage.\n\n💸 La sélection est conçue pour l\'upsell → vos clients choisissent plus de photos que prévu, ce qui augmente naturellement votre panier moyen.\n\n⚡ Moins de temps perdu = plus de shootings possibles → vous facturez plus de projets sans travailler plus.\n\n🎯 Des propositions commerciales plus pro → vous signez plus vite et plus souvent.\n\n🚀 Un abonnement vite rentabilisé → 1 à 2 sélections suffisent pour couvrir le prix de Tooka.' }
]

const openIndex = ref<number | null>(0)

function toggle(idx: number) {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.accordion-enter-active,
.accordion-leave-active { transition-property: opacity, transform; }
</style>


