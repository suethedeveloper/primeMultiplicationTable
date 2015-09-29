var expect = require("chai").expect;
var prime = require("../src/prime.js");

describe('isPrime', function() {
  it('should return prime numbers only', function() {
    expect(prime.isPrime(2)).to.equal(true);
    expect(prime.isPrime(6)).to.equal(false);
  });
});

describe('getPrimes', function() {
  it('should return given size prime numbers', function() {
    expect(prime.getPrimes(3)).to.equal([2,3,5]);
    expect(prime.getPrimes(10)).to.equal([2,3,5,7,11,13,17,19,23,29]);
  });
});
