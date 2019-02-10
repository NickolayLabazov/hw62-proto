import prot from './function';

function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

prot(Character);
const character = new Character('Char', 'Daemon');
character.damage(20);
console.log(character);
