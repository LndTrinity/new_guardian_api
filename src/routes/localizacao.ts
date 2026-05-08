import { error } from "console";
import { PrismaClient } from "../utils/prisma-client";
import { Router, Request, Response } from "express";
import { criarAlerta } from "./alerta";
import { buscarAlertaTiposPorUsuario } from "./alerta_tipo";
import { buscarAlertasPorUsuarioId } from "./usuario";

const prisma = new PrismaClient();
const router = Router();

const intervalo_Bateria = 60 * 60 * 1000; // 1h
const intervalo_Zona = 10 * 60 * 1000; // 10min
const intervalo_Saida_Zona = 60 * 60 * 1000 * 23; // 23h
// CREATE
function pointInPolygon(lat: number, lng: number, polygon: { lat: number; lng: number }[]): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].lat, yi = polygon[i].lng;
    const xj = polygon[j].lat, yj = polygon[j].lng;
    const intersect = ((yi > lng) !== (yj > lng)) &&
      (lat < (xj - xi) * (lng - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}
function parseLatLngString(value: string): { lat: number; lng: number }[] {
  const matches = value.matchAll(/LatLng\(([^,]+),\s*([^)]+)\)/g);
  return Array.from(matches).map(m => ({
    lat: Number(m[1]),
    lng: Number(m[2])
  }));
}

async function possoCriarAlerta(usuario_id: string, alerta_tipo_nome: string) {
  const alertas = await buscarAlertasPorUsuarioId(usuario_id);
  for (const alerta of alertas) {
    // console.log("alerta_tipo_nome: ", alerta_tipo_nome)
    // if (alerta.alertaTipo.nome === alerta_tipo_nome && alerta.alertaTipo.regra === "Bateria >" ){
    //   console.log("encontrou alerta do mesmo tipo")
    //   }
    if (alerta.alertaTipo.nome === alerta_tipo_nome && alerta.alertaTipo.regra === "Bateria >") {
      const agora = new Date();
      const criadoEm = new Date(alerta.createdAt);
      const resultado = agora.getTime() - criadoEm.getTime()
      if (agora.getTime() - criadoEm.getTime() > intervalo_Bateria) {
        return true;
      } else {
        console.log("Não pode criar alerta do tipo ", alerta_tipo_nome, " ainda falta ", (intervalo_Bateria - resultado) / 1000, " segundos para poder criar outro alerta do mesmo tipo")
        return false;
      }
    } else if (alerta.alertaTipo.nome === alerta_tipo_nome && (alerta.alertaTipo.regra === "Entrada em zona segura" || alerta.alertaTipo.regra === "Saida de zona segura")) {
      const agora = new Date();
      const criadoEm = new Date(alerta.createdAt);
      if (alerta.alertaTipo.regra === "Entrada em zona segura") {
        if (agora.getTime() - criadoEm.getTime() > intervalo_Zona) {
          return true;
        } else {
          console.log("Não pode criar alerta do tipo ", alerta_tipo_nome, " ainda falta ", (intervalo_Zona - (agora.getTime() - criadoEm.getTime())) / 1000, " segundos para poder criar outro alerta do mesmo tipo")
          return false;
        }
      } else if (alerta.alertaTipo.regra === "Saida de zona segura") {
        if (agora.getTime() - criadoEm.getTime() > intervalo_Saida_Zona) {
          return true;
        } else {
          console.log("Não pode criar alerta do tipo ", alerta_tipo_nome, " ainda falta ", (intervalo_Saida_Zona - (agora.getTime() - criadoEm.getTime())) / 1000, " segundos para poder criar outro alerta do mesmo tipo")
          return false;
        }
      }
    }
  }
  // Nenhum alerta anterior 
  return true;
}

async function verificaAlertasTipo(usuario_id: string, status_bateria: number, lat: number, lng: number) {
  const alertasTipo = await buscarAlertaTiposPorUsuario(usuario_id);

  for (const alerta_tipo of alertasTipo) {

    // if (alerta_tipo.regra == "Bateria >") {
    //   console.log("entrou no if bateria >")
    //   if (alerta_tipo.ativo) {
    //     console.log("entrou no if ativo")
    //     // const poligono = parseLatLngString(alerta_tipo.valor);
    //     // const dentroDaZona = pointInPolygon(lat, lng, poligono);
    //     // if (dentroDaZona === true) {
    //       // console.log("entrou no if de dentro da zona")
    //       const possoCriar = await possoCriarAlerta(usuario_id, alerta_tipo.nome);
    //       console.log("pode criar? ", possoCriar)
    //     // }
    //   }
    // }
    if (alerta_tipo.regra === "Bateria >" && alerta_tipo.ativo && status_bateria) {
      const valorAlerta = Number(alerta_tipo.valor);
      if (status_bateria <= valorAlerta && await possoCriarAlerta(usuario_id, alerta_tipo.nome)) {
        const criar_Alerta = criarAlerta(`Bateria Baixa ${status_bateria}%`, true, alerta_tipo.dispositivoId, alerta_tipo.id, "Aviso_amarelo")
        console.log("criou alerta de bateria baixa")
      }
    } if (alerta_tipo.regra === "Entrada em zona segura" && alerta_tipo.ativo) {
      const poligono = parseLatLngString(alerta_tipo.valor);
      const dentroDaZona = pointInPolygon(lat, lng, poligono);
      if (dentroDaZona === true && await possoCriarAlerta(usuario_id, alerta_tipo.nome)) {
        const criar_Alerta = criarAlerta(`${alerta_tipo.nome}`, true, alerta_tipo.dispositivoId, alerta_tipo.id, "Aviso_amarelo")
        console.log("criou alerta de entrada em zona segura")

      }
    } if (alerta_tipo.regra === "Saida de zona segura" && alerta_tipo.ativo) {
      const poligono = parseLatLngString(alerta_tipo.valor);
      const dentroDaZona = pointInPolygon(lat, lng, poligono);

      console.log(alerta_tipo.nome)

      if (dentroDaZona === false && await possoCriarAlerta(usuario_id, alerta_tipo.nome)) {
        const criar_Alerta = criarAlerta(`${alerta_tipo.nome}`, true, alerta_tipo.dispositivoId, alerta_tipo.id, "Aviso_amarelo")
        console.log("criou alerta de saída de zona segura")
      }
    }
  }
}
router.get("/verificar/:usuario_id", async (req: Request, res: Response) => {
  const { usuario_id } = req.params;
  try {
    const alertas = await buscarAlertasPorUsuarioId(usuario_id);
    res.json(alertas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao verificar alertas.", detalhes: error });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const jsonString = JSON.stringify(req.body);
  const { longitude, latitude, NumSerie, descricao, status_bateria, banda_dados } = req.body;
  let descricao_ = descricao
  const BuscaId = await prisma.dispositivo.findMany({
    where: { numero_de_serie: String(NumSerie) }, select: { id: true, usuarioId: true }
  })

  BuscaId[0].usuarioId && verificaAlertasTipo(BuscaId[0].usuarioId, status_bateria, latitude, longitude)


  var banda_dados_ = 0
  const bytes_quant = Buffer.byteLength(jsonString, "utf8");
  const kilobytes = Number(bytes_quant / 1024);
  banda_dados_ = kilobytes

  const dispositivoId = BuscaId[0].id
  // salva no log
  try {
    if (longitude === undefined || latitude === undefined || BuscaId.length == 0) {
      throw error
    }
    if (!descricao) {
      descricao_ = " "
    }

    const log = await prisma.dispositivo_log.create({
      data: {
        data_hora: new Date(),
        status_bateria,
        descricao: descricao_,
        banda_dados: banda_dados_.toString(),
        dispositivoId,
      },
    });

  } catch (error) {
    console.log("erro: Erro ao criar log.", error)

  }

  try {
    const bateria_statu = await prisma.dispositivo.update({
      where: { id: dispositivoId }, data: { bateria: Number(status_bateria) }
    })
    const dispositivo = await prisma.dispositivo.findUnique({
      where: { id: dispositivoId }, include: { config: true }
    })
    let bateria = 15
    if (dispositivo?.config[0].alerta_bateria_valor != null) {
      bateria = dispositivo?.config[0].alerta_bateria_valor
    }

  
      const attStatus = await prisma.dispositivo.update({
        where: { id: dispositivoId }, data: { status: "Ligado" }
      })

  


    const localizacao = await prisma.localizacao.create({
      data: {
        longitude,
        latitude,
        data_hora: new Date(),
        dispositivoId,
      },
    });

    res.status(201).json(localizacao);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao registrar localização.", detalhes: error });
  }


});

;

// READ
router.get("/:dispositivoId", async (req: Request, res: Response) => {
  const { dispositivoId } = req.params;


  // console.log("acionado")
  try {
    const localizacoes = await prisma.localizacao.findMany({
      where: dispositivoId ? { dispositivoId: String(dispositivoId) } : undefined,
      include: {
        dispositivo: true, // incluir dados do dispositivo, opcional
      },
      orderBy: {
        data_hora: "desc",
      },
    });

    res.json(localizacoes);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar localizações.", detalhes: error });
  }
});

// UPDATE

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { longitude, latitude, data_hora, dispositivoId } = req.body;

  try {
    const localizacao = await prisma.localizacao.update({
      where: { id: Number(id) },
      data: {
        longitude,
        latitude,
        data_hora: new Date(data_hora),
        dispositivoId,
      },
    });

    res.json(localizacao);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao atualizar localização.", detalhes: error });
  }
});

// DELETE

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const localizacao = await prisma.localizacao.delete({
      where: { id: Number(id) },
    });

    res.json(localizacao);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao deletar localização.", detalhes: error });
  }
});

// READ - Lista localizações com filtros opcionais
router.get("/", async (req: Request, res: Response) => {
  const { dispositivoId, start, end, limit } = req.query;

  // Monta filtro condicionalmente
  const where: any = {};

  if (dispositivoId) {
    where.dispositivoId = Number(dispositivoId);
  }

  if (start || end) {
    where.data_hora = {};
    if (start) where.data_hora.gte = new Date(start as string);
    if (end) where.data_hora.lte = new Date(end as string);
  }

  try {
    const localizacoes = await prisma.localizacao.findMany({
      where,
      include: {
        dispositivo: true,
      },
      orderBy: {
        data_hora: "desc",
      },
      take: limit ? Number(limit) : undefined,
    });

    res.json(localizacoes);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar localizações.", detalhes: error });
  }
});
router.post("/historico", async (req: Request, res: Response) => {
  const { dispositivoId, start, limit } = req.body;

  const where: any = {};
  // console.log(start)

  if (dispositivoId) {
    where.dispositivoId = Number(dispositivoId);
  }



  const data = new Date(start as string);



  // console.log(data)

  const fimDoDia = new Date(data);
  fimDoDia.setHours(23 + 21, 59, 59);
  // console.log(data)
  try {
    const localizacoes = await prisma.localizacao.findMany({
      where: {
        data_hora: {
          gte: data,
          lte: fimDoDia
        }

      },
      include: {
        dispositivo: true,
      },
      orderBy: {
        data_hora: "desc",
      },
      take: limit ? Number(limit) : undefined,
    });

    res.json(localizacoes);
  } catch (error) {
    // console.log(error)
    res.status(500).json({ erro: "Erro ao buscar localizações.", detalhes: error });
  }
});



export default router;

/* 
Últimas 10 localizações de um dispositivo:

    GET /localizacao?dispositivoId=1&limit=10

Localizações de 1º a 30 de junho de 2025:

    GET /localizacao?start=2025-06-01T00:00:00Z&end=2025-06-30T23:59:59Z

Últimas 5 localizações de um dispositivo dentro de um período:

    GET /localizacao?dispositivoId=2&start=2025-07-01&end=2025-07-02&limit=5

OBS: 
Os parâmetros start e end devem estar no formato ISO (ex: 2025-07-01T00:00:00Z), mas strings tipo 2025-07-01 também funcionam.
*/
