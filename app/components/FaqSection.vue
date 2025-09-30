<template>
  <section id="faq" class="scroll-mt-28 py-16 md:py-20" aria-labelledby="faq-title">
    <div class="mx-auto max-w-6xl px-6">
      <div class="text-center">
        <TkBadge label="FAQ">On répond à vos questions</TkBadge>
        <h2 id="faq-title" class="mt-8 text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">
          Pas de pièges, pas de surprises.        </h2>
        <p class="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
          Voici tout ce que vous devez savoir pour démarrer sereinement.        </p>
      </div>

      <div class="mt-10 space-y-4">
        <div
          v-for="(item, idx) in faqs"
          :key="item.q"
          class="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/70 ring-1 ring-white/60 shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/40 after:pointer-events-none"
        >
          <button
            type="button"
            class="relative z-10 w-full px-5 py-4 text-left flex items-center justify-between gap-4"
            :aria-expanded="openIndex === idx ? 'true' : 'false'"
            @click="toggle(idx)"
          >
            <span class="text-slate-900 text-sm md:text-base font-semibold">{{ item.q }}</span>
            <UIcon
              :name="openIndex === idx ? 'i-heroicons-minus-small' : 'i-heroicons-plus-small'"
              class="h-5 w-5 text-slate-900"
              aria-hidden="true"
            />
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
            <div v-show="openIndex === idx" class="relative text-xs md:text-sm z-10 px-5 pb-5 pt-0 text-slate-600">
              {{ item.a }}
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
  { q: 'Puis-je annuler à tout moment ?', a: 'Oui, la résiliation est possible en un clic depuis votre espace.' },
  { q: 'Proposez-vous un essai gratuit ?', a: "Oui, vous pouvez tester Tooka gratuitement avant de vous abonner." },
  { q: 'Comment fonctionnent les paiements de galerie ?', a: 'Vous définissez acompte/solde; le client règle directement sur la galerie.' },
  { q: 'Mes données sont-elles sécurisées ?', a: 'Nous chiffrons les données et appliquons des politiques de sécurité strictes.' }
]

const openIndex = ref<number | null>(0)

function toggle(idx: number) {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active { transition-property: opacity, transform; }
</style>


