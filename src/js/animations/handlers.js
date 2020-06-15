import animations_binds from './scss/animations/animations-binds.scss';
console.log(animations_binds.animations_parametrs);

var all_classes = '';
var animations_list;//animations attributes

animations_binds.animations_parametrs.forEach(item => {
  //animations_list initialize
  all_classes = all_classes + 'penis';
});

var eventType = 'click'
var all_objects = document.querySelectorAll(all_classes)
all_objects.forEach(item => {
  map.get(animations_list, item).get('animation-name')
  //поставить массив анимаций в ряд, если их несколько. Анимации будут идти в массиве

  // item.addEventListener(eventType, (event) => {
  //   //do something
  //   console.log(event)
  // })
  item.onmouseover = item.onmouseout = hover
  function hover(event) {
    if (event.type == 'mouseover') {
      console.log(event.currentTarget, event.target, 'in')
    }
    if (event.type == 'mouseout') {
      console.log(event.currentTarget, event.target, 'out')
    }
  }
})
