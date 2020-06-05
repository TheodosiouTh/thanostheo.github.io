
function fixWork()
{
    console.log("In")
    done = false;
    const projects = document.querySelectorAll('.card');

    if(window.screen.width < 768){
        projects.forEach((item) => {
            item.classList.remove('col');
            item.classList.add('col-12');
        });
    }
    else {
        projects.forEach((item) => {
            item.classList.remove('col-12');
            item.classList.add('col');
        });
    }
}

 // ANIMATIONS ON SCROLL
 $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1 name').addClass('animated fadeIn');
},{ 
    offset: '50%'
});

$('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
},{ 
    offset: '50%'
});

$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
},{ 
    offset: '50%'
});

$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
},{ 
    offset: '50%'
});

