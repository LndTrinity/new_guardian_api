import { Dispositivo, PrismaClient, Prisma } from "../utils/prisma-client"
import { Router } from "express"
import { validaSenha } from "../utils/utils"
import bcrypt from 'bcrypt'

import { enviaEmail, gerarString } from "../utils/utils"
import { retorna_alertas_por_id, retorna_por_id } from "./dispositivo"
import { error } from "console"



const prisma = new PrismaClient()
const router = Router()

//                                              CRUD
// TOKEN
router.post("/cadastro/token", async (req, res) => {
  const { codigo, email } = req.body

  const dezMinutosAtras = new Date(Date.now() - 10 * 60 * 1000)


  const cliente = await prisma.tokens.findMany({
    where: {
      codigo: codigo, email: email, deleted: false, createdAt: {
        gte: dezMinutosAtras 
      }
    }
  })


  if (cliente.length == 0) {
    res.status(400).json({ erro: "Código incorreto" })

    return
  }
  const usuarioId = await prisma.usuario.findUnique({
    where: { email: email }, select: { id: true }
  });
  if (!usuarioId) {
    res.status(400).json({ erro: "Usuário não encontrado" });
    return
  }

  const atualizaCliente = await prisma.usuario.update({
    where: { id: usuarioId.id }, data: {
      deleted: false
    }
  })
  const atualizaToken = await prisma.tokens.update({
    where: {
      id: cliente[0].id, // O token que você quer atualizar
    },
    data: {
      deleted: true,  // Atualiza o campo para marcar o token como usado
    },
  });
  res.status(201).json(cliente)
})
// READ DISPOSITIVO
router.get("/dispos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const dispositivos = await prisma.dispositivo.findMany({
      where: { usuarioId: id },
      select: {
        id: true,
        nome: true,
        modelo: true,
        config: true,
        status:true,
        bateria:true,
        localizacoes: {
          orderBy: { data_hora: "desc" },
          take: 1,
          select: { data_hora: true }
        }
      }
    });

    const resultado = dispositivos.map((d: any) => ({
      ...d,
      ultimaAtt: d.localizacoes[0]?.data_hora || null
    }));

    res.status(200).json(resultado);

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro ao buscar dispositivos" });
  }
});


// CREATE
router.post("/cadastro", async (req, res) => {
  const { nome, email, senha, cpf } = req.body




  if (!nome || !email || !senha || !cpf) {
    res.status(400).json({ erro: "Informe nome, email e senha" })

    return
  }

  const erros = validaSenha(senha)
  if (erros.length > 0) {
    res.status(400).json({ erro: erros.join("; ") })

    return
  }
  const clienteEmail = await prisma.usuario.findMany({
    where: { email: email }
  })
  const clienteCpf = await prisma.usuario.findMany({
    where: { cpf: cpf }

  })

  if (clienteEmail.length > 0) {
    res.status(400).json({ erro: "Email ja cadastrado" })

    return
  }
  if (clienteCpf.length > 0) {
    res.status(400).json({ erro: "Cpf ja cadastrado" })


    return
  }

  // 12 é o número de voltas (repetições) que o algoritmo faz
  // para gerar o salt (sal/tempero)
  const salt = bcrypt.genSaltSync(12)
  // gera o hash da senha acrescida do salt
  const hash = bcrypt.hashSync(senha, salt)

  // para o campo senha, atribui o hash gerado
  try {
    const cliente = await prisma.usuario.create({
      data: { nome, email, cpf, senha: hash }
    })
    res.status(201).json(cliente)
  } catch (error) {


    res.status(400).json(error)
  }
})

// READ
router.get("/all", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany()
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get("/", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      where: { deleted: false }
    })
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(400).json(error)
  }
})

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const usuario = await prisma.usuario.update({ where: { id: id }, data });
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar usuário." });
  }
});
// DELETE USANDO SOFT DELETE(DELETA FOFO)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const usuario = await prisma.usuario.update({ where: { id: id }, data: { deleted: true } });
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar usuário." });
  }
});
// RETORNO POR ID
async function buscarUsuarioPorId(id: string) {
  return await prisma.usuario.findUnique({
    where: { id },
    include: { dispositivos: true }
  });
}
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuarios = await buscarUsuarioPorId(id);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json(error);
  }
});
//RETORNA TODOS ALERTAS
router.get('/alertas/historico/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;

  try {
    // 1️⃣ Busca todos os dispositivos do usuário
    const dispositivos = await prisma.dispositivo.findMany({
      where: { usuarioId },
      select: { id: true }
    });

    if (dispositivos.length === 0) {
      res.status(200).json([])
    }

    // 2️⃣ Extrai todos os IDs de dispositivos
    const idsDispositivos = dispositivos.map((d: any) => d.id);

    const alertas = await prisma.alerta.findMany({
      where: {
        dispositivoId: { in: idsDispositivos }
        // opcional: adicionar filtros extras, ex: activade: true
      }, include: { dispositivo: true },
      orderBy: { createdAt: "desc" }
    });
    if (alertas.length == 0){
      res.status(200).json([])
    }

    // 4️⃣ Retorna tudo num único JSON
    res.status(200).json(alertas);

  } catch (error) {
    console.error(error);
    res.status(400).json({
      erro: "Erro ao buscar alertas do usuário",
      detalhes: error
    });
  }
});
//RETORNA TODOS ALERTAS TIVOS
router.get('/alertas/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;

  try {
    // 1️⃣ Busca todos os dispositivos do usuário
    const dispositivos = await prisma.dispositivo.findMany({
      where: { usuarioId },
      select: { id: true }
    });

    if (dispositivos.length === 0) {
      res.status(200).json(res.status(200).json([])
    )
    }

    // 2️⃣ Extrai todos os IDs de dispositivos
    const idsDispositivos = dispositivos.map((d: any) => d.id);

    const alertas = await prisma.alerta.findMany({
      where: {
        dispositivoId: { in: idsDispositivos },
        ativo: true

        // opcional: adicionar filtros extras, ex: activade: true
      },include: { dispositivo: true, alertaTipo:true },
      orderBy: { createdAt: "desc" }
    });
    if (alertas.length === 0){
      res.status(200).json([])
    }
    // 4️⃣ Retorna tudo num único JSON
    res.status(200).json(alertas);

  } catch (error) {
    console.error(error);
    res.status(400).json({
      erro: "Erro ao buscar alertas do usuário",
      detalhes: error
    });
  }
});


//LOGIN
router.post("/login", async (req, res) => {
  const { email, senha } = req.body

  const mensaPadrao = "Login ou senha incorretos"
  if (!email || !senha) {
    res.status(400).json({ erro: mensaPadrao })

    return
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { email }
    })

    if (usuario == null) {
      res.status(400).json({ erro: mensaPadrao })

      return
    }
    const senhaValida = await bcrypt.compareSync(senha, usuario.senha);


    if (senhaValida) {
      res.status(200).json({ id: usuario.id, nome: usuario.nome })

    } else {

      res.status(400).json({ erro: mensaPadrao })
    }
  } catch (error) {
    res.status(400).json(error)
  }
})
// VINCULA UM DISPOSITIVO A UM USUARIO

router.post('/vincularDispositivo', async (req, res) => {
  const { numero_dispositivo, id_usuario, nome_dispositivo } = req.body;

  if (!numero_dispositivo || !id_usuario) {
    res.status(400).json({ erro: "Informe todos os dados" })
    console.log("!-")

    return
  }


  const dispositivos = await prisma.dispositivo.findMany({
    where: { numero_de_serie: numero_dispositivo }
  })
  console.log(numero_dispositivo)
  console.log(nome_dispositivo)
  console.log(id_usuario)
  if (dispositivos.length <= 0) {
    res.status(400).json({ erro: "Dispositivo não encontrado" })
    console.log("!")
    return
  }
  const usuarios = await prisma.usuario.findMany({
    where: { id: id_usuario }
  })
  const usuario_dispositivos = dispositivos[0].usuarioId


  if (usuarios.length <= 0) {
    res.status(400).json({ erro: "Usuario não encontrado" })
    console.log("!!")
    return
  }

  if (usuario_dispositivos != null) {
    res.status(400).json({ erro: "Dispositivo já cadastradado" })
    console.log("!!!")
    return
  }

  try {
      if (nome_dispositivo){
        const vincular = await prisma.dispositivo.update({ where: { id: dispositivos[0].id }, data:{ activade: true, usuarioId: id_usuario, nome: nome_dispositivo} });
        res.status(201).json(vincular)
      } else {
         const vincular = await prisma.dispositivo.update({ where: { id: dispositivos[0].id }, data:{ activade: true, usuarioId: id_usuario} });
        res.status(201).json(vincular)
      }
    } catch (error) {  
    res.status(400).json(error)
  }
})



export default router