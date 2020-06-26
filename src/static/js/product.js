$(function(){
    // Modal Into Modal
    $('#bannerGuideSizes').on('click', function() {
        $(this).modal('show');
        $('.modal-backdrop').remove();
    });

    // AddToBasket Btn
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

// ===== Thubnails Vertical Carousel ===== //
const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 6,
    spaceBetween: 5,
    pagination: {
      clickable: true,
    },
});