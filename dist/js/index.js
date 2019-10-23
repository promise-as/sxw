'use strict';

$(function () {
  theaMsForm($('.sign-in'));

  function tab(headEle, aimEle, className) {
    $(headEle).each(function (index) {
      $(this).mouseenter(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(aimEle)[index]).addClass(className).siblings().removeClass(className);
      });
    });
  }
  tab('.thead .thead-item', '.news-lists .lists-item', 'cur');
  tab('.school-title span', '.schools-switch ul', 'cur');
  tab('.tab-head span', '.tab-detail .tab-item', 'active');

  /*
  headNavBar: 头部导航栏，
  hasNavBarForm：有头部导航栏的表单，
  noNavBarForm：没有头部导航栏的表单
   */
  suspensionWay('#headNavBar', '#hasNavBarForm', '#noNavBarForm');
  function suspensionWay(navBar, hasNavBarForm, noNavBarForm) {
    var navBarTop = $(navBar).offset() ? $(navBar).offset().top : '';
    var hasNavBarFormTop = $(hasNavBarForm).offset() ? $(hasNavBarForm).offset().top : '';
    var noNavBarFormTop = $(noNavBarForm).offset() ? $(noNavBarForm).offset().top : '';

    var navBarSite = $('<div></div>');
    var formSite1 = $('<div></div>');
    var formSite2 = $('<div></div>');

    $(navBarSite).css({
      'height': $(navBar).outerHeight(true),
      'display': 'none'
    });
    $(formSite1).css({
      'height': $(hasNavBarForm).outerHeight(true),
      'display': 'none'
    });
    $(formSite2).css({
      'height': $(noNavBarForm).outerHeight(true),
      'display': 'none'
    });

    $(navBar).parent().prepend(navBarSite);
    $(hasNavBarForm).parent().prepend(formSite1);
    $(noNavBarForm).parent().prepend(formSite2);

    $(document).scroll(function () {
      if ($(this).scrollTop() > navBarTop) {
        $(navBarSite).show();
        $(navBar).css({
          'position': 'fixed',
          'top': '0'
        });
      } else {
        $(navBarSite).hide();
        $(navBar).css({
          'position': 'static'
        });
      }
      if ($(this).scrollTop() + $(navBar).outerHeight(true) > hasNavBarFormTop) {
        $(formSite1).show();
        $(hasNavBarForm).css({
          'position': 'fixed',
          'top': $(navBar).outerHeight(true)
        });
      } else {
        $(formSite1).hide();
        $(hasNavBarForm).css({
          'position': 'static'
        });
      }
      if ($(this).scrollTop() > noNavBarFormTop) {
        $(formSite2).show();
        $(noNavBarForm).css({
          'position': 'fixed',
          'top': 0
        });
      } else {
        $(formSite2).hide();
        $(noNavBarForm).css({
          'position': 'static'
        });
      }
    });
  }
});