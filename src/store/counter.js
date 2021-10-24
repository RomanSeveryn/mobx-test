import { makeAutoObservable, makeObservable } from "mobx";

class Counter {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count = this.count + 1
    console.log('inc', this.count)
  }

  decrement() {
    this.count = this.count - 1
    console.log('dec', this.count)

  }
}

export default new Counter()