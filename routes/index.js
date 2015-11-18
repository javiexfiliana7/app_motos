var _ = require('underscore');

// TODO: This shoul be read from a database
var heroes = [
  { 
    name: 'KTM', 
    facts: [
      '50 cv',
      'Disponibe en blanca y naranja',
      '8.000€', 
      ] 
  },
  {
    name: 'Gas Gas',
    facts: [
      '55cv',
      'Disponibe en cualquier color', 
      '8.000€',
      ]
  },
  
  {
    name: 'Honda CRF',
    facts: [
      '30cv', 
      'Roja',
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
