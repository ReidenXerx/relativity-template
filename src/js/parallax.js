import $ from 'jquery';

function parallax(event) {
  this.querySelectorAll('.parallax').forEach(element => {
    var top = element.style.top + window.scrollY;
    element.style.top = top + 'px';
    console.log(window.scrollY);
    console.log('top ' + element.style.top);
  });
}

export default function Parallax() {
  $(document).ready(function(jQuery) {
    document.addEventListener('scroll', parallax);
  })
}
