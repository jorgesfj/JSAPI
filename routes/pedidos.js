const { Router } = require('express')
const express = require('express')
const router = express.Router()


//RETORNA TODOS OS PEDIDOS
router.get('/', (req,res,next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de PEDIDOS'
    })
})

//INSERE UM PEDIDOS
router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de PEDIDOS',
        pedidoCriado: pedido
    })
})

//RETORNA OS DADOS DE UM PEDIDOS
router.get('/:id_pedido', (req, res, next) =>{
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes do Pedido',
        id_pedido: id
    })
})

//REMOVE UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de PEDIDOS'
    })
})

module.exports = router