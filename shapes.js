class Shape{
    constructor (){
        this.color ="";
    }
    setColor(colorVar) {
        this.color= colorVar;
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points= polygon points ="150, 18 244, 182 56, 182" fill = "${this.color}"/>`
    }
}
class Circle extends Shape {
    render(){
        return `<circle cx="20" cy="75" r="20" fill= "${this.color}"/>`;
    }
}
class Square extends Shape {
    render(){
        return `<rect x= "73" y="40" width="160" height ="160" fill = "${this.color}"/>`;
    }
}
module.exports = {Square, Circle ,Triangle}

