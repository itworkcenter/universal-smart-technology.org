+
(function (window, document) {
    // RESPONSIVE SIZE
    $(window).resize(function () {
        var size = $(this).width();
        if (size >= 768) {
            // WEB
            $("#MobileNav").removeClass("active");

        } else {
            //MOBILE

        }
    });

}(window, document));

+
(function (window, document) {
    var collapseNavSltr = ".collapse-nav",
        collapseTrigerSltr = ".collapse-triger";

    $(document).on("click", ".collapse-nav>li", function(e){
        if($(e.target).closest(".submenu").length){
            return;
        }
        
        $(this).toggleClass("active").siblings().removeClass("active");
    })

}(window, document));