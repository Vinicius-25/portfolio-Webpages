
const words = ["Formando em Engenharia de Produção"]
            
let masterTl = gsap.timeline({/*repeat: 1,*/ delay:2})
    words.forEach(word => {
    let tl = gsap.timeline({yoyo:true/*,repeat:1,repeatDelay:2*/})
    tl.to(".text",{duration:2, text: word})
    masterTl.add(tl)
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