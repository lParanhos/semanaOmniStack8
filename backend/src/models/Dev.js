const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true // Obrigatoriedade
    },
    user: {
        type: String,
        required: true,
    },
    bio: String, // Quando não usamos o required podemos passar direto o tipo
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId, // Faz uma relação com a coleçao dev pelo id
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
}, {
        timestamps: true, // Criar uma coluna de forma automatica createdAt e updatedAt e vai gravar 
        // de forma automatica a hora de criação do registro e de update respectivamente
    });

module.exports = model('Dev', DevSchema);