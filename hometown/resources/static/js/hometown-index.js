$(function(){
  //ckeditor
  var ckEditor = function (id) {
    this.id = id;
    CKEDITOR.inline(id, {
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
  }
  new ckEditor('main-describe');
  new ckEditor('describe1');
  new ckEditor('describe2');
  new ckEditor('double-dec1-1');
  new ckEditor('double-dec1-2');
  new ckEditor('double-dec2-1');
  new ckEditor('double-dec2-2');
  new ckEditor('double-dec3-1');
  new ckEditor('double-dec3-2');
  new ckEditor('end');
  //导航
  $.extend(jQuery.easing , {
    easeIn: function(x, t, b, c, d) {
      return c*(t/=d)*t + b;
    }
  })
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
    },200,'easeIn');
  });
  $('header .menu .menu-btn .icon-menu').on('click', function() {
    $('header .menu nav').animate({
      'left': "0"
    },200,'easeIn');
  });
  //空白填充
  $('.space-fill-active .space-fill-ball').bind('mousedown', function(event) {
    event = event || window.event;
    var maxHeight = 320; //最大高度
    var minHeight = 32; //最小高度
    var ballRadius = $(this).width()/2; //小球半径
    var disWidth = $(this).parent()[0].offsetWidth;
    var offset_y = $(this)[0].offsetTop;
    var mouse_y = event.pageY;
    var _this = this;
    $(document).bind('mousemove', function(event) {
      $(_this).parent().parent().parent().focus();
      $('.dec').attr('contenteditable',false);
      event = event || window.event;
      //拖动小球时,禁止其它元素的hover
      $('body').addClass('space-active');
      // 移动距离
      var _y = event.pageY - mouse_y;
      var now_y = (offset_y + _y) + 'px';
      var paddingBottom = ((offset_y + _y + ballRadius) / disWidth) * 100 + '%';
      $(_this).parent().css({
        //"height": boxHeight
        'paddingBottom': paddingBottom
      });
      //盒子高度
      var boxOffsetHeight = $(_this).parent()[0].offsetHeight;
      if (boxOffsetHeight>=maxHeight) {
        $(_this).parent().css({
          'paddingBottom': (maxHeight / disWidth) * 100 + '%'
        });
      }else if(boxOffsetHeight<=minHeight){
        $(_this).parent().css({
          'paddingBottom': (minHeight / disWidth) * 100 + '%'
        });
      }
      //最外层div一直获取内层div高度
      $(_this).parent().parent().css({
        //"height": boxOffsetHeight
      });
    });
    $(document).bind("mouseup", function() {
      $('body').removeClass('space-active');
      $(document).unbind("mousemove").unbind("mouseup");
      $('.dec').attr('contenteditable',true);
    });
  })
});
