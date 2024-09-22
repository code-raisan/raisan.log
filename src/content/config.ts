import { defineCollection, z } from "astro:content";

const logs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.optional(z.boolean())
	})
});

export const collections = { logs };
