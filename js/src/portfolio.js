// portfolio.js

(function($){

var win = $(window);
var winH = win.outerHeight();
var st = win.scrollTop();
var gnB = $('.gnb_box');
var gnBli = gnB.children('li');
var abBox = $('#aboutBox');
var abCon = abBox.children('.container');
var abConot = abCon.offset().top;
var movesc = st - abConot + winH;
var moveper =  parseInt(movesc / winH * 100);
var checkLi = moveper / 100;

win.on('scroll', function(){
  st = win.scrollTop();
  movesc = st - abConot + winH;
  checkLim = movesc
  if(checkLim < 0){
    checkLi = 0;
  }else{
    checkLi = parseInt(checkLim/1000) + 1;
  }
  console.log(checkLim);
  gnBli.eq(checkLi).addClass('act');
  gnBli.eq(checkLi).siblings().removeClass('act');
})
$("html, body").animate({ scrollTop: 0 }, "slow"); 
})(jQuery);
