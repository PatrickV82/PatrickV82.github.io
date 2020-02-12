
// Start Window Load Function
$(window).on('load', function() {

    'use strict';

    //*********************************************
    //  PORTFOLIO OPTIONS
    //*********************************************
  //*********************************************
    //  REVOLUTION SLIDER FOR HOME
    //*********************************************

        var tpj=jQuery;
        var revapi2;
        if(tpj("#home_slider").revolution == undefined){
            revslider_showDoubleJqueryError("#home_slider");
        }else{
            revapi2 = tpj("#home_slider").show().revolution({
                sliderType:"standard",
                jsFileLocation:"js/revolutionslider/",
                sliderLayout:"fullscreen",
                delay:7000,
                navigation: {
                    arrows: {
                        style: "uranus",
                        enable: true,
                        hide_onmobile: true,
                        hide_onleave: true,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        style: "hades",
                        hide_onleave: false,
                        direction: "horizontal",
                        h_align: "right",
                        v_align: "bottom",
                        h_offset: 90,
                        v_offset: 27,
                        space: 8,
                        tmp: '<span class="tp-bullet-image"></span>'
                    },
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                },
                responsiveLevels:[1170,860,640,480],
                visibilityLevels:[1170,860,640,480],
                gridwidth:[1170,860,640,480],
                gridheight:1000,
                parallax: {
                    type:"scroll",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,8,10,12,16,30],
                },
                shadow:0,
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                disableProgressBar:"on",
                shuffle:"off",
            });
        }

        // init cubeportfolio
        $('#portfolio-items').cubeportfolio({
            filters: '#filters',
            loadMoreAction: 'click',
            layoutMode: 'grid',
            mediaQueries: [{
                width: 1500,
                cols: 5
            }, {
                width: 1100,
                cols: 5
            }, {
                width: 900,
                cols: 4
            }, {
                width: 640,
                cols: 2
            }, {
                width: 480,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'quicksand',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 50,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            // singlePageInline
            singlePageInlineDelegate: '.cbp-singlePageInline',
            singlePageInlinePosition: 'below',
            singlePageInlineInFocus: true,
            singlePageInlineCallback: function(url, element) {
                // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
                var t = this;

                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html',
                        timeout: 30000
                })
                .done(function(result) {

                        t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
            }
        });



    //*********************************************
    //  Masonry OPTIONS
    //*********************************************

        // init cubeportfolio
        $('#masonry-items').cubeportfolio({
            filters: '#filters',
            loadMoreAction: 'click',
            layoutMode: 'masonry',
            mediaQueries: [{
                width: 1500,
                cols: 4
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 900,
                cols: 3
            }, {
                width: 640,
                cols: 2
            }, {
                width: 480,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'quicksand',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 50,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            // singlePageInline
            singlePageInlineDelegate: '.cbp-singlePageInline',
            singlePageInlinePosition: 'below',
            singlePageInlineInFocus: true,
            singlePageInlineCallback: function(url, element) {
                // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
                var t = this;

                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html',
                        timeout: 30000
                })
                .done(function(result) {

                        t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
            }
        });

    //*********************************************
    //  Masonry OPTIONS
    //*********************************************

        // init cubeportfolio
        $('#mosaic-items').cubeportfolio({
            filters: '#filters',
            loadMoreAction: 'click',
            layoutMode: 'mosaic',
            mediaQueries: [{
                width: 1500,
                cols: 4
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 900,
                cols: 3
            }, {
                width: 640,
                cols: 2
            }, {
                width: 480,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'quicksand',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 50,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            // singlePageInline
            singlePageInlineDelegate: '.cbp-singlePageInline',
            singlePageInlinePosition: 'below',
            singlePageInlineInFocus: true,
            singlePageInlineCallback: function(url, element) {
                // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
                var t = this;

                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html',
                        timeout: 30000
                })
                .done(function(result) {

                        t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
            }
        });







// End Function
});
