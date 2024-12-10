import { z, defineCollection } from "astro:content";

const experienceSchema = z.object({
    title: z.string(),
    company: z.string(),
    post: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    hidden: z.boolean(),
    packages: z.string().array(),
    description: z.string()
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    githubUrl: z.string(),
    url: z.string(),
    packages: z.string().array(),
    hidden: z.boolean(),
});

const bookSchema = z.object({
    slug: z.string(),
    title: z.string(),
    author: z.string(),
    readYear: z.string(),
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;
export type BookSchema = z.infer<typeof bookSchema>;

const experienceCollection = defineCollection({ schema: experienceSchema });
const projectCollection = defineCollection({ schema: projectSchema });
const bookCollection = defineCollection({ schema: bookSchema });
export const collections = {
    'experience': experienceCollection,
    'project': projectCollection,
    'book': bookCollection
};