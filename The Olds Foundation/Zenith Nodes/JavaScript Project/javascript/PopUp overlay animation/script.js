var _jquery = require("jquery");
window.jQuery = _jquery.$;
window.$ = _jquery.$;
(() => {
  const button = (0, _jquery.$)('#btn');
  const popup_window = (0, _jquery.$)('.popup');
  const close_button = popup_window.find('.close');

  button.on('click', () => {
    popup_window.css({
      'transform': 'translateY(0)',
      'z-index': '999' });

    (0, _jquery.$)('body').addClass('overlay');
    popup_window.find('h1').animate({
      left: '0' },
    900);
    (0, _jquery.$)(void 0).css({
      'z-index': '-1' });

  });

  close_button.on('click', () => {
    (0, _jquery.$)(void 0).parent('.popup').css({
      'transform': 'translateY(-300%)' });


    (0, _jquery.$)('body').removeClass('overlay');
    (0, _jquery.$)(void 0).parent('.popup').siblings('.btn').css({
      'z-index': '1' });

  });

})();

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar