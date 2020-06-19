export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function shortenString(str, n) {
  if(str.length > n) return str.substring(0, n) + "..."
  return str
}

export function detectItemOnScreen(elem) {
  var found = document.querySelector(elem)
  if(found === null) return false
  var b_top = found.offsetTop
  var b_bot = found.offsetTop + found.offsetHeight
  var hght = document.documentElement.clientHeight
  var current = window.pageYOffset
  if (current > b_top - hght && current < b_bot) return true
  else return false
}
