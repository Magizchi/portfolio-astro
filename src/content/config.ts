import { z, defineCollection } from "astro:content";

const experienceSchema = z.object({
    title: z.string(),
    company: z.string(),
    post: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    number: z.number(),
    hidden: z.boolean()
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;

const experienceCollection = defineCollection({ schema: experienceSchema })

export const collections = {
    'experience': experienceCollection,
}