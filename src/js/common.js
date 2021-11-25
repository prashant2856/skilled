window.lozad = require('lozad')
require('intersection-observer');

require('./friconix');

window.$ = window.jQuery = require('jquery');

document.addEventListener("DOMContentLoaded", function () {

    // Initialize library
    var imageObserver = lozad('.lazy', {
        threshold: 0.1,
        enableAutoReload: true,
        load: function (el) {
            el.src = el.dataset.src;
            el.onload = function () {
                el.classList.add('md-fade')
            }
        }
    });

    var videoObserver = lozad('.lazy-video', {
        threshold: 0.1
    });

    var backgroundObserver = lozad('.lozad-background', {
        threshold: 0.1
    });

    imageObserver.observe();
    videoObserver.observe();
    backgroundObserver.observe();

    /* Multilevel Dropdown menu JS Start*/
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })

    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                    this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                    });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function(element){
            element.addEventListener('click', function (e) {

                let nextEl = this.nextElementSibling;
                if(nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    console.log(nextEl);
                    if(nextEl.style.display == 'block'){
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
    // end if innerWidth
    /* Multilevel Dropdown menu JS End*/
});

$(window).on("scroll", function () {
    console.log("window onScroll");
    var scroll = $(window).scrollTop();
    //>=, not <=
    if (scroll >= 80) {
        //clearHeader, not clearheader - caps H
        $(".md-header").addClass("md-header-sticky");
    }
    else {
        $(".md-header").removeClass("md-header-sticky");
    }
});
$(function() {
    $('.nav-icon3').on("click", function () {
        $(this).toggleClass('open');
        $('body').addClass('menu-open');
    });
    $('.close-sidebar, .overlay').on('click', function () {

        if ($('body').hasClass("menu-open")) {
            $('body').removeClass("menu-open");
            $(".nav-icon3").toggleClass('open');
        }
    });
});