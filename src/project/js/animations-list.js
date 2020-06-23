import * as handlers from './../../js/animations/handlers.js'
import * as animations from './../../js/animations/animations.js'
import { timingFunctions } from './../../js/animations/timing-functions.js'

var blup = new animations.blupAnimation('50%', '100%', '#d0d0d0')
var zoom = new animations.zoomAnimation(2)
var rotate = new animations.rotateAnimation(45)

export var list = [
  // {
  //   className: '.mihail',
  //   animationType: 'click',
  //   body: [{
  //     animationName: 'Ripple',
  //     animationProps: {
  //       duration: 1000,
  //       easing: timingFunctions['easeInOutSine']
  //     },
  //     styles: {
  //
  //     }
  //   }]
  // },
  // {
  //   className: '.mihail',
  //   animationType: 'hover',
  //   body: [{
  //     styles: {
  //       background: '#000'
  //     }
  //   }, {
  //     animationProps: {
  //       duration: 1000,
  //       easing: timingFunctions['easeInOutSine']
  //     },
  //     styles: {
  //       background: '#2a2a2e'
  //     }
  //   }]
  // },
  {
    className: '.mihail',
    animationType: 'click',
    body: [{
      animation: rotate.getDirect(),
      animationProps: {
        duration: 1000,
        easing: timingFunctions['easeInOutSine']
      },
      styles: {
        //background: '#000'
      }
    }]
  }
]
