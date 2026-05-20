import { Router } from "express";
import jwt from "jsonwebtoken";
import { ProjectController } from "../controllers/project.controller";

const router = Router();
const projectController = new ProjectController();
const verificarToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Acesso negado. Token não fornecido." });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
};

router.get("/", projectController.getAll);
router.post("/", verificarToken, projectController.create);

export default router;