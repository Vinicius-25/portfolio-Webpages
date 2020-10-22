const words = ["Sou observador, dedicado e fascinado por idéias simples para grandes problemas.<br><br>Gosto de metodologias ágeis e trabalhar em múltiplos projetos com uso de métricas.<br><br>Já atuei na área comercial e assumi responsabilidades como líder de equipe em projeto, definindo e cumprindo prazos.<br>Tenho experiência em gerar relatórios e organizar dados para melhor visualização."]
            
let masterTl = gsap.timeline({/*repeat: 1,*/ delay:1})

words.forEach(word => {
    let tl = gsap.timeline({yoyo:true/*,repeat:1,repeatDelay:2*/})
    tl.to(".text",{duration:20, text: letter})
    masterTl.add(tl)
})