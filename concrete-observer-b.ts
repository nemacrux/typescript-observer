import { Observer } from './observer';

export class ConcreteObserverB implements Observer {
  
  constructor(){}
  
  update(value: number) {
    console.log("Observer B updated!:", value);
  }
}