import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    siteId: z.string(),
    towerType: z.enum(["lattice", "monopole", "guyed", "rooftop", "other"]),
    heightM: z.number().optional(),
    location: z.string(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    completed: z.coerce.date(),
    client: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    icon: z.string().optional(),
  }),
});

const careers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/careers" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    type: z.enum(["full-time", "contract", "internship"]),
    open: z.boolean().default(true),
  }),
});

export const collections = { projects, services, careers };
