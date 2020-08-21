import { NumberCollection } from "./NumberCollection";
export interface Sortable {
  length: number;
  compare(leftInfex: number, rightIndex: number): boolean;
  swap(leftInfex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort() {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if (this.collection[j] > this.collection[j + 1]) {
        //   const leftHand = this.collection[j];
        //   this.collection[j] = this.collection[j + 1];
        //   this.collection[j + 1] = leftHand;
        // }
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
