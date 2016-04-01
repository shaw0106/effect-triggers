var $body = $('body');

var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnColEx = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function () {
  $box.toggleClass('showb');
});

$btnMove.on('click', function () {
  $diamond.toggleClass('slide');
});

$btnColEx.on('click', function () {
  $panel.toggleClass('collapse');
});

$btnBounce.on('click', function () {
  $circle.toggleClass('bounce');
});

$btnBounce.on('animationend', function () {
  $circle.removeClass('bounce');
});

$btnAppend.on('click', function () {
  $list.toggleClass('add');
});

$btnAppend.on('click', function () {
  $list.append('<li>New List Item</li>');
});

// $('html').on('keydown', function (e) {
//  var $bubble;

// $body.on('click', '.bubble', function () {
//  $(this).addClass('is-popping');
// });

// $body.on('transitioned', '.bubble', function () {
//  $(this).remove();
// });
