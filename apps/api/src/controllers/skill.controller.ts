import {Request, Response} from "express";
import {prisma} from "../lib/prisma";

export class SkillController {
    async getAll(req: Request, res: Response) {
        try {
            const skills = await prisma.skill.findMany({
                orderBy: {name: "asc"}
            });
            return res.json(skills);
        } catch (error) {
            return res.status(500).json({error: "Erro ao buscar habilidades."});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const {name, category, level} = req.body;

            if (!name || !category || level === undefined) {
                return res.status(400).json({error: "Preencha todos os campos obrigatórios."});
            }

            const skillExists = await prisma.skill.findUnique({where: {name}});
            if (skillExists) {
                return res.status(400).json({error: "Esta habilidade ja está cadastrada."});
            }

            const newSkill = await prisma.skill.create({
                data: {name, category, level: Number(level)}
            });

            return res.status(201).json(newSkill);
        } catch (error){
            return res.status(500).json({error: "Erro no salvamento"});
        }
    }
}