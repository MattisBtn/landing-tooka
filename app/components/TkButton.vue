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
      gapClass,
      block ? 'w-full' : '',
      $attrs.class as string || ''
    ]"
    v-bind="cleanedAttrs"
  >
    <span class="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none"></span>
    <span v-if="variant === 'primary'" class="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-40 rounded-full bg-white/20 blur-2xl pointer-events-none"></span>
    <template v-if="iconOnly">
      <span class="inline-flex">
        <slot name="icon">
          <Icon v-if="icon" :name="icon" :class="iconClass" aria-hidden="true" />
        </slot>
      </span>
    </template>
    <template v-else>
      <span v-if="showLeading" class="inline-flex">
        <slot name="leading">
          <Icon v-if="icon && iconPosition === 'leading'" :name="icon" :class="iconClass" aria-hidden="true" />
        </slot>
      </span>
      <span><slot /></span>
      <span v-if="showTrailing" class="inline-flex">
        <slot name="trailing">
          <Icon v-if="icon && iconPosition === 'trailing'" :name="icon" :class="iconClass" aria-hidden="true" />
        </slot>
      </span>
    </template>
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
  iconOnly?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  block: false,
  type: 'button',
  iconPosition: 'trailing',
  disabled: false,
  iconOnly: false
})

const tag = computed(() => props.to ? 'NuxtLink' : (props.href ? 'a' : 'button'))

const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-2xl transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden select-none'

const sizeClass = computed(() => {
  if (props.iconOnly) {
    switch (props.size) {
      case 'sm':
        return 'h-9 w-9 p-0'
      case 'lg':
        return 'h-14 w-14 p-0'
      default:
        return 'h-11 w-11 p-0'
    }
  }
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

const slots = useSlots()

const showLeading = computed(() => !props.iconOnly && (!!slots.leading || (!!props.icon && props.iconPosition === 'leading')))
const showTrailing = computed(() => !props.iconOnly && (!!slots.trailing || (!!props.icon && props.iconPosition === 'trailing')))

const gapClass = computed(() => props.iconOnly ? 'gap-0' : 'gap-2')

const iconClass = computed(() => {
  switch (props.size) {
    case 'lg':
      return 'h-5 w-5'
    case 'sm':
      return 'h-4 w-4'
    default:
      return 'h-4 w-4'
  }
})
</script>

<style scoped>
</style>


