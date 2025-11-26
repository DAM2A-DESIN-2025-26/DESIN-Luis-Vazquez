import { Component, signal } from "@angular/core";

@Component({
  templateUrl: "./counter.html",

})
export class Counter {

counter = 10;
counterSignal = signal(0);


incrementar(incremento:number) {
  this.counter += incremento;
  this.counterSignal.update(c=>c+incremento)
}

decrementar(decremento:number) {
  this.counter -= decremento;
  this.counterSignal.update(c=>c-decremento)
}

resetear(){
  this.counter = 10;
  this.counterSignal.update(c=>c = 0)

}

}
