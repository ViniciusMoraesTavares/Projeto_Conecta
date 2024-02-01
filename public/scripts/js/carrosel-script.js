$(function() {
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    dots: true,
    infinite: true
  })
})

const cursos = document.querySelectorAll('.curso');

cursos.forEach(curso => {
  curso.addEventListener('mouseenter', () => {
    curso.classList.add('hovered');
  });

  curso.addEventListener('mouseleave', () => {
    curso.classList.remove('hovered');
  });
});