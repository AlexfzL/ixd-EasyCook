$(document).ready(function() {
  initializePage();
});

function initializePage() {
  // your code here
  console.log("Page ready");
  initInventoryForm();
  $('#inventory').click(function() {
    $.get('inventory');
  })
}

// init RSVP form submit listener
function initInventoryForm() {
  $('#add-item-form').submit(function(e) {
    e.preventDefault();
    console.log("submitting form...");
    var item = $('#add-item-form').serializeArray();
    console.log(item[0]['value']);
    $.post('addItem', { name: item[0]['value'], quantity: item[1]['value'], unit: item[2]['value'] }, postCallback);
  })

  function postCallback(res) {
    alert("AddItem form successfully submitted");
    $('#add-item-form').val('');
  }
}