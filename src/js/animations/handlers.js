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
//import * as animations from './animations.js'

var easyAnimation = (e, animation, options, styles) => {
  (typeof animation === 'object' && typeof options === 'object') && e.currentTarget.animate(animation, options)
  if(typeof styles === 'object') {
  var props = Object.keys(styles)
  props.forEach((i) => {
    e.currentTarget.style[i] = styles[i]
  })
  }
}

export let activateAnimationsFromList = (list) => {
  list.forEach((item) => {

    animationByEvent('' + item.className, '' + item.animationType, (e, str) => {

      var i
      str === 'off' ? i = 1 : i = 0

      if(!item.body[i].counter) item.body[i].counter = 0
      //console.log(item.body[i].counter, item.body[i])
      if(!isNaN(item.body[i].animationIterations) && item.body[i].counter >= item.body[i].animationIterations) {
        return
      }

      if(typeof item.body[i].animationName === 'string' && item.body[i].animationName !== 'easyAnimation') { // если анимация сложная
        animationsImplementation['' + item.body[i].animationName](e, item.body[i].animationProps, item.body[i].styles)
      }
      else { // если простая
        if(item.body[i].animationStopAtEnd) { // если надо, чтобы анимация замирала в конце
          // var lastKeyframe = item.body[i].animation[item.body[i].animation.length - 1]
          // var keyframeKeys = Object.keys(lastKeyframe)
          // console.log(keyframeKeys)
          // keyframeKeys.forEach((key) => {
          //   item.body[i].styles[key] = lastKeyframe[key]
          // }) // old realisation for old keyframes
          var keyframeKeys = Object.keys(item.body[i].animation)
          //console.log(item.body[i].animation)
          keyframeKeys.forEach((key) => {
            var keyArray = item.body[i].animation[key]
            var last = keyArray[keyArray.length - 1]
            if(key !== 'offset') {
              item.body[i].styles[key] = last
              //console.log(last, key)
            }


          })
        }
        easyAnimation(e, item.body[i].animation, item.body[i].animationProps, item.body[i].styles)
      }
      if(!isNaN(item.body[i].counter)) item.body[i].counter++
    })
  })
  //console.log(list)
}

export let animationByEvent = (className, eventType, callback) => {
  var allObjects = document.querySelectorAll(className)
  allObjects.forEach(item => {

    switch(eventType) {
      case 'hover':
      item.addEventListener('mouseover', (event) => {
        callback(event, 'on')
      })
      item.addEventListener('mouseout', (event) => {
        callback(event, 'off')
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
          callback(event, 'on')
          toggler = true
        }
        else {
          callback(event, 'off')
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


var hamburger1 = document.querySelector('.hamburger-1');

hamburger1.addEventListener('click', function(){
  hamburger1.classList.toggle('open');
})
