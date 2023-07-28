class Rectangle {
    // for object  set up
    constructor (_Width, _height, _color){
           console.log("The Rectangle is being created!");

           this.width = _Width;
           this.height = _height;
           this.color = _color;
    }

getArea () {
    return this.width * this.height;
}

printDescription () {
    console.log(`I am a rectangle of ${this.width} and ${this.height} and I am ${this.color}.`) 
}
}

let myRectcangle1 = new Rectangle(5, 3, 'blue');
let myRectcangle2 = new Rectangle(10, 5, 'red');

console.log(myRectcangle1.getArea());
console.log(myRectcangle2.getArea());
myRectcangle1.printDescription();
myRectcangle2.printDescription();
