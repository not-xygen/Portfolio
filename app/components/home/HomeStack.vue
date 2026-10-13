<script setup lang="ts">
import { stackGroups } from "~/data/stack";

const { t } = useI18n();
</script>

<template>
  <HomeSection id="stack" :title="t('stack.title')" :intro="t('stack.intro')">
    <TerminalWindow title="fish — ~ · stack" path="/stack/">
      <div v-for="(g, i) in stackGroups" :key="g.id" class="term-line" :style="{ '--i': i }">
        <TerminalPrompt>stack --{{ g.id }}</TerminalPrompt>
        <ul class="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3 md:grid-cols-4">
          <li v-for="item in g.items" :key="item.name" class="flex items-center gap-2.5">
            <Icon :name="item.icon" class="size-4 shrink-0 text-red-700 dark:text-red-400" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <p class="term-line" :style="{ '--i': stackGroups.length }">
        <span class="text-red-700 dark:text-red-400">$</span>
        <span class="term-cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-foreground" />
      </p>
    </TerminalWindow>
  </HomeSection>
</template>
