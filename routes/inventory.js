var items = require("../items.json");

exports.view = function(req, res) {
  res.render('inventory', items);
};

exports.addItem = function(req, res) {
  var name = req.body.name;
  var quantity = req.body.quantity;
  var unit = req.body.unit;
  var newItem = {
    "name": name,
    "quantity": quantity,
    "unit": unit
  };
  console.log(newItem);
  items.items.push(newItem);
  res.render('inventory', items);
}

exports.deleteItem = function(req, res) {
  var name = req.body.name;
  items.items = items.items.filter(function(item) {
    return item.name !== name
  });
  console.log(items);
  res.render('inventory', items);
}