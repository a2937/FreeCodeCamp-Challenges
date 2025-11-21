function range(start = 1, end, step = 1) {
  let values = [];



  // Only 1 argument
  if (start != 1 && typeof end === "undefined") {
    for (let i = 1; i <= start; i++) {
      values.push(i);
    }
    return values;
  }

  if (typeof (parseInt(start.toString())) != "number" ||
    typeof (parseInt(end.toString())) != "number" ||
    typeof (parseInt(step.toString())) != "number") {
    throw new TypeError("TypeError: Arguments must be integers");
  }


  console.log(end > start);

  if (end > start) {
    for (let i = start; i <= end; i += step) {
      values.push(i);
    }
  }
  else {
    for (let i = end; i > start; i -= step) {
      values.push(i);
    }
  }

  return values;
}


console.log(range(10, 1));