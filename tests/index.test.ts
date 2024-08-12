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
   describe("With upper bound and not starting at default initial values", () => {
	  let primes: Primes;
	  let seq: Array<number>;
	  let nextInSeq: IteratorResult<number>;
	  beforeAll(() => {
		 primes = new Primes(10, 3);
		 seq = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, -1];
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
   describe("With upper bound as an array", () => {
	  let primes: Primes;
	  let primesArr: Array<number>;
	  let seq: Array<number>;
	  beforeAll(() => {
		 primes = new Primes(10);
		 primesArr = [...primes];
		 seq = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
	  });
	  test("Should be an array of first 10 primes in the sequence.", () => {
		 expect(primesArr).toEqual(seq);
	  });
   });
   describe("With upper bound as an array and not starting at default values", () => {
	  let primes: Primes;
	  let primesArr: Array<number>;
	  let seq: Array<number>;
	  beforeAll(() => {
		 primes = new Primes(10, 3);
		 primesArr = [...primes];
		 seq = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
	  });
	  test("Should be an array of first 10 primes in the sequence.", () => {
		 expect(primesArr).toEqual(seq);
	  });
   });
});
