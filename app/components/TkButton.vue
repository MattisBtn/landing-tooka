<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled"
    :class="[
      baseClasses,
      sizeClass,
      variantClass,
      block ? 'w-full' : '',
      $attrs.class as string || ''
    ]"
    v-bind="cleanedAttrs"
  >
    <span class="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none"></span>
    <span v-if="variant === 'primary'" class="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-40 rounded-full bg-white/20 blur-2xl pointer-events-none"></span>

    <Icon v-if="icon && iconPosition === 'leading'" :name="icon" class="h-4 w-4" aria-hidden="true" />
    <span><slot /></span>
    <Icon v-if="icon && iconPosition === 'trailing'" :name="icon" class="h-4 w-4" aria-hidden="true" />
  </component>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  variant?: ButtonVariant
  size?: ButtonSize
  block?: boolean
  to?: RouteLocationRaw
  href?: string
  type?: 'button' | 'submit' | 'reset'
  icon?: string
  iconPosition?: 'leading' | 'trailing'
  disabled?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  block: false,
  type: 'button',
  iconPosition: 'trailing',
  disabled: false
})

const tag = computed(() => props.to ? 'NuxtLink' : (props.href ? 'a' : 'button'))

const baseClasses = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden select-none'

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 px-4 text-sm'
    case 'lg':
      return 'h-14 px-7 text-base'
    default:
      return 'h-11 px-5 text-sm'
  }
})

const variantClass = computed(() => {
  if (props.variant === 'secondary') {
    return [
      'text-slate-900',
      'bg-white/70 backdrop-blur-2xl',
      'ring-1 ring-white/60',
      'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),_0_8px_16px_-4px_rgba(0,0,0,0.15)]',
      'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/60 before:to-transparent before:pointer-events-none',
      'hover:bg-white/80 active:bg-white',
    ].join(' ')
  }
  return 'text-white bg-gradient-to-b from-slate-900 to-black hover:from-slate-800 hover:to-black active:from-black active:to-black shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4)]'
})

const cleanedAttrs = computed(() => {
  const { class: _c, ...rest } = (useAttrs() as Record<string, any>)
  return rest
})
</script>

<style scoped>
</style>


