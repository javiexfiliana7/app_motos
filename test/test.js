var assert = require("assert");
web_motos_enduro = require(__dirname+"/../app.js");

describe('web_motos_enduro', function(){
    describe('Probando el inicio del servicio...', function(){
        it('El servicio esta trabajando!', function(){
            assert(web_motos_enduro, "servicio parado!");
        });
    });
});
