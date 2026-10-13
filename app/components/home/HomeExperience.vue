<script setup lang="ts">
import { jobs } from "~/data/experience";

const { t } = useI18n();
const { bars, years } = buildTimeline(jobs);
</script>

<template>
  <HomeSection id="experience" :title="t('experience.title')">
    <TerminalWindow title="fish — ~ · career" path="/career/">
      <div class="term-line" :style="{ '--i': 0 }">
        <TerminalPrompt>career --timeline</TerminalPrompt>
        <div class="mt-3" aria-hidden="true">
          <div v-for="(b, i) in bars" :key="b.job.id" class="flex items-center gap-3 py-1">
            <span class="w-24 shrink-0 truncate text-xs text-muted-foreground md:w-32">{{ b.job.short }}</span>
            <div class="relative h-4 flex-1 border-l">
              <span
                v-for="y in years"
                :key="y.year"
                class="absolute inset-y-0 border-l border-dashed"
                :style="{ left: y.left }"
              />
              <span
                class="term-bar absolute inset-y-0.5 rounded-sm"
                :class="b.job.to ? 'bg-red-500/45' : 'bg-red-500'"
                :style="{ left: b.left, width: b.width, '--i': i }"
              />
            </div>
          </div>
          <div class="flex items-center gap-3 pt-1">
            <span class="w-24 shrink-0 md:w-32" />
            <div class="relative h-4 flex-1 text-xs text-muted-foreground">
              <span
                v-for="y in years"
                :key="y.year"
                class="absolute -translate-x-1/2"
                :style="{ left: y.left }"
              >{{ y.year }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="term-line" :style="{ '--i': 1 }">
        <TerminalPrompt>career --log</TerminalPrompt>
        <ol class="mt-3 ml-1.5 border-l">
          <li v-for="job in jobs" :key="job.id" class="relative pb-4 pl-6 last:pb-0">
            <span
              class="absolute top-1.5 -left-[5px] size-2.5 rounded-full border"
              :class="job.to ? 'border-muted-foreground bg-stone-50 dark:bg-stone-950' : 'border-red-500 bg-red-500'"
            />
            <p class="text-xs text-muted-foreground">
              {{ formatMonth(job.from) }} – {{ job.to ? formatMonth(job.to) : t("experience.present") }}
            </p>
            <p class="font-body mt-1 text-base font-medium">{{ job.role }}</p>
            <p class="font-body text-sm text-muted-foreground">
              {{ job.company }}<template v-if="job.place"> · {{ job.place }}</template>
            </p>
            <ul class="font-body mt-2 max-w-[62ch] list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground marker:text-red-500">
              <li v-for="n in job.bullets" :key="n">{{ t(`experience.${job.id}[${n - 1}]`) }}</li>
            </ul>
          </li>
        </ol>
      </div>
    </TerminalWindow>
  </HomeSection>
</template>
