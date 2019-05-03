import { Observer } from './observer';

export class ConcreteObserverA implements Observer {
  
  constructor(){}
  
  update(value: number) {
    console.log("Observer A updated!:", value);
  }
}