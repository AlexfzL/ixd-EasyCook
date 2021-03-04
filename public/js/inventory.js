$(document).ready(function() {
  initializePage();
});

function initializePage() {
  // your code here
  console.log("Inv Page ready");
  // add item
  $("#add-item-form").submit(function(e) {
    e.preventDefault();
    var unindexed_arr = $(this).serializeArray();
    var indexed_arr = {};
    $.map(unindexed_arr, function(n, i) {
      indexed_arr[n['name']] = n['value'];
    });
    console.log(indexed_arr);
    $.post("/addItem", indexed_arr);
    window.location.reload();
  });

  // delete item
  $(".inv-delBtn").click(function(e) {
    e.preventDefault();
    var name = $(this).parent().prev().text();
    console.log(name);
    $.post("/deleteItem", { name: name });
    window.location.reload();
  });
};