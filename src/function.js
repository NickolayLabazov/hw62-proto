export default function prot(obj) {
  obj.prototype.damage = function damage(points) {
    this.health = this.health - points * (1 - this.defence / 100);
    return this;
  };
}
