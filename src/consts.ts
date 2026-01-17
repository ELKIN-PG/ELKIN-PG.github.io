import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Xeo",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experiencia",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Documento lo que aprendo.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos betas en los que estoy trabajando.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar referencias",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Experiencia", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Proton-mail",
    ICON: "email", 
    TEXT: "EmailFalso@proton.me",
    HREF: "#",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Git hub personal falso",
    HREF: "#" // Aqui debo poner las referencias de los links.
  },
  { 
    NAME: "Mastodon",
    ICON: "linkedin",
    TEXT: "Mastodon social media",
    HREF: "#",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Twiter X",
    HREF: "#",
  },
]

