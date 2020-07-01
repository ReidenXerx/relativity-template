export class blupAnimation {
  constructor(borderRadiusS, borderRadiusE, backgroundColorE) {

    this.direct = {
      borderRadius: [borderRadiusS, borderRadiusE],
      offset: [0, 0.25, 1],
      backgroundColor: ['transparent', backgroundColorE, backgroundColorE]
    }

    this.reverse = {
      borderRadius: [borderRadiusE, borderRadiusS],
      offset: [0, 0.25, 1],
      backgroundColor: [backgroundColorE, 'transparent', 'transparent']
    }
  }

  getDirect() {
    return this.direct;
  }


  getReverse() {
    return this.reverse;
  }
}

// TODO: REWORK ANIMATIONS

export class zoomAnimation {
  constructor(scaler) {
    this.direct = {
      transform: ['scale('+ parseFloat(1 + (scaler - 1) * 0.5) +')', 'scale('+ parseFloat(scaler) +')'],
      offset: [0.25, 1]
    }
    this.reverse = {
      transform: ['scale('+ parseFloat(1 + (scaler - 1) * 0.5) +')', 'scale('+ 0 +')'],
      offset: [0.25, 1]
    }
  }

  getDirect() {
    return this.direct;
  }


  getReverse() {
    return this.reverse;
  }
}

export class rotateAnimation {
  constructor(rotation) {
    this.direct = {
      transform: ['rotateZ('+ parseFloat(0.5 * rotation) + 'deg)', 'rotateZ('+ rotation + 'deg)'],
      offset: [0.25, 1]
    }

    this.reverse = {
      transform: ['rotateZ('+ parseFloat(0.5 * rotation) + 'deg)', 'rotateZ(0deg)'],
      offset: [0.25, 1]
    }

  }

  getDirect() {
    return this.direct;
  }


  getReverse() {
    return this.reverse;
  }
}

export class testAnimation {
  constructor() {
    this.direct = {
      transform: ['rotateZ(0deg)', 'rotateZ(90deg)', 'rotateZ(-90deg)'],
      offset: [0, 0.8, 1]
    }

  }

  getDirect() {
    return this.direct;
  }
}

// export class zshadowAnimation {
//   constructor(translateX, direction, shadowRange, shadowColor) {
//     var boxShadow = "";
//     for (var i = 1; i < shadowRange + 1; i++) {
//       boxShadow = boxShadow + i * 1px + " "
//       boxShadow = boxShadow + i * 1px + " "
//       if (i < shadowRange + 1) {
//         boxShadow = boxShadow + shadowColor + ","
//       }
//       else {
//         boxShadow = boxShadow + shadowColor + ";"
//       }
//     }
//     boxShadow = boxShadow.replace(/["']/g,''));
//
//     if (direction == left) {
//       shadowRange = shadowRange * (-1)
//     }
//
//     this.direct = [
//
//       {
//         boxShadow: boxShadow,
//         -webkit-transform: translateX(shadowRange * 0.5 * 1px),
//         transform: translateX(shadowRange * 0.5 * 1px),
//         offset: 0.25
//       },
//       {
//         boxShadow: boxShadow,
//         -webkit-transform: translateX(shadowRange * 1px),
//         transform: translateX(shadowRange * 1px)
//       }
//
//     ]
//
//     this.reverse = [
//
//       {
//         boxShadow: boxShadow,
//         -webkit-transform: translateX(shadowRange * 0.5 * 1px),
//         transform: translateX(shadowRange * 0.5 * 1px),
//         offset: 0.25
//       },
//       {
//         boxShadow: boxShadow,
//         -webkit-transform: translateX(shadowRange * 1px),
//         transform: translateX(shadowRange * 1px)
//       }
//
//     ]
//   }
//
//   getDirect() {
//     return this.direct;
//   }
//
//
//   getReverse() {
//     return this.direct;
//   }
// }
