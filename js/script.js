$(function () {
  //   메뉴
  $(".navi > li").hover(function () {
    $(this).find(".submenu").stop().slideToggle(500);
    $(".submenu-bg").stop().slideToggle(500);
  });
  //   슬라이드
  const slideList = $(".slide-list");
  const slideWidth = $(".slide");
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first")).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);
  // 탭메뉴
  $(".tabmenu > li >a").click(function(e){
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
  })
  //  modal
  $(".notice li:first-child").click(function(){
    $("#modal").addClass("active")
  })
  $(".modal-btn").click(function(){
    $("#modal").removeClass("active")
  })
});
