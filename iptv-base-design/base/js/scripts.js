/* SLICK CAROUSEL #region */

$(document).ready(function () {
    $('.slick-slider').slick({
        dots: false,
        arrows: true,
        slickSetOption: 0
    });
});

$('.modal').on('shown.bs.modal', function (e) {
    $('.slick-slider').resize();
})



/* SLICK CAROUSEL #endregion */


/* ANCHOR LINK SCROLL #region */

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000);
                return false;
            }
        }
    });
});

/* ANCHOR LINK SCROLL #endregion */
