class SmartDevice{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log("I am eating electron...they are yummy")
    }
}

class Phone extends SmartDevice {
    constructor(name, price, camera){
        super(name, price);
        this.camera = camera;
    }
    
}

class Watch extends SmartDevice{
    constructor(name, price, distance){
        super(name, price);
        this.distance = distance;
    }
}

class Tablet extends SmartDevice{
    constructor(name, price, isWifi){
        super(name, price);
        this.isWifi = isWifi;
    }
}

const samsung = new Phone('Samsung', 30000, "48px");
console.log(samsung);

samsung.charging()

const ipad = new Tablet('Apple', 78000, true);
console.log(ipad);