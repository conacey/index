$(function(){
  //CKEditor
  CKEDITOR.inline('describe1', {
    toolbar: [
      [
        'Font',
        'Format',
        'Bold',
        'JustifyLeft',
        'JustifyCenter',
        'JustifyRight',
        'BulletedList',
        'NumberedList',
        'Link',
        'Unlink',
        'Underline',
        'TextColor'
      ]
    ]
  });
  //轮播
  var swiper = new Swiper('.carousel1 .swiper-container', {
    pagination: '.swiper-pagination',
    loop:true,   //是否循环
    grabCursor: true,  //光标在Swiper上时成手掌状
    paginationClickable:true,
    autoplay: 3000,
    grabCursor:true,
    autoplayDisableOnInteraction: false, //滑动之后是否继续轮播\
    speed: 600,
    nextButton: '#right',
    prevButton: '#left'
  });
  //导航
  $('header nav a').on('mouseenter',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('header nav').on('mouseleave',function(){
    $('header nav a').addClass('active');
  })
  //移动端导航栏
  $('header .menu nav .close').on('click', function() {
    $(this).parent().animate({
      'left': "-100vw"
    });
  });
  $('header .menu .menu-btn .icon-menu').on('click', function() {
    $('header .menu nav').animate({
      'left': "0"
    });
  });
  //空白填充
  $('.space-fill-ball').bind('mousedown', function(event) {
    event = event || window.event;
    var disWidth = $(this).parent()[0].offsetWidth;
    var offset_y = $(this)[0].offsetTop;
    var mouse_y = event.pageY;
    var _this = this;
    $(document).bind('mousemove', function(event) {
      event = event || window.event;
      // 移动距离
      var _y = event.pageY - mouse_y;
      var now_y = (offset_y + _y) + 'px';
      var paddingBottom = ((offset_y + _y + 6) / disWidth) * 100 + '%';
      $(_this).parent().css({
        //"height": boxHeight
        'paddingBottom': paddingBottom
      });
      //盒子高度
      var boxOffsetHeight = $(_this).parent()[0].offsetHeight;
      if (boxOffsetHeight>=317) {
        $(_this).parent().css({
          'paddingBottom': (320 / disWidth) * 100 + '%'
        });
      }else if(boxOffsetHeight<=32){
        $(_this).parent().css({
          'paddingBottom': (32 / disWidth) * 100 + '%'
        });
      }
      //最外层div一直获取内层div高度
      $(_this).parent().parent().css({
        //"height": boxOffsetHeight
      });
    });
    $(document).bind("mouseup", function() {
      $(document).unbind("mousemove").unbind("mouseup");
    });
  })
})
