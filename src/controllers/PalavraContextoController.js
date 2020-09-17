var request = require('request'); //Carregar os dados da pagina
var cheerio = require('cheerio'); //Retirar informações da página

const PalavraContexto = require('../models/PalavraContexto');

module.exports = {
    async index(req, res) {
        const palavrasContexto = await PalavraContexto.find({});
        return res.json(palavrasContexto);
    },

    async store(req, res) {


        var qtd_contextos = 0;
        var qtd_sinonimos = 0;

        var array_contextos = []
        var array_sinonimos = []


        request('https://dicionariocriativo.com.br/brainstorm/achar/', function (error, response, body) {//Pegar a palavra digitada

            if (error) console.log('Erro: ' + error);
            var $ = cheerio.load(body);


            //CONTEXTOS
            $('.c_border li').each(function () {
                var contexto = $(this).find('.c_primary_hover').text().trim();
                qtd_contextos = qtd_contextos + 1;
                array_contextos.push(contexto);
                //console.log('contexto: ' + contexto + 'qtd_contextos: ' + qtd_contextos);
            });

            //SINONIMOS
            $('.contentListData.sinant').each(function () {
                var sinonimo = $(this).find('p').text().trim();
                qtd_sinonimos = qtd_sinonimos + 1;
                var sinonimosAux = sinonimo.replace(/,/g, "");
                array_sinonimos = sinonimosAux.split(" ");
                array_sinonimos.splice(0, 2);
                //    console.log(array_sinonimos );
            });


            


        });

        
        //Conseguir gerar uma string

        const palavra = "achar";
        const qtdContexto = array_contextos.length;
        const contexto = array_contextos[0];
        const sin1 = array_sinonimos[0];
        const sin2 = array_sinonimos[1];
        const sin3 = array_sinonimos[2];

        const palavrasContexto = await PalavraContexto.create({
            palavra,
            qtdContexto,
            contexto,
            sin1,
            sin2,
            sin3,
        });
        console.log(array_contextos);
        return res.json(palavrasContexto);

    },







    async delete(req, res) {
        await PalavraContexto.findOneAndDelete(req.params.id);
        return res.send();
    }
};

/*
    request('https://dicionariocriativo.com.br/brainstorm/achar/', function (error, response, body) {//Pegar a palavra digitada

        if (error) console.log('Erro: ' + error);
        var $ = cheerio.load(body);

        var qtd_contextos = 0;
        var qtd_sinonimos = 0;

        var array_contextos = []
        var array_sinonimos = []
        var array_substantivos = []
        var array_verbos = []
        var array_adverbios = []
        var array_adjetivos = []

        var json = {
            contexto: "",
            sinonimo: [{
                sin1: "",
                sin2: "",
                sin3: "",
            }],
            substantivo: [{
                sub1: "",
                sub2: "",
                sub3: "",
            }],
            verbo: [{
                verbo1: "",
                verbo2: "",
                verbo3: "",
            }],
            adjetivo: [{
                adj1: "",
                adj2: "",
                adj3: "",
            }],
            adverbio: [{
                adv1: "",
                adv2: "",
                adv3: "",
            }],
        }



        //CONTEXTOS
        $('.c_border li').each(function () {
            var contexto = $(this).find('.c_primary_hover').text().trim();
            qtd_contextos = qtd_contextos + 1;
            array_contextos.push(contexto);
            //console.log('contexto: ' + contexto + 'qtd_contextos: ' + qtd_contextos);
        });

        //SINONIMOS
        $('.contentListData.sinant').each(function () {
            var sinonimo = $(this).find('p').text().trim();
            qtd_sinonimos = qtd_sinonimos + 1;
            var sinonimosAux = sinonimo.replace(/,/g, "");
            array_sinonimos = sinonimosAux.split(" ");
            array_sinonimos.splice(0, 2);
            //    console.log(array_sinonimos );
        });


        //PALAVRAS RELACIONADAS: SUBSTANTIVOS
        //Percorrer o array, verificar se não é um espaço vazio, pegar as 3 primeiras palavras
        array_contextos.forEach(item => {
            var linkSub = "https://dicionariocriativo.com.br/analogico/achar/substantivo/";
            var linkVerbo = "https://dicionariocriativo.com.br/analogico/achar/verbo/";
            var linkAdjetivo = "https://dicionariocriativo.com.br/analogico/achar/adjetivo/";
            var linkAdverbio = "https://dicionariocriativo.com.br/analogico/achar/adverbio/";

            var linkContextoSub = linkSub.concat(item);
            var linkContextoVerbo = linkVerbo.concat(item);
            var linkContextoAdjetivo = linkAdjetivo.concat(item);
            var linkContextoAdverbio = linkAdverbio.concat(item);

            //SUBTANTIVO
            request(linkContextoSub, function (error, response, body) {
                //console.log(linkContexto)
                if (error) console.log('Erro: ' + error);
                var $ = cheerio.load(body);
                var count_substantivos = 0
                array_substantivos = []
                $('.item.grid-100.tablet-grid-100 ul').each(function () {
                    var substantivos = $(this).children().first().text().trim();
                    count_substantivos = count_substantivos + 1;
                    array_substantivos.push(substantivos);
                });
                //console.log(array_substantivos)
            });

            //VERBO
            request(linkContextoVerbo, function (error, response, body) {
                //console.log(linkContexto)
                if (error) console.log('Erro: ' + error);
                var $ = cheerio.load(body);
                var count_verbos = 0
                array_verbos = []
                $('.item.grid-100.tablet-grid-100 ul').each(function () {
                    var verbos = $(this).children().first().text().trim();
                    count_verbos = count_verbos + 1;
                    array_verbos.push(verbos);
                });
                //console.log(array_verbos)
            });


            //ADJETIVO
            request(linkContextoAdjetivo, function (error, response, body) {
                //console.log(linkContexto)
                if (error) console.log('Erro: ' + error);
                var $ = cheerio.load(body);
                var count_adjetivos = 0
                array_adjetivos = []
                $('.item.grid-100.tablet-grid-100 ul').each(function () {
                    var adjetivos = $(this).children().first().text().trim();
                    count_adjetivos = count_adjetivos + 1;
                    array_adjetivos.push(adjetivos);
                });

                //console.log(array_adjetivos.length)
            });


            //ADVERBIO
            request(linkContextoAdverbio, function (error, response, body) {
                //console.log(linkContexto)
                if (error) console.log('Erro: ' + error);
                var $ = cheerio.load(body);
                var count_adverbios = 0
                array_adverbios = []
                $('.item.grid-100.tablet-grid-100 ul').each(function () {
                    var adverbios = $(this).children().first().text().trim();
                    count_adverbios = count_adverbios + 1;
                    array_adverbios.push(adverbios);
                });
                //console.log(array_adverbios)
            });



        });


        console.log(array_sinonimos);
    });
})*/


