<script setup lang="ts">
const { t, locale, setLocale } = useI18n();

const menu = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "stack", href: "#stack" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];
</script>
<template>
  <header
    class="sticky top-0 grid grid-cols-12 items-center border-b bg-background/90 backdrop-blur z-50"
  >
    <section
      class="col-start-0 md:col-start-1 lg:col-start-3 col-span-full md:col-span-10 lg:col-span-8 flex items-center justify-between border-l border-r border-dashed px-6 py-3"
    >
      <NuxtLink to="#top" class="logo-title font-black text-2xl">
        Dhaffa Agus
      </NuxtLink>
      <div class="flex items-center gap-1">
        <nav class="hidden sm:flex items-center" aria-label="Sections">
          <a
            v-for="item in menu"
            :key="item.key"
            :href="item.href"
            class="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {{ t(`nav.${item.key}`) }}
          </a>
        </nav>
        <Button
          variant="outline"
          class="font-mono-data px-2.5 text-xs"
          :aria-label="t('a11y.language')"
          @click="setLocale(locale === 'en' ? 'id' : 'en')"
        >
          {{ locale === "en" ? "ID" : "EN" }}
        </Button>
        <ToggleDarkMode />
      </div>
    </section>
  </header>
</template>
