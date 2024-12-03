/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The seco
 * nd number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxA = a;
  if (maxA < b) {
    maxA = b;
  }
  if (maxA < c) {
    maxA = c;
  }
  return maxA;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a > b + c) {
    return false;
  }
  if (b > a + c) {
    return false;
  }
  if (c > a + b) {
    return false;
  }
  if (a === b || a === c) {
    return true;
  }
  if (b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let numberRoman = '';
  let itemNum = num;
  while (itemNum > 0) {
    if (itemNum >= 10) {
      numberRoman += 'X';
      itemNum -= 10;
    } else if (itemNum === 9) {
      numberRoman += 'IX';
      itemNum -= 9;
    } else if (itemNum >= 5) {
      numberRoman += 'V';
      itemNum -= 5;
    } else if (itemNum === 4) {
      numberRoman += 'IV';
      itemNum -= 4;
    } else {
      numberRoman += 'I';
      itemNum -= 1;
    }
  }
  return numberRoman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let stringNumber = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        stringNumber += 'zero';
        break;
      case '1':
        stringNumber += 'one';
        break;
      case '2':
        stringNumber += 'two';
        break;
      case '3':
        stringNumber += 'three';
        break;
      case '4':
        stringNumber += 'four';
        break;
      case '5':
        stringNumber += 'five';
        break;
      case '6':
        stringNumber += 'six';
        break;
      case '7':
        stringNumber += 'seven';
        break;
      case '8':
        stringNumber += 'eight';
        break;
      case '9':
        stringNumber += 'nine';
        break;
      case '-':
        stringNumber += 'minus';
        break;
      default:
        stringNumber += 'point';
        break;
    }
    if (i !== numberStr.length - 1) {
      stringNumber += ' ';
    }
  }
  return stringNumber;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const n = str.length;
  for (let i = 0; i < n / 2 + 1; i += 1) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let occurrence = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      occurrence = i;
      break;
    }
  }
  return occurrence;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let itemNum = num;
  while (itemNum > 0) {
    if (digit === itemNum % 10) {
      return true;
    }
    itemNum = (itemNum / 10).toFixed(0);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length <= 2) return -1;
  for (let i = 1; i < arr.length - 1; i += 1) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (j < i) {
        sumLeft += arr[j];
      }
      if (j > i) {
        sumRight += arr[j];
      }
    }
    if (sumLeft === sumRight) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let counter = 0;
  let startRow = 0;
  let endRow = size - 1;
  let startCol = 0;
  let endCol = size - 1;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }
  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col += 1) {
      counter += 1;
      matrix[startRow][col] = counter;
    }
    startRow += 1;
    for (let row = startRow; row <= endRow; row += 1) {
      counter += 1;
      matrix[row][endCol] = counter;
    }
    endCol -= 1;
    for (let col = endCol; col >= startCol; col -= 1) {
      counter += 1;
      matrix[endRow][col] = counter;
    }
    endRow -= 1;
    for (let row = endRow; row >= startRow; row -= 1) {
      counter += 1;
      matrix[row][startCol] = counter;
    }
    startCol += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotatedMatrix = matrix;
  const first = Math.floor(matrix.length / 2);
  const last = matrix.length - 1;

  for (let i = 0; i < first; i += 1) {
    for (let j = i; j < last - i; j += 1) {
      const k = matrix[i][j];

      rotatedMatrix[i][j] = matrix[last - j][i];
      rotatedMatrix[last - j][i] = matrix[last - i][last - j];
      rotatedMatrix[last - i][last - j] = matrix[j][last - i];
      rotatedMatrix[j][last - i] = k;
    }
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) return arr;
  const result = arr;
  const item = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < item) {
      left[left.length] = arr[i];
    } else {
      right[right.length] = arr[i];
    }
  }
  const answ = [...sortByAsc(left), item, ...sortByAsc(right)];
  for (let i = 0; i < answ.length; i += 1) {
    result[i] = answ[i];
  }
  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let count = iterations;
  while (count) {
    let newOddString = '';
    let newEvenString = '';

    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) {
        newEvenString += result[i];
      } else {
        newOddString += result[i];
      }
    }
    result = newEvenString + newOddString;
    count -= 1;
    if (result === str) {
      count %= iterations - count;
    }
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let result = 0;
  const tempArray = [];
  const inputArray = [];
  let i = 0;
  let bufferVal = number;
  while (bufferVal >= 1) {
    tempArray[i] = bufferVal % 10;
    i += 1;
    bufferVal = Math.floor(bufferVal / 10);
  }
  for (let ind = 0; ind < tempArray.length; ind += 1) {
    inputArray[ind] = tempArray[tempArray.length - ind - 1];
  }

  let lastIndex = inputArray.length - 1;
  while (lastIndex > 0 && inputArray[lastIndex - 1] >= inputArray[lastIndex]) {
    lastIndex -= 1;
  }

  if (lastIndex !== 0) {
    let boundIndex = inputArray.length - 1;
    while (
      lastIndex > 0 &&
      inputArray[lastIndex - 1] >= inputArray[boundIndex]
    ) {
      boundIndex -= 1;
    }
    const tmp = inputArray[boundIndex];
    inputArray[boundIndex] = inputArray[lastIndex - 1];
    inputArray[lastIndex - 1] = tmp;

    const sortedArray = new Array(inputArray.length - lastIndex);
    for (let n = lastIndex; n < inputArray.length; n += 1) {
      sortedArray[n - lastIndex] = inputArray[n];
    }
    sortByAsc(sortedArray);

    for (let k = lastIndex; k < inputArray.length; k += 1) {
      inputArray[k] = sortedArray[k - lastIndex];
    }

    for (let t = 0; t < inputArray.length - 1; t += 1) {
      result += inputArray[t] * 10 ** (inputArray.length - 1 - t);
    }
    result += inputArray[inputArray.length - 1];
  } else {
    result = number;
  }
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
