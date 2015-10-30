var _ = require('underscore');

// TODO: This shoul be read from a database
var heroes = [
  { 
    name: 'KTM EXC 300cc 2t', 
    facts: [
      'La clásica mecánica 2 tiempos de la 250 EXC asegura ligereza y potencia para esta clásica del catálogo enduro KTM que en 2015 ' +
      'ofrece nueva decoraión con el chasis pintado en naranja así como nuevas llantas Giant mecanizadas en aluminio y anodizadas en negro, lo mismo que el manillar Neken ajustable en cuatro posiciones.'] 
  },
  {
    name: 'GAS GAS EXC 300cc 2t',
    facts: [
      'Sin duda la gama dos tiempos es la que recibe la mayor parte de las novedades de cara a los modelos 2015, cambios en lo más profundo de su corazón: el motor. De este modo, el nuevo sistema de reglaje externo centrífugo persigue el objetivo de acceder desde fuera al muelle centrífugo de precarga para personalizar las prestaciones del motor al gusto de cada cliente.']
  },
  {
    name: 'YAMAHA Trail 450cc 4t',
    facts: [
      'Son motocicletas serias y agresivas que hemos desarrollado para pilotos jóvenes que sólo se conforman con lo mejor.']
  }
];


exports.index = function(req, res) {
  var names = heroes.map(function(p) { return p.name; });
  res.render('index', { heroes: names })
};

exports.hero = function(req, res) {
  var facts = _(heroes).detect(function (p) { 
    return p.name == req.params.name;
  }).facts;
  res.json(facts);
}


exports.addFact = function(req, res) {
  var hero = _(heroes).detect(function(p) {
    return p.name == req.body.name;
  });
  if(req.body.fact==''){
	console.log('comentario nulo');
	var assert = require("assert");
	assert(req.body.fact,"COMENTARIO NULO")
  }
  else{
  	hero.facts.push(req.body.fact);
	console.log('Nuevo comentario en ' + hero.name + ': ' + req.body.fact); 
  }
  
  
  res.json({status: 'ok' });
}
