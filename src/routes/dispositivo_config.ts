import { PrismaClient } from "../../generated/prisma"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()



router.post('/signin', async (req, res) => {
  const { intervalo_envio, monitoramentoLigado, dispositivoId } = req.body;

  if (!intervalo_envio || !monitoramentoLigado  || !dispositivoId) {
    return
  }

  try {
    const config = await prisma.dispositivo_config.create({
      data: {
        intervalo_envio,
        monitoramentoLigado,
        dispositivoId,
      },
    });
    res.status(201).json(config);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar configuração", detalhes: error });
  }
});

// READ 
router.get("/", async (req, res) => {
  try {
    const configs = await prisma.dispositivo_config.findMany({
      include: {
        dispositivo: true, // opcional: incluir detalhes do dispositivo
      },
    });
    res.json(configs);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar configurações", detalhes: error });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const config = await prisma.dispositivo_config.findUnique({
     where: {id: Number(id)}
    });
    res.json(config);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar configurações", detalhes: error });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { intervalo_envio, monitoramentoLigado, dispositivoId,alerta_sem_sinal, alerta_bateria_valor,alerta_bateria } = req.body;
  console.log(intervalo_envio, monitoramentoLigado, dispositivoId,alerta_sem_sinal, alerta_bateria_valor,alerta_bateria)


  // if( !intervalo_envio ||  monitoramentoLigado != Boolean || ! dispositivoId ||  alerta_sem_sinal != Boolean || !  alerta_bateria_valor ||  alerta_bateria != Boolean ){
  //   res.status(400).json("Erro")
  //   return
  // }
  

  try {
    const config = await prisma.dispositivo_config.update({
      where: { id: Number(id) },
      data: {
        intervalo_envio: Number(intervalo_envio),
        monitoramentoLigado: Boolean(monitoramentoLigado),
        dispositivoId: String(dispositivoId),

        alerta_sem_sinal: Boolean(alerta_sem_sinal),
        alerta_bateria:Boolean(alerta_bateria),  
        alerta_bateria_valor:Number(alerta_bateria_valor)
      },
    });
    res.status(200).json(config);
  } catch (error) {
    console.log(error)
    res.status(400).json({ erro: "Erro ao atualizar configuração", detalhes: error });
  }
});

// DELETE 
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const config = await prisma.dispositivo_config.delete({
      where: { id: Number(id) },
    });
    res.json(config);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao deletar configuração", detalhes: error });
  }
});

export default router;
