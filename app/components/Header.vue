<script setup lang="ts">
import { navigationMenuTriggerStyle } from './ui/navigation-menu';

const menu = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];
</script>
<template>
  <header class="sticky top-0 grid grid-cols-12 items-center border-b">
    <section class="col-start-3 col-span-8 flex justify-between border-l border-r border-dashed px-6 py-4">
      <div>
        <h1 class="logo-title font-black text-2xl">Dhaffa Agus</h1>
      </div>
      <div class="flex gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="value in menu" :key="value.href">
              <NavigationMenuLink :href="value.href" :class="navigationMenuTriggerStyle">
                {{ value.title }}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ToggleDarkMode />
      </div>
    </section>
  </header>
</template>