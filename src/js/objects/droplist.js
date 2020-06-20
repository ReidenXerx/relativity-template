export function CreateDroplist(object) {
  var element = document.querySelector(object.className)
  if(element === null) return
  console.log('droplist found')

  if(object.headClassName === undefined) object.headClassName = '.head'
  if(object.itemsClassName === undefined) object.itemsClassName = '.item'
  var head = element.querySelector(object.headClassName)
  var items = element.querySelectorAll(object.itemsClassName)
  console.log('1', head, items)
  if(head === null || items === null) return
  console.log('head and items found')

  items.forEach((item, i) => {
    item.style.display = 'none'
  })
  var hidden = true


  head.addEventListener('click', () => {
    if(hidden) {
      items.forEach((item, i) => {
        item.style.display = 'flex'
      })
      hidden = false
    }
    else {
      items.forEach((item, i) => {
        item.style.display = 'none'
      })
      hidden = true
    }
  })

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      head.innerHTML = item.innerHTML
      items.forEach((hide, i) => {
        hide.style.display = 'none'
      })
      hidden = true

    })
  })

}
