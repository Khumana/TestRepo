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
