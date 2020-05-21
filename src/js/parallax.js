import $ from 'jquery';

function parallax(event) {
  this.querySelectorAll('.parallax').forEach(element => {
    element.style.transform = `translateY(${-2 * window.scrollY}px)`;
    console.log(element.style.transform);
  });
}

export default function Parallax() {
  $(document).ready(function(jQuery) {
    document.addEventListener('scroll', parallax);
  })
}
