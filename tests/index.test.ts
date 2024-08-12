import { Primes } from "../Primes";
import { IteratorResult } from "../iters";

describe("The Fibonacci Sequence", () => {
   let primes: Primes;
   describe("With no upper bound", () => {
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
});
