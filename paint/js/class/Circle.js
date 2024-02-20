import {Shape} from "./Shape.js"

export class Circle extends Shape {
    #radius

    constructor(x,y,radius) {
        super(x,y)
        this.#radius=radius
    }

    draw(ctx) {
        console.log('Circle.js' + this._x + this.#radius)
        ctx.beginPath()
        ctx.arc(this._x, this._y, this.#radius, 0, 2 * Math.PI)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._strokeStyle
        ctx.stroke()
    }
}