function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // every CoffeeMachine objects have this instance members

  //   this.makeCoffee = (shots) => {
  //     console.log('making...');
  //   };
}

const machine1 = new CoffeeMachine(10); // __proto__: Object
const machine2 = new CoffeeMachine(20); // __proto__: Object

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making...');
};

const machine3 = new CoffeeMachine(10); // __proto__ > makeCoffee() / __proto__: Object
const machine4 = new CoffeeMachine(20); // __proto__ > makeCoffee() / __proto__: Object
