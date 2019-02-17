import prot from '../src/function';

function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

test('Добавление функции в прототип', () => {
  const expected = new Character('Char', 'Daemon');
  expected.health = 88;
  prot(Character);
  const character = new Character('Char', 'Daemon');
  const received = character.damage(20);
  expect(received).toEqual(expected);
});
