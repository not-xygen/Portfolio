<script setup lang="ts">
defineProps<{ id: string; title: string; intro?: string }>();
</script>

<template>
  <AppContentSide />
  <AppContentMain :id="id" class="px-6 py-10 md:px-12 md:py-12">
    <h2 class="heading-3" :class="{ 'mb-4': !intro }">{{ title }}</h2>
    <p v-if="intro" class="mt-1.5 mb-4 max-w-[52ch] text-muted-foreground">{{ intro }}</p>
    <slot />
  </AppContentMain>
  <AppContentSide />
</template>
