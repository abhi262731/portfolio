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
const words = ['Front-end Developer', 'Angular Developer', 'Web Developer'];
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

// // animation 
// // left to right
// const observer=new IntersectionObserver((enteries)=>{
//   enteries.forEach((entry)=>{
//     console.log(entry)
//     if (entry.isIntersecting){
//       entry.target.classList.add('visible');
//     }else{
//       entry.target.classList.remove('visible');
//     }
//   })
// })
// const hiddenElements=document.querySelectorAll('.hidden');
// hiddenElements.forEach((el)=>observer.observe(el));

// // right to left 
// const neWanim=new IntersectionObserver((enteries)=>{
//   enteries.forEach((entry)=>{
//     console.log(entry)
//     if (entry.isIntersecting){
//       entry.target.classList.add('light');
//     }else{
//       entry.target.classList.remove('light');
//     }
//   })
// })
// const hideElem=document.querySelectorAll('.hide');
// hideElem.forEach((el)=>neWanim.observe(el));