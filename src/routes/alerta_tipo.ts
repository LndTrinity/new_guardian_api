import { error } from "console";
import { PrismaClient } from "../utils/prisma-client"

import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

/**
 * CREATE - Cria um novo tipo de alerta
 */
export function criarAlertaTipo(nome: string, regra: string, valor: string, usuario_id: string, dispositivo_id: string) {
  return prisma.alerta_tipo.create({
    data: {
      nome,
      regra,
      valor,
      usuario_id,
      dispositivo_id,
      ativo: true
    },
  });
}

router.post("/", async (req, res) => {
  const { nome, regra, valor, usuario_id, dispositivo_id } = req.body;



  try {
    if (!nome || !regra || !usuario_id || !dispositivo_id) {
      throw new Error("Todos os campos são obrigatórios.");
    }
    // Verifica duplicidade de nome
    const nomeExiste = await prisma.alerta_tipo.findFirst({
      where: { nome },
    });

    if (nomeExiste) {
      throw new Error("Nome já existe.");
    }

    const tipo = await prisma.alerta_tipo.create({
      data: {
        nome,
        regra,
        valor,
        usuario_id,
        dispositivo_id,
        ativo: true
      },
    });

    res.status(201).json(tipo);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar tipo de alerta.", detalhes: error });
  }
});

// READ 

router.get("/", async (_req: Request, res: Response) => {
  try {
    const tipos = await prisma.alerta_tipo.findMany({
     
    });
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar tipos de alerta.", detalhes: error });
  }
});
// READ 
router.get("/usr/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tipos = await prisma.alerta_tipo.findMany({
      where: {id : Number(id)}
    });
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar tipos de alerta ativos.", detalhes: error });
  }
});


router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tipos = await prisma.alerta_tipo.findMany({
      where: { usuario_id: { contains: id }, ativo: true },
    });

    const result = await Promise.all(
      tipos.map(async (tipo) => {
        const dispositivo = await prisma.dispositivo.findUnique({
          where: { id: tipo.dispositivo_id },
          select: { nome: true },
        });
        return { ...tipo, dispositivo_nome: dispositivo?.nome ?? null };
      })
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar tipos de alerta ativos.", detalhes: error });
  }
});

// UPDATE 

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, regra } = req.body;

  try {
  
    const tipo = await prisma.alerta_tipo.update({
      where: { id: Number(id) },
      data: { nome, regra },
    });

    res.json(tipo);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao atualizar tipo de alerta.", detalhes: error });
  }
});

// DELETE

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const tipo = await prisma.alerta_tipo.delete({
      where: { id: Number(id) }
    });

    res.json(tipo);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao deletar tipo de alerta.", detalhes: error });
  }
});

export default router;
