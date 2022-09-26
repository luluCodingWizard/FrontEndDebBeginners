$(document).ready(function () {
  $("#btn-menu").click(function () {
    $("#btn-menu").toggleClass("isOpen");
    $("#right-menu-section").toggle();
  });
});
