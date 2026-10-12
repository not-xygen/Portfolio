<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

defineProps<{ title: string; path: string }>();

const el = ref<HTMLElement | null>(null);
const seen = ref(false);
useIntersectionObserver(
  el,
  ([e]) => {
    if (e?.isIntersecting) seen.value = true;
  },
  { threshold: 0.15 },
);
</script>

<template>
  <div
    ref="el"
    class="term font-mono-data overflow-hidden rounded-lg border bg-stone-50 text-sm dark:bg-stone-950"
    :class="{ 'term-on': seen }"
  >
    <div
      class="flex items-center justify-between border-b px-4 py-2 text-xs text-muted-foreground"
    >
      <span>{{ title }}</span>
      <span>{{ path }}</span>
    </div>
    <div class="space-y-4 p-4 md:p-5">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:slotted(.term-line) {
  opacity: 0;
  transform: translateY(6px);
}
.term-on :slotted(.term-line) {
  animation: term-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--i, 0) * 140ms);
}
:slotted(.term-bar) {
  transform: scaleX(0);
  transform-origin: left;
}
.term-on :slotted(.term-bar) {
  animation: bar-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(0.3s + var(--i, 0) * 120ms);
}
:slotted(.term-cursor) {
  animation: blink 1.1s steps(1) infinite;
}
@keyframes term-in {
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes bar-in {
  to {
    transform: none;
  }
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  :slotted(.term-line),
  :slotted(.term-bar) {
    opacity: 1;
    transform: none;
    animation: none !important;
  }
  :slotted(.term-cursor) {
    animation: none;
  }
}
</style>
