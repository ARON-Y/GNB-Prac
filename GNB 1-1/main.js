$(document).ready(function () {
  $("#gnb>li").hover(
    //hover(함수, 함수)
    function () {
      $(".nav_bg, #gnb>li>ul").stop().slideDown();
    },
    function () {
      $(".nav_bg, #gnb>li>ul").stop().slideUp();
    }
  );
});
