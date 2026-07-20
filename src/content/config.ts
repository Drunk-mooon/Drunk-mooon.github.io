import { defineCollection, z } from 'astro:content';

const papers = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    project: z.string().url().optional(),
    poster: z.string().url().optional(),
    tldr: z.string().optional(),
    abstract: z.string().optional(),
    date: z.coerce.date(), // 用于同一年内的二级排序
  }),
});

const games = defineCollection({
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    platform: z.string(),
    year: z.number(),
    link: z.string().url().optional(),
    video: z.string().url().optional(),
    description: z.string(),
    role: z.string().optional(),
    date: z.coerce.date(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    github: z.string().url(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
  }),
});

export const collections = { papers, games, projects };