class Hero {
    constructor( name, power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power;
        }
        return "I have no power"
    }
    goForGrocery(){
        if(this.power){
            console.log(this.getPower)
        }
        return " Price is too high , I can not buy"
    }
}

const catman = new Hero('batman',  );
console.log( catman.goForGrocery());