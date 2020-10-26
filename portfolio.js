gsap.registerPlugin(ScrollTrigger)

const config = { threshold: 0.5 };
let observer = new IntersectionObserver(function(entries, self) { 
    let targets = entries.map(entry => {
            if(entry.isIntersecting) {
            self.unobserve(entry.target);
            return entry.target;
        }
    });
    
    // Call animation function
    fadeIn(targets);
}, config);

document.querySelectorAll('.grid').forEach(grid => {
    observer.observe(grid);
});

    // Act in the targets given
function fadeIn(targets) {
    gsap.to(targets, {
        scrollTrigger: {
            scroller: ".container",
            trigger: targets,
            toggleActions: "restart pause reverse pause",
            start: "top 45px",
            end: "+=50",
            scrub: 0.3,
        },
        scale: 1.4,
        ease: "none",
    });
    gsap.to(targets, {
        scrollTrigger: {
            scroller: ".container",
            trigger: targets,
            toggleActions: "restart pause reverse pause",
            start: "top 91%",
            end: "+=55",
            scrub: 0.3,
        },
        scale: 1.1,
        opacity: 1,
        ease: "none",
    });
}