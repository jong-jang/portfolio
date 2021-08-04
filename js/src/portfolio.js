// portfolio.js

(function($){

// 변수
var win = $(window);
var winH = win.outerHeight(); // 스크린 높이
var winC = winH / 3; // 화면상 1 / 3
var st = win.scrollTop(); // 스크롤 값
var movesc = st - abConot + winH; // 스크롤 연산 값
var moveper =  parseInt(movesc / winH * 100); // 화면 100 분할 단위
var checkLi = moveper / 100; // 구분 하기 위한 연산
var checkLim;
var setTime = 1500;
// header 변수
var gnB = $('.gnb_box'); // 상단 네비
var gnBli = gnB.children('li'); // 네비 요소
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
// contact 변수
var ctBox = $('#contactBox');
var ctH2 = ctBox.find('h2');
var comen = $('.comen');

// 이벤트
win.on('scroll', function(){
  st = win.scrollTop();
  movesc = st - abConot + winH; // 스크롤 연산 값
  moveper =  parseInt(movesc / winH * 100); // 화면 100 분할 단위
  console.log(moveper);

  if(moveper < 0){
    gnBli.eq(0).addClass('act');
    gnBli.eq(0).siblings().removeClass('act');
  }
  if(moveper >= 0){
    aboutH2.fadeIn(setTime);
  }
  if(moveper >= 50){
    aboutP.animate({left:25 + '%'},setTime);
    aboutS.animate({right:20 + '%'},setTime);
    gnBli.eq(1).addClass('act');
    gnBli.eq(1).siblings().removeClass('act');
  }
  if(moveper >= 120){
    pfH2.fadeIn(setTime);
  }
  if(moveper >= 150){
    pfC.animate({top:0, opacity:1}, setTime);
    gnBli.eq(2).addClass('act');
    gnBli.eq(2).siblings().removeClass('act');
  }
  if(moveper >= 230){
    ctH2.fadeIn(setTime);
    comen.animate({opacity:1, marginTop:0}, setTime);
  }
  if(moveper >= 250){
    gnBli.eq(3).addClass('act');
    gnBli.eq(3).siblings().removeClass('act');
  }
});

$("html, body").animate({ scrollTop: 0 }, "slow"); 
})(jQuery);
