/*
инициатор добавления анимаций к элементам по списку
*/
import { list } from './../../project/js/animations-list.js'
import { activateAnimationsFromList } from './handlers.js'

if(list !== undefined) {
  try {
    activateAnimationsFromList(list)
  }
  catch(e) {
    console.log(e)
  }
}
