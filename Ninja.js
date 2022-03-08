class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  drinkSake() {
    this.health += 10;
    console.log(`${this.name} drank some sake.`);
  }

  sayName() {
    console.log(`${this.name} yelled his name!`);
  }

  showStats() {
    console.log(
      `${this.name} has ${this.health}, ${this.speed}, and ${this.strength}!`
    );
  }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);
