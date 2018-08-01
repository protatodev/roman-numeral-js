export class RomanNumerals {
  
  constructor(number) {
    this.number = number;
  }

  calculate() {
    if(this.number > 3999) {
      return "Limit is 3999";
    }

    let numerals = {M: 1000,
                   CM: 900,
                    D: 500,
                   CD: 400,
                    C: 100,
                   XC: 90,
                    L: 50,
                   XL: 40,
                  XXX: 30,
                    X: 10,
                   IX: 9,
                    V: 5,
                   IV: 4,
                    I: 1,};
    let roman = "";
    let i = 0;

    for(i in numerals) {
      while(this.number >= numerals[i]) {
        roman += i;
        this.number -= numerals[i];

      }
    }

    return roman;
  }
}
