(function vcProduct() {
    // Carousel Sugestions
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

    // Change BG Button Mobile
    const isMobile = window.innerWidth <= 767;
    const addButtonMb = document.querySelector('#addToBasket');
    if ( isMobile ) {
        addButtonMb.classList.add('btn-custom')
    } else {
        addButtonMb.classList.remove('btn-custom')
    }

    // Thubnails Vertical Carousel 
    const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        autoHeight: true,
        slidesPerView: 6,
        spaceBetween: 5,
        pagination: {
          clickable: true,
        },
    });

    // AddToBasket Btn
    $(function(){
        $('#addToBasket').on('click', function() {
            let addBox = $('#addProd');
            addBox.fadeIn(1000).delay(3000).fadeOut(800); 
    
            $(this).addClass('active');
            $(this).blur();
            setTimeout(() => {
                $(this).removeClass('active')
            }, (4000));    
        })
    });
}());

