var request = require('request'); //Carregar os dados da pagina
var cheerio = require('cheerio'); //Retirar informações da página
const axios = require('axios');

const PalavraContexto = require('../models/PalavraContexto');
const { findOne } = require('../models/PalavraContexto');


module.exports = {
    async index(req, res) {
        const palavrasContexto = await PalavraContexto.find({});
        return res.json(palavrasContexto);
    },

    async findOne(req, res) {
        const palavrasContexto = await PalavraContexto.findOne(req.params.id);
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
      //  console.log(contextos.next().size())

        const contexto = await contextos.first().next().text()
        const contexto2 = await contextos.first().next().next().text()
        const contexto3 = await contextos.first().next().next().next().text()
        const contexto4 = await contextos.first().next().next().next().next().text()
        const contexto5 = await contextos.first().next().next().next().next().next().text()
        const contexto6 = await contextos.first().next().next().next().next().next().next().text()
        const contexto7 = await contextos.first().next().next().next().next().next().next().next().text()
        const contexto8 = await contextos.first().next().next().next().next().next().next().next().next().text()
        const contexto9 = await contextos.first().next().next().next().next().next().next().next().next().next().text()


        //SINONIMOS ----------------------------------------------------------------------------------------------------------------------------------------------------
        var sinonimos = $('.contentListData.sinant .c_primary_hover').each(function () {
            var sin = $(this).find('a').children().first().next().text().trim();
            return sin;
        });

        const sinonimo = await sinonimos.prev().last().text()
        const sinonimo2 = await sinonimos.last().text()



        //PALAVRAS RELACIONADAS-----------------------------------------------------------------------------------------------------------------------------------------------------------------

        const subs_c1 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto}`;
        const subs_c2 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto2}`;
        const subs_c3 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto3}`;
        const subs_c4 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto4}`;
        const subs_c5 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto5}`;
        const subs_c6 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto6}`;
        const subs_c7 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto7}`;
        const subs_c8 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto8}`;
        const subs_c9 = `https://dicionariocriativo.com.br/analogico/${palavra}/substantivo/${contexto9}`;
        

        const verbo_c1 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto}`;
        const verbo_c2 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto2}`;
        const verbo_c3 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto3}`;
        const verbo_c4 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto4}`;
        const verbo_c5 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto5}`;
        const verbo_c6 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto6}`;
        const verbo_c7 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto7}`;
        const verbo_c8 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto8}`;
        const verbo_c9 = `https://dicionariocriativo.com.br/analogico/${palavra}/verbo/${contexto9}`;

        const adj_c1 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto}`;
        const adj_c2 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto2}`;
        const adj_c3 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto3}`;
        const adj_c4 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto4}`;
        const adj_c5 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto5}`;
        const adj_c6 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto6}`;
        const adj_c7 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto7}`;
        const adj_c8 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto8}`;
        const adj_c9 = `https://dicionariocriativo.com.br/analogico/${palavra}/adjetivo/${contexto9}`;






        //SUBTANTIVO-----------------------------------------------------------------------------------------------------------------------------------------------------
        const response_sub_c1 = await axios.get(subs_c1)
        var $ = cheerio.load(response_sub_c1.data);
        var substantivo1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        
        const sub1_c1 = await substantivo1.first().next().text();
        const sub2_c1 = await substantivo1.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c2 = await axios.get(subs_c2);
        var $ = cheerio.load(response_sub_c2.data);
        var substantivo2 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li ').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c2 = await substantivo2.first().next().text();
        const sub2_c2 = await substantivo2.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c3 = await axios.get(subs_c3);
        var $ = cheerio.load(response_sub_c3.data);
        var substantivo3 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c3 = await substantivo3.first().next().text();
        const sub2_c3 = await substantivo3.last().text()


        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c4 = await axios.get(subs_c4);
        var $ = cheerio.load(response_sub_c4.data);
        var substantivo4 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c4 = await substantivo4.first().next().text();
        const sub2_c4 = await substantivo4.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c5 = await axios.get(subs_c5);
        var $ = cheerio.load(response_sub_c5.data);
        var substantivo5 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c5 = await substantivo5.first().next().text();
        const sub2_c5 = await substantivo5.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c6 = await axios.get(subs_c6);
        var $ = cheerio.load(response_sub_c6.data);
        var substantivo6 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c6 = await substantivo6.first().next().text();
        const sub2_c6 = await substantivo6.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c7 = await axios.get(subs_c7);
        var $ = cheerio.load(response_sub_c7.data);
        var substantivo7 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c7 = await substantivo7.first().next().text();
        const sub2_c7 = await substantivo7.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c8 = await axios.get(subs_c8);
        var $ = cheerio.load(response_sub_c8.data);
        var substantivo8 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c8 = await substantivo8.first().next().text();
        const sub2_c8 = await substantivo8.last().text()

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_sub_c9 = await axios.get(subs_c9);
        var $ = cheerio.load(response_sub_c9.data);
        var substantivo9 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var substantivos = $(this).find('a').text().trim();
            return substantivos;
        });
        const sub1_c9 = await substantivo9.first().next().text();
        const sub2_c9 = await substantivo9.last().text()


        //VERBO---------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c1 = await axios.get(verbo_c1);
        var $ = cheerio.load(response_verbo_c1.data);
        var verbo1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
        });
        const verbo1_c1 = await verbo1.first().next().text();
        const verbo2_c1 = await verbo1.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c2 = await axios.get(verbo_c2);
        var $ = cheerio.load(response_verbo_c2.data);
        var verbo2 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c2 = await verbo2.first().next().text();
        const verbo2_c2 = await verbo2.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c3 = await axios.get(verbo_c3);
        var $ = cheerio.load(response_verbo_c3.data);
        var verbo3 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c3 = await verbo3.first().next().text();
        const verbo2_c3 = await verbo3.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c4 = await axios.get(verbo_c4);
        var $ = cheerio.load(response_verbo_c4.data);
        var verbo4 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c4 = await verbo4.first().next().text();
        const verbo2_c4 = await verbo4.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c5 = await axios.get(verbo_c5);
        var $ = cheerio.load(response_verbo_c5.data);
        var verbo5 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c5 = await verbo5.first().next().text();
        const verbo2_c5 = await verbo5.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c6 = await axios.get(verbo_c6);
        var $ = cheerio.load(response_verbo_c6.data);
        var verbo6 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c6 = await verbo6.first().next().text();
        const verbo2_c6 = await verbo6.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c7 = await axios.get(verbo_c7);
        var $ = cheerio.load(response_verbo_c7.data);
        var verbo7 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c7 = await verbo7.first().next().text();
        const verbo2_c7 = await verbo7.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c8 = await axios.get(verbo_c8);
        var $ = cheerio.load(response_verbo_c8.data);
        var verbo8 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c8 = await verbo8.first().next().text();
        const verbo2_c8 = await verbo8.last().text();

        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_verbo_c9 = await axios.get(verbo_c9);
        var $ = cheerio.load(response_verbo_c9.data);
        var verbo9 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var verbos = $(this).children().first().text().trim();
            return verbos;
        });
        const verbo1_c9 = await verbo9.first().next().text();
        const verbo2_c9 = await verbo9.last().text();


        //ADJETIVO------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c1 = await axios.get(adj_c1);
        var $ = cheerio.load(response_adjetivo_c1.data);
        var adjetivo1 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c1 = await adjetivo1.first().next().text();
        const adj2_c1 = await adjetivo1.last().text();
        
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------

        const response_adjetivo_c2 = await axios.get(adj_c2);
        var $ = cheerio.load(response_adjetivo_c2.data);
        var adjetivo2 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c2 = await adjetivo2.first().next().text();
        const adj2_c2 = await adjetivo2.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c3 = await axios.get(adj_c3);
        var $ = cheerio.load(response_adjetivo_c3.data);
        var adjetivo3 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c3 = await adjetivo3.first().next().text();
        const adj2_c3 = await adjetivo3.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c4 = await axios.get(adj_c4);
        var $ = cheerio.load(response_adjetivo_c4.data);
        var adjetivo4 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c4 = await adjetivo4.first().next().text();
        const adj2_c4 = await adjetivo4.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c5 = await axios.get(adj_c5);
        var $ = cheerio.load(response_adjetivo_c5.data);
        var adjetivo5 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c5 = await adjetivo5.first().next().text();
        const adj2_c5 = await adjetivo5.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c6 = await axios.get(adj_c6);
        var $ = cheerio.load(response_adjetivo_c6.data);
        var adjetivo6 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c6 = await adjetivo6.first().next().text();
        const adj2_c6 = await adjetivo6.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c7 = await axios.get(adj_c7);
        var $ = cheerio.load(response_adjetivo_c7.data);
        var adjetivo7 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c7 = await adjetivo7.first().next().text();
        const adj2_c7 = await adjetivo7.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c8 = await axios.get(adj_c8);
        var $ = cheerio.load(response_adjetivo_c8.data);
        var adjetivo8 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c8 = await adjetivo8.first().next().text();
        const adj2_c8 = await adjetivo8.last().text();

        //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        const response_adjetivo_c9 = await axios.get(adj_c9);
        var $ = cheerio.load(response_adjetivo_c9.data);
        var adjetivo9 = $('.blockList.grid-33.tablet-grid-33.mobile-grid-100.grid-parent li').each(function () {
            var adjetivos = $(this).children().first().text().trim();
        });
        const adj1_c9 = await adjetivo9.first().next().text();
        const adj2_c9 = await adjetivo9.last().text();

  
        
        
        
        const search = await PalavraContexto.create({
            palavra,
            contexto,
            contexto2,
            contexto3,
            contexto4,
            contexto5,
            contexto6,
            contexto7,
            contexto8,
            contexto9,
            sinonimo,
            sinonimo2,
            sub1_c1,
            sub2_c1,
            sub1_c2,
            sub2_c2,
            sub1_c3,
            sub2_c3,
            sub1_c4,
            sub2_c4,
            sub1_c5,
            sub2_c5,
            sub1_c6,
            sub2_c6,
            sub1_c7,
            sub2_c7,
            sub1_c8,
            sub2_c8,
            sub1_c9,
            sub2_c9,
            verbo1_c1,
            verbo2_c1,
            verbo1_c2,
            verbo2_c2,
            verbo1_c3,
            verbo2_c3,
            verbo1_c4,
            verbo2_c4,
            verbo1_c5,
            verbo2_c5,
            verbo1_c6,
            verbo2_c6,
            verbo1_c7,
            verbo2_c7,
            verbo1_c8,
            verbo2_c8,
            verbo1_c9,
            verbo2_c9,
            adj1_c1,
            adj2_c1,
            adj1_c2,
            adj2_c2,
            adj1_c3,
            adj2_c3,
            adj1_c4,
            adj2_c4,
            adj1_c5,
            adj2_c5,
            adj1_c6,
            adj2_c6,
            adj1_c7,
            adj2_c7,
            adj1_c8,
            adj2_c8,
            adj1_c9,
            adj2_c9,
        });

        req.io.emit('search', search);
        return res.json(search);
    },


    //DELETE
    async delete(req, res) {
        await PalavraContexto.findOneAndDelete(req.params.id);
        return res.send();
    },

    async deleteAll(req,res) {
        await PalavraContexto.deleteMany({});
        return res.send();
    },
}

