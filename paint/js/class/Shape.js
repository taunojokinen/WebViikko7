export class Shape {
    _x
    _y
    _linewidth
    _strokeStyle

    constructor (x,y, _lineWidth = 1, _strokeStyle = '#ff0000') {
        this._x = x
        this._y = y
        this._lineWidth = _lineWidth
        this._strokeStyle = _strokeStyle
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    set setStrokeStyle(strokeStyle) {
        this._strokeStyle = strokeStyle
    }
}
