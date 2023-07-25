var express = require('express')
const restful = require('node-restful')
let mongoose = restful.mongoose



let publicacao = new mongoose.Schema({
    titulo: String,
    autor: String,
    corpo: String,
    comentarios: [{ corpo: String, data: Date, autor: String, meta: { upvote: { type: Number, default: 0 }, downvote: { type: Number, default: 0 }, } }],
    data: { type: Date, default: Date.now },
    meta: {
        upvote: { type: Number, default: 0 },
        downvote: { type: Number, default: 0 },
    }

})

module.exports = restful.model('Publicacao', publicacao)