$(document).ready(function() {
    
    //Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: {color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 10);
            
            circle.setText(value);
        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: {color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 625);
            
            circle.setText(value);
        }

    });
    
    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: {color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 6);
            
            circle.setText(value);
        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: {color: '#AAA'},
        to: {color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);
            
            circle.setText(value);
        }

    });

    // Iniciando o loader quando o usuario chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0

    $(window).scroll(function (e) {

        let scroll = $(window).scrollTop();
    
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
          circleA.animate(1.0);
          circleB.animate(1.0);
          circleC.animate(1.0);
          circleD.animate(1.0);
    
          stop = 1;
        }
    
    });

    //Paralax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

    }, 250);

    //scroll para seções
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {
    
        let btnId = $(this).attr('id');
        
        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    
    });


});