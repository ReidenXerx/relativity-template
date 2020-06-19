console.log('index.js')

import { CreatePreloader } from './../../js/objects/preloader.js'

CreatePreloader({
  className: '.preloader-test',
  delay: 2000,
  preloaderText: [
    'text1', 'text2', 'text3'
  ],
  textClassName: '.preloader-text'
})
