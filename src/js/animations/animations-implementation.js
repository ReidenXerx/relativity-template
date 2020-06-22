/*
полноценные реализации анимаций
*/
export var animationsImplementation = {
  Ripple: function(e, options, styles) {
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
    ripples.animate([
      {
        width: '0px',
        height: '0px',
        opacity: 0.5
      },
      {
        width: '500px',
        height: '500px',
        opacity: 0
      }
    ], options)
    e.currentTarget.appendChild(ripples)
    setTimeout(() => {
      ripples.remove()
    }, 1000)
  },
  TestAnimation: function(e, animation, options, styles) {
    e.currentTarget.animate([
      // keyframes
      { background: '#ff0000' },
      { background: '#00ff00' }
    ], options)
  },
  TestAnimation2: function(e, animation, options, styles) {
    e.currentTarget.animate([
      // keyframes
      { background: '#000000' },
      { background: '#ffffff' }
    ], options)
  }
}
