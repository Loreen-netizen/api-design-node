var lionRouter = require('express').Router();
var _ = require("lodash")

var lions = [];
var id = 0;

var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = ":"+id ;
    // console.log({id})
  }
  next();
};

lionRouter.param('id', function(req, res, next, id) {
   var lion = _.find(lions, {id: id});
console.log(lion+"i am req.lion")
  if (lion) {
    req.lion = lion;
    res.send(req.lion)
    next();
  } else {
    console.log("req.lion is empty")
    res.send({});
  }
});

lionRouter.get('/:id', function(err, req, res, next){

  let lion1 = req.lion;
  if(lion1){
  console.log({lion1} +"asdfgsdfgsd")
  res.json(lion1)}
  else{console.log(err)
    res.send(err)};
  next()
});
lionRouter.get('/', function(req, res){
  res.json(lions);
});



lionRouter.post('/', updateId, function(req, res) {
  var lion = req.body;
  //console.log({lion})

  lions.push(lion);

  res.json(lion);
});


lionRouter.put('/:id', function(req, res) {
  var update = req.body;
  if (update.id) {
    delete update.id
  }

  var lion = _.findIndex(lions, {id: req.params.id});
  if (!lions[lion]) {
    res.send();
  } else {
    var updatedLion = _.assign(lions[lion], update);
    res.json(updatedLion);
  }
});

module.exports = lionRouter;
