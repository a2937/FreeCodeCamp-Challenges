
const englishToNums =
{
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "ten": 10,
  "eleven": 11,
  "twelve": 12,
  "thirteen": 13,
  "fourteen": 14,
  "fifteen": 15,
  "sixteen": 16,
  "seventeen": 17,
  "eighteen": 18,
  "nineteen": 19,
  "twenty": 20,
  "thirty": 30,
  "forty": 40,
  "fifty": 50,
  "sixty": 60,
  "seventy": 70,
  "eighty": 80,
  "ninety": 90
}


const transformers = {
  "tenth": 0.1,
  "hundredth": 0.01,
  "hundred": 100,
  "thousand": 1000,
  "million": 1000000,
  "billion": 1000000000
}

/**
 * 
 * @param {String} english 
 */
function stringToNum(english) {

  var words = english.split(" ");

  var result = 0;

  let lastNum = 0;
  let lastTransformer = 1;
  for (let i = 0; i < words.length; i++) {
    let actualNum = englishToNums[words[i].trim()];
    if (actualNum != null) {
      result += parseFloat(actualNum);
      lastNum += (parseFloat(actualNum));
    }
    else {
      let transformer = transformers[words[i].trim()];
      if (transformer != null) {
        var multiplier = parseFloat(transformer);

        if (lastTransformer < multiplier && multiplier > 0) {
          result *= multiplier;
          lastTransformer = multiplier;
          lastNum = 0;
        }
        else {
          //for (let w = 0; w < lastNum.length; w++) {
          result -= lastNum;
          //}
          result += (multiplier * lastNum);
          lastNum = 0;
          lastTransformer = multiplier;
        }

      }
    }
  }
  return result;
}

function AIstringToNum(english) {
  const englishToNums = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
    "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19,
    "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90,
    "hundred": 100, "thousand": 1000, "million": 1000000, "billion": 1000000000, "trillion": 1000000000000
  };

  const words = english.split(" ");
  let result = 0;
  let currentNumber = 0;
  let isPartOfNumber = false;

  words.forEach(word => {
    const num = englishToNums[word];
    if (num != null) {
      if (isPartOfNumber) {
        currentNumber += num;
      } else {
        currentNumber = num;
        isPartOfNumber = true;
      }
    } else if (word === "hundred" || word === "thousand" || word === "million" || word === "billion" || word === "trillion") {
      if (isPartOfNumber) {
        currentNumber *= englishToNums[word];
        isPartOfNumber = false;
        if (currentNumber >= 1000) {
          result += currentNumber;
          currentNumber = 0;
        }
      } else {
        currentNumber = englishToNums[word];
        isPartOfNumber = true;
      }
    }
  });

  result += currentNumber;
  return result;
}


