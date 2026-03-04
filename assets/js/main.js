$(document).ready(function () {
  $("#subscription").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    errorElement: "span",
  });
});
