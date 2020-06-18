class blupAnimation {
  constructor(border-radius-s, border-radius-e, background-color-e) {
    this.direct = [

      {
        borderRadius: border-radius-s,
        offset: 0.01
      },
      {
        background: background-color-e,
        offset: 0.25
      },
      {
        borderRadius: border-radius-e,
        background: background-color-e
      }

    ]

    this.reverse = [

      {
        borderRadius: border-radius-e,
        background: background-color-e,
        offset: 0.01
      },
      {
        background: transparent,
        offset: 0.25
      },
      {
        borderRadius: border-radius-s,
        background: transparent
      }

    ]
  }

  getDirect() {
    return this.direct;
  }


  getReverse() {
    return this.direct;
  }
}

class zoomAnimation {
  constructor(scaler) {
    this.direct = [

      {
        -webkit-transform: scale(1 + (scaler - 1) * 0.5),
        -ms-transform: scale(1 + (scaler - 1) * 0.5),
        transform: scale(1 + (scaler - 1) * 0.5),
        offset: 0.25
      },
      {
        -webkit-transform: scale(scaler),
        -ms-transform: scale(scaler),
        transform: scale(scaler)
      }

    ]

    this.reverse = [

      {
        -webkit-transform: scale(1 + (scaler - 1) * 0.5),
        -ms-transform: scale(1 + (scaler - 1) * 0.5),
        transform: scale(1 + (scaler - 1) * 0.5),
        offset: 0.25
      },
      {
        -webkit-transform: scale(scaler),
        -ms-transform: scale(scaler),
        transform: scale(scaler)
      }

    ]
  }

  getDirect() {
    return this.direct;
  }


  getReverse() {
    return this.direct;
  }
}

class rotateAnimation {
  constructor(rotation) {
    this.direct = [

      {
        -webkit-transform: rotateZ(0.5 * rotation * 1deg),
        -ms-transform: rotateZ(0.5 * rotation * 1deg),
        transform: rotateZ(0.5 * rotation * 1deg),
        offset: 0.25
      },
      {
        -webkit-transform: rotateZ(rotation * 1deg),
        -ms-transform: rotateZ(rotation * 1deg),
        transform: rotateZ(rotation * 1deg)
      }

    ]

    this.reverse = [

      {
        -webkit-transform: rotateZ(0.5 * rotation * 1deg),
        -ms-transform: rotateZ(0.5 * rotation * 1deg),
        transform: rotateZ(0.5 * rotation * 1deg),
        offset: 0.25
      },
      {
        -webkit-transform: rotateZ(0deg),
        -ms-transform: rotateZ(0deg),
        transform: rotateZ(0deg)
      }

    ]
  }

  getDirect() {
    return this.direct;
  }


  getReverse() {
    return this.direct;
  }
}

class zshadowAnimation {
  constructor(translateX, direction, shadowRange, shadowColor) {
    var boxShadow = "";
    for (var i = 1; i < shadowRange + 1; i++) {
      boxShadow = boxShadow + i * 1px + " "
      boxShadow = boxShadow + i * 1px + " "
      if (i < shadowRange + 1) {
        boxShadow = boxShadow + shadowColor + ","
      }
      else {
        boxShadow = boxShadow + shadowColor + ";"
      }
    }
    boxShadow = boxShadow.replace(/["']/g,''));

    if (direction == left) {
      shadowRange = shadowRange * (-1)
    }

    this.direct = [

      {
        boxShadow: boxShadow,
        -webkit-transform: translateX(shadowRange * 0.5 * 1px),
        transform: translateX(shadowRange * 0.5 * 1px),
        offset: 0.25
      },
      {
        boxShadow: boxShadow,
        -webkit-transform: translateX(shadowRange * 1px),
        transform: translateX(shadowRange * 1px)
      }

    ]

    this.reverse = [

      {
        boxShadow: boxShadow,
        -webkit-transform: translateX(shadowRange * 0.5 * 1px),
        transform: translateX(shadowRange * 0.5 * 1px),
        offset: 0.25
      },
      {
        boxShadow: boxShadow,
        -webkit-transform: translateX(shadowRange * 1px),
        transform: translateX(shadowRange * 1px)
      }

    ]
  }

  getDirect() {
    return this.direct;
  }


  getReverse() {
    return this.direct;
  }
}
