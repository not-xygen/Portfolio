<script setup lang="ts">
import { profile } from "~/data/profile";

const { t } = useI18n();
</script>

<template>
  <AppContentSide />
  <AppContentMain class="overflow-hidden">
    <div class="absolute inset-0 -z-10">
      <ClientOnly>
        <Tetris
          class="h-full w-full mask-[radial-gradient(500px_circle_at_70%_40%,#ef4444,transparent)]"
          :base="15"
          square-color="#ef4444"
        />
      </ClientOnly>
    </div>
    <div class="grid items-center gap-6 px-6 py-10 md:grid-cols-[1.5fr_1fr] md:px-12 md:py-14">
      <div>
        <p class="font-mono-data text-sm text-red-700 dark:text-red-400">{{ t("hero.role") }}</p>
        <h1 class="mt-3 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          {{ profile.name }}
        </h1>
        <p class="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted-foreground text-pretty">
          {{ t("hero.lead") }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <Button as-child>
            <a href="#contact"><Icon name="lucide:mail" /> {{ t("hero.contact") }}</a>
          </Button>
          <Button as-child variant="outline">
            <a href="#projects">{{ t("hero.projects") }}</a>
          </Button>
        </div>
      </div>
      <NuxtImg
        src="/hero-sprite.png"
        :alt="`Portrait of ${profile.name}`"
        width="360"
        height="360"
        class="mx-auto w-3/4 max-w-xs [image-rendering:pixelated] md:w-full mask-[linear-gradient(to_bottom,black_70%,transparent)]"
        fetchpriority="high"
      />
    </div>
  </AppContentMain>
  <AppContentSide />
</template>
