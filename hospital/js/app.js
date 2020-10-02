const ham = document.querySelector('.ham');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.links li');

ham.addEventListener('click', function () {
    nav.classList.toggle('nav-active');

    // animation
    navLinks.forEach(function (link, index) {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade .3s ease forwards ${index/8+0.1}s`;
        }
    });
});

// work done animation
const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;
        if (count < target) {
            counter.innerText =Math.ceil(count + inc);
            setTimeout(updateCount, 2);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});


// creative blog
const creativeBlog=document.querySelectorAll('.creative-blog-item');

creativeBlog.forEach(function(ans){
const btn=ans.querySelector('.creative-blog');
btn.addEventListener('click', function(){
creativeBlog.forEach(function(item){
if(item!==ans){
    item.classList.remove('show-text');
}
});
ans.classList.toggle('show-text');

});
});




