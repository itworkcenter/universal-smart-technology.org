+(function (window, document) {
    // TAB-FROM-TO
    var sltr_tab_from = ".tab-from",
        sltr_tab_from_item = ".tab-from-item",
        sltr_tab_to = ".tab-to",
        sltr_tab_to_item = ".tab-to-item";

    $(sltr_tab_from).each(function () {

        // DEFAULT
        var $this = $(this),
            $from_active_item = $this.find(sltr_tab_from_item + ".active").first();

        change($from_active_item);

        // CLICK
        $(this).on("click", sltr_tab_from_item, function () {
            var $this = $(this);

            change($this);
        })
        // HOVER
        // $(this).on("mouseover", sltr_tab_from_item, function () {
        //     var $this = $(this);

        //     change($this);
        // })

    })

    function getToItem($from_active_item) {
        var $this_from = $from_active_item.closest(sltr_tab_from),
            $this_to = $($this_from.attr("target")),
            index = $from_active_item.index();

        if ($this_to.length < 1) {
            return false;
        }

        return $(sltr_tab_to_item, $this_to).eq(index);
    }

    function change($from_active_item) {
        var $to_active_item = getToItem($from_active_item);
        if (!$to_active_item) {
            return;
        }
        $from_active_item.addClass("active").siblings().removeClass("active");
        $to_active_item.addClass("active").siblings().removeClass("active");
    }


}(window, document));

+
(function (window, document) {
    // SWITCH FROM TO
    var sltr_switch_from = ".switch-from",
        sltr_switch_to = ".switch-to";

    $(sltr_switch_from).each(function () {
        var $this = $(this);
        // DEFAULT
        // change($this);

        // CLICK
        $this.on("click", function () {
            change($this);
        })

    })

    function getToResult($from) {

        var $this_to = $($from.attr("target"));

        return {
            $to: $this_to,
            active: $this_to.hasClass("active")
        };
    }

    function change($from) {
        console.log($from)
        var result = getToResult($from);
        if (result.active) {
            $from.removeClass("active");
            result.$to.removeClass("active");
        } else {
            $from.addClass("active");
            result.$to.addClass("active");
        }
    }
}(window, document));


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
    // DEMO SENSOR CLOUD TERMINAL

    // DEFAUNT
    setDemeLine();

    $(window).resize(function () {

        setDemeLine();

    });

    function setDemeLine() {
        $(".demo-sensor").each(function () {
            var $sensor = $(this),
                $cloud = $("#DemoCloud"),
                cloudArgs = getArgs($cloud),
                sensorArgs = getArgs($sensor),
                degree,
                long;

            if (!$sensor.attr("to")) {
                var id = Math.floor(Math.random() * 100000000);
                $sensor.attr("to", id);

                $("body").append("<div id='" + id + "' class='demo-line'></div>");

            }

            x = cloudArgs.x - sensorArgs.x;
            y = cloudArgs.y - sensorArgs.y;

            degree = calcAngleDegrees(x, y)-5;
            long = Math.hypot(x, y)+20;

            var lineX = (sensorArgs.x + sensorArgs.w/2) + x/2-long/2;
            var lineY = (sensorArgs.y + sensorArgs.h/2) + y/2;

            $("#" + $sensor.attr("to")).css({
                top: (lineY) + "px",
                left: (lineX) + "px",
                width: long + "px",
                 'transform': 'rotate(' + degree + 'deg)'
            });

        })

        function calcAngleDegrees(x, y) {
            return Math.atan2(y, x) * 180 / Math.PI;
        }

        function getArgs($obj) {
            return {
                y: $obj.offset().top,
                x: $obj.offset().left,
                w: $obj.width(),
                h: $obj.height()
            }
        }
    }
}(window, document));