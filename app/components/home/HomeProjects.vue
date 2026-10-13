<script setup lang="ts">
import { projectGroups } from "~/data/projects";

const { t } = useI18n();
const link = "inline-flex items-center gap-1 underline underline-offset-4 hover:text-red-700 dark:hover:text-red-400";
</script>

<template>
  <HomeSection id="projects" :title="t('projects.title')">
    <TerminalWindow title="fish — ~ · projects" path="/projects/">
      <div v-for="(g, i) in projectGroups" :key="g.path" class="term-line" :style="{ '--i': i }">
        <TerminalPrompt>ls {{ g.path }}</TerminalPrompt>
        <ul class="mt-3 divide-y border-y">
          <li v-for="proj in g.items" :key="proj.id" class="py-3">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p class="font-body text-base font-medium">{{ proj.name }}</p>
              <p class="flex gap-4 text-xs">
                <a v-if="proj.url" :href="proj.url" target="_blank" rel="noopener noreferrer" :class="link">
                  <Icon name="lucide:arrow-up-right" class="size-3.5" />{{ t("projects.visit") }}
                </a>
                <a v-if="proj.repo" :href="proj.repo" target="_blank" rel="noopener noreferrer" :class="link">
                  <Icon name="simple-icons:github" class="size-3.5" />{{ t("projects.repo") }}
                </a>
              </p>
            </div>
            <p class="font-body mt-1 max-w-[70ch] text-sm leading-6 text-muted-foreground">
              {{ t(`projects.items.${proj.id}`) }}
            </p>
            <div v-if="proj.tags.length" class="mt-2 flex flex-wrap gap-1.5">
              <Badge v-for="tag in proj.tags" :key="tag" variant="secondary">{{ tag }}</Badge>
            </div>
          </li>
        </ul>
      </div>
      <p class="term-line text-muted-foreground" :style="{ '--i': projectGroups.length }"># {{ t("projects.next") }}</p>
    </TerminalWindow>
  </HomeSection>
</template>
