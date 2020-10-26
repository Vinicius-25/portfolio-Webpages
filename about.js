const words = ["Estou terminando a faculdade de Engenharia de Produção.<br>Estou me especializando com alguns cursos<br>de programação e Business Inteligence<br><br>Já atuei na área comercial, organizei um evento,<br>apliquei aulas em projeto voluntário e georreferenciei<br>a cidade em projeto na Prefeitura<br><br>Sou observador, dedicado e fascinado por idéias simples<br>para grandes problemas"]

let masterTl = gsap.timeline({/*repeat: 1,*/ delay:1.5})

words.forEach(word => {
    let tl = gsap.timeline({yoyo:false/*,repeat:1,repeatDelay:2*/})
    tl.to(".text",{duration:20, ease:"none", text: letter})
    masterTl.add(tl)
})