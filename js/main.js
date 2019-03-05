$(document).ready(function() {
    var activeTags = 0;
    
    $(".tag-btn").click(function(){ 
        if($(this).hasClass("active")){
            $(this).removeClass("active")
            $("." + $(this).attr('id')).addClass("hide");
            activeTags--;
        } else {
            if (activeTags == 0)
                $(".catalogue-item").addClass("hide");
            $("." + $(this).attr('id')).removeClass("hide");
            $(this).addClass("active");
            activeTags++;
        }

        if (activeTags == 0)
            $(".catalogue-item").removeClass("hide");
    });

    fitty(".catalogue-title", {
        maxSize: 30
      });
});