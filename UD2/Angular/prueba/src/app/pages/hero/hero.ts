import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero.html',
})
export class Hero {
  name = signal('Ironman');
  age = signal(45);

  changeHero() {
    this.name = signal('Spider-Man');
    this.age = signal(22);
  }
  changeEdad(){
    this.age = signal(60);

  }

  resetForm() {
    this.name = signal('Super-Man');
    this.age = signal(40);
  }

  getHeroDescription() {
    return `Nombre: ${this.name()} Edad: ${this.age()}`;
  }

}
