var _ = require('underscore');

// TODO: This shoul be read from a database
var heroes = [
  { 
    name: 'Ford Focus RS', 
    facts: [
      '150 cv',
      'Disponibe en cualquier color',
      '18.000€', 
      ] 
  },
  {
    name: 'Seat Ibiza',
    facts: [
      '120cv',
      'Disponibe en cualquier color', 
      '16.000€',
      ]
  },
  {
    name: 'Fiat multiplá',
    facts: [
      '300cv', 
      'Solo en naranja butano',
  	  '50.000€',
  	  ]
  },
    {
    name: 'Derbi variant',
    facts: [
      '3003cv', 
      'Blanca',
  	  '3.000€',
  	  ]
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
