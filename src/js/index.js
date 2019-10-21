$(function () {
  theaMsForm($('.sign-in'));

  function tab(headEle, aimEle, className){
    $(headEle).each(function(index){
      $(this).mouseenter(function(){
        $(this).addClass(className).siblings().removeClass(className);
        $($(aimEle)[index]).addClass(className).siblings().removeClass(className);
      })
    });
  }
  tab('.thead .thead-item', '.news-lists .lists-item', 'cur');
  tab('.school-title span', '.schools-switch ul', 'cur');

  // 顶部横栏悬浮
  navBarSuspend("#headNavBar");
  function navBarSuspend(navBar){
    var navBarTop = $(navBar).offset() ? $(navBar).offset().top: '';
    var navBarNewAdd = $("<div></div>");
    $(navBarNewAdd).css({
      'height': $(navBar).outerHeight(true),
      'display': 'none'
    })
    $(navBar).parent().prepend(navBarNewAdd);
    $(document).scroll(function(){
      // var navBarScrollTop = $(document).scrollTop();
      if($(this).scrollTop() > navBarTop){
        $(navBarNewAdd).show();
        $(navBar).css({
          'position': 'fixed',
          'top': 0
        });
      }else{
        $(navBarNewAdd).hide();
        $(navBar).css({
          'position': 'static',
        });
      }
    });
  }

  // 表单悬浮
  formSuspend("#hasNavBarForm", true);
  formSuspend("#noNavBarForm", false);
  function formSuspend(form, isHasNavBar){
    var formTop = $(form).offset() ? $(form).offset().top + 400: '';
    var formNewAdd = $("<div></div>");
    $(formNewAdd).css({
      'height': $(form).outerHeight(true),
      'display': 'none'
    })
    $(form).parent().prepend(formNewAdd);
    // 悬浮时距离浏览器顶部距离
    var formFinalTop =  isHasNavBar ? formFinalTop = 42 : 0;
    // var formScrollTop = $(document).scrollTop();
    $(document).scroll(function(){
      if($(this).scrollTop() > formTop){
        $(formNewAdd).show();
        $(form).css({
          'position': 'fixed',
          'top': formFinalTop
        });
      }else{
        $(formNewAdd).hide();
        $(form).css({
          'position': 'static',
        });
      }
    });
  }
});