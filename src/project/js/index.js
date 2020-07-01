console.log('index.js')

import { CreatePreloader } from './../../js/objects/preloader.js'
import { CreateDroplist } from './../../js/objects/droplist.js'
import { CreateHeader } from './../../js/objects/header.js'

// CreatePreloader({
//   className: '.preloader-test',
//   delay: 2000,
//   preloaderText: [
//     'text1', 'text2', 'text3'
//   ],
//   textClassName: '.preloader-text'
// })

CreateDroplist({
  className: '.mihail-droplist'
})

CreateHeader({
  className: '.mihail-header',
  enableClassSwap: true,
  topClassName: 'red',
  defaultClassName: 'blue',
  enableSmoothScroll: true,
  linkClassName: '.link'
})
