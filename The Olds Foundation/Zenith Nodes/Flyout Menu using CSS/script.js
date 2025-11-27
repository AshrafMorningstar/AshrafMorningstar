/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

(function() {
  $(".flyout-btn").click(function() {
    $(".flyout-btn").toggleClass("btn-rotate");
    $(".flyout").find("a").removeClass();
    return $(".flyout").removeClass("flyout-init fade").toggleClass("expand");
  });

  $(".flyout").find("a").click(function() {
    $(".flyout-btn").toggleClass("btn-rotate");
    $(".flyout").removeClass("expand").addClass("fade");
    return $(this).addClass("clicked");
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLEtBQWpCLENBQXVCLFFBQUEsQ0FBQSxDQUFBO0lBQ3JCLENBQUEsQ0FBRSxhQUFGLENBQWdCLENBQUMsV0FBakIsQ0FBNkIsWUFBN0I7SUFDQSxDQUFBLENBQUUsU0FBRixDQUFZLENBQUMsSUFBYixDQUFrQixHQUFsQixDQUFzQixDQUFDLFdBQXZCLENBQUE7V0FDQSxDQUFBLENBQUUsU0FBRixDQUFZLENBQUMsV0FBYixDQUF5QixrQkFBekIsQ0FBNEMsQ0FBQyxXQUE3QyxDQUF5RCxRQUF6RDtFQUhxQixDQUF2Qjs7RUFLQSxDQUFBLENBQUUsU0FBRixDQUFZLENBQUMsSUFBYixDQUFrQixHQUFsQixDQUFzQixDQUFDLEtBQXZCLENBQTZCLFFBQUEsQ0FBQSxDQUFBO0lBQzNCLENBQUEsQ0FBRSxhQUFGLENBQWdCLENBQUMsV0FBakIsQ0FBNkIsWUFBN0I7SUFDQSxDQUFBLENBQUUsU0FBRixDQUFZLENBQUMsV0FBYixDQUF5QixRQUF6QixDQUFrQyxDQUFDLFFBQW5DLENBQTRDLE1BQTVDO1dBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsU0FBakI7RUFIMkIsQ0FBN0I7QUFMQSIsInNvdXJjZXNDb250ZW50IjpbIiQoXCIuZmx5b3V0LWJ0blwiKS5jbGljayAtPlxuICAkKFwiLmZseW91dC1idG5cIikudG9nZ2xlQ2xhc3MgXCJidG4tcm90YXRlXCJcbiAgJChcIi5mbHlvdXRcIikuZmluZChcImFcIikucmVtb3ZlQ2xhc3MoKVxuICAkKFwiLmZseW91dFwiKS5yZW1vdmVDbGFzcyhcImZseW91dC1pbml0IGZhZGVcIikudG9nZ2xlQ2xhc3MgXCJleHBhbmRcIlxuXG4kKFwiLmZseW91dFwiKS5maW5kKFwiYVwiKS5jbGljayAtPlxuICAkKFwiLmZseW91dC1idG5cIikudG9nZ2xlQ2xhc3MgXCJidG4tcm90YXRlXCJcbiAgJChcIi5mbHlvdXRcIikucmVtb3ZlQ2xhc3MoXCJleHBhbmRcIikuYWRkQ2xhc3MgXCJmYWRlXCJcbiAgJCh0aGlzKS5hZGRDbGFzcyBcImNsaWNrZWRcIlxuIl19
//# sourceURL=coffeescript