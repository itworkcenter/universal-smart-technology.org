

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