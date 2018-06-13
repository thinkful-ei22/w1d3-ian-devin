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
  if(char.boss === undefined){
    console.log(`${char.jobTitle} ${char.name} doesn't report to anybody.`);
  }
  else {
    console.log(`${char.jobTitle} ${char.name} reports to ${char.boss}`);
  }
});

//Drill 6

let cypher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  default: ' ',
  decodeWord: function(word){
    if(this[word[0]] === undefined){
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

class Character {
  constructor(name, nickname, race, origin, attack, defense, weapon){
    this.name = name;
    this.nickname = nickname;
    this.race = race;
    this.origin = origin;
    this.attack = attack;
    this.defense = defense;
    this.weapon = weapon;
  }
  descibe(){
    console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}.`);
  }
  
  fightMath(attack, defense){
    return defense > attack ? 0 : attack - defense;
  }
  
  evaluateFight(character){
    let damageIn = this.fightMath(character.attack, this.defense);
    let damageOut = this.fightMath(this.attack, character.defense);
    return `Your opponent takes ${damageOut} damage and you receive ${damageIn} damage`;
  }
}

let characters = [
  new Character('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  new Character('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  new Character('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  new Character('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  new Character('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

console.log(characters);

characters.push(new Character('Arwen Undomiel','arry', 'Half-Elf', 'Rivendell', 16, 7));

console.log(characters);

characters.find(char => char.nickname === 'aragorn').descibe();

console.log(characters.filter(char => char.race === 'Hobbit'));

console.log(characters.filter(char => char.attack > 5));


// BONUS A
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  let hero = arr.find(function(char){
    let result = true;

    for(const key in query){
      result = result & query[key] === char[key];
    }
    return result;
  });

  return hero ? hero : null;
}

console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));