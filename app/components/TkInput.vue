<template>
  <div
    :class="[
      baseClasses,
      sizeClass,
      block ? 'w-full' : '',
      groupRadiusClass,
      seamClass,
      $attrs.class as string || ''
    ]"
  >
    <span class="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none"></span>
    <input
      ref="inputEl"
      v-bind="cleanedAttrs"
      :type="type"
      :name="name"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="modelValue"
      :aria-label="ariaLabel"
      class="w-full bg-transparent outline-none border-none placeholder-slate-400 text-current"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts" setup>
type InputSize = 'sm' | 'md' | 'lg'
type GroupPosition = 'single' | 'start' | 'middle' | 'end' 

const props = withDefaults(defineProps<{
  modelValue?: string
  type?: string
  size?: InputSize
  block?: boolean
  disabled?: boolean
  placeholder?: string
  name?: string
  autocomplete?: string
  inputmode?: 'text' | 'search' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal'
  ariaLabel?: string
  groupPosition?: GroupPosition
}>(), {
  modelValue: '',
  type: 'text',
  size: 'md',
  block: false,
  disabled: false,
  placeholder: '',
  name: undefined,
  autocomplete: undefined,
  inputmode: undefined,
  ariaLabel: undefined,
  groupPosition: 'single'
})

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const baseClasses = 'relative inline-flex items-center rounded-2xl bg-white/70 backdrop-blur-2xl ring-1 ring-white/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),_0_8px_16px_-4px_rgba(0,0,0,0.15)] focus-within:ring-2 focus-within:ring-black/20 text-slate-900'

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 px-4 text-sm'
    case 'lg':
      return 'h-14 px-5 text-base'
    default:
      return 'h-11 px-4 text-sm'
  }
})

const groupRadiusClass = computed(() => {
  switch (props.groupPosition) {
    case 'start':
      return 'sm:rounded-r-none'
    case 'end':
      return 'sm:rounded-l-none'
    case 'middle':
      return 'sm:rounded-none'
    default:
      return ''
  }
})

const seamClass = computed(() => {
  switch (props.groupPosition) {
    case 'start':
    case 'middle':
      return 'sm:-mr-px'
    case 'end':
      return 'sm:-ml-px'
    default:
      return ''
  }
})

const cleanedAttrs = computed(() => {
  const { class: _c, ...rest } = (useAttrs() as Record<string, any>)
  return rest
})

const inputEl = ref<HTMLInputElement>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
</style>


