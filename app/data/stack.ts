import type { StackGroup } from "~/domain/types";

const fallback = "lucide:package"; // no brand icon exists for these
const group = (id: string, items: [string, string?][]): StackGroup => ({
  id,
  items: items.map(([name, slug]) => ({
    name,
    icon: slug ? `simple-icons:${slug}` : fallback,
  })),
});

// Group ids double as `stack.<id>` locale keys and as the `stack --<id>` prompt.
export const stackGroups: StackGroup[] = [
  group("languages", [["TypeScript", "typescript"], ["JavaScript", "javascript"], ["Rust", "rust"], ["Go", "go"], ["Dart", "dart"], ["HTML", "html5"], ["CSS", "css3"], ["Sass", "sass"]]),
  group("frontend", [["Vue", "vuedotjs"], ["Nuxt", "nuxtdotjs"], ["React", "react"], ["Next.js", "nextdotjs"], ["Vite", "vite"], ["Tailwind CSS", "tailwindcss"], ["shadcn/ui", "shadcnui"], ["Radix", "radixui"], ["TanStack Query", "reactquery"], ["Zustand"], ["Framer Motion", "framer"]]),
  group("backend", [["Node.js", "nodedotjs"], ["Express", "express"], ["Hapi"], ["Axum"], ["tRPC", "trpc"], ["Zod", "zod"]]),
  group("mobile", [["Flutter", "flutter"], ["React Native", "react"], ["Mapbox", "mapbox"]]),
  group("databases", [["PostgreSQL", "postgresql"], ["MySQL", "mysql"], ["Supabase", "supabase"]]),
  group("tools", [["Git", "git"], ["GitHub", "github"], ["Docker", "docker"], ["Vitest", "vitest"]]),
];
