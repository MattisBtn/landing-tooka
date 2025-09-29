<template>
  <label
    :class="[
      wrapperClasses,
      sizeClass,
      block ? 'w-full' : '',
      $attrs.class as string || ''
    ]"
  >
    <span class="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none"></span>
    <input
      v-bind="cleanedAttrs"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="peer sr-only"
      @change="onChange"
    />
    <span :class="boxClasses" aria-hidden="true">
      <Icon v-if="modelValue" name="i-heroicons-check-20-solid" :class="iconClass" />
    </span>
    <span class="truncate"><slot /></span>
  </label>
</template>

<script lang="ts" setup>
type CheckboxSize = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  modelValue?: boolean
  size?: CheckboxSize
  block?: boolean
  disabled?: boolean
}>(), {
  modelValue: false,
  size: 'md',
  block: false,
  disabled: false
})

const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

const wrapperClasses = 'relative inline-flex items-center gap-3 rounded-2xl bg-white/70 backdrop-blur-2xl ring-1 ring-white/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),_0_8px_16px_-4px_rgba(0,0,0,0.15)] text-slate-900 px-4'

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 text-sm'
    case 'lg':
      return 'h-14 text-base'
    default:
      return 'h-11 text-sm'
  }
})

const boxClasses = computed(() => {
  return [
    'inline-flex items-center justify-center rounded-xl transition select-none shrink-0',
    props.disabled ? 'opacity-60' : '',
    props.size === 'sm' ? 'h-5 w-5' : props.size === 'lg' ? 'h-6 w-6' : 'h-5 w-5',
    'bg-gradient-to-b from-slate-900 to-black text-white peer-focus-visible:ring-2 peer-focus-visible:ring-black/20'
  ].join(' ')
})

const iconClass = computed(() => props.size === 'lg' ? 'h-4 w-4' : 'h-4 w-4')

const cleanedAttrs = computed(() => {
  const { class: _c, ...rest } = (useAttrs() as Record<string, any>)
  return rest
})

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
</style>


