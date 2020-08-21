import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";

const charactersCollection = new CharactersCollection("ahHsbycs");

const sorter = new Sorter(charactersCollection);
sorter.sort();

console.log(charactersCollection);
// const numberCollection = new NumberCollection([1, 88, -2, 7]);

// const sorter = new Sorter(numberCollection);
// sorter.sort();

// console.log(numberCollection);
