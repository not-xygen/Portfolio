<script setup lang="ts">
  interface Props {
    class?: string;
  }

  const props = defineProps<Props>();
</script>
<template>
  <section 
    class="grid grid-cols-12"
    :class="props.class">
    <slot />
  </section>
</template>