const mongoose = require('mongoose');

const PalavraContextoSchema = new mongoose.Schema({
    palavra: String,
    qtdContexto: Number,
    contexto: String,

    sin1: String,
    sin2: String,
    sin3: String,
/*
    sub1: String,
    sub2: String,
    sub3: String,

    verbo1: String,
    verbo2: String,
    verbo3: String,


    adj1: String,
    adj2: String,
    adj3: String,


    adv1: String,
    adv2: String,
    adv3: String,*/

});

module.exports = mongoose.model('PalavraContexto', PalavraContextoSchema);