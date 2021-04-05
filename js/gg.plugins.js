+function ($) {
    'use strict';

    $(document).ready(function () {
        var $window = $(window);
        window.prettyPrint();

        $('#tbl-placements a').tinytooltip({
            width: 100,
            html: true,
            border: true,
            skin: 'custom',
            textalign: 'left',
            backcolor: '#000000',
        });

        $('#tbl-tooltip-colors a').tinytooltip({
            border: true,
            skin: 'custom'
        });

        $('#tbl-tooltip-skins a').tinytooltip({
            border: true,
            placement: 'right',
            title: 'sample text here'
        });

        $('#tbl-menus a').tinytooltip({
            html: true,
            placement: 'right auto',
            trigger: 'hoverable',
            delay: { hide: 400 },
            padding: 4,
            title:
                '<div class="tinytooltip-menu">' +
                '<ul>' +
                '<li><a href="#">sample list item 1 text here</a></li>' +
                '<li><a href="#">sample list item 2 text here</a></li>' +
                '<li class="last-child"><a href="#">sample list item 3 text here</a></li>' +
                '</ul>' +
                '</div>'
        });

        $('#tbl-popovers a').tinytooltip({
            html: true,
            action: 'popover',
            placement: 'right auto',
            trigger: 'hoverable',
            delay: { hide: 400 },
            textalign: 'left',
            title: 'Popover title',
            maxwidth: 300,
            content: 'And here\'s some amazing content. It\'s very engaging. Right?'
        });

        $("#car-image-map #area1").tinytooltip({
            html: true,
            trigger: 'hover',
            placement: "top auto",
            skin: 'PacificBlue',
            border: false,
            title: '<p class="light">LED headlights featuring LED \'J\' blade Daytime Running Lights.</p>'
        });

        $("#car-image-map #area2").tinytooltip({
            html: true,
            trigger: 'hover',
            placement: "top auto",
            skin: 'PacificBlue',
            border: false,
            title: '<p class="light">Available with 48.26 cm (18) to 50.80 cm (20) alloy wheels.</p>'
        });

        $("#hotspot1").tinytooltip({
            html: true,
            trigger: 'hover',
            placement: "top auto",
            skin: 'PersianRed',
            border: false,
            title: '<p class="light">Available with 48.26 cm (18) to 50.80 cm (20) alloy wheels.</p>'
        });

        $("#hotspot2").tinytooltip({
            html: true,
            trigger: 'hover',
            placement: "top auto",
            skin: 'PersianRed',
            border: false,
            title: '<p class="light">LED headlights featuring LED \'J\' blade Daytime Running Lights.</p>'
        });

        $("#image-left-1").tinytooltip({
            textalign: 'left',
            trigger: 'hover',
            placement: "right auto",
            padding: 5,
            html: true,
            skin: 'PacificBlue',
            border: false,
            title:
                '<p class="light"><img src="assets/images/eagle.jpg" class="image-left" /> ' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Donec elementum consectetur felis non viverra.</p>'
        });

        $("#image-right-1").tinytooltip({
            textalign: 'left',
            trigger: 'hover',
            placement: "right auto",
            padding: 5,
            html: true,
            skin: 'PeachOrange',
            border: false,
            title:
                '<p class="dark"><img src="assets/images/eagle.jpg" class="image-right" /> ' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Donec elementum consectetur felis non viverra.</p>'
        });

        $("#image-left-2").tinytooltip({
            textalign: 'left',
            trigger: 'hover',
            action: 'popover',
            placement: "right auto",
            html: true,
            skin: 'PacificBlue',
            title: 'Heading',
            content:
                '<p class="light"><img src="assets/images/eagle.jpg" class="image-left" /> ' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Donec elementum consectetur felis non viverra.</p>'
        });

        $("#image-right-2").tinytooltip({
            textalign: 'left',
            trigger: 'hover',
            action: 'popover',
            placement: "right auto",
            html: true,
            skin: 'PeachOrange',
            title: 'Heading',
            content:
                '<p class="dark"><img src="assets/images/eagle.jpg" class="image-right" /> ' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Donec elementum consectetur felis non viverra.</p>'
        });

        $('#video-popover-1').tinytooltip({
            placement: 'right auto',
            action: 'popover',
            html: true,
            maxwidth: 340,
            trigger: 'hoverable',
            title: 'Video Popover',
            container: 'body',
            content: '<div class="video-wrapper"><iframe src="https://www.youtube.com/embed/hA6hldpSTF8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
        });

        $('#video-tooltip-1').tinytooltip({
            placement: 'right auto',
            html: true,
            maxwidth: 340,
            trigger: 'hoverable',
            title: '<div class="video-wrapper"><iframe src="https://www.youtube.com/embed/hA6hldpSTF8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
        });

        $('#video-popover-2').tinytooltip({
            placement: 'right auto',
            action: 'popover',
            html: true,
            maxwidth: 340,
            trigger: 'hoverable',
            title: 'Video Popover',
            container: 'body',
            content: '<div class="video-wrapper"><iframe src="https://player.vimeo.com/video/308030845?title=0&byline=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
        });

        $('#video-tooltip-2').tinytooltip({
            placement: 'right auto',
            html: true,
            maxwidth: 340,
            trigger: 'hoverable',
            title: '<div class="video-wrapper"><iframe src="http://player.vimeo.com/video/308030845?title=0&byline=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
        });

        $('#ajax-popover').tinytooltip({
            action: 'popover',
            trigger: 'hoverable',
            placement: 'top-left auto',
            delay: { show: 0, hide: 1000 },
            skin: 'PacificBlue',
            textalign: 'left',
            opacity: 1,
            html: true,
            cache: false,
            ajax: true,
            loading: '<i class="fa fa-spinner fa-spin"></i> loading...',
            error: '<i class="fa fa-exclamation-circle"></i> error occurred',
            ajaxUrl: 'ajax/data.php',
            params: { id: 1, action: 'create' },
            method: 'GET',
            shadow: false,
            width: 300,
            maxwidth: 300,
            title: 'AJAX Data'
        });

        $('#ajax-tooltip').tinytooltip({
            trigger: 'hoverable',
            placement: 'top-left auto',
            delay: { show: 0, hide: 1000 },
            skin: 'NavyBlue',
            textalign: 'left',
            opacity: 1,
            html: true,
            cache: false,
            ajax: true,
            loading: '<i class="fa fa-spinner fa-spin"></i> loading...',
            error: '<i class="fa fa-exclamation-circle"></i> error occurred',
            ajaxUrl: 'ajax/data.php',
            params: { id: 1, action: 'create' },
            method: 'GET',
            shadow: false,
            width: 300,
            maxwidth: 300
        });

        $('#tbl-triggers a, #tbl-triggers #txt').tinytooltip({
            width: 100,
            placement: 'right auto',
        });

    });

    var loadImages = function () {
        var imgs = [];
        imgs.push('assets/images/eagle.jpg');
        $(imgs).each(function (i, v) {
            var theImage = new Image();
            theImage.src = v;
            $(theImage).css({ width: 0, height: 0, display: 'none' });
            $(document.body).append(theImage);
        });
    }

    loadImages();

}(jQuery);