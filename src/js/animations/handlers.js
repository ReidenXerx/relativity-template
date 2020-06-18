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

var animationsList = [
// {
//   className: 'red',
//   animationType: 'hover',
//   animationName: 'blup'
// },
{
  className: '.mihail',
  animationType: 'click',
  animationName: 'Ripple'
}
]

function activateAnimationsFromList(list) {
  list.forEach((item, i) => {
    animationByEvent('' + item.className, '' + item.animationType, (e) => {
      animationsImplementation['' + item.animationName](e)
    })
  })
}

var animationsImplementation = {
  Ripple: function(e) {
    e.currentTarget.style.overflow = 'hidden'
    e.currentTarget.style.position = 'relative'
    let rect = e.currentTarget.getBoundingClientRect()
    let x = e.clientX - rect.x
    let y = e.clientY - rect.y
    let ripples = document.createElement('div')
    ripples.style.left = x + 'px'
    ripples.style.top = y + 'px'
    ripples.style.position = 'absolute'
    ripples.style.background = '#fff'
    ripples.style.transform = 'translate(-50%, -50%)'
    ripples.style.pointerEvents = 'none'
    ripples.style.borderRadius = '50%'
    ripples.style.animation = 'ripple 1s linear infinite'
    e.currentTarget.appendChild(ripples)
    setTimeout(() => {
      ripples.remove()
    }, 1000)
  },
  TestAnimation: function(e) {
    e.currentTarget.animate([
      // keyframes
      { transform: 'translate3D(0, 0, 0)' },
      { transform: 'translate3D(0, -300px, 0)' }
    ], {
      // timing options
      duration: 1000,
      iterations: Infinity
    })
  }
}

function animationByEvent(className, eventType, callback) {
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
activateAnimationsFromList(animationsList)
// animationByEvent('.mihail', 'click', (e) => {
//   animationsImplementation.TestAnimation(e)
// })
