"use strict";

$(function () {
  theaMsForm($('.sign-in'));
  /*
  headNavBar: 头部导航栏，
  hasNavBarForm：有头部导航栏的表单，
  noNavBarForm：没有头部导航栏的表单
   */
  var navBarTop = $("#headNavBar").offset() ? $("#headNavBar").offset().top : '';
  var navBarSite = $('<div></div>');
  $(navBarSite).css({
    'height': $("#headNavBar").outerHeight(true),
    'display': 'none'
  });
  $("#headNavBar").parent().prepend(navBarSite);
  $(document).scroll(function () {
    if ($(this).scrollTop() > navBarTop) {
      $(navBarSite).show();
      $("#headNavBar").css({
        'position': 'fixed',
        'top': '0'
      });
    } else {
      $(navBarSite).hide();
      $("#headNavBar").css({
        'position': 'static'
      });
    }
  });

  var hasNavBarFormTop = $("#hasNavBarForm").offset() ? $("#hasNavBarForm").offset().top : '';
  var formSite1 = $('<div></div>');
  $(formSite1).css({
    'height': $("#hasNavBarForm").outerHeight(true),
    'display': 'none'
  });
  $("#hasNavBarForm").parent().prepend(formSite1);
  $(document).scroll(function () {
    if ($(this).scrollTop() + $("#headNavBar").outerHeight(true) > hasNavBarFormTop) {
      $(formSite1).show();
      $("#hasNavBarForm").css({
        'position': 'fixed',
        'top': $("#headNavBar").outerHeight(true)
      });
    } else {
      $(formSite1).hide();
      $("#hasNavBarForm").css({
        'position': 'static'
      });
    }
  });

  var noNavBarFormTop = $("#noNavBarForm").offset() ? $("#noNavBarForm").offset().top : '';
  var formSite2 = $('<div></div>');
  $(formSite2).css({
    'height': $("#noNavBarForm").outerHeight(true),
    'display': 'none'
  });
  $("#noNavBarForm").parent().prepend(formSite2);
  $(document).scroll(function () {
    if ($(this).scrollTop() > noNavBarFormTop) {
      $(formSite2).show();
      $("#noNavBarForm").css({
        'position': 'fixed',
        'top': 0
      });
    } else {
      $(formSite2).hide();
      $("#noNavBarForm").css({
        'position': 'static'
      });
    }
  });

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
});