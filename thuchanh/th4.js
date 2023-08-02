class Mouse{
    constructor(weight, speed) {
        this.weight = weight;
        this.speed = speed;
    }
}
class Cat extends Mouse{
    constructor(name, weight, speed) {
        super(weight, speed);
        this.name = name;   
    }
    meow() {
        console.log(`${this.name} meo meo`);
    }
    catchMouse(mouse) {
        if (this.speed > mouse.speed) {
            console.log(`${this.name} bắt chuột!`);
            mouse.alive = false;
        } else {
            console.log(`${this.name} không bắt được chuột..`);
        }
    }
    eatMouse(mouse) {
        if (mouse.alive) {
            console.log(`${this.name} không thể ăn được chuột`);
        } else {
            console.log(`${this.name} đã ăn được chuột`);
        }
        this.weight += mouse.weight;
    }
}
const cat = new Cat("Tom", 5,20);
const mouse = new Mouse(1, 10);
cat.meow();
cat.catchMouse(mouse);
cat.eatMouse(mouse);
console.log(`${cat.name}'s weight: ${cat.weight}`);
