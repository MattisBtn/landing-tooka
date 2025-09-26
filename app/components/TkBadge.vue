<template>
  <div class="inline-flex items-center gap-2 rounded-full backdrop-blur-2xl bg-white/60 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),_0_10px_20px_-8px_rgba(0,0,0,0.25)] px-2 py-1 relative overflow-hidden">
    <span class="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-40 rounded-full bg-white/40 blur-2xl"></span>
    <span class="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5"></span>
    <span class="relative inline-flex items-center gap-2 rounded-full backdrop-blur-2xl bg-slate-100/70 ring-1 ring-white/80 px-2 py-1 text-xs md:text-sm font-medium text-slate-900 overflow-hidden">
      <span class="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-28 rounded-full bg-white/40 blur-2xl"></span>
      <span class="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5"></span>
      <span v-if="dot" class="relative inline-flex h-4 w-4 items-center justify-center">
        <span :class="['absolute rounded-full opacity-70', dotGlowClass, 'h-3 w-3 animate-ping top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2']"></span>
        <span :class="['relative inline-block h-1.5 w-1.5 rounded-full', dotColorClass]"></span>
      </span>
      <span>{{ label }}</span>
    </span>
    <span class="px-3 py-1 text-xs md:text-sm font-medium text-slate-700">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  dot?: boolean
  dotColor?: 'blue' | 'green' | 'pink' | 'amber'
  label?: string
}>(), {
  dot: true,
  dotColor: 'blue',
  label: 'Soon'
})

const dotColorClass = computed(() => {
  switch (props.dotColor) {
    case 'green': return 'bg-green-500'
    case 'pink': return 'bg-pink-500'
    case 'amber': return 'bg-amber-500'
    default: return 'bg-blue-500'
  }
})

const dotGlowClass = computed(() => {
  switch (props.dotColor) {
    case 'green': return 'bg-green-400'
    case 'pink': return 'bg-pink-400'
    case 'amber': return 'bg-amber-400'
    default: return 'bg-blue-400'
  }
})
</script>

<style scoped>
</style>


