function pageTransition() {

    var tl = gsap.timeline();
    /*  other transition
    tl.to("ul.transition li", { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })
    tl.to("ul.transition li", { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 }) */
    tl
    /* banner content */
    .to("h2", {opacity:0, duration:0.5})
    .to("p", {opacity:0}, "-=0.5")
    .to(".container a", {opacity:0}, "-=0.5")
    .to(".home .image", {duration:0.2, opacity:0}, "-=0.5")
    /* about content */
    .to(".about .image", {duration:0.2, opacity:0, backgroundSize:550}, "-=0.5")/*
    /* time-line content */
    .to("#progress-bar", {duration:0.4, opacity:0}, "-=0.5")
    .to("#progress-content", {duration: 0.5, opacity:0}, "-=0.5")
    /* skills content */
    .to(".skill", {opacity:0, translateY:-200}, "-=0.5")
    .to("#line-bar", {opacity:0, width:0, translateX:"80vh"}, "-=1.3")
    /* portfolio content */
    .to(".swiper-container", {duration: 0.5, opacity:0}, "-=0.5")
    /* contact content */
    .to(".contact-form .form-box .input-box.w1", {duration:0.5, opacity:0, translateX:-200}, "-=0.5")
    .to(".contact-form .form-box .input-box textarea", {duration:0.5, opacity:0, translateX:-200}, "-=0.5")
    .to(".contact-form .form-box", {duration:0.5, opacity:0, translateX:-200}, "-=0.5")
    .to(".contact .info", {duration:0.5, opacity:0}, "-=0.5")
    .to("h5", {opacity:0, duration:0.8}, "-=0.5")

    .fromTo(".container", {opacity: 1, duration: 1, height: "90vh"}, {opacity: 0, height: "0vh"})


}
function pageTras() {
    var tl = gsap.timeline();/*
    tl.from(".container", {opacity: 1, duration: 0.9, x:"-100%", ease: Elastic.easeOut.config( 1, 0.5)})*/
    tl.fromTo(".container", {opacity: 1, duration: 0.5, height: "0vh"}, {opacity: 1, height: "90vh"})
}
function contentAnimation() {

    var tl = gsap.timeline();
    /* banner content */
    tl.from("h2", {duration: 1.2, translateY: 50, opacity: 0, delay: 0.3});
    tl.from("p", {duration: 1.4, translateY: 50, opacity: 0}, "-=1");
    tl.fromTo(".container a", {opacity: 0, translateY: 50, duration: 0}, {opacity: 0.6, translateY: 0, duration: 1.4}, "-=1");
    tl.fromTo(".home .image", {opacity:0, backgroundSize:550}, {duration:1.5,opacity:1, backgroundSize:700}, "-=1.8");
    /* about content */
    tl.fromTo(".about .image", {opacity:0, backgroundSize:550, translateY:-50}, {duration:1,opacity:1, backgroundSize:700, translateY:0}, "-=1.8");
    /* time-line content */
    tl.fromTo("#progress-bar", {opacity:0}, {opacity:1}, "-=2");
    tl.fromTo("#line", {duration:0, opacity:0, translateX:-1000, width:"300%"}, {duration:0.1, opacity:1, translateX:0, width:"75%", ease: Elastic.easeOut.config( 3, 0.5)}, "-=1.5");
    tl.fromTo("#progress-bar ul", {duration:0.5, opacity:0, translateY:-20}, {duration:0.5, opacity:1, translateY:0, ease: Elastic.easeOut.config( 3, 0.5)}, "-=0.8");
    /* skills content */
    tl.fromTo("#celular01", {duration:0, opacity:0, translateY:-900, translateX:-900}, {duration:1, opacity:1, translateY:0, translateX:0}, "-=1.9")
    tl.fromTo("#celular02", {duration:0, opacity:0, translateY:-900, translateX:-900}, {duration:1, opacity:1, translateY:0, translateX:0}, "-=1.8")
    tl.fromTo("#celular03", {duration:0, opacity:0, translateY:-900, translateX:-900}, {duration:1, opacity:1, translateY:0, translateX:0}, "-=1.3")
    tl.fromTo("#celular04", {duration:0, opacity:0, translateY:-900, translateX:-900}, {duration:1, opacity:1, translateY:0, translateX:0}, "-=1.7")
    tl.fromTo("#celular05", {duration:0, opacity:0, translateY:-900, translateX:-900}, {duration:1, opacity:1, translateY:0, translateX:0}, "-=1.3")
    tl.fromTo("#celular06", {duration:0, opacity:0, translateY:-900, translateX:-900}, {duration:1, opacity:1, translateY:0, translateX:0}, "-=1.9")
    tl.fromTo("#celular07", {duration:0, opacity:0, translateY:-900, translateX:-900}, {duration:1, opacity:1, translateY:0, translateX:0}, "-=1.6")
    tl.fromTo("#celular08", {duration:0, opacity:0, translateY:-900, translateX:-900}, {duration:1, opacity:1, translateY:0, translateX:0}, "-=1.9")
    tl.fromTo("#line-bar", {duration:0, opacity:0, width:"0%", translateX:"82vh"}, {duration:0.3, opacity:1, width:"75%", translateX:"0vh"})
    /* portfolio content */
    tl.from(".swiper-container", {duration:1, opacity:0, translateY: 50, ease: Elastic.easeOut.config( 1, 0.5)}, "-=1.1")
    /* contact content */
    tl.fromTo(".contact", {duration:0.3, opacity:0, translateX:"120%", height:"200%"}, {duration:0.1, opacity:1,height:"72%", ease: Elastic.easeOut.config( 5, 5), delay:0.3}, "-=2")
    tl.fromTo(".contact .info", {opacity:0, translateX:-50}, {duration:0.5, opacity:1, translateX:0}, "-=1")
    tl.to(".contact", {duration:1, translateX:"0%", opacity:1, ease:Power1}, "-=1.1")
    tl.fromTo(".contact-form", {duration:0, opacity:0, width:"0%", delay:1, translateX:70}, {duration:0.3, opacity:1,width:"50%", translateX:0}, "-=0.3")
    tl.fromTo(".contact-form .form-box", {opacity:0, translateX:-100}, {opacity:1, translateX:0, duration:1}, "-=0.8")
    tl.fromTo(".contact-form .form-box .input-box textarea", {opacity:0, translateX:-100}, {opacity:1, translateX:0, duration:1}, "-=0.8")
    tl.fromTo(".contact-form h5", {opacity:0, translateX:-100}, {opacity:1, translateX:0, delay:0.2}, "-=0.3")
    tl.fromTo(".contact-form .form-box .input-box.w1", {opacity:0, translateX:-100}, {opacity:1, translateX:0, duration:1}, "-=0.7")
}

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    transitions: [{
        sync: false,
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1000);
            done();
        },
        async enter(data) {
            pageTras();
            contentAnimation();
        },
        async once(data) {
            contentAnimation();
        },
    }],
    views: [{
        namespace: 'home',
        afterEnter() {
            //
        }
    },{
        namespace: 'about',
        afterEnter() {
            //
        }
    },{
        namespace: 'time-line',
        afterEnter() {
        /* this content is also on time-line.js */
            $('.step').click(function(){
                $('#picture-back').removeClass().addClass(
                    $(this).attr('rel'));
                $(this).addClass('active').siblings()
                    .removeClass('active');
            });

        $(".step").click( function() {
            $(this).addClass("active").prevAll().addClass("active");
            $(this).nextAll().removeClass("active");
        });
        
        $(".step01").click( function() {
            $("#line-progress").css("width", "0%");
            $(".formacao").addClass("active").siblings().removeClass("active");
        });
        
        $(".step02").click( function() {
            $("#line-progress").css("width", "34%");
            $(".gama").addClass("active").siblings().removeClass("active");
        });
        
        $(".step03").click( function() {
            $("#line-progress").css("width", "67%");
            $(".ciclo").addClass("active").siblings().removeClass("active");
        });
        
        $(".step04").click( function() {
            $("#line-progress").css("width", "100%");
            $(".secretaria").addClass("active").siblings().removeClass("active");
            document.body(".process-wrapper").style.backgroundImage = "url('/Projeto1/portfolio/images/ama.png')";
        });
        }
    },{
        namespace: 'skills',
        afterEnter() {
        
            $("#celular01").click( function() {
                $("#line-experience").css("width", "30%");
                document.getElementById("line-experience").innerHTML = "Básico";
            });
        
            $("#celular02").click( function() {
                $("#line-experience").css("width", "40%");
                document.getElementById("line-experience").innerHTML = "Básico";
            });
        
            $("#celular03").click( function() {
                $("#line-experience").css("width", "60%");
                document.getElementById("line-experience").innerHTML = "Intermediário";
            });
        
            $("#celular04").click( function() {
                $("#line-experience").css("width", "80%");
                document.getElementById("line-experience").innerHTML = "Avançado";
            });
        
            $("#celular05").click( function() {
                $("#line-experience").css("width", "20%");
                document.getElementById("line-experience").innerHTML = "Básico";
            });
                
            $("#celular06").click( function() {
                $("#line-experience").css("width", "50%");
                document.getElementById("line-experience").innerHTML = "Intermediário";
            });
        
            $("#celular07").click( function() {
                $("#line-experience").css("width", "60%");
                document.getElementById("line-experience").innerHTML = "Intermediário";
            });
        
            $("#celular08").click( function() {
                $("#line-experience").css("width", "80%");
                document.getElementById("line-experience").innerHTML = "Intermediário";
            });

        }
    },{
        namespace: 'portfolio',
        beforeEnter() {
            var swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                spaceBetween: 10,
                effect: 'fade',
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 40,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows : true,
                },
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
    },{
        namespace: 'contact',
        afterEnter() {
            //
        }
    }]
})

$( '.menu' ).on( 'click', function() {
    $('header').toggleClass( 'active' );
});
