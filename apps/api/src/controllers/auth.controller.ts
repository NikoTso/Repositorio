import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            const userExists = await prisma.user.findUnique({ where: { email }});
            if (userExists) {
                return res.status(400).json({ error: "Usuario já existe"});
            }

            const passwordHash = await bcrypt.hash(password, 10);

            const user = await prisma.user.create({
                data: {name, email, passwordHash},
            });

            const {passwordHash: _, ...userWithoutPassword} = user;

            res.status(201).json(userWithoutPassword);
        } catch (error) {
            res.status(500).json({ error: "Usuario não pode ser criado"});
        }
    }

    async login(req: Request, res: Response) {
        try {
            const {email, password} = req.body;

            const user = await prisma.user.findUnique({where: {email}});
            if (!user) {
                return res.status(401).json({error: "Credenciais erradas"});
            }

            const isValidPassaword = await bcrypt.compare(password, user.passwordHash);
            if (!isValidPassaword){
                return res.status(401).json({error: "Credenciais erradas"});
            }

            const token = jwt.sign(
                {id: user.id, email: user.email},
                process.env.JWT_SECRET as string,
                {expiresIn: "1d"}
            );
            res.json({user:{id: user.id, name: user.name, email: user.email}, token});
        } catch (error) {
            res.status(500).json({error: "Falha ao logar"});
        }
    }
}