export var CreateHeader = (options) => {
  var header = document.querySelector(options.className)
  if(header === null) return

  if(options.enableClassSwap) { // опция включения смены классов при скролле

    if(document.documentElement.scrollTop == 0) {
      header.classList.add(options.topClassName)
      header.classList.remove(options.defaultClassName)
    }
    else {
      header.classList.remove(options.topClassName)
      header.classList.add(options.defaultClassName)
    }
    document.addEventListener('scroll', () => {

      if(document.documentElement.scrollTop == 0) {
        header.classList.add(options.topClassName)
        header.classList.remove(options.defaultClassName)
      }
      else {
        header.classList.remove(options.topClassName)
        header.classList.add(options.defaultClassName)
      }
    })
  }
  else {
    header.classList.add(options.defaultClassName)
  }

  if(options.enableSmoothScroll) { // опция включения гладкого скролла
    var links = document.querySelectorAll(options.linkClassName)
    console.log(links)
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        event.preventDefault()
        var idhref = e.currentTarget.getAttribute('href')
        var scrollto = document.querySelector(idhref).offsetTop - 100
        var scrollcur = document.documentElement.scrollTop
        window.scroll({ top: scrollto, behavior: 'smooth' })
      })
    })


  }


}
