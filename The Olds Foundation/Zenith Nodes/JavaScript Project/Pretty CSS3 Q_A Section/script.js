/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

$(function(){
        
        function setHeight(){
            $(".response").each(function(index,element){
                var target = $(element);
                target.removeClass("fixed-height");
                var height = target.innerHeight();
                target.attr("data-height", height)
                      .addClass("fixed-height");
            });
        };
        
        $("input[name=question]").on("change", function(){
            $("p.response").removeAttr("style");
            
            var target = $(this).next().next();
            target.height(target.attr("data-height"));
        })
        
        setHeight();
    });