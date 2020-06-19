import { getRandomInt } from './../functions/functions.js'

export function CreatePreloader(object, callback) {
  if(object.className === undefined) {
    return
  }
  var element = document.querySelector(object.className)
  if(element === null) {
    return
  }
  if(object.delay === undefined) {
    object.delay = 0
  }
  var preloaderText = object.preloaderText
  if(object.textClassName !== undefined) {
    var textObject = document.querySelector(object.textClassName)
    if(preloaderText !== undefined && textObject !== null && preloaderText.length > 0) {
      textObject.innerHTML = preloaderText[getRandomInt(preloaderText.length)]
    }
  }
  element.style.position = "fixed"
  element.style.top = 0
  element.style.left = 0
  element.style.zIndex = 999999999999
  element.style.width = "100vw"
  element.style.height = "100vh"
  element.style.display = "flex"
  element.style.justifyContent = "center"
  element.style.alignItems = "center"
  typeof callback === 'function' && callback(element)

  window.onload = function() {
    setTimeout(() => {
      element.style.display = "none"
    }, object.delay)
  }

}
