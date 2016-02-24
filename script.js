module.exports = {
  sum: function(num1, num2){
var number = num1 + num2;
return number;

  },
  isEqual: function(value1, value2){
  return value1 === value2;


  },
  isEven: function(num1){
    return num1 % 2 === 0;
  },
  isDivisible: function(num1, num2){
    return num1 % num2 === 0;

  },
  discountPercentage: function(num1, num2){
    var discount = num1 * (num2/100);
if (num2 < 0 || num2 > 100)
{
  return "please enter a number between 0 and 100";
}
else return discount;


  },
  isVowel: function(letter){
    myArray = ["a", "e", "i","o", "u"];
    if (myArray.indexOf(letter) > -1)
    {
      return true;
    }
else return false;
  },
  celsiusToFahrenheit: function(celsius){
return celsius * 1.8 + 32;
  },
  biggestOfThree: function(a,b,c){
    if (a > b && a > c)
    {
      return a;
    }
    else if (b > a && b > c)
    {
      return b;
    }
    else if (c > a && c > b)
    {
      return c;
    }    

  },
  // Bonus
  federalIncomeTaxCalculator: function(){

  }
};
