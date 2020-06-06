
function fixWork()
{
    const projects = document.querySelectorAll('.card');
    console.log();

    if(window.innerWidth < 768){
        projects.forEach(item => {
            item.classList.remove('col');
            item.classList.add('col-12');
        });
    }
    else {
        projects.forEach(item => {
            item.classList.remove('col-12');
            item.classList.add('col');
        });
    }
}

 // ANIMATIONS ON SCROLL
 $('.about').waypoint(function(direction){
    $('.about-me').addClass('animate__animated animate__fadeIn');
},{ 
    offset: '65%'
});

$('.my-work').waypoint(function(direction){
    $('.projects').addClass('animate__animated animate__fadeInUp');
},{ 
    offset: '65%'
});

