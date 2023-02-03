var convertToRoman = function(num) {
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
    var aux = "";
  
    for (let i = 0; i < decimal.length; index++) {
      while (decimal[i] <= num) {
        aux += roman[i];
        num -= decimal[i];
      }
    }
  
    return aux;
  };