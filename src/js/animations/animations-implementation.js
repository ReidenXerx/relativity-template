/*
полноценные реализации анимаций
*/
export var animationsImplementation = {
  Ripple: function(e, animation, duration) {
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
    ripples.animate(animation, duration)
    e.currentTarget.appendChild(ripples)
    setTimeout(() => {
      ripples.remove()
    }, 1000)
  },
  TestAnimation: function(e, animation, duration) {
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
