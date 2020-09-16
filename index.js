var request = require('request'); //Carregar os dados da pagina
var cheerio = require('cheerio'); //Retirar informações da página

//concat do link com a palavra digitada

request('https://dicionariocriativo.com.br/brainstorm/achar/', function (error, response, body) {//Pegar a palavra digitada
    if (error) console.log('Erro: ' + error);

    var $ = cheerio.load(body);
    var qtd_contextos = 0;
    var array_contextos = []
    var array_sinonimos = [3]

    $('.c_border li').each(function () {
        var contexto = $(this).find('.c_primary_hover').text().trim();
        qtd_contextos = qtd_contextos + 1;
        array_contextos.push(contexto);

        console.log('contexto: ' + contexto + 'qtd_contextos: ' + qtd_contextos);

    });

    console.log(qtd_contextos);
    console.log(array_contextos);


    array_contextos.forEach(item => {
        var link = "https://dicionariocriativo.com.br/brainstorm/achar/";
        var linkContexto = link.concat(item);
        request(linkContexto, function (error, response, body) {//Pegar a palavra digitada
            if (error) console.log('Erro: ' + error);
            var $ = cheerio.load(body);

            $('.contentListData.sinant').each(function () {
                var sinonimo = $(this).find('p').text().trim();
                console.log('sinonimo: ' + sinonimo + ' item: ' + item);

            });
        });

        //A cada contexto fazer um request novamente com o link/contexto OK
        //Sinônimos, PRV, PRA, PRADV, PRS 


    });
});
