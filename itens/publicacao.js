const restful = require('node-restful')

const mongoose = restful.mongoose

const publicacaoSchema = new mongoose.Schema({

    titulo: String, // String is shorthand for {type: String}
    autor: String,
    corpo: String,
    comentarios: [{ corpo: String, data: Date }],
    data: { type: Date, default: Date.now },
    meta: {
        upvote: { type: Number, default: 0 },
        downvote: { type: Number, default: 0 }
    }

})

module.exports = restful.model('Publicacao', publicacaoSchema)