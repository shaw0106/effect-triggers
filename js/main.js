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



// $('html').on('keydown', function (e) {
//  var $bubble;

// $body.on('click', '.bubble', function () {
//  $(this).addClass('is-popping');
// });

// $body.on('transitioned', '.bubble', function () {
//  $(this).remove();
// });
