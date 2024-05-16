/*! Customized Jquery from Punit Korat.  punit@templatetrip.com  : www.templatetrip.com
Authors & copyright (c) 2016: TemplateTrip - Webzeel Services(addonScript). */
/*! NOTE: This Javascript is licensed under two options: a commercial license, a commercial OEM license and Copyright by Webzeel Services - For use Only with TemplateTrip Themes for our Customers*/
/* ------------ Start Content-width JS --------------- */
function contentwidth() {
    colsWidth = $('#column-right, #column-left').length;
    if ($(window).width() >= 1300) {
        $("#content").addClass("Cwidth");
        $("#column-left").addClass("Lwidth");
        $("#column-right").addClass("Rwidth");
        if (colsWidth == 2) {
            $('.Cwidth').css('width', '76%');
            $('.Lwidth').css('width', '24%');
            $('.Rwidth').css('width', '24%');
        } else if (colsWidth == 1) {
            $('.Cwidth').css('width', '76%');
            $('.Lwidth').css('width', '24%');
            $('.Rwidth').css('width', '24%');
        } else {
            $('.Cwidth').css('width', '100%');
        }
    } else if ($(window).width() > 991) {
        $("#content").addClass("Cwidth");
        $("#column-left").addClass("Lwidth");
        $("#column-right").addClass("Rwidth");
        if (colsWidth == 2) {
            $('.Cwidth').css('width', '76%');
            $('.Lwidth').css('width', '24%');
            $('.Rwidth').css('width', '24%');
        } else if (colsWidth == 1) {
            $('.Cwidth').css('width', '76%');
            $('.Lwidth').css('width', '24%');
            $('.Rwidth').css('width', '24%');
        } else {
            $('.Cwidth').css('width', '100%');
        }
    } else {
        $("#content").removeClass("Cwidth");
        $("#column-left").removeClass("Lwidth");
        $("#column-left").removeClass("Rwidth");
        $('#content').removeAttr("style");
        $('#column-left').removeAttr("style");
        $('#column-right').removeAttr("style");
    }
}
$(document).ready(function() {
    contentwidth();
});
$(window).resize(function() {
    contentwidth();
});

/* ------------ End Content-width JS --------------- */
$(document).ready(function() {


    $('.image-additional img').on(
        'click',
        (event) => {
            $('.product-image img').attr('src', $(event.target).data('image-large-src'));
            $('.selected').removeClass('selected');
            $(event.target).addClass('selected');
            $('.product-image img').prop('src', $(event.currentTarget).data('image-large-src'));
        }
    );

    $(".ttsearch_button").click(function() {
        $('.ttsearchtoggle').parent().toggleClass('active');
        $('.ttsearchtoggle').toggle('fast', function() {});
        $('.ttsearchtoggle .input-lg').attr('autofocus', 'autofocus').focus();
        $(".account-link-toggle").slideUp("slow");
        $(".header-cart-toggle").slideUp("slow");
        $(".currency-toggle").slideUp("slow");
        $(".language-toggle").slideUp("slow");

    });

    $("#top-links a.dropdown-toggle").click(function() {
        $(".account-link-toggle").slideToggle("2000");
        $(".currency-toggle").slideUp("slow");
        $(".language-toggle").slideUp("slow");

        $(".header-cart-toggle").slideUp("slow");
        $('.ttsearchtoggle').parent().removeClass("active");
        $('.ttsearchtoggle').hide('fast');

    });

    $("#cart button.dropdown-toggle").click(function() {
        $(".header-cart-toggle").slideToggle("2000");
        $(".account-link-toggle").slideUp("slow");
        $(".language-toggle").slideUp("slow");
        $(".currency-toggle").slideUp("slow");
        $('.ttsearchtoggle').parent().removeClass("active");
        $('.ttsearchtoggle').hide('fast');
    });
    $("#form-currency button.dropdown-toggle").click(function() {
        $(".currency-toggle").slideToggle("2000");
        $(".language-toggle").slideUp("slow");
        $(".account-link-toggle").slideUp("slow");
        $(".header-cart-toggle").slideUp("slow");
        $('.ttsearchtoggle').parent().removeClass("active");
        $('.ttsearchtoggle').hide('fast');

    });

    $("#form-language button.dropdown-toggle").click(function() {
        $(".language-toggle").slideToggle("2000");
        $(".currency-toggle").slideUp("fast");
        $(".account-link-toggle").slideUp("slow");
        $(".header-cart-toggle").slideUp("slow");
        $('.ttsearchtoggle').parent().removeClass("active");
        $('.ttsearchtoggle').hide('fast');
    });

    $(".option-filter .list-group-items a").click(function() {
        $(this).toggleClass('collapsed').next('.list-group-item').slideToggle();
    });

    $("ul.breadcrumb li:nth-last-child(1) a").addClass('last-breadcrumb').removeAttr('href');

    $("#column-left .products-list .product-thumb, #column-right .products-list .product-thumb").unwrap();

    $("#content > h1, .account-wishlist #content > h2, .account-address #content > h2, .account-download #content > h2").first().addClass("page-title");

    $("#content > .page-title").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
    $(".page-title-wrapper .container .breadcrub").append($("ul.breadcrumb"));
    $(".page-title-wrapper").prependTo($(".header-content-title .parallex"));

    $("#account-order #content > h2").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
    $("#account-address #content > h2").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
    $(".page-title-wrapper .container .breadcrub").append($("ul.breadcrumb"));
    $("#content > .page-title-wrapper").appendTo($("#page > .header-content-title .parallex"));

    $('#column-left .product-thumb .image, #column-right .product-thumb .image').attr('class', 'image col-xs-5 col-sm-4 col-md-4');
    $('#column-left .product-thumb .thumb-description, #column-right .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-7 col-sm-8 col-md-8');

    $('#content .row > .product-list .product-thumb .image').attr('class', 'image col-xs-5 col-sm-4 col-md-4');
    $('#content .row > .product-list .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-7 col-sm-8 col-md-8');
    $('#content .row > .product-grid .product-thumb .image').attr('class', 'image col-xs-12');
    $('#content .row > .product-grid .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');

    $('select.form-control').wrap("<div class='select-wrapper'></div>");
    $('input[type="checkbox"]').wrap("<span class='checkbox-wrapper'></span>");
    $('input[type="checkbox"]').attr('class', 'checkboxid');
    $('input[type="radio"]').wrap("<span class='radio-wrapper'></span>");
    $('input[type="radio"]').attr('class', 'radioid');

    $('#column-left .products-list .btn-cart').removeAttr('data-original-title');

    $("#ttcmsfooter").append($(".footer-container .block-social"));
    /*-------start go to top---------*/
    $("body").append("<div class='backtotop-img'><div class='goToTop ttbox'></div></div>");
    $("body").append("<div id='goToTop' title='Top' class='goToTop ttbox-img'></div>");
    $("#goToTop").hide();
    /*-------end go to top---------*/
    /*---------------------- Inputtype Js Start -----------------------------*/
    $('.checkboxid').change(function() {
        if ($(this).is(":checked")) {
            $(this).addClass("chkactive");
            $(this).parent().addClass('active');
        } else {
            $(this).removeClass("chkactive");
            $(this).parent().removeClass('active');
        }
    });

    $(function() {
        var $radioButtons = $('input[type="radio"]');
        $radioButtons.click(function() {
            $radioButtons.each(function() {
                $(this).parent().toggleClass('active', this.checked);
            });
        });
    });
    /*---------------------- Inputtype Js End -----------------------------*/
    /*------------- Slider -Loader Js Strat ---------------*/
    $(window).load(function() {
        $(".ttloading-bg").fadeOut("slow");
    })
    /*------------- Slider -Loader Js End ---------------*/

    /* Slider Load Spinner */
    $(window).load(function() {
        $("#flexslider .ttloading-bg").removeClass("ttloader");
    });

    /* --------------- Start Sticky-header JS ---------------*/
    function menuClass() {
        if ($(window).width() > 1199) {
            $(".left-main-menu").addClass("left-menu");
        } else {
            $(".left-main-menu").removeClass("left-menu");
        }
    }
    $(document).ready(function() {
        menuClass();
    });
    $(window).resize(function() {
        menuClass();
    });

    function header() {
        if (jQuery(window).width() > 1199) {
            if (jQuery(this).scrollTop() > 250) {
                jQuery('.full-header').addClass("fixed");
            } else {
                jQuery('.full-header').removeClass("fixed");
            }
        } else {
            jQuery('.full-header').removeClass("fixed");
        }
    }

    $(document).ready(function() {
        header();
    });
    jQuery(window).resize(function() {
        header();
    });
    jQuery(window).scroll(function() {
        header();
    });
    /* --------------- End Sticky-header JS ---------------*/
    /* ----------- Start  Left-col ----------- */
    function left() {
        $('.leftbar').click(function(event) {
            $('.left-right-inner').addClass("nav-open");
            $('body').addClass("open");
        });

        $(".close-filter").click(function() {
            $(".left-right-inner").removeClass("nav-open");
            $('body').removeClass("open");
        });
    }

    $(document).ready(function() {
        left();
    });
    jQuery(window).resize(function() {
        left();
    });
    jQuery(window).scroll(function() {
        left();
    });
    /* ----------- End Left-col ----------- */
    $(".main-category-list.left-main-menu").css("display", "inline-block");


    $("#ttcmsgallery .ttgallery-img .galleryicons .icon").attr("data-lightbox", "example-1");
    /* -----------Start carousel For GalleryBanner ----------- */
    var ttgallery = $('#ttcmsgallery .ttgallery-block').owlCarousel({
        items: 2, //1 items above 1000px browser width
        nav: false,
        dots: false,
        loop: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        rtl: false,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2,
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }

        }
    });
    /* ----------- End carousel For GalleryBanner ----------- *
 /* -----------Start carousel For Testimonial ----------- */
    var tttestimonial = $('#tttestimonial-carousel').owlCarousel({
        items: 1, //1 items above 1000px browser width
        nav: false,
        dots: true,
        loop: false,
        autoplay: true,
        autoplayHoverPause: false,
        rtl: false,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    // Custom Navigation Events
    $(".tttestimonial_prev").click(function() {
        tttestimonial.trigger('prev.owl.carousel', [700]);
    })
    $(".tttestimonial_next").click(function() {
        tttestimonial.trigger('next.owl.carousel', [700]);
    })
    /* ----------- End carousel For Testimonial ----------- */
    /* ----------- Start Smart Blog JS ----------- */
    var ttblog = $('#ttsmartblog-carousel').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: true,
        dots: false,
        loop: false,
        autoplay: false,
        rtl: false,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    // Custom Navigation Events
    $(".ttblog_next").click(function() {
        ttblog.trigger('next.owl.carousel', [700]);
    })
    $(".ttblog_prev").click(function() {
        ttblog.trigger('prev.owl.carousel', [700]);
    })

    /*-----------start menu toggle ------------*/
    $('.left-main-menu .TT-panel-heading').click(function() {
        $('.left-main-menu .TT-panel-heading').toggleClass('active');
        $('.left-main-menu ul.dropmenu').slideToggle("2000");
    });

    /*-----------End menu toggle ------------*/
    /* ------------ Start TemplateTrip Parallax JS ------------ */
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    if (!isMobile) {
        if ($(".parallex").length) {
            $(".parallex").sitManParallex({
                invert: false
            });
        };
    } else {
        $(".parallex").sitManParallex({
            invert: true
        });
    }
    /* ------------ End TemplateTrip Parallax JS ------------ */
    $(".ttpopupclose").click(function() {
        $("#dialog").removeClass("in");
        $("#dialog").css('display', 'none');
        $(".b-modal.__b-popup1__").remove();
        $(".newletter-popup").css('display', 'none');
    });

    // Carousel Counter
    colsCarousel = $('#column-right, #column-left').length;
    if (colsCarousel == 1) {
        ci = 1;
    } else if (colsCarousel == 0) {
        ci = 4;
    } else {
        ci = 4;
    }
    // product Carousel


    initialize_owl($('#owl1'));

    $('a[href="#tab-featured-0"]').on('shown.bs.tab', function() {
        initialize_owl($('#owl1'));
    }).on('hide.bs.tab', function() {
        destroy_owl($('#owl1'));
    });

    initialize_owl($('#owl2'));
    $('a[href="#tab-latest-0"]').on('shown.bs.tab', function() {
        initialize_owl($('#owl2'));
    }).on('hide.bs.tab', function() {
        destroy_owl($('#owl2'));
    });

    initialize_owl($('#owl3'));

    $('a[href="#tab-bestseller-0"]').on('shown.bs.tab', function() {
        initialize_owl($('#owl3'));
    }).on('hide.bs.tab', function() {
        destroy_owl($('#owl3'));
    });

    initialize_owl($('#owl4'));

    $('a[href="#tab-special-0"]').on('shown.bs.tab', function() {
        initialize_owl($('#owl4'));
    }).on('hide.bs.tab', function() {
        destroy_owl($('#owl4'));
    });

    /* Go to Top JS START */
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('.goToTop').fadeIn();
            } else {
                $('.goToTop').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.goToTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
    /* Go to Top JS END */
    $(".product-layout.product-list .product-thumb .image .button-group").each(function() {
        $(this).appendTo($(this).parent().parent().find(".thumb-description .ttproducthover"));
    });
    $(".product-layout.product-grid .product-thumb .thumb-description .ttproducthover .button-group").each(function() {
        $(this).appendTo($(this).parent().parent().parent().parent().find(".image"));
    });

    /* Active class in Product List Grid START */
    $('#list-view').click(function() {
        $('#grid-view').removeClass('active');
        $('#list-view').addClass('active');
        $('#content .row > .product-list .product-thumb .image').attr('class', 'image col-xs-5 col-sm-4 col-md-4');
        $('#content .row > .product-list .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-7 col-sm-8 col-md-8');
        //$(".product-layout.product-list .product-thumb .button-group .btn-cart").removeAttr('data-original-title'); /* for remove tooltrip */
        $(".product-layout.product-list .product-thumb .image .button-group").each(function() {
            $(this).appendTo($(this).parent().parent().find(".thumb-description .ttproducthover"));
        });
    });
    $('#grid-view').click(function() {
        $('#list-view').removeClass('active');
        $('#grid-view').addClass('active');
        $('#content .row > .product-grid .product-thumb .image').attr('class', 'image col-xs-12');
        $('#content .row > .product-grid .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');
        //$(".product-layout.product-grid .product-thumb .button-group .btn-cart").attr('data-original-title','Add to cart');/* for add tooltrip */
        $(".product-layout.product-grid .product-thumb .thumb-description .ttproducthover .button-group").each(function() {
            $(this).appendTo($(this).parent().parent().parent().parent().find(".image"));
        });
    });
    if (localStorage.getItem('display') == 'list') {
        $('#list-view').addClass('active');
    } else {
        $('#grid-view').addClass('active');
    }
    /* Active class in Product List Grid END */

}); // Documnet.ready() over....
function initialize_owl(el) {
    el.owlCarousel({
        items: 4, //1 items above 1000px browser width
        nav: true,
        dots: false,
        loop: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 4
            },
            768: {
                items: 3
            },
            481: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    // Custom Navigation Events

    $(".products-list .customNavigation").addClass('owl-navigation');

}

function destroy_owl(el) {
    if (typeof el.data('owlCarousel') != 'undefined') {
        el.data('owlCarousel').destroy();
        el.removeClass('owl-carousel');
    }
}
/*****************start animation script*******************/
function hb_animated_contents() {
    $(".hb-animate-element:in-viewport").each(function(i) {
        var $this = $(this);
        if (!$this.hasClass('hb-in-viewport')) {
            setTimeout(function() {
                $this.addClass('hb-in-viewport');
            }, 180 * i);
        }
    });
}
$(window).scroll(function() {
    hb_animated_contents();
});
$(window).load(function() {
    hb_animated_contents();
});
/*****************end animation script*******************/
function footerToggle() {
    if ($(window).width() < 992) {
        $('footer .footer-container .container .bottomfooter').insertBefore('footer .footer-container .container .topfooter');
        $("footer .footer-column h5").addClass("toggle");
        $("footer .footer-column1 h5").addClass("toggle");
        $("footer .footer-column ul").css('display', 'none');
        $("footer .footer-column1 ul").css('display', 'none');
        $("footer .footer-column.active ul").css('display', 'block');
        $("footer .footer-column1.active ul").css('display', 'block');
        $("footer .footer-column h5.toggle").unbind("click");
        $("footer .footer-column1 h5.toggle").unbind("click");
        $("footer .footer-column h5.toggle").click(function() {
            $(this).parent().toggleClass('active').find('ul.list-unstyled').slideToggle("fast");
        });
        $("footer .footer-column1 h5.toggle").click(function() {
            $(this).parent().toggleClass('active').find('ul.list-unstyled').slideToggle("fast");
        });
    } else {
        $('footer .footer-container .container .topfooter').insertAfter('footer .footer-container .container .bottomfooter');
        $("footer .footer-column h5.toggle").unbind("click");
        $("footer .footer-column1 h5.toggle").unbind("click");
        $("footer .footer-column h5").removeClass('toggle');
        $("footer .footer-column1 h5").removeClass('toggle');
        $("footer .footer-column ul.list-unstyled").css('display', 'block');
        $("footer .footer-column1 ul.list-unstyled").css('display', 'block');
    }
}
$(document).ready(function() {
    footerToggle();
});
$(window).resize(function() {
    footerToggle();
});


/* Category List - Tree View */
function categoryListTreeView() {
    $(".category-treeview li.category-li").find("ul").parent().prepend("<div class='list-tree'></div>").find("ul").css('display', 'none');

    $(".category-treeview li.category-li.category-active").find("ul").css('display', 'block');
    $(".category-treeview li.category-li.category-active").toggleClass('active');
}
$(document).ready(function() {
    categoryListTreeView();
});


/* Category List - TreeView Toggle */
function categoryListTreeViewToggle() {
    $(".category-treeview li.category-li .list-tree").click(function() {
        $(this).parent().toggleClass('active').find('ul').slideToggle();
    });
}
$(document).ready(function() {
    categoryListTreeViewToggle();
});

/*----------- menu hover -------------------*/

function menuHover() {
    if (jQuery(window).width() > 991) {
        $(".left-main-menu .cat-menu .dropmenu li:first-child").addClass('active');
        $(".main-category-list .dropmenu > li").hover(
            function() {
                var f_c = $(this).parent('.main-category-list ul.dropmenu').find('li.active');
                f_c.removeClass("active");
                $(this).addClass("active");
            }
        );
    } else {
        $(".left-main-menu .cat-menu .dropmenu li:first-child").removeClass('active');
    }
}

$(document).ready(function() {
    menuHover();
});
jQuery(window).resize(function() {
    menuHover();
});
jQuery(window).scroll(function() {
    menuHover();
});
/*----------- menu hover -------------------*/

function menuToggle() {
    if ($(window).width() < 992) {
        $('.full-header .header-top-right').appendTo('.full-header .header-top-left .header-left-cms .main-category-list.left-main-menu');
        $('.full-header .header-left #logo').insertBefore('.full-header .header-top-left .header-left-cms #header-left');
        //$(".main-category-list.left-main-menu .menu-category ul.dropmenu").css('display', 'none');

        $(".main-category-list ul.dropmenu li.dropdown > i").remove();
        $(".main-category-list ul.dropmenu .dropdown-menu ul li.dropdown-inner > i").remove();

        $(".main-category-list ul.dropmenu > li.dropdown > a").after("<i class='fa fa-angle-down'></i>");
        //$(".menu-category > li.dropdown .dropdown-inner ul > li.dropdown a.single-dropdown").after("<i class='fa fa-angle-down'></i>");

        $(".main-category-list ul.dropmenu > li.dropdown > span").after("<i class='fa fa-angle-down'></i>");

        $(".main-category-list .TT-panel-heading").unbind("click");
        $('.main-category-list .TT-panel-heading').click(function() {
            $(this).parent().toggleClass('TTactive').find('ul.dropmenu').slideToggle("fast");
        });

        $(".main-category-list ul.dropmenu > li.dropdown > i").unbind("click");
        $(".main-category-list ul.dropmenu > li.dropdown > i").click(function() {
            $(this).parent().toggleClass("active").find("ul").first().slideToggle();
        });

        $(".menu-category > li.dropdown .dropdown-inner ul > li.dropdown > i").unbind("click");
        $(".menu-category > li.dropdown .dropdown-inner ul > li.dropdown > i").click(function() {
            $(this).parent().toggleClass("active").find(".dropdown-menu").slideToggle();
        });
    } else {
        $('.full-header .header-top-left .header-left-cms #logo').appendTo('.full-header .header-left');
        $('.full-header .header-top-left .header-left-cms .main-category-list.left-main-menu .header-top-right').appendTo('.full-header');
        $(".menu-category > li.dropdown .dropdown-inner ul > li.dropdown > i").unbind("click");
        $(".menu-category > li.dropdown .dropdown-inner ul > li.dropdown > i").unbind("click");
        $(".main-category-list").removeClass('ttactive');
        //$(".main-category-list.left-main-menu .menu-category ul.dropmenu").css('display', 'block');
        $(".menu-category ul.dropmenu li.dropdown > i").remove();
        $(".menu-category > li.dropdown .dropdown-inner ul > li.dropdown > i").remove();
        $(".main-category-list ul.dropmenu > li.dropdown > i").remove();
    }
}
$(document).ready(function() {
    menuToggle();
});
$(window).resize(function() {
    menuToggle();
});


/* Main Menu - MORE items */

/* Animate effect on Review Links - Product Page */
$(".product-total-review, .product-write-review").click(function() {
    $('html, body').animate({
        scrollTop: $(".product-tabs").offset().top
    }, 1000);
});

/* FilterBox - Responsive Content*/
function optionFilter() {

    if ($(window).width() <= 991) {
        $('#column-left .option-filter-box').appendTo('#content .category-description');
        $('#column-right .option-filter-box').appendTo('#content .category-description');

    } else {
        $('#content .category-description .option-filter-box').appendTo('#column-left .option-filter');
        $('#content .category-description .option-filter-box').appendTo('#column-right .option-filter');
    }
}
$(document).ready(function() {
    optionFilter();
});
$(window).resize(function() {
    optionFilter();
});


function columnToggle() {
    if ($(window).width() < 992) {

        $("#column-left .panel-heading").addClass("toggle");
        $("#column-left .list-group").css('display', 'none');
        $("#column-left .panel-default.active .list-group").css('display', 'block');
        $("#column-left .panel-heading.toggle").unbind("click");
        $("#column-left .panel-heading.toggle").click(function() {
            $(this).parent().toggleClass('active').find('.list-group').slideToggle("fast");
        });

        $("#column-left .box-heading").addClass("toggle");
        $("#column-left .products-carousel").css('display', 'none');
        $("#column-left .products-list.active .products-carousel").css('display', 'block');
        $("#column-left .box-heading.toggle").unbind("click");
        $("#column-left .box-heading.toggle").click(function() {
            $(this).parent().toggleClass('active').find('.products-carousel').slideToggle("fast");
        });

    } else {

        $("#column-left .panel-heading").unbind("click");
        $("#column-left .panel-heading").removeClass("toggle");
        $("#column-left .list-group").css('display', 'block');

        $("#column-left .box-heading").unbind("click");
        $("#column-left .box-heading").removeClass("toggle");
        $("#column-left .products-carousel").css('display', 'block');

    }
}

$(document).ready(function() {
    columnToggle();
});
$(window).resize(function() {
    columnToggle();
});


function responsivecolumn() {
    if ($(document).width() <= 991) {
        $('#page > .container > .content_wrap > #column-left').appendTo('#page  > .container > .content_wrap');
        $('#page > .container > .content_wrap > #column-right').appendTo('#page  > .container > .content_wrap');
    } else if ($(document).width() >= 992) {
        $('#page > .container > .content_wrap > #column-left').prependTo('#page  > .container > .content_wrap');
        $('#page > .container > .content_wrap > #column-right').prependTo('#page  > .container > .content_wrap');
    }
}
$(document).ready(function() {
    responsivecolumn();
});
$(window).resize(function() {
    responsivecolumn();
});