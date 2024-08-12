import { IteratorResult } from "./iters";
import { isPrime } from "./isPrimes";

export class Primes implements IterableIterator<number> {
   protected current: number;
   protected n: number;
   protected it: number;

   constructor(n: number, start: number = 2) {
	  this.current = start - 1;
	  this.n = n;
	  this.it = 0;
   }

   public next(): IteratorResult<number> {
	  if(this.n) {
		 while(!isPrime(++this.current)) {}
		 this.it++;
		 if(this.it > this.n) {
			return {
			   done: true,
			   value: null
			};
		 }
		 return {
			done: false,
			value: this.current
		 };
	  } else
		 throw new Error("NO upper bound specified.");
   }

   [Symbol.iterator](): IterableIterator<number> {
	  return this;
   }
}
