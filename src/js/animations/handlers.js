//import animations_binds from './scss/animations/animations-binds.scss';
//console.log(animations_binds.animations_parametrs);

//var all_classes = '.mihail';
//var animations_list;//animations attributes

//animations_binds.animations_parametrs.forEach(item => {
  //animations_list initialize
  //all_classes = all_classes + 'penis';
//});

//var eventType = 'click'
//var all_objects = document.querySelectorAll(all_classes)
//all_objects.forEach(item => {
  //map.get(animations_list, item).get('animation-name')
  //поставить массив анимаций в ряд, если их несколько. Анимации будут идти в массиве

  // item.addEventListener(eventType, (event) => {
  //   //do something
  //   console.log(event)
  // })

  // item.onmouseover = item.onmouseout = hover
  // function hover(event) {
  //   if (event.type == 'mouseover') {
  //     event.currentTarget.style.background = 'blue'
  //   }
  //   if (event.type == 'mouseout') {
  //     console.log(event.currentTarget, event.target, 'out')
  //     event.currentTarget.style.background = 'blue'
  //   }
  // }
//})

/*
реализация обработчиков добавления анимаций на элементы
*/
import { animationsImplementation } from './animations-implementation.js'

export let activateAnimationsFromList = (list) => {
  list.forEach((item, i) => {
    animationByEvent('' + item.className, '' + item.animationType, (e) => {
      animationsImplementation['' + item.animationName](e, item.animation, item.animationDuration)
    })
  })
}

export let animationByEvent = (className, eventType, callback) => {
  var allObjects = document.querySelectorAll(className)
  allObjects.forEach(item => {

    switch(eventType) {
      case 'hover':
      item.addEventListener('mouseover', (event) => {
        callback(event, 'mouseover')
      })
      item.addEventListener('mouseout', (event) => {
        callback(event, 'mouseout')
      })
      break;

      case 'click':
      item.addEventListener('click', (event) => {
        callback(event)
      })
      break;

      case 'toggle':
      var toggler = false
      item.addEventListener('click', (event) => {
        if(!toggler) {
          callback(event, 'toggled')
          toggler = true
        }
        else {
          callback(event, 'untoggled')
          toggler = false
        }
      })
      break;

      case 'windowscroll':
      window.addEventListener('scroll', (event) => {
        callback(event, item)
      })
      break;

      case 'itemscroll':
      item.addEventListener('scroll', (event) => {
        callback(event)
      })
      break;

      case 'DOMready':
      document.addEventListener("DOMContentLoaded", (event) => {
        callback(event)
      })
      break;

      default:
        return;
    }


  })
}
