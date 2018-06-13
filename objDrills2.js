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
};
console.log(hobbit.meals[3]);

//Drill 4/5

let solaire = {
  name: 'Solaire',
  jobTitle: 'Warrior of Sunlight',
  boss: 'god'
};

let bill = {
  name: 'Bill Nye',
  jobTitle: 'Science Guy',
  boss: 'mother earth'
};

let mario  = {
  name: 'Mario Mario',
  jobTitle: 'Plumber'
};

let luigi = {
  name: 'Luigi Mario',
  jobTitle: 'Green Mario',
  boss: 'Mario'

};

let link  = {
  name: 'Link',
  jobTitle: 'Hero of Time',
  boss: 'Zelda'
};

let characterArray = [solaire, bill, mario, luigi, link];

characterArray.forEach(function(char){
  if(char.boss == undefined){
    console.log(`${char.jobTitle} ${char.name} doesn't report to anybody.`)
  }
  else {
  console.log(`${char.jobTitle} ${char.name} reports to ${char.boss}`);
  }
})

//Drill 6

let cypher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  default: ' ',
  decodeWord: function(word){
    if(this[word[0]] == undefined){
      return this.default;
    }
    else{
      return word[this[word[0]]];
    }
  },
  decodeWords: function(words){
    return words.split(' ').map(word => this.decodeWord(word)).join('');
  }
};

console.log(cypher.decodeWords('craft block argon meter bells brown croon droop'));

//Drill 7






