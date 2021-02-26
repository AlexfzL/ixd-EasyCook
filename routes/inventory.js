var items = require("../items.json");

exports.view = function(req, res) {
  res.render('inventory', items);
};

exports.addItem = function(req, res) {
  var name = req.query.name;
  var quantity = req.query.quantity;
  var unit = req.query.unit;
  var newItem = {
    "name": name,
    "quantity": quantity,
    "unit": unit
  };
  console.log(newItem);
  items.items.push(newItem);
  res.render('inventory', items);
}