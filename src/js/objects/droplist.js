export function CreateDroplist(object) {
  var element = document.querySelector(object.className)
  if(element === null) return
  //console.log('droplist found')

  if(object.headClassName === undefined) object.headClassName = '.head'
  if(object.itemsClassName === undefined) object.itemsClassName = '.item'
  if(object.animationLength === undefined) object.animationLength = 300
  if(object.droplistName === undefined) object.droplistName = 'droplist'+object.className
  var head = element.querySelector(object.headClassName)
  var items = element.querySelectorAll(object.itemsClassName)
  if(head === null || items === null) return
  //console.log('head and items found')
  element.style.position = 'relative'

  var input = document.createElement('input')
  input.setAttribute('type', 'hidden')
  input.setAttribute('name', object.droplistName)
  element.insertBefore(input, head)

  items.forEach((item, i) => {
    item.style.top = ((i + 1) * item.getBoundingClientRect().height) + 'px'
    item.style.display = 'none'
    item.style.position = 'absolute'
    item.style.left = 0
  })
  var hidden = true


  head.addEventListener('click', () => {
    if(hidden) {
      items.forEach((item, i) => {
        item.style.display = 'block'
        item.animate([{ opacity: 0 }, { opacity: 1 }], object.animationLength)
      })
      hidden = false
    }
    else {
      items.forEach((item, i) => {
        new Promise((resolve) => {
          item.animate([{ opacity: 1 }, { opacity: 0 }], object.animationLength)
          setTimeout(() => { resolve() }, object.animationLength)
        }).then(() => { item.style.display = 'none' })
      })
      hidden = true
    }
  })

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      head.innerHTML = item.innerHTML
      input.setAttribute('value', item.innerHTML)
      items.forEach((hide, i) => {
        new Promise((resolve) => {
          hide.animate([{ opacity: 1 }, { opacity: 0 }], object.animationLength)
          setTimeout(() => { resolve() }, object.animationLength)
        }).then(() => { hide.style.display = 'none' })
      })
      hidden = true

    })
  })

}
