// Extend Animal Class
// Parent Class
class Animal {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    
    printName() {
        console.log(`The name of this animal is 
  ${this.name}`);
    }
    
    showHeight() {
        console.log(`The height of this animal is 
  ${this.height} ft`);
    }
    
    showWeight() {
        console.log(`The weight of this animal is 
  ${this.weight} lbs`);
    }
  }
  
  // Child Class
  class ExtinctAnimal extends Animal {
    constructor(name, height, weight, extinctionYear) {
      super(name, height, weight);
      this.extinctionYear = extinctionYear;
    }
  
    // Add method
      showExtinctionYear() {
          console.log(`This animal became extinct in the year 
    ${this.extinctionYear}.`);
      }
  }
  
  const ringedSeal = new Animal("seal", 5, 120);
  const dodoBird = new ExtinctAnimal ("Dodo Bird", 2.5, 25, 1690);
  
  //Print the name of the ringedSeal
  ringedSeal.printName();
  
  // Console dodoBird and use method
  console.log(dodoBird);
  dodoBird.showExtinctionYear();