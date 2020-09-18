var request = require('request'); //Carregar os dados da pagina
var cheerio = require('cheerio'); //Retirar informações da página
const axios = require('axios');

const PalavraContexto = require('../models/PalavraContexto');

function typeOf(obj) {
    if (typeof (obj) == "object") {
        if (obj.length)
            return "array";
        else
            return "object";
    } else
        return typeof (obj);
};

module.exports = {
    async index(req, res) {
        const palavrasContexto = await PalavraContexto.find({});
        return res.json(palavrasContexto);
    },

    async store(req, res) {

        const { palavra } = req.body;
        const response = await axios.get(`https://dicionariocriativo.com.br/brainstorm/${palavra}`);
        var $ = cheerio.load(response.data);


        //CONTEXTOS    
        var contextos = $('.c_border li').each(function () {
            var context = $(this).find('.c_primary_hover').children().first().text().trim();
        });

        const contexto = contextos.first().next().next().next().text()
        const contexto2 = contextos.first().next().text()
        const contexto3 = contextos.first().next().next().text()

        //SINONIMOS ----------------------------------------------------------------------------------------------------------------------------------------------------
        var sinonimos = $('.contentListData.sinant .c_primary_hover').each(function () {
            var sin = $(this).find('a').children().first().next().text().trim();
            return sin;
        });

        const sinonimo = sinonimos.prev().last().text()
        const sinonimo2 = sinonimos.last().text()



        //PALAVRAS RELACIONADAS-----------------------------------------------------------------------------------------------------------------------------------------------------------------

        const subs_c1 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto}`;
        const subs_c2 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto2}`;
        const subs_c3 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto3}`;

        const verbo_c1 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto}`;
        const verbo_c2 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto2}`;
        const verbo_c3 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto3}`;

        const adj_c1 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto}`;
        const adj_c2 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto2}`;
        const adj_c3 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto3}`;

        const adv_c1 = `https://dicionariocriativo.com.br/analogico/${palavra}/adverbio/${contexto}`;
        const adv_c2 = `https://dicionariocriativo.com.br/analogico/${palavra}/adverbio/${contexto2}`;
        const adv_c3 = `https://dicionariocriativo.com.br/analogico/${palavra}/adverbio/${contexto3}`;




        //SUBTANTIVO-----------------------------------------------------------------------------------------------------------------------------------------------------
        const response_sub_c1 = await axios.get(subs_c1);
        var $ = cheerio.load(response_sub_c1.data);
        var substantivo1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c1 = substantivo1.first().text()
        const sub2_c1 = substantivo1.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c2 = await axios.get(subs_c2);
        var $ = cheerio.load(response_sub_c2.data);
        var substantivo2 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c2 = substantivo2.first().text()
        const sub2_c2 = substantivo2.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c3 = await axios.get(subs_c3);
        var $ = cheerio.load(response_sub_c3.data);
        var substantivo3 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c3 = substantivo3.prev().last().text()
        const sub2_c3 = substantivo3.last().text()

        //VERBO---------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c1 = await axios.get(verbo_c1);
        var $ = cheerio.load(response_verbo_c1);
        var verbo1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c1 = verbo1.first().text();
        const verbo2_c1 = verbo1.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c2 = await axios.get(verbo_c2);
        var $ = cheerio.load(response_verbo_c2);
        var verbo2 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c2 = verbo2.first().text();
        const verbo2_c2 = verbo2.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c3 = await axios.get(verbo_c3);
        var $ = cheerio.load(response_verbo_c3);
        var verbo3 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c3 = verbo3.first().text();
        const verbo2_c3 = verbo3.last().text();
        
        
        //ADJETIVO------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c1 = await axios.get(adj_c1);
        var $ = cheerio.load(response_adjetivo_c1);
        var adjetivo1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        console.log(adjetivo1.text())
        const adj1_c1 = adjetivo1.first().text();
        const adj2_c1 = adjetivo1.last().text();
        
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_adjetivo_c2 = await axios.get(adj_c2);
        var $ = cheerio.load(response_adjetivo_c2);
        var adjetivo2 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c2 = adjetivo2.first().text();
        const adj2_c2 = adjetivo2.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c3 = await axios.get(adj_c3);
        var $ = cheerio.load(response_adjetivo_c3);
        var adjetivo3 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c3 = adjetivo3.first().text();
        const adj2_c3 = adjetivo3.last().text();

  
        //ADVERBIO-----------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adverbio_c1 = await axios.get(adv_c1);
        var $ = cheerio.load(response_adverbio_c1);
        var adverbio1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var adverbios = $(this).children().first().text().trim();
        });
        const adv1_c1 = adverbio1.first().text();
        const adv2_c1 = adverbio1.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_adverbio_c2 = await axios.get(adv_c2);
        var $ = cheerio.load(response_adverbio_c2);
        var adverbio1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var adverbios = $(this).children().first().text().trim();
        });
        const adv1_c2 = adverbio1.first().text();
        const adv2_c2 = adverbio1.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adverbio_c3 = await axios.get(adv_c3);
        var $ = cheerio.load(response_adverbio_c3);
        var adverbio1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
            var adverbios = $(this).children().first().text().trim();
        });

        const adv1_c3 = adverbio1.first().text();
        const adv2_c3 = adverbio1.last().text();
        
        
        const search = await PalavraContexto.create({
            palavra,
            contexto,
            contexto2,
            contexto3,
            sinonimo,
            sinonimo2,
            sub1_c1,
            sub2_c1,
            sub1_c2,
            sub2_c2,
            sub1_c3,
            sub2_c3,
            verbo1_c1,
            verbo2_c1,
            verbo1_c2,
            verbo2_c2,
            verbo1_c3,
            verbo2_c3,
            adj1_c1,
            adj2_c1,
            adj1_c2,
            adj2_c2,
            adj1_c3,
            adj2_c3,
            adv1_c1,
            adv2_c1,
            adv1_c2,
            adv2_c2,
            adv1_c3,
            adv2_c3  
        });

        return res.json(search);
    },
    async delete(req, res) {
        await PalavraContexto.findOneAndDelete(req.params.id);
        return res.send();
    }
}

/*  request(adj_c2, function (error, response, body) {
            if (error) console.log('Erro: ' + error);
            var $ = cheerio.load(body);
            var adjetivo = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
                var adjetivos = $(this).children().first().text().trim();
            });

            const adj1_c2 = adjetivo.first().text();
            const adj2_c2 = adjetivo.last().text();
        });

        request(adj_c3, function (error, response, body) {
            if (error) console.log('Erro: ' + error);
            var $ = cheerio.load(body);
            var adjetivo = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
                var adjetivos = $(this).children().first().text().trim();
            });

            const adj1_c3 = adjetivo.first().text();
            const adj2_c3 = adjetivo.last().text();


            request(adv_c1, function (error, response, body) {
            if (error) console.log('Erro: ' + error);
            var $ = cheerio.load(body);
           
        });

        request(adv_c2, function (error, response, body) {
            if (error) console.log('Erro: ' + error);
            var $ = cheerio.load(body);
            var adverbio = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
                var adverbios = $(this).children().first().text().trim();
            });
            const adv1_c2 = adverbio.first().text();
            const adv2_c2 = adverbio.last().text();
        });

        request(adv_c3, function (error, response, body) {
            if (error) console.log('Erro: ' + error);
            var $ = cheerio.load(body);
            var adverbio = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent a').each(function () {
                var adverbios = $(this).children().first().text().trim();
            });
            const adv1_c3 = adverbio.first().text();
            const adv2_c3 = adverbio.last().text();
        });



        });*/