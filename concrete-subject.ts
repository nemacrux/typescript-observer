import { Observer } from './observer';
import { Subject } from './subject';

export class ConcreteSubject implements Subject {
  private observersList: Observer[] = [];

  constructor() {}

  register(obs: Observer) {
    this.observersList.push(obs);
  }

  unregister(obs: Observer) {
    throw new Error('Unregister() not implemented!');
  }

  notify(value: number) {
    this.observersList.forEach( (o: Observer) => o.update(value))
  }
}