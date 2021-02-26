var data = {
  "item-list": [{
      "name": "bacon",
      "quantity": "2",
      "unit": "pack"
    },
    {
      "name": "chicken breast",
      "quantity": "3",
      "unit": "lb"
    }
  ]
}

exports.view = function(req, res) {
  res.send(data);
}

exports.addItem = function(req, res) {
  var name = req.body.name;
  var quantity = req.body.quantity;
  var unit = req.body.unit;

  console.log(name);

  data["item-list"].push({ "name": name, "quantity": quantity, "unit": unit });
  console.log(data);
  res.send(data);
}