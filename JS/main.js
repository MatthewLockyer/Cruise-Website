document.querySelector('video').playbackRate = 1;
const menuBtn = document.querySelector('.menu-btn');
const siteNav = document.querySelector(".nav");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        siteNav.classList.remove("site-nav--closed");
        siteNav.classList.add("site-nav--open");
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        siteNav.classList.remove("site-nav--open");
        siteNav.classList.add("site-nav--closed")
    }
})





window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})



