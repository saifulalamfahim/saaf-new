// Lenis Fro Smooth Scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// for navbar
document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({ paused: true});
  
    tl.to(".menu-overlay", {
        duration: 1,
         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
         ease: "power2.out",
    });
  
    tl.from(
        ".menu-link, .btn",
        {
            opacity: 0,
            y: 60,
            stagger: 0.05,
            duration:0.75,
            ease:"power1.inOut",
        },
        "<",
    );
  
    tl.to(
        ".video-preview",
        {
            duration: 1,
            height: "350px",
            ease: "power2.out",
        },
        "<",
    );
  
    tl.to(
        ".menu-divider",
        {
            duration: 2,
            width: "100%",
            ease: "power4.out",
        },
        "<",
    );
  
    function openMenu() {
        // document.querySelector(".shownNavbar").style.display = "none";
        document.querySelector(".menu-overlay").style.pointerEvents = "all";
        // document.querySelector(".menu-overlay").style.marginTop = "0";
        tl.play();
    }
  
    function closeMenu() {
        document.querySelector(".menu-overlay").style.pointerEvents = "none";
        // document.querySelector(".menu-overlay").style.marginTop = "-95px";
        tl.reverse();
        // document.querySelector(".shownNavbar").style.display = "flex";
        // document.querySelector(".shownNavbar").style.marginTop = "100px";
    }
    
    // document.querySelector(".shownNavbar").addEventListener("click", openMenu);
    document.querySelector(".menu-btn-open").addEventListener("click", openMenu);
    document.querySelector(".menu-close-btn").addEventListener("click", closeMenu);
    // document.querySelector(".menu-link").addEventListener("click", closeMenu);
    tl.reverse();
    
  });



//   for experience section (pin the right side)...............................

// gsap.set(".position:not(:first-child)", {opacity:0, scale:0.5})

// const animation = gsap.to(".position:not(:first-child)", {
// 	opacity:1, scale:1, duration:1, stagger:1


// })
ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right-new"
});


// For button
gsap.from(
    ".btnTwo",
    {
        opacity: 0,
        y: 60,
        stagger: 0.05,
        duration:0.75,
        ease:"power1.inOut",
    },);



// for Projects
const slider = document.querySelector(".slider-new");

// Responsive adjustments using media queries
const largeScreen = window.matchMedia("(min-width: 1024px) and (max-width: 1535px)");

function handleMediaQueryChange() {
    if (largeScreen.matches) {
        // Enable the GSAP animation for screens larger than or equal to 1024px
        gsap.to(slider, {
            xPercent: -80.5,
            ease: "none",
            scrollTrigger: {
                trigger: slider,
                pin: true,
                scrub: true,
                end: () => "+=" + slider.offsetWidth
            }
        });
    } else {
        // Disable the GSAP animation for smaller screens
        gsap.to(slider, { xPercent: 0 });
    }
}

// Initial check and add listener for changes
handleMediaQueryChange();
largeScreen.addListener(handleMediaQueryChange);





var circle = document.querySelector('.circle');
var follow = document.querySelector('.circle-follow');

function moveCircle(e) {
    circle.style.transition = '0.05s';
    circle.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';

    follow.style.transition = '0.2s';
    follow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
}

window.addEventListener('mousemove', moveCircle);




