<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <HomeSection id="about" :title="t('about.title')">
    <TerminalWindow title="fish — ~ · about" path="/about/">
      <div class="term-line" :style="{ '--i': 0 }">
        <TerminalPrompt>whoami</TerminalPrompt>
        <p class="font-body mt-3 max-w-[62ch] text-base leading-7 text-muted-foreground text-pretty">
          {{ t("about.body") }}
        </p>
      </div>
      <div class="term-line" :style="{ '--i': 1 }">
        <TerminalPrompt>cat education.txt</TerminalPrompt>
        <p class="font-body mt-3 text-base font-medium">{{ t("about.degree") }}</p>
        <p class="font-body text-base text-muted-foreground">{{ t("about.school") }}</p>
        <p class="mt-1 text-muted-foreground">{{ t("about.period") }} · {{ t("about.gpa") }}</p>
      </div>
    </TerminalWindow>
  </HomeSection>
</template>
