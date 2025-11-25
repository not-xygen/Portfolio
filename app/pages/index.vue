<script setup lang="ts"></script>

<template>
  <AppContainer>
    <!-- Hero Section -->
    <AppContentSide />
    <AppContentMain>
      <div class="flex justify-center mb-8 absolute -z-10 w-full h-full">
        <ClientOnly>
          <Tetris
            class="h-[500px] w-full mask-[radial-gradient(450px_circle_at_center,#4CC9FE,transparent)]"
            :base="15"
            square-color="#4CC9FE"
          />
        </ClientOnly>
      </div>
      <div
        class="flex flex-col md:flex-row justify-around items-center pt-6 md:pt-12 gap-4 lg:gap-0"
      >
        <ClientOnly>
          <BlurReveal :delay="0.1" :duration="0.5" class="">
            <h2
              class="text-3xl font-bold tracking-tighter xl:text-7xl/none sm:text-5xl"
            >
              Halo <span class="wave-hand">👋</span>
            </h2>
            <span
              class="text-pretty text-xl tracking-tighter xl:text-5xl/none sm:text-3xl"
            >
              Selamat Datang
            </span>
            <span
              class="text-pretty text-xl tracking-tighter xl:text-5xl/none sm:text-3xl"
            >
              di Portfolio Saya
            </span>
            <div class="mt-4 flex gap-2">
              <Button size="sm">
                <Icon name="lucide:panels-top-left" /> View Projects
              </Button>
              <Button size="sm" variant="outline">Contact Me</Button>
            </div>
            <div class="mt-2 flex gap-2">
              <Button size="sm" class="bg-sky-500 text-white hover:bg-sky-600"
                ><Icon name="lucide:file-down" /> Download Resume</Button
              >
            </div>
          </BlurReveal>
          <BlurReveal
            :delay="0.1"
            :duration="0.5"
            class="h-full w-3/4 md:w-1/2 lg:w-1/3"
          >
            <NuxtImg src="/hero-image.png" class="h-full w-full" />
          </BlurReveal>
        </ClientOnly>
      </div>
    </AppContentMain>
    <AppContentSide />

    <!-- Short Introduction -->
    <AppContentSide />
    <AppContentMain
      class="flex flex-row gap-8 p-8 lg:p-24 bg-stone-50 dark:bg-stone-950"
    >
      <ClientOnly>
        <BlurReveal :delay="0.1" :duration="0.5" class="w-1/2">
          <h3 class="heading-3 mb-4">Tentang Saya</h3>
          <p class="paragraph text-balance">
            Lulusan Teknik Informatika dari Institut Teknologi Kalimantan (IPK
            3,26/4,0) dengan pengalaman mengembangkan Website dan Software.
            Berfokus pada pembuatan solusi digital yang efisien dan berorientasi
            pada pengguna, serta terus mengasah kemampuan di bidang pengembangan
            frontend dan backend. Memiliki ketertarikan pada desain sistem,
            arsitektur bersih, dan penerapan teknologi yang selaras dengan
            kebutuhan bisnis. Termotivasi untuk membangun alat yang
            menyederhanakan alur kerja dan membuat teknologi lebih mudah diakses
            oleh pengguna.
          </p>
        </BlurReveal>
        <BlurReveal :delay="0.1" :duration="0.5" class="w-1/2">
          <h3 class="heading-3 mb-4">Teknologi</h3>
          <div class="flex flex-wrap gap-2">
            <Badge><Icon name="logos:javascript" /> JavaScript</Badge>
            <Badge><Icon name="logos:typescript-icon" /> TypeScript</Badge>
          </div>
        </BlurReveal>
      </ClientOnly>
    </AppContentMain>
    <AppContentSide />

    <!-- Contact -->
    <AppContentSide />
    <AppContentMain class="p-8 lg:p-24 bg-stone-50 dark:bg-stone-950">
      <ClientOnly>
        <BlurReveal :delay="0.1" :duration="0.5" class="">
          <h1 class="text-4xl font-bold mb-8">Website sedang dibangun</h1>
          <div class="prose dark:prose-invert">
            <p>
              Halaman ini sedang dibangun. Konten akan segera mencakup
              portofolio proyek, studi kasus teknis, daftar keterampilan, dan
              informasi kontak profesional.
            </p>
          </div>
        </BlurReveal>
      </ClientOnly>
    </AppContentMain>
    <AppContentSide />
  </AppContainer>
</template>

<style scoped>
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.wave-hand {
  display: inline-block;
  animation: wave 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}
</style>
