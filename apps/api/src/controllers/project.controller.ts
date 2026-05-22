import {Request, Response} from "express";
import {prisma} from "../lib/prisma";

export class ProjectController {
    async getAll(req: Request, res: Response) {
        try {
        const projects = await prisma.project.findMany({
            include: {
            skills: {
                include: {
                skill: true,
                },
            },
            },
        });
        return res.json(projects);
        } catch (error) {
        return res.status(500).json({error: "Erro ao buscar projetos."});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { title, slug, description, repoUrl, liveUrl, featured, skillIds } = req.body;
            const project = await prisma.project.create({
                data: {
                    title,
                    slug,
                    description,
                    repoUrl,
                    liveUrl,
                    featured: featured ?? false,
                    skills: {
                        create: skillIds?.map((skillId: string) => ({
                            skill: {connect: {id: skillId}}
                        })) ?? []
                    }
                },
                include: {
                    skills: {
                        include: {skill: true}
                    }
                }
            });

        return res.status(201).json(project);
        } catch (error) {
            return res.status(400).json({error: "Project could not be created"});
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const {id} = req.params;
            await prisma.project.delete({where: {id: String(id)}});
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({error: "Erro ao deletar projeto"});
        }
    }
}