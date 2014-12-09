var R = require('ramda');



R.c = R.compose;
R.p = R.pipe;

R.map.c = R.curry(function(fns, lst){
  fns = [].concat(fns);
  return R.map(R.apply(R.c, fns), lst);
});
R.map.p = R.curry(function(fns, lst){
  fns = [].concat(fns);
  return R.map(R.apply(R.p, fns), lst);
});

module.exports = R;
