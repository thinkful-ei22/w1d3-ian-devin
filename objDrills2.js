'use strict';

//Drill 1
let loaf = {};
loaf.flour = 300;
loaf.water = 210;

loaf.hydration = function(){
  return this.water / this.flour * 100;
};

console.log(loaf.hydration());

//Drill 2
let objectTwo = {
  foo: 'I AM A VERY POWERFUL',
  bar: 21,
  fum: 'fee fi fo',
  quux: true,
  spam: function(){
    console.log('PLEASE FORWARD ME YOUR BANK PIN NUMBER FOR UNTOLD RICHES, MY LOST COUSIN');
  }
};

for(const key in objectTwo){
  console.log(`${key}: ${objectTwo[key]}`);
}

//Drill 3
let hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
console.log(hobbit.meals[3]);

