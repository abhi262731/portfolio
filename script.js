const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
        smooth: true,
    }
});
setTimeout(() => {
    scroll.update();
}, 6000);


let menuToggle = document.getElementById("menu-toggle");
let menu = document.querySelector("nav span  ");
menuToggle.addEventListener("click", function() {

    menu.classList.toggle("show");
});

// typing 
const words = ['Front-end Developer', 'Backend Developer', 'Web Developer'];
const typeWriter = document.getElementById('type-writer');
let index = 0;
let wordIndex = 0;

function type() {
    if (index < words[wordIndex].length) {
        typeWriter.textContent += words[wordIndex].charAt(index);
        index++;
        setTimeout(type, 50);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (index > 0) {
        typeWriter.textContent = words[wordIndex].substring(0, index - 1);
        index--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 1000);
    }
}

setTimeout(type, 1000);


