import * as handlers from './../../js/animations/handlers.js'
import * as animations from './../../js/animations/animations.js'
import { timingFunctions } from './../../js/animations/timing-functions.js'

var blup = new animations.blupAnimation('50%', '100%', '#d0d0d0')
var zoom = new animations.zoomAnimation(2)
var rotate = new animations.rotateAnimation(45)
var test = new animations.testAnimation()

export var list = [
  {
    className: '.mihail',
    animationType: 'click',
    body: [{
      animationName: 'Ripple',
      animationProps: {
        duration: 1000,
        easing: timingFunctions['easeInOutSine']
      },
      styles: {

      }
    }]
  },
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
    className: '#m1',
    animationType: 'click',
    body: [{
      animation: test.getDirect(),
      //animationStopAtEnd: true,
      animationIterations: 3,
      animationProps: {
        duration: 1000,
        easing: timingFunctions['easeOutQuart']
      },
      styles: {
        //background: '#000'
      }
    }]
  },
  {
    className: '#m2',
    animationType: 'click',
    body: [{
      animation: test.getDirect(),
      //animationStopAtEnd: true,
      animationProps: {
        duration: 1000,
        easing: timingFunctions['easeInOutSine']
      },
      styles: {
        //background: '#000'
      }
    }]
  },
  {
    className: '#m3',
    animationType: 'click',
    body: [{
      animation: blup.getDirect(),
      //animationStopAtEnd: true,
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
