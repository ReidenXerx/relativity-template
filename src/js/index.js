require('./objects/header.js');
require('./animations/parallax.js');
require('./animations/ripple.js');
import * as timingFunctions from './animations/timing-functions.js';
//import * as animationsList from '../scss/project/js/animations-list.js';
import * as handlers from './animations/handlers.js';
import * as animations from './animations/animations.js';

var list = [
  {
    className: '.mihail',
    animationType: 'click',
    animationName: 'Ripple',
    animationTimingFunction: timingFunctions.timingFunctions['easeInOutSine'],
    animation: animations.ripple,
    animationDuration: 1000
  }
]

handlers.activateAnimationsFromList(list)
