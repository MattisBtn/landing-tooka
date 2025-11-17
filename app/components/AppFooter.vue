<template>
  <footer class="mx-auto max-w-6xl mt-16">
    <div class="relative rounded-t-2xl overflow-hidden">
      <div class="bg-black text-white rounded-t-2xl p-6 md:p-8">
        <div class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div class="md:col-span-6">
              <NuxtLink to="/" aria-label="Retour à l'accueil Tooka">
                <NuxtImg src="/images/logo-dark.png" alt="Logo Tooka" class="h-8 w-auto" />
              </NuxtLink>
              <p class="mt-4 text-sm/6 text-white/70 max-w-md">
                La plateforme qui accompagne les créatifs du brief initial à la livraison finale.
              </p>
            </div>

            <nav class="md:col-span-3" aria-label="Navigation">
              <h3 class="text-xs uppercase tracking-wider text-white/50 mb-3">Menu</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#problems" class="hover:text-white/90">Problèmes</a></li>
                <li><a href="#features" class="hover:text-white/90">Fonctionnalités</a></li>
                <li><a href="#pricing" class="hover:text-white/90">Tarifs</a></li>
                <li><a href="#faq" class="hover:text-white/90">FAQ</a></li>
              </ul>
            </nav>

            <nav class="md:col-span-3" aria-label="Légal">
              <h3 class="text-xs uppercase tracking-wider text-white/50 mb-3">Légal</h3>
              <ul class="space-y-2 text-sm">
                <li><NuxtLink to="/legal/mentions" class="hover:text-white/90">Mentions légales</NuxtLink></li>
                <li><NuxtLink to="/legal/cookies" class="hover:text-white/90">Cookies</NuxtLink></li>
              </ul>
            </nav>
          </div>

          <div class="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p class="text-xs text-white/60">© {{ currentYear }} Tooka. Tous droits réservés.</p>
            <div>
              <TkButton
                variant="secondary"
                size="sm"
                aria-label="Suivez-nous sur Instagram"
                href="https://instagram.com/tooka.io"
                target="_blank"
                rel="noopener noreferrer"
                icon-only
              >
                <template #icon>
                  <Icon name="i-simple-icons-instagram" class="h-4 w-4" />
                </template>
              </TkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>


