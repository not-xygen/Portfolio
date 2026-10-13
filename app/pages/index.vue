<script setup lang="ts">
const { t } = useI18n();

const linkedin = "https://www.linkedin.com/in/dhaffaagus/";
const email = "dhaffaagus09@gmail.com";

const jobs = [
  { id: "bjp", short: "BJP", company: "PT. Bersinar Jaya Perkasa", role: "IT Support Engineer | Software Engineer", from: "2026-04", to: null, place: "Balikpapan", n: 1 },
  { id: "erp", short: "ERP Nusantara", company: "ERP Nusantara", role: "Full-Stack Developer", from: "2025-08", to: "2026-04", place: "Balikpapan", n: 3 },
  { id: "xploratech", short: "Xploratech", company: "Xploratech", role: "Founder", from: "2023-11", to: null, place: "Balikpapan", n: 3 },
  { id: "bangkit", short: "Bangkit", company: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka", role: "Cloud Computing Cohort", from: "2023-02", to: "2023-07", place: "", n: 2 },
  { id: "kramakata", short: "Kramakata", company: "Kramakata", role: "Software Engineer", from: "2022-08", to: null, place: "Jakarta", n: 3 },
];

type Project = { id: string; name: string; tags: string[]; repo?: string; url?: string };
const openSource: Project[] = [
  { id: "water", name: "Water Network Simulation", tags: ["React", "Vite", "TypeScript"], repo: "https://github.com/not-xygen/Water-Network-Simulation-Web-App", url: "https://water-network-simulation.netlify.app" },
  { id: "simu", name: "SIMU-API", tags: ["Rust", "API"], repo: "https://github.com/not-xygen/API-SIMU" },
];
const client: Project[] = [
  { id: "noble", name: "Noble Property Asia", tags: ["Dashboard", "Image upload", "PDF export", "Data logs", "Advanced filters"], url: "https://nobleasiaid.com" },
  { id: "kramakata", name: "Kramakata", tags: ["Animated Site", "CMS", "Multilingual"], url: "https://kramakata.com" },
  { id: "sentry", name: "Sentry Security", tags: ["CMS", "Multilingual", "Map", "Contact Form"], url: "https://sentrysecurity.co.id" },
  { id: "fed", name: "FED Insight", tags: ["CMS", "Multilingual"], url: "https://www.fed-insight.com" },
  { id: "asmr", name: "ASMR Retail", tags: ["POS", "Stock", "Invoices", "PDF export"] },
];
const projectGroups = [
  { cmd: "~/projects/open-source", items: openSource },
  { cmd: "~/projects/client-work", items: client },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmt = (ym: string) => `${MONTHS[Number(ym.slice(5)) - 1]} ${ym.slice(0, 4)}`;

// Timeline geometry in months since Aug 2022 (first role) up to now.
const idx = (ym: string) => (Number(ym.slice(0, 4)) - 2022) * 12 + Number(ym.slice(5)) - 8;
const now = new Date();
const nowIdx = (now.getFullYear() - 2022) * 12 + now.getMonth() + 1 - 8;
const pct = (i: number) => `${(i / nowIdx) * 100}%`;
const bars = jobs.map((j) => ({
  ...j,
  left: pct(idx(j.from)),
  width: `${(((j.to ? idx(j.to) : nowIdx) - idx(j.from)) / nowIdx) * 100}%`,
}));
const years = [2023, 2024, 2025, 2026]
  .map((y) => ({ y, left: pct((y - 2022) * 12 + 1 - 8) }))
  .filter((x) => parseFloat(x.left) < 98);

const pkg = "lucide:package";
const stack = [
  { group: "languages", items: [["TypeScript", "typescript"], ["JavaScript", "javascript"], ["Rust", "rust"], ["Go", "go"], ["Dart", "dart"], ["HTML", "html5"], ["CSS", "css3"], ["Sass", "sass"]] },
  { group: "frontend", items: [["Vue", "vuedotjs"], ["Nuxt", "nuxtdotjs"], ["React", "react"], ["Next.js", "nextdotjs"], ["Vite", "vite"], ["Tailwind CSS", "tailwindcss"], ["shadcn/ui", "shadcnui"], ["Radix", "radixui"], ["TanStack Query", "reactquery"], ["Zustand", pkg], ["Framer Motion", "framer"]] },
  { group: "backend", items: [["Node.js", "nodedotjs"], ["Express", "express"], ["Hapi", pkg], ["Axum", pkg], ["tRPC", "trpc"], ["Zod", "zod"]] },
  { group: "mobile", items: [["Flutter", "flutter"], ["React Native", "react"], ["Mapbox", "mapbox"]] },
  { group: "databases", items: [["PostgreSQL", "postgresql"], ["MySQL", "mysql"], ["Supabase", "supabase"]] },
  { group: "tools", items: [["Git", "git"], ["GitHub", "github"], ["Docker", "docker"], ["Vitest", "vitest"]] },
].map((g) => ({
  group: g.group,
  items: g.items.map(([name, icon]) => ({ name, icon: icon!.includes(":") ? icon : `simple-icons:${icon}` })),
}));

useSeoMeta({
  title: "Dhaffa Agus — Software Engineer",
  description: () => t("hero.lead"),
});
</script>

<template>
  <AppContainer id="top">
    <!-- Hero -->
    <AppContentSide />
    <AppContentMain class="overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <ClientOnly>
          <Tetris
            class="h-full w-full mask-[radial-gradient(500px_circle_at_70%_40%,#ef4444,transparent)]"
            :base="15"
            square-color="#ef4444"
          />
        </ClientOnly>
      </div>
      <div
        class="grid items-center gap-6 px-6 py-10 md:grid-cols-[1.5fr_1fr] md:px-12 md:py-14"
      >
        <div>
          <p class="font-mono-data text-sm text-red-700 dark:text-red-400">
            {{ t("hero.role") }}
          </p>
          <h2
            class="mt-3 text-5xl font-semibold tracking-tight text-balance sm:text-6xl"
          >
            Dhaffa Agus
          </h2>
          <p
            class="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {{ t("hero.lead") }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <Button as-child>
              <a href="#contact">
                <Icon name="lucide:mail" /> {{ t("hero.contact") }}
              </a>
            </Button>
            <Button as-child variant="outline">
              <a href="#projects">{{ t("hero.projects") }}</a>
            </Button>
          </div>
        </div>
        <NuxtImg
          src="/hero-sprite.png"
          alt="Portrait of Dhaffa Agus"
          width="360"
          height="360"
          class="mx-auto w-3/4 max-w-xs [image-rendering:pixelated] md:w-full mask-[linear-gradient(to_bottom,black_70%,transparent)]"
          fetchpriority="high"
        />
      </div>
    </AppContentMain>
    <AppContentSide />

    <!-- About -->
    <AppContentSide />
    <AppContentMain id="about" class="px-6 py-10 md:px-12 md:py-12">
      <h3 class="heading-3 mb-4">{{ t("about.title") }}</h3>
      <TerminalWindow title="fish — ~ · about" path="/about/">
        <div class="term-line" :style="{ '--i': 0 }">
          <p><span class="text-red-700 dark:text-red-400">$</span> whoami</p>
          <p class="font-body mt-3 max-w-[62ch] text-base leading-7 text-muted-foreground text-pretty">
            {{ t("about.body") }}
          </p>
        </div>
        <div class="term-line" :style="{ '--i': 1 }">
          <p><span class="text-red-700 dark:text-red-400">$</span> cat education.txt</p>
          <p class="font-body mt-3 text-base font-medium">{{ t("about.degree") }}</p>
          <p class="font-body text-base text-muted-foreground">{{ t("about.school") }}</p>
          <p class="mt-1 text-muted-foreground">{{ t("about.period") }} · {{ t("about.gpa") }}</p>
        </div>
      </TerminalWindow>
    </AppContentMain>
    <AppContentSide />

    <!-- Experience -->
    <AppContentSide />
    <AppContentMain id="experience" class="px-6 py-10 md:px-12 md:py-12">
      <h3 class="heading-3 mb-4">{{ t("experience.title") }}</h3>
      <TerminalWindow title="fish — ~ · career" path="/career/">
        <div class="term-line" :style="{ '--i': 0 }">
          <p><span class="text-red-700 dark:text-red-400">$</span> career --timeline</p>
          <div class="mt-3" aria-hidden="true">
            <div
              v-for="(b, i) in bars"
              :key="b.id"
              class="flex items-center gap-3 py-1"
            >
              <span class="w-24 shrink-0 truncate text-xs text-muted-foreground md:w-32">{{ b.short }}</span>
              <div class="relative h-4 flex-1 border-l">
                <span
                  v-for="y in years"
                  :key="y.y"
                  class="absolute inset-y-0 border-l border-dashed"
                  :style="{ left: y.left }"
                />
                <span
                  class="term-bar absolute inset-y-0.5 rounded-sm"
                  :class="b.to ? 'bg-red-500/45' : 'bg-red-500'"
                  :style="{ left: b.left, width: b.width, '--i': i }"
                />
              </div>
            </div>
            <div class="flex items-center gap-3 pt-1">
              <span class="w-24 shrink-0 md:w-32" />
              <div class="relative h-4 flex-1 text-xs text-muted-foreground">
                <span
                  v-for="y in years"
                  :key="y.y"
                  class="absolute -translate-x-1/2"
                  :style="{ left: y.left }"
                >{{ y.y }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="term-line" :style="{ '--i': 1 }">
          <p><span class="text-red-700 dark:text-red-400">$</span> career --log</p>
          <ol class="mt-3 ml-1.5 border-l">
            <li v-for="job in jobs" :key="job.id" class="relative pb-4 pl-6 last:pb-0">
              <span
                class="absolute top-1.5 -left-[5px] size-2.5 rounded-full border"
                :class="job.to ? 'border-muted-foreground bg-stone-50 dark:bg-stone-950' : 'border-red-500 bg-red-500'"
              />
              <p class="text-xs text-muted-foreground">
                {{ fmt(job.from) }} – {{ job.to ? fmt(job.to) : t("experience.present") }}
              </p>
              <p class="font-body mt-1 text-base font-medium">{{ job.role }}</p>
              <p class="font-body text-sm text-muted-foreground">
                {{ job.company }}<template v-if="job.place"> · {{ job.place }}</template>
              </p>
              <ul class="font-body mt-2 max-w-[62ch] list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground marker:text-red-500">
                <li v-for="i in job.n" :key="i">{{ t(`experience.${job.id}[${i - 1}]`) }}</li>
              </ul>
            </li>
          </ol>
        </div>
      </TerminalWindow>
    </AppContentMain>
    <AppContentSide />

    <!-- Stack -->
    <AppContentSide />
    <AppContentMain id="stack" class="px-6 py-10 md:px-12 md:py-12">
      <h3 class="heading-3">{{ t("stack.title") }}</h3>
      <p class="mt-1.5 mb-4 text-muted-foreground">{{ t("stack.intro") }}</p>
      <TerminalWindow title="fish — ~ · stack" path="/stack/">
        <div v-for="(g, gi) in stack" :key="g.group" class="term-line" :style="{ '--i': gi }">
          <p><span class="text-red-700 dark:text-red-400">$</span> stack --{{ g.group }}</p>
          <ul class="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3 md:grid-cols-4">
            <li v-for="item in g.items" :key="item.name" class="flex items-center gap-2.5">
              <Icon :name="item.icon" class="size-4 shrink-0 text-red-700 dark:text-red-400" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
        <p class="term-line" :style="{ '--i': stack.length }">
          <span class="text-red-700 dark:text-red-400">$</span>
          <span class="term-cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-foreground" />
        </p>
      </TerminalWindow>
    </AppContentMain>
    <AppContentSide />

    <!-- Projects -->
    <AppContentSide />
    <AppContentMain id="projects" class="px-6 py-10 md:px-12 md:py-12">
      <h3 class="heading-3 mb-4">{{ t("projects.title") }}</h3>
      <TerminalWindow title="fish — ~ · projects" path="/projects/">
        <div v-for="(g, gi) in projectGroups" :key="g.cmd" class="term-line" :style="{ '--i': gi }">
          <p><span class="text-red-700 dark:text-red-400">$</span> ls {{ g.cmd }}</p>
          <ul class="mt-3 divide-y border-y">
            <li v-for="proj in g.items" :key="proj.id" class="py-3">
              <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p class="font-body text-base font-medium">{{ proj.name }}</p>
                <p class="flex gap-4 text-xs">
                  <a v-if="proj.url" :href="proj.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 underline underline-offset-4 hover:text-red-700 dark:hover:text-red-400">
                    <Icon name="lucide:arrow-up-right" class="size-3.5" />{{ t("projects.visit") }}
                  </a>
                  <a v-if="proj.repo" :href="proj.repo" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 underline underline-offset-4 hover:text-red-700 dark:hover:text-red-400">
                    <Icon name="simple-icons:github" class="size-3.5" />{{ t("projects.repo") }}
                  </a>
                </p>
              </div>
              <p class="font-body mt-1 max-w-[70ch] text-sm leading-6 text-muted-foreground">{{ t(`projects.items.${proj.id}`) }}</p>
              <div v-if="proj.tags.length" class="mt-2 flex flex-wrap gap-1.5">
                <Badge v-for="tag in proj.tags" :key="tag" variant="secondary">{{ tag }}</Badge>
              </div>
            </li>
          </ul>
        </div>
        <p class="term-line text-muted-foreground" :style="{ '--i': 2 }"># {{ t("projects.next") }}</p>
      </TerminalWindow>
    </AppContentMain>
    <AppContentSide />

    <!-- Contact -->
    <AppContentSide />
    <AppContentMain id="contact" class="px-6 py-10 md:px-12 md:py-12">
      <h3 class="heading-3">{{ t("contact.title") }}</h3>
      <p class="mt-1.5 mb-4 max-w-[52ch] text-muted-foreground">{{ t("contact.body") }}</p>
      <TerminalWindow title="fish — ~ · contact" path="/contact/">
        <div class="term-line space-y-2" :style="{ '--i': 0 }">
          <p><span class="text-red-700 dark:text-red-400">$</span> contact --email</p>
          <p><a :href="`mailto:${email}`" class="underline underline-offset-4 hover:text-red-700 dark:hover:text-red-400">{{ email }}</a></p>
          <p class="pt-2"><span class="text-red-700 dark:text-red-400">$</span> contact --linkedin</p>
          <p><a :href="linkedin" target="_blank" rel="noopener noreferrer" class="underline underline-offset-4 hover:text-red-700 dark:hover:text-red-400">linkedin.com/in/dhaffaagus</a></p>
        </div>
        <div class="term-line flex flex-wrap gap-3" :style="{ '--i': 1 }">
          <Button as-child>
            <a :href="`mailto:${email}`"><Icon name="lucide:mail" /> {{ t("contact.email") }}</a>
          </Button>
          <Button as-child variant="outline">
            <a :href="linkedin" target="_blank" rel="noopener noreferrer"><Icon name="simple-icons:linkedin" /> {{ t("contact.cta") }}</a>
          </Button>
        </div>
      </TerminalWindow>
    </AppContentMain>
    <AppContentSide />
  </AppContainer>
</template>
