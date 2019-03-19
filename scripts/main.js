//Slider

const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const text = document.querySelector('.header-text .text');
const h2 = text.querySelector('h2');
const h4 = text.querySelector('h4');
let counter = 0;

let slider = setInterval(() => { changeImage(1) }, 3000)
function changeImage(pom) {
    clearInterval(slider);
    slider = setInterval(() => { changeImage(1) }, 3000);
    counter += pom;
    if (counter === 4) {
        counter = 1
    }
    else if (counter === 0) {
        counter = 3;
    }
    if (counter === 1) {
        image3.style.left = "100%";
        image1.style.left = "-100%";
        image2.style.zIndex = 3;
        image1.style.zIndex = 1;
        image3.style.zIndex = 1;
        image2.style.left = "0%";
        h2.textContent = "Lorem ipsum";
        h4.textContent = "dolar dolar";

    }
    else if (counter === 2) {
        image1.style.left = "100%";
        image2.style.left = "-100%";
        image3.style.zIndex = 3;
        image2.style.zIndex = 1;
        image1.style.zIndex = 1;
        image3.style.left = "0%";
        h2.textContent = "Morele ";
        h4.textContent = "baks";

    }
    else if (counter === 3) {
        image2.style.left = "100%";
        image3.style.left = "-100%";
        image1.style.zIndex = 3;
        image3.style.zIndex = 1;
        image2.style.zIndex = 1;
        image1.style.left = "0%";
        h2.textContent = "Upgrade your bissness";
        h4.textContent = "Can result a lot";

    }

}


rightArrow.addEventListener('click', function () {
    changeImage(1);
});
leftArrow.addEventListener('click', function () {
    changeImage(-1);
})




//Nav
const navbar = document.querySelector('nav');


window.addEventListener('scroll', function () {
    if (window.screen.availWidth > 1023) {
        if ($(window).scrollTop() > 100) {
            navbar.style.position = "fixed";
            navbar.style.height = "8vh";
            navbar.style.padding = "0px 40px";
            navbar.style.boxShadow = "0 0 3px 3px grey"
        }
        else {
            navbar.style.position = "absolute";
            navbar.style.height = "15vh";
            navbar.style.padding = "20px 40px";
            navbar.style.boxShadow = "0 0 0 0 transparent"
        }
    }

})




//Mobile Nav

const hamburger = document.querySelector('aside i');
const links = document.querySelectorAll("nav .right li a");

const changeClassNav = () => {
    navbar.classList.toggle('active-nav');
}

hamburger.addEventListener('click', changeClassNav)
links.forEach(link => {
    link.addEventListener('click', changeClassNav)
})




//smoothScroll

const nav = document.querySelectorAll('.nav li a');


function smoothScroll(e) {
    const nameElement = e.target.dataset.key;
    const element = document.querySelector("#" + nameElement);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

}

nav.forEach(item => {
    item.addEventListener('click', smoothScroll);
})




//Active Nav element + Appear elements + Counter

const header = document.querySelector('header');
const about = document.querySelector('.about');
const team = document.querySelector('.team');
const footer = document.querySelector('footer');
const resume = document.querySelector('.resume');
const fastNavElements = document.querySelectorAll('footer .nav li a');
const aboutBoxs = document.querySelectorAll('.about .about-box');
const teamPersons = team.querySelectorAll('.person');




const headerFromTop = header.offsetTop;
const aboutFromTop = about.offsetTop;
const teamFromTop = team.offsetTop;
const footerFromTop = footer.offsetTop;
const resumeFromTop = resume.offsetTop;


let allow = true;

function activeNav() {
    const scrollY = window.scrollY;
    const halfWindow = window.innerHeight / 2;

    nav.forEach(element => {
        element.classList.remove('active-element');
    })
    fastNavElements.forEach(element => {
        element.classList.remove('active-element');
    })

    if (scrollY < aboutFromTop - halfWindow) {
        nav[0].classList.add('active-element');
        fastNavElements[0].classList.add('active-element');
    }
    else if (scrollY > (aboutFromTop - halfWindow) && scrollY < (teamFromTop - halfWindow)) {
        nav[1].classList.add('active-element');
        fastNavElements[1].classList.add('active-element');

        aboutBoxs[0].style.transform = "translateX(0)";
        aboutBoxs[3].style.transform = "translateX(0)";
        aboutBoxs[2].style.transform = "translateX(0)";
        aboutBoxs[5].style.transform = "translateX(0)";
        aboutBoxs[1].style.opacity = "1";
        aboutBoxs[4].style.opacity = "1";
    }
    else if (scrollY > (teamFromTop - halfWindow) && scrollY < (footerFromTop - (halfWindow * 1.7))) {
        nav[2].classList.add('active-element');
        fastNavElements[2].classList.add('active-element');

        teamPersons.forEach(person => {
            person.style.opacity = "1"
        })
    }
    else if (scrollY > (footerFromTop - (halfWindow * 1.7))) {
        nav[3].classList.add('active-element');
        fastNavElements[3].classList.add('active-element');
    }


    //Counter
    if (scrollY > (resumeFromTop - halfWindow) && allow) {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
        });
        allow = false;
    }
}

window.addEventListener('scroll', activeNav);
window.addEventListener('load', activeNav);



