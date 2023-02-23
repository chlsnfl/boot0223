$(function(){
    $('.slick-slider').slick({
        dots : true,
        infinite:true,
        speed : 500,
        slidesToShow :3,
        cneterMode : true,
        centerPadding :'60px',
        autoplay : true,
        prevArrow:$('.prevArrow'),
        nextArrow:$('.nextArrow'),
        responsive :[
            {
            breakpoint :768,
            setting :{
                cneterMode : true,
                centerPadding : '30px',
                slideToShow :2
            }
        },
        {
            breakpoint : 576,
            setting :{
                cneterMode : true,
                slideToShow : 1,
                centerPadding : '30px'
            }
        }
        ]
    });
});