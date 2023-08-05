import { z, defineCollection } from "astro:content";

const experienceSchema = z.object({
    number: z.number(),
    title: z.string(),
    company: z.string(),
    post: z.string(),
    startDate: z.string(),
    endDate: z.string(),
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;

const experienceCollection = defineCollection({ schema: experienceSchema })

export const collections = {
    'experience': experienceCollection,
}