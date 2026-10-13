<script setup lang="ts">
import { profile } from "~/data/profile";

const { t } = useI18n();
const link = "underline underline-offset-4 hover:text-red-700 dark:hover:text-red-400";
</script>

<template>
  <HomeSection id="contact" :title="t('contact.title')" :intro="t('contact.body')">
    <TerminalWindow title="fish — ~ · contact" path="/contact/">
      <div class="term-line space-y-2" :style="{ '--i': 0 }">
        <TerminalPrompt>contact --email</TerminalPrompt>
        <p><a :href="`mailto:${profile.email}`" :class="link">{{ profile.email }}</a></p>
        <TerminalPrompt class="pt-2">contact --linkedin</TerminalPrompt>
        <p><a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" :class="link">{{ profile.linkedinLabel }}</a></p>
      </div>
      <div class="term-line flex flex-wrap gap-3" :style="{ '--i': 1 }">
        <Button as-child>
          <a :href="`mailto:${profile.email}`"><Icon name="lucide:mail" /> {{ t("contact.email") }}</a>
        </Button>
        <Button as-child variant="outline">
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer"><Icon name="simple-icons:linkedin" /> {{ t("contact.cta") }}</a>
        </Button>
      </div>
    </TerminalWindow>
  </HomeSection>
</template>
