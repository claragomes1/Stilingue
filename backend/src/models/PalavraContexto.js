const mongoose = require('mongoose');

const PalavraContextoSchema = new mongoose.Schema({ 
    palavra: String,
    //qtdContexto: Number,
    contexto: String,
    contexto2: String,
    contexto3: String,
    sinonimo: String,
    sinonimo2: String,
    sub1_c1: String,
    sub2_c1: String,
    sub1_c2: String,
    sub2_c2: String,
    sub1_c3: String,
    sub2_c3: String,
    verbo1_c1: String,
    verbo2_c1: String,
    verbo1_c2: String,
    verbo2_c2: String,
    verbo1_c3: String,
    verbo2_c3: String,
    adj1_c1: String,
    adj2_c1: String,
    adj1_c2: String,
    adj2_c2: String,
    adj1_c3: String,
    adj2_c3: String,
    adv1_c1: String,
    adv2_c1: String,
    adv1_c2: String,
    adv2_c2: String,
    adv1_c3: String,
    adv2_c3: String  
});

module.exports = mongoose.model('PalavraContexto', PalavraContextoSchema);