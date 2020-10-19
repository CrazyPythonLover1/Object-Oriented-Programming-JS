class Animal{
    static category = "Dog"; 
    location = "Khagrasori"
    constructor(name , speed){
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1 , animal2 ){
        if(animal1.speed > animal2.speed ){
            return  `${animal1.name} faster`
        }
        return  `${animal2.name} faster`
    }
}

const myRat = new Animal('Rat', 12);
const myDog = new Animal('Rat', 22);
console.log(myRat.category)
console.log(myRat.location);
console.log(Animal.location);

// get static without constructor 

console.log(Animal.category)


console.log(Animal.compare(myRat, myDog));
