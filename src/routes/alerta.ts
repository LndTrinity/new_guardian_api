import { error } from "console";
import { AlertaGravidade, PrismaClient } from "../utils/prisma-client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

// CREATE
export async function criarAlerta(descricao: string, ativo: boolean, dispositivoId: string, alertaId: number, gravidede: AlertaGravidade) {
  try {
    if (!descricao || ativo === undefined || !dispositivoId || !alertaId) {
      throw error
    }
    const alerta = await prisma.alerta.create({
      data: {
        descricao,
        ativo,
        dispositivoId,
        alertaId,
        gravidede
      },
    });
    return (alerta);
  } catch (error) {
    return error
  }
}
router.post("/", async (req: Request, res: Response) => {
  const { descricao, ativo, dispositivoId, alertaId, gravidede } = req.body;

  try {
    if (!descricao || ativo === undefined || !dispositivoId || !alertaId) {
      throw error
    }
    const alerta = await prisma.alerta.create({
      data: {
        descricao,
        ativo,
        dispositivoId,
        alertaId,
        gravidede,
      },
    });
    res.status(201).json(alerta);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar alerta", detalhes: error });
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const alertas = await prisma.alerta.findMany({
      where: { dispositivoId: id }
    });
    res.status(200).json(alertas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar alertas", detalhes: error });
  }
});
// READ 
router.get("/", async (req: Request, res: Response) => {
  try {
    const alertas = await prisma.alerta.findMany({
      include: {
        dispositivo: true,
        alertaTipo: true, // inclui dados do tipo de alerta (Alerta_tipo)
      },
    });
    res.status(200).json(alertas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar alertas", detalhes: error });
  }
});
// READ PELO ID DO DISPOSITIVO
router.get("/_/:idDispositivo", async (req: Request, res: Response) => {
  const { idDispositivo } = req.params;
  const id = idDispositivo


  try {
    const alertas = await prisma.alerta.findMany({
      where: { dispositivoId: id },
      include: { alertaTipo: true, dispositivo: true }
    });
    res.status(200).json(alertas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar alertas", detalhes: error });
  }
});

// UPDATE
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { descricao, ativo, dispositivoId, alertaId } = req.body;

  try {
    const alerta = await prisma.alerta.update({
      where: { id: Number(id) },
      data: {
        descricao,
        ativo,
        dispositivoId,
        alertaId,
      },
    });
    res.json(alerta);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao atualizar alerta", detalhes: error });
  }
});
router.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const dados = req.body;

  try {
    const alerta = await prisma.alerta.update({
      where: { id: Number(id) },
      data: dados

    });
    res.status(200).json(alerta);
  } catch (error) {
    console.log(error)
    res.status(400).json({ erro: "Erro ao atualizar alerta", detalhes: error });
  }
});

// DELETE 
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const alerta = await prisma.alerta.delete({
      where: { id: Number(id) },
    });
    res.json(alerta);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao deletar alerta", detalhes: error });
  }
});

export default router;
