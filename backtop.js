(function(){var $backToTopTxt="Top",$backToTopEle=$('<div class="backToTop"></div>').appendTo($("body")).text($backToTopTxt).attr("title",$backToTopTxt).click(function(){$("html, body").animate({scrollTop:0},240);}),$backToTopFun=function(){var st=$(document).scrollTop(),winh=$(window).height();(st>0)?$backToTopEle.show():$backToTopEle.hide();if(!window.XMLHttpRequest){$backToTopEle.css("top",st+winh-166);}};$(window).bind("scroll",$backToTopFun);$(function(){$backToTopFun();});})();
