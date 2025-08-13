<template>
    <!-- Custom Cursor -->
    <motion.div
        class="fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-indigo-500/50 bg-indigo-500/20 backdrop-blur-sm"
        :style="{
            x: cursorXSpring,
            y: cursorYSpring,
            scale: cursorScaleSpring,
        }" :initial="{ scale: 0 }" :animate="{ scale: 1 }" :transition="{ duration: 0.3 }" />

    <!-- Cursor Trail -->
    <motion.div class="fixed pointer-events-none z-40 w-2 h-2 rounded-full bg-indigo-400/30" :style="{
        x: trailXSpring,
        y: trailYSpring,
    }" />
</template>

<script lang="ts" setup>
import { motion, useSpring } from 'motion-v';

interface Props {
    cursorX: MotionValue<number>
    cursorY: MotionValue<number>
    cursorScale: MotionValue<number>
}

const props = defineProps<Props>()

const springConfig = { damping: 25, stiffness: 700 }
const trailConfig = { damping: 50, stiffness: 200 }

const cursorXSpring = useSpring(props.cursorX, springConfig)
const cursorYSpring = useSpring(props.cursorY, springConfig)
const cursorScaleSpring = useSpring(props.cursorScale, springConfig)
const trailXSpring = useSpring(props.cursorX, trailConfig)
const trailYSpring = useSpring(props.cursorY, trailConfig)
</script>
