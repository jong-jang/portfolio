// portfolio.js

(function($){

  $('body,html').animate({scrollTop:0});
  
// 변수
var win = $(window);
var winH = win.outerHeight(); // 스크린 높이
var st = win.scrollTop(); // 스크롤 값
var setTime = 1000;
var wrap = $('#wrap');
var scT = $('.sc_top');
// header 변수
var gnB = $('.gnb_box'); // 상단 네비
var gnBli = gnB.children('li'); // 네비 요소
var gnBliA = gnBli.children('a'); // 요소 링크
// about 변수
var abBox = $('#aboutBox'); // about 영역
var abCon = abBox.children('.container'); // about 내부 wrap
var abConot = abCon.offset().top; // about 위 기준 위치
var aboutH2 = abBox.find('h2'); // about의 h2
var aboutP = $('.profile');
var aboutS = $('.skill');
// portfolio 변수
var pfBox = $('#portfolioBox');
var pfH2 = pfBox.find('h2');
var pfC = pfBox.find('.container');
var pfConot = pfC.offset().top;
var viewUl = $('.view_wrap');
var viewLi = viewUl.children('li');
var nBtn = $('.nbtn_box').children('button');
var pBtn = $('.pbtn_box').children('button');
// contact 변수
var ctBox = $('#contactBox');
var ctH2 = ctBox.find('h2');
var ctC = ctBox.find('.container');
var ctConot = ctC.offset().top;
var comen = $('.comen');
// 이동 배열 변수
var height = [wrap.offset() , abBox.offset() , pfBox.offset(), ctBox.offset(),];
// 이벤트
// nav 클릭 이벤트
gnBliA.on('click', function(e){
  e.preventDefault();
  
  var _this = $(this).parent().index();
  $("html, body").animate({scrollTop: height[_this].top}, 400);
  gnBli.eq(_this).addClass('act');
  gnBli.eq(_this).siblings().removeClass('act');
});
// portfolio btn 클릭 이벤트
var viewLiLen = viewLi.length;
viewUl.css({width:100*viewLiLen + '%'});
viewLi.css({width:'calc(' + 100 + '%' / viewLiLen + ')'});

var n=0; // 클릭 수
nBtn.on('click', function(e){
  e.preventDefault()
  n++;
  if(n > viewLiLen-1){
    n = viewLiLen-1;
  }
  viewUl.stop().animate({marginLeft:-100*n + '%'});
});
pBtn.on('click', function(e){
  e.preventDefault();
  n--;
  if(n < 0){
    n=0;
  }
  viewUl.stop().animate({marginLeft:-100*n + '%'});
});
// 함수
var setscrollFn = function(Conot){
  var wSt = win.scrollTop();
  movesc = wSt - Conot + winH;
  moveper =  parseInt(movesc / winH * 100);
  if(moveper < 0){
    moveper = 0;
  }else if(moveper > 100){
    moveper = 100;
  }
  console.log(moveper);
  return moveper;
}
var setconFn = function(){
  var scTLen, i, scTeq, scTeqot, h2H, liCheck;
  liCheck = parseInt(win.scrollTop() / 1000);
  i=0;
  scTLen = scT.length; 
  for(; i < scTLen; i++){
  scTeq = scT.eq(i);
  scTeqot = scTeq.offset().top;
  h2H = scTeq.find('h2').outerHeight();
  scResult = scTeqot + h2H;
  setscrollFn(scResult);
  if(moveper > 10){
    scTeq.find('h2').fadeIn();
  }
  if(moveper > 35){
    scTeq.find('.profile').animate({top:0, opacity:1},setTime);
    scTeq.find('.skill').animate({top:0, opacity:1},setTime);
  }
  if(moveper > 45){
    scTeq.find('.container').animate({top:0, opacity:1}, setTime);
    scTeq.find('.comen').animate({opacity:1, marginTop:0}, setTime);
  }
  }
  switch(liCheck){
    case 1:
      gnBli.eq(1).addClass('act');
      gnBli.eq(1).siblings().removeClass('act');
      break;
    case 2:
      gnBli.eq(2).addClass('act');
      gnBli.eq(2).siblings().removeClass('act');
      break;
    case 3:
      gnBli.eq(3).addClass('act');
      gnBli.eq(3).siblings().removeClass('act');
      break;
    default:
      gnBli.eq(0).addClass('act');
      gnBli.eq(0).siblings().removeClass('act');
      break;
  }
}
// 스크롤 이벤트
setconFn();
win.on('scroll', function(){
  setconFn();
});
})(jQuery);
