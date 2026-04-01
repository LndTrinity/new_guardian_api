import { PrismaClient } from "../utils/prisma-client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

/**
 * CREATE - Cria um novo log do dispositivo
 */
router.post("/", async (req: Request, res: Response) => {
  const { data_hora, status_bateria, descricao, banda_dados, dispositivoId } = req.body;

  if (!data_hora || !status_bateria || !banda_dados || !dispositivoId) {
    res.status(400).json({
      erro: "Campos obrigatórios: data_hora, status_bateria, banda_dados, dispositivoId",
    });
    return
  }

  try {
    const log = await prisma.dispositivo_log.create({
      data: {
        data_hora: new Date(),
        status_bateria,
        descricao,
        banda_dados,
        dispositivoId,
      },
    });
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar log.", detalhes: error });
  }
});

/**
 * READ - Lista todos os logs ou filtra por dispositivoId
 */
router.get("/", async (req: Request, res: Response) => {
  const { dispositivoId, limit } = req.query;

  try {
    const logs = await prisma.dispositivo_log.findMany({
      where: dispositivoId
        ? {
            dispositivoId: String(dispositivoId),
          }
        : undefined,
      orderBy: {
        data_hora: "desc",
      },
      take: limit ? Number(limit) : undefined,
      include: {
        dispositivo: true,
      },
    });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar logs.", detalhes: error });
  }
});

router.get("/banda/:numero_de_serie", async (req: Request, res: Response) => {
  const { numero_de_serie } = req.params;
  const { start, end } = req.query;

  try {
    const logs = await prisma.dispositivo_log.findMany({
      where: {
        dispositivo: {
          numero_de_serie: String(numero_de_serie),
        },
        ...(start || end ? {
          data_hora: {
            ...(start ? { gte: new Date(start as string) } : {}),
            ...(end ? { lte: new Date(end as string) } : {}),
          }
        } : {}),
      },
      orderBy: {
        data_hora: "desc",
      },
    });
    let soma = 0
    for (const log of logs) {
      soma += Number(log.banda_dados)
    }
    const resposta = { 
      soma_banda_dados_Kb: `${soma}`,
      data_inicial: start || null,
      data_final: end || null,
    };

    res.json(resposta);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar logs.", detalhes: error });
  }
});
/**
 * UPDATE - Atualiza um log por ID
 */
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data_hora, status_bateria, descricao, banda_dados, dispositivoId } = req.body;

  try {
    const log = await prisma.dispositivo_log.update({
      where: { id: Number(id) },
      data: {
        data_hora: new Date(data_hora),
        status_bateria,
        descricao,
        banda_dados,
        dispositivoId,
      },
    });

    res.json(log);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao atualizar log.", detalhes: error });
  }
});

/**
 * DELETE - Deleta um log por ID
 */
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const log = await prisma.dispositivo_log.delete({
      where: { id: Number(id) },
    });

    res.json(log);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao deletar log.", detalhes: error });
  }
});

export default router;
