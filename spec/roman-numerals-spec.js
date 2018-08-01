import { RomanNumerals } from './../src/roman-numerals.js';

describe('RomanNumerals', function() {

  it("should return 'limit is 3999' when user inputs number > 3999", function() {
    let roman = new RomanNumerals(4000);
    expect(roman.calculate()).toEqual("Limit is 3999");
  });
});
