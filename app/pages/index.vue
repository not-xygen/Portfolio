<script setup lang="ts">
import { profile } from "~/data/profile";

const { t } = useI18n();

useSeoMeta({
  title: `${profile.name} — Software Engineer`,
  description: () => t("hero.lead"),
});
</script>

<template>
  <AppContainer id="top">
    <HomeHero />
    <HomeAbout />
    <HomeExperience />
    <HomeStack />
    <HomeProjects />
    <HomeContact />
  </AppContainer>
</template>
