const words = ["Formando em Engenharia de Produção"]
            
let masterTl = gsap.timeline({/*repeat: 1,*/ delay:2})
    words.forEach(word => {
    let tl = gsap.timeline({yoyo:true/*,repeat:1,repeatDelay:2*/})
    tl.to(".text",{duration:2, text: word})
    masterTl.add(tl)
})

gsap.registerPlugin(ScrollTrigger)

gsap.to(".image", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".image",
        toggleActions: "restart pause reverse pause",
        scrub: 0.1
    },
    y: -100,
    x: 50,
    stagger: true,
    ease: "none",
})

/* OUTRA FORMA COM FLIP DAS LETRAS
//var names = ["Developper","Data Anlasys","Engineer Estudant", "Vinícius"];
//var counter = 0;
//var inst = setInterval(change, 2000);
function change() {
    document.getElementById("flip").innerHTML = names[counter];
    document.getElementById("flip").style.transform = 'scaleX (-1)';
    counter++;
    if (counter >= names.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}

//OUTRA FORMA
var tlo = new TimelineMax();
tlo.to("h2", 4, {repeat:Infinity, repeatDelay:1, yoyo:true, text:" is so much fun you should try it some time!"})
*/

/* COMPONENTES DA ESQUERDA - FIRST */
gsap.to(".img-left-first img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-left-first img",
        start: "top bottom",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    y: -300,
    x: -500,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".img-left-first img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-left-first img",
        start: "center 25%",
        end: "+=100",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    opacity: 0
})
gsap.to(".box-lineleft-first", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineleft-first",
        toggleActions: "restart none reverse pause",
        scrub: 0.7
    },
    y: -280,
    x: -480,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".box-lineleft-first", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineleft-first",
        start: "top 30%",
        end: "+=200",
        toggleActions: "restart none reverse pause",
        scrub: true,
    },
    opacity: 0
})
gsap.to(".content-left-first", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".content-left-first",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    y: -150,
    x: -200,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".content-left-first", {
    scrollTrigger: {
        scroller: ".container",
        start: "center 20%",
        end: "+=75",
        trigger: ".content-left-first",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    opacity:0,
})

/* COMPONENTES DA DIREITA - SECOND */
gsap.to(".img-right-second img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-right-second img",
        start: "top bottom",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    y: -300,
    x: 500,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".img-right-second img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-right-second img",
        start: "center 25%",
        end: "+=100",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    opacity: 0
})
gsap.to(".box-lineright-second", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineright-second",
        toggleActions: "restart none reverse pause",
        scrub: 0.7
    },
    y: -280,
    x: 480,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".box-lineright-second", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineright-second",
        start: "top 30%",
        end: "+=200",
        toggleActions: "restart none reverse pause",
        scrub: true,
    },
    opacity: 0
})
gsap.to(".content-right-second", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".content-right-second",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    y: -150,
    x: 200,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".content-right-second", {
    scrollTrigger: {
        scroller: ".container",
        start: "center 25%",
        trigger: ".content-right-second",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    opacity:0,
})

/* REPETIÇÃO PARA DEMAIS QUADROS */

/* COMPONENTES DA ESQUERDA - THIRD */
gsap.to(".img-left-third img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-left-third img",
        start: "top bottom",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    y: -300,
    x: -500,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".img-left-third img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-left-third img",
        start: "center 25%",
        end: "+=100",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    opacity: 0
})
gsap.to(".box-lineleft-third", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineleft-third",
        toggleActions: "restart none reverse pause",
        scrub: 0.7
    },
    y: -280,
    x: -480,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".box-lineleft-third", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineleft-third",
        start: "top 30%",
        end: "+=200",
        toggleActions: "restart none reverse pause",
        scrub: true,
    },
    opacity: 0
})
gsap.to(".content-left-third", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".content-left-third",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    y: -150,
    x: -200,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".content-left-third", {
    scrollTrigger: {
        scroller: ".container",
        start: "center 25%",
        trigger: ".content-left-third",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    opacity:0,
})

/* COMPONENTES DA DIREITA - FOURTH */
gsap.to(".img-right-fourth img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-right-fourth img",
        start: "top bottom",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    y: -300,
    x: 500,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".img-right-fourth img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-right-fourth img",
        start: "center 25%",
        end: "+=100",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    opacity: 0
})
gsap.to(".box-lineright-fourth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineright-fourth",
        toggleActions: "restart none reverse pause",
        scrub: 0.7
    },
    y: -280,
    x: 480,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".box-lineright-fourth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineright-fourth",
        start: "top 30%",
        end: "+=200",
        toggleActions: "restart none reverse pause",
        scrub: true,
    },
    opacity: 0
})
gsap.to(".content-right-fourth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".content-right-fourth",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    y: -150,
    x: 200,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".content-right-fourth", {
    scrollTrigger: {
        scroller: ".container",
        start: "center 50%",
        trigger: ".content-right-fourth",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    opacity:0,
})

/* COMPONENTES DA ESQUERDA - FIFTH */
gsap.to(".img-left-fifth img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-left-fifth img",
        start: "top bottom",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    y: -300,
    x: -500,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".img-left-fifth img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-left-fifth img",
        start: "center 25%",
        end: "+=100",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    opacity: 0
})
gsap.to(".box-lineleft-fifth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineleft-fifth",
        toggleActions: "restart none reverse pause",
        scrub: 0.7
    },
    y: -280,
    x: -480,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".box-lineleft-fifth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineleft-fifth",
        start: "top 30%",
        end: "+=200",
        toggleActions: "restart none reverse pause",
        scrub: true,
    },
    opacity: 0
})
gsap.to(".content-left-fifth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".content-left-fifth",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    y: -150,
    x: -200,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".content-left-fifth", {
    scrollTrigger: {
        scroller: ".container",
        start: "center 25%",
        trigger: ".content-left-fifth",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    opacity:0,
})

/* COMPONENTES DA DIREITA - SIXTH */
gsap.to(".img-right-sixth img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-right-sixth img",
        start: "top bottom",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    y: -300,
    x: 500,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".img-right-sixth img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-right-sixth img",
        start: "center 25%",
        end: "+=100",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    opacity: 0
})
gsap.to(".box-lineright-sixth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineright-sixth",
        toggleActions: "restart none reverse pause",
        scrub: 0.7
    },
    y: -280,
    x: 480,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".box-lineright-sixth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineright-sixth",
        start: "top 30%",
        end: "+=200",
        toggleActions: "restart none reverse pause",
        scrub: true,
    },
    opacity: 0
})
gsap.to(".content-right-sixth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".content-right-sixth",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    y: -150,
    x: 200,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".content-right-sixth", {
    scrollTrigger: {
        scroller: ".container",
        start: "center 25%",
        trigger: ".content-right-sixth",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    opacity:0,
})

/* COMPONENTES DA ESQUERDA - SEVENTH */
gsap.to(".img-left-seventh img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-left-seventh img",
        start: "top bottom",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    y: -300,
    x: -500,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".img-left-seventh img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-left-seventh img",
        start: "center 25%",
        end: "+=100",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    opacity: 0
})
gsap.to(".box-lineleft-seventh", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineleft-seventh",
        toggleActions: "restart none reverse pause",
        scrub: 0.7
    },
    y: -280,
    x: -480,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".box-lineleft-seventh", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineleft-seventh",
        start: "top 30%",
        end: "+=200",
        toggleActions: "restart none reverse pause",
        scrub: true,
    },
    opacity: 0
})
gsap.to(".content-left-seventh", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".content-left-seventh",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    y: -150,
    x: -200,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".content-left-seventh", {
    scrollTrigger: {
        scroller: ".container",
        start: "center 25%",
        trigger: ".content-left-seventh",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    opacity:0,
})

/* COMPONENTES DA DIREITA - EIGHTH */
gsap.to(".img-right-eighth img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-right-eighth img",
        start: "top bottom",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    y: -300,
    x: 500,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".img-right-eighth img", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".img-right-eighth img",
        start: "center 25%",
        end: "+=100",
        toggleActions: "restart none reverse pause",
        scrub: 0.3,
    },
    opacity: 0
})
gsap.to(".box-lineright-eighth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineright-eighth",
        toggleActions: "restart none reverse pause",
        scrub: 0.7
    },
    y: -280,
    x: 480,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".box-lineright-eighth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".box-lineright-eighth",
        start: "top 30%",
        end: "+=200",
        toggleActions: "restart none reverse pause",
        scrub: true,
    },
    opacity: 0
})
gsap.to(".content-right-eighth", {
    scrollTrigger: {
        scroller: ".container",
        trigger: ".content-right-eighth",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    y: -150,
    x: 200,
    scale: 1.5,
    stagger: 0.3,
    ease: "none",
})
gsap.to(".content-right-eighth", {
    scrollTrigger: {
        scroller: ".container",
        start: "center 25%",
        trigger: ".content-right-eighth",
        toggleActions: "restart pause reverse pause",
        scrub: true
    },
    opacity:0,
})