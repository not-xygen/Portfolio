<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <footer class="grid grid-cols-12 items-center">
    <section
      class="col-start-0 md:col-start-1 lg:col-start-3 col-span-full md:col-span-10 lg:col-span-8 flex flex-wrap justify-between gap-2 border-l border-r px-6 py-3 text-sm text-muted-foreground"
    >
      <p>&copy; {{ new Date().getFullYear() }} Dhaffa Agus. {{ t("footer.rights") }}</p>
      <p>{{ t("footer.built") }}</p>
    </section>
  </footer>
</template>
