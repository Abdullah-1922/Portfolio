import { z } from "zod";

export const addProjectSchema = z.object({
  name: z.string().min(4).optional(),
  skills: z.array(z.object({name:z.string()})).optional(),
  readyIn: z.number().positive().default(1),
  isTeamProject: z.boolean().default(false),
  description: z.string().optional(),
  category: z.string().default("E-commerce"),
  projectImage: z.string().optional(),
  liveLink: z.string().optional(),
  githubLink: z.string().optional(),
});
