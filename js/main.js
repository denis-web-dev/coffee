const owl = $('.owl-carousel');
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 30,
});


$('.slider__btn-prev').click(function () {

  owl.trigger('prev.owl.carousel');
});

$('.slider__btn-next').click(function () {
  owl.trigger('next.owl.carousel');
});


document.addEventListener('DOMContentLoaded', function () {
  let burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    burger.classList.toggle('open')
  })
});
