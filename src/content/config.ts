import {defineCollection, z} from "astro:content";

const postsCollection = defineCollection({
      schema:({image})=>z.object({
        author: z.string(),
        date:z.coerce.date(),
        categories: z.array(z.string()).optional(),
        image:image(),
        title:z.string()
      })
});

const projectsCollection = defineCollection({
  schema:({image})=>z.object({
    author: z.string(),
    date:z.coerce.date(),
    categories: z.array(z.string()).optional(),
    image:image(),
    title:z.string()
  })
});

export const collections={
    posts:postsCollection,
    projects:projectsCollection
}