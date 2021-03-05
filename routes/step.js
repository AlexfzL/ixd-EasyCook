var recipes = require('../recipes.json');

exports.view = function(req, res) {
  var name = req.params.name;
  var recipe = getRecipe(name);
  res.render("step", recipe)
}

function getRecipe(name) {
  var i = 0;
  var target = recipes['recipes'][i];
  while (target.name !== name) {
    i++;
    target = recipes['recipes'][i];
  }
  return target;
}