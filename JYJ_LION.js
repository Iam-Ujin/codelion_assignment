// 로그인 페이지 닫기버튼
$(".closeBtn").on("click", function () {
  $(".container").slideUp();
});

// 텍스트 hover시 글자 색상 변경
$(".hover").on("mouseover", function () {
  $(this).addClass("hoverEvent");
});
$(".hover").on("mouseleave", function () {
  $(this).removeClass("hoverEvent");
});

// 로그인 상태 유지 체크 토글
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

// 회원가입 버튼 클릭
$(".join").on("click", function () {
  $(".loginBox").slideUp();
  $(".joinBox").slideDown();
});

// 회원가입 닫기 버튼
$(".joinCloseBtn").on("click", function () {
  $(".loginBox").slideDown();
  $(".joinBox").slideUp();
});

// 회원가입 완료 버튼 클릭
$(".joinBtn").on("click", function (e) {
  if (
    $(".name_val").val() == "" ||
    $(".id_val").val() == "" ||
    $(".pw1_val").val() == "" ||
    $(".pw2_val").val() == ""
  ) {
    alert("빈칸을 채워주세요 🥺");
  } else {
    alert("회원가입 완료 😁");
    $(".name_val").val("");
    $(".id_val").val("");
    $(".pw1_val").val("");
    $(".pw2_val").val("");
    $(".loginBox").slideDown();
    $(".joinBox").slideUp();
  }
});

// 아이디찾기 버튼 클릭
$(".findId").on("click", function () {
  $(".loginBox").slideUp();
  $(".findIdBox").slideDown();
});

// 아이디찾기 닫기 버튼
$(".findIdCloseBtn").on("click", function () {
  $(".loginBox").slideDown();
  $(".findIdBox").slideUp();
});
