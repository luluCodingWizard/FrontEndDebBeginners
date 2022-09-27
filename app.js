$(document).ready(function () {
  $("#btn-menu").click(function () {
    $("#btn-menu").toggleClass("isOpen");
    $("#right-menu-section").toggle();
  });

  // detect checkboxes toggle button status
  $("#toggle_button").change(function () {
    if ($(this).is(":checked")) {
      $("#monthly_label").removeClass("selected");
      $("#yearly_label").addClass("selected");
    } else {
      $("#monthly_label").addClass("selected");
      $("#yearly_label").removeClass("selected");
    }
  });
});
