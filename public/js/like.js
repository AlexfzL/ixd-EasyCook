$(document).ready(function() {
  initializePage();
});

function initializePage() {
  // your code here
  console.log("Like Page ready");
  // dislike
  $(".dislikeBtn").click(function(e) {
    e.preventDefault();
    var id = $(this).context.parentElement.id;
    console.log(id);
    $.post("/dislike", { id: id });
    window.location.reload();
  });
  // like
  $(".likeBtn").click(function(e) {
    e.preventDefault();
    var id = $(this).context.parentElement.id;
    console.log(id);
    $.post("/like", { id: id });
    window.location.reload();
  });
};