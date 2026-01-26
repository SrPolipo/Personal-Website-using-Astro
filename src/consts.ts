import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Rafael Hipolito",
  DESCRIPTION: "Personal website of Rafael Hipolito",
  EMAIL: "contact@rafaelhipolito.xyz",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my website!",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of topics I'm interested in and have written about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of some projects I've worked on.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/SrPolipo",
  },
];
