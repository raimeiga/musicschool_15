$(function () {

  $('.c-ham').click(function(){
    $(this).toggleClass('active')
    $('.l-header__nav').toggleClass('active')
  })
  $('.l-header__list a').click(function(){
    $('.c-ham').removeClass('active')
    $('.l-header__nav').removeClass('active')    
  })

//スライダー
$(".js-slider").slick({
 autoplay: false,  //自動再生
 autoplaySpeed: 1000,    
 // arrows: true,
 slidesToShow: 3, // 3枚ずつ表示
 slidesToScroll: 1, // 1枚ずつスクロール
 // ↓「Previous」「Next」の文字を非表示にするために↓を書いている
 prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="Previous"></button>',  
 nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
 
 // 「Previous」「Next」の文字を表記したければ↓のようにすればよい
 //prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="Previous">Previous</button>',  
 //nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="Next">Next</button>',
 responsive:[
  {
      breakpoint: 768,
      settings:{
          slidesToShow:1
      }
  }
]

});


});