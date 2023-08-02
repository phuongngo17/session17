class Rectangle{
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.perimeter=()=>{
            console.log(2*(this.length+this.width));
        }
        this.area=()=>{
            console.log(this.length*this.width);
        }
    }
}
let Rectangle1 = new Rectangle(5, 7);
console.log(Rectangle1);
Rectangle1.area();
Rectangle1.perimeter();


// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;

//     }
//     perimeter() {
//         console.log(2 * (this.length + this.width));
//     }
//     area() {
//         console.log(this.length * this.width);
//     }
// }
// let a = +(prompt("Nhập vào độ dài:"));
// let b = +(prompt("Nhập vào độ rộng:"));

// let rectangle1 = new Rectangle(a, b);
// rectangle1.area();
// rectangle1.perimeter();
