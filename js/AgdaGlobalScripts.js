/* TODO: make animation code cleaner */
function toggleHeaderAnimation() {

    setTimeout(function () {
        $('.love').fadeOut(500);
        setTimeout(function () {
            $('.play').fadeIn(500);
        }, 500);

        setTimeout(function () {
            $('.play').fadeOut(500);
            setTimeout(function () {
                $('.placeholder').text('Make');
                $('.make').fadeIn(500);
            }, 500);
        }, 1500);

    }, 1500);
}

window.onload = toggleHeaderAnimation();
