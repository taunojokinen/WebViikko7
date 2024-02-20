import {Circle} from "./class/Circle.js"
import {Line} from "./class/Line.js"
import {Rect} from "./class/Rect.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const line_width_input = document.querySelector('input[type=number]')
const stroke_style_input = document.querySelector('input[type=color]')

const updateUI = (label3,label4) => {
    document.querySelector('div#third label').innerHTML = label3
    console.log('hello world = ' + label3)

    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display ="inline-block"
        document.querySelector('div#fourth input').style.display ="inline-block"
    } else {
        document.querySelector('div#fourth label').style.display ="none"
        document.querySelector('div#fourth input').style.display ="none"
    }
}


radio_form.addEventListener('click',() => {
    const shape = radio_form['shape'].value
    console.log(shape)
    switch (shape) {
        case 'line':
            updateUI('x2','y2')
            break
        case 'circle':
            updateUI('width')
            break
        case 'rectangle':
            updateUI('width','height')
            break
        case 'square':
            updateUI('width')
            break
    }
})

draw_button.addEventListener('click', () => {
    const shape = radio_form['shape'].value
    console.log(shape)
    switch (shape) {
        case 'line':
            drawLine()
            break
        case 'circle':
            console.log("ympyrää pukkaa")
            drawCircle()
            
            break
        case 'rectangle':
            drawRect()
            break
        case 'square':
            drawSquare()
            break
    }

})

const drawCircle = () => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const lineWidth = line_width_input.value
    const strokeStyle = stroke_style_input.value
    console.log(x + y + width)
    const circle = new Circle(x,y,width/2)
    circle.setLineWidth = lineWidth
    circle.setStrokeStyle = strokeStyle
    circle.draw(ctx)
}

const drawLine = () => {
    const x = x_input.value
    const y = y_input.value
    const x2 = document.querySelector('div#third input').value
    const y2 = document.querySelector('div#fourth input').value   
    const lineWidth = line_width_input.value
    const strokeStyle = stroke_style_input.value
    console.log(x + y + x2 + y2)
    const line = new Line(x,y,x2,y2)
    line.setLineWidth = lineWidth
    line.setStrokeStyle = strokeStyle
    line.draw(ctx)
}

const drawRect = () => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const height = document.querySelector('div#fourth input').value   
    const lineWidth = line_width_input.value
    const strokeStyle = stroke_style_input.value
    console.log(x + y + width + height )
    const rect = new Rect(x,y,width,height)
    rect.setLineWidth = lineWidth
    rect.setStrokeStyle = strokeStyle
    rect.draw(ctx)
}

const drawSquare = () => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const height = document.querySelector('div#fourth input').value   
    const lineWidth = line_width_input.value
    const strokeStyle = stroke_style_input.value
    console.log(x + y + width + height )
    const rect = new Rect(x,y,width,width)
    rect.setLineWidth = lineWidth
    rect.setStrokeStyle = strokeStyle
    rect.draw(ctx)
}