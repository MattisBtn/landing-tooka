<template>
  <header ref="headerRef" id="site-header" class="fixed top-4 left-4 right-4 z-50" role="banner">
    <div class="mx-auto max-w-4xl">
      <div class="relative">
        <div class="backdrop-blur-2xl backdrop-saturate-150 bg-white/60 rounded-2xl shadow-2xl shadow-black/20 ring-1 ring-white/60 relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:from-white/70 before:via-white/25 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/50 after:pointer-events-none">
          <span class="pointer-events-none absolute -top-24 left-1/2 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-white/40 blur-3xl"></span>
          <span class="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-3/4 -translate-x-1/2 rounded-full bg-black/10 blur-2xl"></span>
          <div class="flex items-center pl-6 pr-3 py-2 w-full justify-between">
            <div class="flex-shrink-0" style="width: 120px;">
              <NuxtLink to="/" aria-label="Retour à l'accueil Tooka">
                <NuxtImg src="/images/logo-light.png" alt="Logo Tooka" class="h-8 w-auto" />
              </NuxtLink>
            </div>

            <nav class="hidden md:flex items-center justify-center flex-1" aria-label="Navigation principale" role="navigation">
              <ul class="flex items-center space-x-8">
                <li>
                  <a
                    href="/#problems"
                    :aria-current="linkIsActive('problems') ? 'page' : undefined"
                    :class="[baseLinkClasses, linkIsActive('problems') ? activeLinkClasses : hoverLinkClasses]"
                  >
                    Problèmes
                  </a>
                </li>
                <li>
                  <a
                    href="/#features"
                    :aria-current="linkIsActive('features') ? 'page' : undefined"
                    :class="[baseLinkClasses, linkIsActive('features') ? activeLinkClasses : hoverLinkClasses]"
                  >
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    :aria-current="linkIsActive('pricing') ? 'page' : undefined"
                    :class="[baseLinkClasses, linkIsActive('pricing') ? activeLinkClasses : hoverLinkClasses]"
                  >
                    Tarifs
                  </a>
                </li>
                <li>
                  <a
                    href="/#faq"
                    :aria-current="linkIsActive('faq') ? 'page' : undefined"
                    :class="[baseLinkClasses, linkIsActive('faq') ? activeLinkClasses : hoverLinkClasses]"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>

            <div class="hidden md:flex items-center justify-end flex-shrink-0" style="width: 120px;">
              <TkButton v-if="showHeaderCta" href="https://app.tooka.io/register" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" icon="i-heroicons-arrow-right" aria-label="Commencer" @click="handleAppAccessCta('header')">Commencer</TkButton>
            </div>

            <div class="md:hidden flex items-center justify-end flex-shrink-0" style="width: 120px;">
              <TkButton
                variant="primary"
                size="md"
                type="button"
                :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
                aria-haspopup="true"
                aria-controls="mobile-nav"
                :aria-label="mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
                @click="toggleMobileMenu"
                icon-only
              >
              <template #icon>
                <Icon name="i-heroicons-bars-3" class="w-4 h-4" aria-hidden="true" />
            </template>
              </TkButton>
            </div>
          </div>
        </div>

        <div v-show="showMobileMenu" class="md:hidden absolute top-full left-0 right-0 mt-2 z-40">
          <div 
            v-motion="'mobileMenu'"
            :initial="{
              opacity: 0,
              scale: 0.95,
              y: -10
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
              }
            }"
            :leave="{
              opacity: 0,
              scale: 0.95,
              y: -10,
              transition: {
                duration: 200,
                onComplete: onLeaveComplete
              }
            }"
            class="backdrop-blur-2xl backdrop-saturate-150 bg-white/85 rounded-2xl shadow-2xl shadow-black/10 relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/50 before:via-white/20 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/50 after:pointer-events-none"
          >
            <nav id="mobile-nav" class="flex flex-col p-6 space-y-3" aria-label="Navigation mobile" role="navigation">
              <a
                href="/#problems"
                @click="closeMobileMenu"
                :aria-current="linkIsActive('problems') ? 'page' : undefined"
                :class="[baseMobileLinkClasses, linkIsActive('problems') ? activeMobileLinkClasses : hoverMobileLinkClasses]"
              >Problèmes</a>
              <a
                href="/#features"
                @click="closeMobileMenu"
                :aria-current="linkIsActive('features') ? 'page' : undefined"
                :class="[baseMobileLinkClasses, linkIsActive('features') ? activeMobileLinkClasses : hoverMobileLinkClasses]"
              >Fonctionnalités</a>
              <a
                href="/#pricing"
                @click="closeMobileMenu"
                :aria-current="linkIsActive('pricing') ? 'page' : undefined"
                :class="[baseMobileLinkClasses, linkIsActive('pricing') ? activeMobileLinkClasses : hoverMobileLinkClasses]"
              >Tarifs</a>
              <a
                href="/#faq"
                @click="closeMobileMenu"
                :aria-current="linkIsActive('faq') ? 'page' : undefined"
                :class="[baseMobileLinkClasses, linkIsActive('faq') ? activeMobileLinkClasses : hoverMobileLinkClasses]"
              >FAQ</a>
              <div v-if="showHeaderCta" class="flex flex-col space-y-3 pt-4 border-t border-white/30">
                <TkButton href="https://app.tooka.io/register" target="_blank" rel="noopener noreferrer" variant="primary" size="md" block icon="i-heroicons-arrow-right" class="justify-start" aria-label="Commencer" @click="handleAppAccessCta('header')">
                  Commencer
                </TkButton>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useMotions } from '@vueuse/motion'

const mobileMenuOpen = ref(false)
const headerRef = ref<HTMLElement>()
const isClosing = ref(false)
const showMobileMenu = computed(() => mobileMenuOpen.value || isClosing.value)

const showHeaderCta = ref(false)

const motions = useMotions() as any

const { activeSectionId } = useActiveSection(['problems', 'features', 'pricing', 'faq'])

const baseLinkClasses = 'text-sm font-medium px-2 py-1 rounded-lg transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20'
const hoverLinkClasses = 'text-slate-700 hover:text-slate-900 hover:bg-white/60 hover:backdrop-blur-sm hover:ring-1 hover:ring-white/40'
const activeLinkClasses = 'text-slate-900 bg-white/70 backdrop-blur-sm ring-1 ring-white/50'

const baseMobileLinkClasses = 'font-medium py-2 px-3 rounded-lg transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20'
const hoverMobileLinkClasses = 'text-slate-700 hover:text-slate-900 hover:bg-white/70 hover:backdrop-blur-sm hover:ring-1 hover:ring-white/40'
const activeMobileLinkClasses = 'text-slate-900 bg-white/70 backdrop-blur-sm ring-1 ring-white/50'

const { handleAppAccessCta } = useAppCta()

function linkIsActive(id: string) {
  return activeSectionId.value === id
}

function onLeaveComplete() {
  isClosing.value = false
}

function openMobileMenu() {
  mobileMenuOpen.value = true
  nextTick(() => {
    const inst = motions?.mobileMenu
    if (inst) inst.variant.value = 'enter'
  })
}

function closeMobileMenu() {
  if (!showMobileMenu.value) return
  isClosing.value = true
  mobileMenuOpen.value = false
  nextTick(() => {
    const inst = motions?.mobileMenu
    if (inst) inst.variant.value = 'leave'
  })
}

function toggleMobileMenu() {
  if (mobileMenuOpen.value) closeMobileMenu()
  else openMobileMenu()
}

onClickOutside(headerRef, () => {
  if (mobileMenuOpen.value) closeMobileMenu()
})

</script>


