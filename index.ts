// based on https://en.wikipedia.org/wiki/The_Observer

// Import stylesheets
import './style.css';

import { ConcreteObserverA } from './concrete-observer-a';
import { ConcreteObserverB } from './concrete-observer-b';
import { ConcreteSubject } from './concrete-subject';
import { Observer } from './observer';
import { Subject } from './subject';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Observer example</h1>
                    Open the console to test!`;
  
let observerA: Observer = new ConcreteObserverA();
let observerB: Observer = new ConcreteObserverB();
let subject: Subject = new ConcreteSubject();

subject.register(observerA);
subject.notify(1);
subject.register(observerB);
subject.notify(2);