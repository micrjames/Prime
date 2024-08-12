import { Primes } from "../Primes";
import { IteratorResult } from "../iters";

describe("The Sequence of Prime Numbers", () => {
   describe("With no upper bound", () => {
	  let primes: Primes;
	  beforeAll(() => {
		 primes = new Primes(null);
	  });
	  test("Should be defined.", () => {
		 expect(primes).toBeDefined();
	  });
	  test("Should throw the error.", () => {
		 expect(() => {
			primes.next();
		 }).toThrow("NO upper bound specified.");
	  });
   });
   describe("With upper bound", () => {
	  let primes: Primes;
	  let n: number;
	  let seq: Array<number>;
	  let nextInSeq: IteratorResult<number>;
	  beforeAll(() => {
		 n = 10;
		 primes = new Primes(n);
		 seq = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, -1];
	  });
	  test("Should have each nth term.", () => {
		 for(let it = 0; it < seq.length-1; it++) {
			nextInSeq = primes.next();
			expect(nextInSeq.done).toBeFalsy();
			expect(nextInSeq.value).toBe(seq[it]);
		 }
		 nextInSeq = primes.next();
		 expect(nextInSeq.done).toBeTruthy();
		 expect(nextInSeq.value).toBeNull();
	  });
   });
});
