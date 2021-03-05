var recipes = require('../recipes.json');

exports.view = function(req, res) {
  res.render('index', recipes);
};

exports.filter = function(req, res) {
  var items = require("../items.json");
  var filterRecipes = {
    "recipes": []
  };
  for (var i = 0; i < recipes['recipes'].length; i++) {
    var recipe = recipes['recipes'][i];
    var ingredient = recipe['ingredient'];
    for (var j = 0; j < ingredient.length; j++){
      if(ingredient[j].includes("chicken")) {
        filterRecipes.recipes.push(recipe);
        break;
      }
    }
  }
  res.render('filter', filterRecipes);
};

exports.like = function(req, res) {
  var id = req.body.id;
  for (var i = 0; i < recipes['recipes'].length; i++) {
    var recipe = recipes['recipes'][i];
    if (recipe.id == id) {
      recipe.isLike = true;
    }
  }
  res.render('index', recipes);
}

exports.dislike = function(req, res) {
  var id = req.body.id;
  for (var i = 0; i < recipes['recipes'].length; i++) {
    var recipe = recipes['recipes'][i];
    if (recipe.id == id) {
      recipe.isLike = false;
    }
  }
  res.render('index', recipes);
}

exports.viewRecipe = function(req, res) {
  var name = req.params.name;
  console.log(name);
  var recipe = getRecipe(name);
  res.render('recipe', recipe);
};

function getRecipe(name) {
  var i = 0;
  var target = recipes['recipes'][i];
  while (target.name !== name) {
    i++;
    target = recipes['recipes'][i];
  }
  return target;
}