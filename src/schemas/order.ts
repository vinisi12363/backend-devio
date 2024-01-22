const Joi = require('joi');

const orderSchema = Joi.object({
    id: Joi.number().integer().min(1),
    total: Joi.number().precision(2).positive().required(),
    products: Joi.array().items(
        Joi.object({
            produto_id: Joi.number().integer().min(1).required(),
            codigo: Joi.string().required(),
            nome: Joi.string().required(),
            descricao: Joi.string().required(),
            preco: Joi.number().precision(2).positive().required(),
            categoria: Joi.string().required(),
            imagem: Joi.string().required(),
            quantidade: Joi.number().integer().min(1).required()
        })
    ).required(),
    metodoPagamento: Joi.string().valid('dinheiro', 'cartão', 'pix', null),
    troco: Joi.number().precision(2).positive(),
    observacao: Joi.string().max(255),
    nomeCliente: Joi.string().max(100).required(),
    numeroPedido: Joi.number().integer().min(1),
    status: Joi.string().valid('pendente', 'preparando', 'concluído', 'entregue').required()
});