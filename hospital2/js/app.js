// hamburger
const ham=document.querySelector(".ham");
const navLinks=document.querySelector('.links');
const navList=document.querySelectorAll('.links li');

ham.addEventListener('click',function(){
navLinks.classList.toggle('nav-active');
ham.classList.toggle('toggle');

});

navList.forEach(function(item){
item.addEventListener('click',function(){
    navLinks.classList.remove('nav-active');
    ham.classList.remove('toggle');
    console.log(item);
});
});



// fixed nav
const navBar=document.querySelector('nav');
const header=document.querySelector('.header');
const address=document.querySelector('.address');

const headerHeight=header.getBoundingClientRect().height;
const addressHeight=address.getBoundingClientRect().height;

window.addEventListener('scroll', function(){
const scrollHeight=window.pageYOffset;
const navHeight=navBar.getBoundingClientRect().height;

if(scrollHeight>navHeight+headerHeight+addressHeight){
    navBar.classList.add('fixed-nav');
    navLinks.classList.add('fixed-navbar');
} else{
    navBar.classList.remove("fixed-nav");
    navLinks.classList.remove('fixed-navbar');

}
});



// department
const deptBtns=document.querySelectorAll('.dept-btn');
const deptDescription=document.querySelectorAll('.dept');

deptBtns.forEach(function(btn){
   
btn.addEventListener('click',function(e){
const id =e.currentTarget.dataset.id;

if(id){
    // remove active class from all btn
    deptBtns.forEach(function(item){
        item.classList.remove("active");
        e.currentTarget.classList.add('active');
    })
    // hide all description

    deptDescription.forEach(function(description){
     description.classList.remove('active'); 
    });

    const element=document.getElementById(id);
    element.classList.add('active');
}
});
});


// For counting up jQuery Plug in
$('.counter').countUp({
    'time': 1500,
    'delay': 20
  }); 


//  owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:15,
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
         0:{
             items:1
         },
         768:{
             items:1
         },
        992:{
            items:2
        },
        1200:{
            items:3
        }
        },
        

    });
});


// gallery

