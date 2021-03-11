$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if(scrollPos > introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }

    });

    
    /* Nav Toggle */
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
});



//! Animations
const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for(let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      console.log(animItemOffset)
      const animStart = 10;
     

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) &&  pageYOffset < (animItemOffset + animItemHeight)) {
        console.log('bibobe')
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')){
            animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() =>{
    animOnScroll();
  }, 300)
  
}