import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: 'src/content', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    description: z.string(),
  })
});

export const collections = { blog };