import prisma from '../database/client.js'

const controller = {}   // Objeto vazio

controller.create = async function(req, res) {
  try {
    // Conecta-se ao BD e envia uma instrução
    // de criação de um novo documento, com os
    // dados que estão dentro de req.body
    await prisma.curso.create({data: req.body})

    // Envia uma resposta de sucesso ao front-end
    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    // Deu errado: exibe o erro no console do back-end
    console.error(error)
    // Envia o erro ao front-end, com status 500
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.retrieveAll = async function(req, res) {
    try {
      // Manda buscar os dados do servidor
      // Traz ordenado por nome, depois por nivel
      const result = await prisma.curso.findMany({
        orderBy: [
            { nome: 'asc' },     //ordem ascendente
            { nivel: 'asc' }     //ordem ascendente
        ]
      })
      // HTTP 200: Ok
      res.send(result)
    }
    catch(error) {
      // Deu errado: exibe o erro no console do back-end
      console.error(error)
      // Envia o erro ao front-end, com status 500
      // HTTP 500: Internal Server Error
      res.status(500).send(error)
    }
}

controller.retrieveOne = async function(req, res) {
    try {
        const result = await prisma.curso.findUnique({
            where: { id: req.params.id }
        })

        // Encontrou => retorna HTTP 200:OK
        if(result) res.send(result)
        //Não encontrou => retorna HTTP 404: Not found
        else res.status(404).end()
    }
    catch(error) {
        // Deu errado: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.update = async function(req, res) {
    try {
        const result = await prisma.curso.update({
            where: { id: req.params.id },
            data: req.body
        })

        // Encontrou => retorna HTTP 204: No content
        if(result) res.send(204).end()
        //Não encontrou (e não atualizou) => retorna HTTP 404: Not found
        else res.status(404).end()
    }
    catch(error) {
        // Deu errado: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.delete = async function(req, res) {
    try {
        const result = await prisma.curso.delete({
            where: { id: req.params.id },
        })

        // Encontrou => retorna HTTP 204: No content
        if(result) res.send(204).end()

        //Não encontrou (e não atualizou) => retorna HTTP 404: Not found
        else res.status(404).end()
    }
    catch(error) {
        // Deu errado: exibe o erro no console do back-end
        console.error(error)
        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

export default controller