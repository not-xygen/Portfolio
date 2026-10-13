export interface Job {
  id: string;
  short: string;
  company: string;
  role: string;
  /** "YYYY-MM" */
  from: string;
  /** "YYYY-MM", or null while the role is current */
  to: string | null;
  place: string;
  /** number of bullet strings under `experience.<id>` in the locale files */
  bullets: number;
}

export interface Project {
  id: string;
  name: string;
  tags: string[];
  repo?: string;
  url?: string;
}

export interface ProjectGroup {
  path: string;
  items: Project[];
}

export interface StackItem {
  name: string;
  icon: string;
}

export interface StackGroup {
  id: string;
  items: StackItem[];
}
