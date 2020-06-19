import * as handlers from './../../js/animations/handlers.js'
import * as animations from './../../js/animations/animations.js'
import { timingFunctions } from './../../js/animations/timing-functions.js'

export var list = [
  {
    className: '.mihail',
    animationType: 'click',
    animationName: 'Ripple',
    animationTimingFunction: timingFunctions['easeInOutSine'],
    animation: animations.ripple,
    animationDuration: 1000
  }
]
