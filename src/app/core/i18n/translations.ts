export type Lang = 'de' | 'en';

export const SUPPORTED_LANGS: Lang[] = ['de', 'en'];

export const UI_TEXT: Record<string, Record<Lang, string>> = {
  hi_i_am: { en: 'Hi, I am:', de: 'Hallo, ich bin:' },
  intro: { en: 'Intro', de: 'Intro' },
  displayed_work: { en: 'Displayed Work', de: 'Projekte' },
  projects_kicker: { en: 'Projects', de: 'Projekte' },
  experience_title: { en: 'Experience', de: 'Berufserfahrung' },
  reach_out: { en: 'Reach Out', de: 'Kontakt' },
  contact_title: { en: 'Contact', de: 'Kontakt' },
  hobbies: { en: 'Hobbies', de: 'Hobbys' },
  about_me: { en: 'About me', de: 'Über mich' },
  background_effects: { en: 'Background Effects', de: 'Hintergrundeffekte' },
  neural_net: { en: 'Neural Net', de: 'Neuronales Netz' },
  sparks: { en: 'Sparks', de: 'Funken' },
  toggle_menu: { en: 'Toggle intro menu', de: 'Intro-Menü umschalten' },
  top_repos: { en: 'Top GitHub Repositories', de: 'Top GitHub Repositories' },
  repository: { en: 'Repository', de: 'Repository' },
  live: { en: 'Live', de: 'Live' },
  public_repos: { en: 'public repos', de: 'öffentliche Repos' },
  followers: { en: 'followers', de: 'Follower' },
  nav_person: { en: 'Person', de: 'Person' },
  nav_projects: { en: 'Projects', de: 'Projekte' },
  nav_experience: { en: 'Experience', de: 'Berufserfahrung' },
  nav_contact: { en: 'Contact', de: 'Kontakt' },
  lang_de: { en: 'Switch to German', de: 'Auf Deutsch umschalten' },
  lang_en: { en: 'Switch to English', de: 'Auf Englisch umschalten' },
  tutorial_text: { en: 'Switch the language here at any time.', de: 'Hier kannst du die Sprache jederzeit umschalten.' },
  tutorial_got_it: { en: 'Got it', de: 'Verstanden' },
  experience_pages: { en: 'Experience pages', de: 'Erfahrungs-Seiten' },
  experience_page_label: { en: 'Show experience page', de: 'Erfahrungs-Seite anzeigen' },
  work_experience: { en: 'Work experience', de: 'Berufserfahrung' }
};
