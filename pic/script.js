/* lightGallery(document.querySelector('.portfolio .portfolio-container')); */
/* lightGallery(document.querySelector('.portfolio-container')); */

/* $(function(){
  $(".picture").click(function(){
    var classValue = $(this).attr("class")
    var classes = classValue.split(" ");
    var secondClass = classes[1];
    console.log("."+secondClass)
    //lightGallery(document.querySelector("."+secondClass));
    $("."+secondClass).lightGallery();
  })
}) */


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});