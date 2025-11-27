/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

(function() {
  // We must use JS as we need to select previous
  // elements which can't be done with CSS.
  $('.skew-title').children('span').hover((function() {
    var $el, n;
    $el = $(this);
    n = $el.index() + 1;
    $el.addClass('flat');
    if (n % 2 === 0) {
      return $el.prev().addClass('flat');
    } else {
      if (!$el.hasClass('last')) {
        return $el.next().addClass('flat');
      }
    }
  }), function() {
    return $('.flat').removeClass('flat');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ3dDO0VBQUE7O0VBRXhDLENBQUEsQ0FBRSxhQUFGLENBQWdCLENBQUMsUUFBakIsQ0FBMEIsTUFBMUIsQ0FBaUMsQ0FBQyxLQUFsQyxDQUF3QyxDQUFDLFFBQUEsQ0FBQSxDQUFBO0FBQ3pDLFFBQUEsR0FBQSxFQUFBO0lBQUUsR0FBQSxHQUFNLENBQUEsQ0FBRSxJQUFGO0lBQ04sQ0FBQSxHQUFJLEdBQUcsQ0FBQyxLQUFKLENBQUEsQ0FBQSxHQUFjO0lBQ2xCLEdBQUcsQ0FBQyxRQUFKLENBQWEsTUFBYjtJQUNBLElBQUcsQ0FBQSxHQUFJLENBQUosS0FBUyxDQUFaO2FBQ0UsR0FBRyxDQUFDLElBQUosQ0FBQSxDQUFVLENBQUMsUUFBWCxDQUFvQixNQUFwQixFQURGO0tBQUEsTUFBQTtNQUdFLEtBQU8sR0FBRyxDQUFDLFFBQUosQ0FBYSxNQUFiLENBQVA7ZUFDRSxHQUFHLENBQUMsSUFBSixDQUFBLENBQVUsQ0FBQyxRQUFYLENBQW9CLE1BQXBCLEVBREY7T0FIRjs7RUFKdUMsQ0FBRCxDQUF4QyxFQVNHLFFBQUEsQ0FBQSxDQUFBO1dBQ0QsQ0FBQSxDQUFFLE9BQUYsQ0FBVSxDQUFDLFdBQVgsQ0FBdUIsTUFBdkI7RUFEQyxDQVRIO0FBRndDIiwic291cmNlc0NvbnRlbnQiOlsiIyBXZSBtdXN0IHVzZSBKUyBhcyB3ZSBuZWVkIHRvIHNlbGVjdCBwcmV2aW91c1xuIyBlbGVtZW50cyB3aGljaCBjYW4ndCBiZSBkb25lIHdpdGggQ1NTLlxuXG4kKCcuc2tldy10aXRsZScpLmNoaWxkcmVuKCdzcGFuJykuaG92ZXIgKC0+XG4gICRlbCA9ICQodGhpcylcbiAgbiA9ICRlbC5pbmRleCgpICsgMVxuICAkZWwuYWRkQ2xhc3MgJ2ZsYXQnXG4gIGlmIG4gJSAyIGlzIDBcbiAgICAkZWwucHJldigpLmFkZENsYXNzICdmbGF0J1xuICBlbHNlXG4gICAgdW5sZXNzICRlbC5oYXNDbGFzcyAnbGFzdCdcbiAgICAgICRlbC5uZXh0KCkuYWRkQ2xhc3MgJ2ZsYXQnXG4pLCAtPlxuICAkKCcuZmxhdCcpLnJlbW92ZUNsYXNzICdmbGF0J1xuIl19
//# sourceURL=coffeescript