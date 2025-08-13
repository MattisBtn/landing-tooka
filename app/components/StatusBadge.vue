<template>
    <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg border" role="status"
        :aria-label="`Statut: ${statusText}`" :class="[
            // Background - gradient dark, solid gray light
            'bg-gray-100 dark:bg-[linear-gradient(259deg,#242424,#101010)]',
            // Border
            'border-gray-200/20 dark:border-gray-700/30',
            // Size variants
            sizeClasses[size],
            // Custom classes
            customClass
        ]">
        <!-- Pulsing diode -->
        <motion.div class="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500" aria-hidden="true" :animate="{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1, 0.8]
        }" :transition="{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity
            }" />

        <!-- Text content -->
        <div class="flex-shrink-0">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v';

interface Props {
    /** Size variant */
    size?: 'sm' | 'md' | 'lg'
    /** Custom CSS classes */
    customClass?: string
    /** Status text for accessibility */
    statusText?: string
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    customClass: '',
    statusText: 'En cours'
})

// Size classes mapping
const sizeClasses = {
    sm: 'text-xs px-2 py-1 gap-2',
    md: 'text-sm px-3 py-1.5 gap-2.5',
    lg: 'text-base px-4 py-2 gap-3'
}

const { statusText } = toRefs(props)
</script>
