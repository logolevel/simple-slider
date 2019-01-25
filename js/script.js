'use strict';

var sliderContent = document.getElementById('slider__content'),
    prevButton = document.getElementById('slider__action--prev'),
    nextButton = document.getElementById('slider__action--next');

var contentPosition = 0;

function moveContent() {
    contentPosition += - 128;

    if (contentPosition === -384) {
        sliderContent.style.left = '0px';
        contentPosition = 0;
    } else {
        sliderContent.style.left = contentPosition + 'px';
    }

    console.log(contentPosition);

}

prevButton.addEventListener('click', function() {
    moveContent();
});

nextButton.addEventListener('click', function() {
    moveContent();
});






