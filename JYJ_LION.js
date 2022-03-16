$(".closeBtn").on("click", function () {
  $(".container").slideUp();
});

$(".hover").on("mouseover", function () {
  $(this).addClass("hoverEvent");
});
$(".hover").on("mouseleave", function () {
  $(this).removeClass("hoverEvent");
});

var count = 0;
$(".loginCheck").on("click", function () {
  count += 1;
  if (count % 2 == 1) {
    $(".loginCheck").css({
      color: "rgb(51, 129, 218)",
    });
    $(".checkIcon").attr("src", "./JYJ_LION_img/icon_check.png");
  } else {
    $(".loginCheck").css({
      color: "#999",
    });
    $(".checkIcon").attr("src", "./JYJ_LION_img/icon_check_empty.png");
  }
});
