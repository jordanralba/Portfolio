$(()=>{
    $(window).scroll(()=>{
        const scrollVal = $(window).scrollTop();            
        if(scrollVal >= 0){        
            $('section').each((i, element)=>{            
                if($(element).position().top <= scrollVal +500){
                    $('.menu a.active').removeClass('active');
                    $('.menu a').eq(i).addClass('active');
                }
            })
        }
    });
    $(document).ready(()=>{
        $(".menu a").on('mouseover', ()=>{
            $('.menu a:hover span').css('visibility', 'visible');
            $('.menu a:hover span').css('opacity', '100%');
        });
        $(".menu a").on('mouseout', ()=>{
            $('.menu a span').css('visibility', 'hidden');
            $('.menu a span').css('opacity', '0');
        });
    });
    $(document).ready(()=>{
              const owl = $('.owl-carousel');
              owl.owlCarousel({
                lazyLoad: true,
                margin: 10,
                nav: true,
                dots: false,
                autoplay: false,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  992: {
                    items: 3
                  },
                  1500: {
                    items: 5
                  }
                }
              })
            })
});