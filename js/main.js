$(document).ready(function() {
    var activeTags = 0;
    
    $(".tag-btn").click(function(){ 
        if($(this).hasClass("active")){
            $(".tag-btn").removeClass("active");
            $(".catalogue-item").removeClass("hide");
        } else {
            $(".tag-btn").removeClass("active");
            $(this).addClass("active");

            $(".catalogue-item").addClass("hide");
            $("." + $(this).attr('id')).removeClass("hide");
        }

    });

    fitty(".catalogue-title", {
        maxSize: 30
    });
});