import {Router} from "express";
import jwt from "jsonwebtoken";
import {SkillController} from "../controllers/skill.controller";

const router = Router();
const skillController = new SkillController();

const verificarToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({error: "Acesso negado"});
    }

    const [,token] = authHeader.split(" ");
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({error: "Token invalido"});
    }
}

router.get("/", skillController.getAll);
router.post("/", verificarToken, skillController.create);

export default router;