export interface Section {
  id: string;
  num: string;
  label: string;
}

/** Shared by the fixed section rail and the hero's bottom nav row. */
export const SECTIONS: readonly Section[] = [
  { id: "about", num: "01", label: "About" },
  { id: "work", num: "02", label: "Work" },
  { id: "projects", num: "03", label: "Projects" },
  { id: "opensource", num: "04", label: "Open source" },
  { id: "words", num: "05", label: "Words" },
  { id: "contact", num: "06", label: "Contact" },
];
