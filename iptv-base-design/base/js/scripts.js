// SLICK CAROUSEL #region

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



// SLICK CAROUSEL #endregion


// ANCHOR LINK SCROLL #region

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

// ANCHOR LINK SCROLL #endregion


// CHECKBOX SHOW HIDE ADDRESS #region

function valueChanged() {
    if ($('.checkbox_address').is(":checked"))
        $(".BillingAddress").hide();
    else
        $(".BillingAddress").show();
}

// CHECKBOX SHOW HIDE ADDRESS #endregion

// \/ DELETE THIS = DEMO ONLY \/
// CHECKOUT CHANGE PARTIAL VIEW #region

$("#LoginRegisterBtn").click(function () {
    $("#loginEmail").hide();
    $("#loginPassword").show();
});

$("#PasswordRegisterBtn").click(function () {
    $("#loginPassword").hide();
    $("#loginRegister").show();
});



$("#LoginCheckoutBtn").click(function () {
    $("#checkoutLogin").hide();
    $("#checkoutLoginPassword").show();
});

$("#LoginCheckoutPasswordBtn").click(function () {
    $("#checkoutLoginPassword").hide();
    $("#loginRegister").show();
});

$("#RegisterCheckoutBtn").click(function () {
    $("#loginRegister").hide();
    $(".CheckoutAddress").show();
});

$("#CheckoutAddressBtn").click(function () {
    $(".CheckoutAddress").hide();
    $(".CheckoutPay").show();
});

// /\ DELETE THIS = DEMO ONLY /\
// CHECKBOX SHOW HIDE ADDRESS #endregion





$(document).ready(function () {
    $(".client_logo_wrap").css("top",
        "-" + $(".client_logo_wrap").height() + "px");
});

$(window).resize(function () {
    $(".client_logo_wrap").css("top",
        "-" + $(".client_logo_wrap").height() + "px");
});

//
//$(window).resize(function () {
//    $(".client_logo_wrap").css("top", $(".client_logo_wrap").height() - 0.5 "px");
//});
