describe("FizzBuzz", function() {
  describe("Divisors", function() {
    describe("Returns TRUE when", function() {
      it("divisible by 3", function() {
        expect(divisible_by_3(3)).toBe(true);
      });
      it("divisible by 5", function() {
        expect(divisible_by_5(5)).toBe(true);
      });
      it("divisible by 15", function() {
        expect(divisible_by_15(15)).toBe(true);
      });
    });

    describe("Returns FALSE when", function() {
      it("not divisible by 3", function() {
        expect(divisible_by_3(2)).toBe(false);
      });
      it("not divisible by 5", function() {
        expect(divisible_by_5(2)).toBe(false);
      });
      it("not divisible by 15", function() {
        expect(divisible_by_15(2)).toBe(false);
      });
    });
  });

  describe("FizzBuzz returns", function() {
    it("'Fizz' when number is divisible by 3", function() {
      expect(fizzbuzz(3)).toEqual('Fizz');
    });
    it("'Buzz' when number is divisible by 5", function() {
      expect(fizzbuzz(5)).toEqual('Buzz');
    });
    it("'FizzBuzz' when number is diisible by both 3 and 5", function() {
      expect(fizzbuzz(15)).toEqual('FizzBuzz');
    });
    it("number itself otherwise", function() {
      expect(fizzbuzz(1)).toEqual(1);
    });
  });
});
