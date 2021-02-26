var recipes = require('../recipes.json');

exports.view = function(req, res) {
  res.render('like', recipes);
};