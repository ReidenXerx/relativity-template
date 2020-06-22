import * as handlers from './../../js/animations/handlers.js'
import * as animations from './../../js/animations/animations.js'
import { timingFunctions } from './../../js/animations/timing-functions.js'

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
  {
    className: '.mihail',
    animationType: 'hover',
    body: [{
      styles: {
        background: '#000'
      }
    }, {
      animationProps: {
        duration: 1000,
        easing: timingFunctions['easeInOutSine']
      },
      styles: {
        background: '#2a2a2e'
      }
    }]
  }
]
