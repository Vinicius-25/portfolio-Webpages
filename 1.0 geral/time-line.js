
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
