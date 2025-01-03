import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const experience = defineCollection({
    loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        company: z.string(),
        post: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        hidden: z.boolean(),
        packages: z.string().array(),
        description: z.string()
    })
});

const project = defineCollection({
    loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        img: image(),
        coverAlt: z.string(),
        description: z.string(),
        githubUrl: z.string(),
        url: z.string(),
        packages: z.string().array(),
        hidden: z.boolean(),
    })
});


export const collections = { experience, project };