class Circle{
    constructor(radius, color,area) {
        this.radius = radius;
        this.color = color;
        this.area = area;
        this.getRadius = () => {
            return radius;
        }
        this.getArea = () => {
            return Math.PI * radius * radius;
        }
    }
}
let Circle1 = new Circle(5, "red",0);
console.log(Circle1);
radius = Circle1.getRadius();
area = Circle1.getArea();
console.log(radius);
console.log(area);