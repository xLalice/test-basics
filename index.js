function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => (b === 0 ? "Cannot divide by zero" : a / b),
  multiply: (a, b) => a * b,
};

function caesarCipher(str, shift) {
  function shiftChar(char) {
    const charCode = char.charCodeAt(0);

    if (char >= "a" && char <= "z") {
      const shiftedCharCode = ((((charCode - 97 + shift) % 26) + 26) % 26) + 97;
      return String.fromCharCode(shiftedCharCode);
    } else if (char >= "A" && char <= "Z") {
      const shiftedCharCode = ((((charCode - 65 + shift) % 26) + 26) % 26) + 65;
      return String.fromCharCode(shiftedCharCode);
    } else {
      return char; // Keep non-alphabetic characters unchanged
    }
  }
  return str.split("").map(shiftChar).join("");
}

function analyzeArray(array){
    if (array.length === 0){
        return {
            average: 0,
            max: undefined,
            min: undefined,
            length: 0
        }
    }
    let average = array.reduce((sum, value) => sum + value, 0) / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;

    return {
        average,
        min,
        max,
        length
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
