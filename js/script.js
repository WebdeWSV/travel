

//burger JS
const headerBurger = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.menu');
if (headerBurger){        
    headerBurger.addEventListener('click', function(e){
        document.body.classList.toggle('lock');
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        headerBurger.classList.toggle('fa-times');
    })
}

 // Прокрутка при клике JS
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
menuLinks.forEach(menuLink=> {
    menuLink.addEventListener('click', onMenuLinkClick);
});
function onMenuLinkClick (e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        
    if(headerBurger.classList.contains('active')){
        document.body.classList.remove('lock');
        headerBurger.classList.remove('active');
        headerMenu.classList.remove('active');
        headerBurger.classList.remove('fa-times'); 
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}
}


//slider

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})
