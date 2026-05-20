import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export class ProjectController {
    async getAll(req: Request, res: Response){
        const projects = await prisma.project.findMany();
        res.json(projects);    
    }

    async create(req: Request, res: Response) {
        try {
            const { title, slug, description, repoUrl} = req.body;
            const project = await prisma.project.create({
                data: {
                    title,
                    slug,
                    description,
                    repoUrl,
                },
            });

            res.status(201).json(project);
        } catch (error) {
            res.status(400).json({
                error: "Project could not be created",
            })
        }
    }
}