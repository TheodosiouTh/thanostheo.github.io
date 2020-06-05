
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
 $('.about-me').waypoint(function(direction){
    console.log("hello");
    $('.about-me').addClass('animate__animated animate__fadeIn');
},{ 
    offset: '50%'
});

$('.projects').waypoint(function(direction){
    $('.projects').addClass('animate__animated animate__fadeInUp');
},{ 
    offset: '65%'
});

