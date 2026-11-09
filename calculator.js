function show(value) {
  document.getElementById("Output").innerHTML = value;
}
function getA() {
  return parseFloat(document.getElementById("numA").value);
}
function getB() {
  return parseFloat(document.getElementById("numB").value);
}
function getFileNumbers() {
  let nums = splitFunction();
  if (nums.length == 0) {
    show("Load a file first");
    return null;
  }
  return nums;
}


function add() {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    show("Enter A and B");
    return;
  }
  show(a + b);
}

function subtract() {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    show("Enter A and B");
    return;
  }
  show(a - b);
}

function multiply() {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    show("Enter A and B");
    return;
  }
  show(a * b);
}

function divide() {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    show("Enter A and B");
    return;
  }
  if (b == 0) {
    show("Can't divide by 0");
    return;
  }
  show(a / b);
}

function roundA() {
  let a = getA();
  if (isNaN(a)) {
    show("Enter A");
    return;
  }
  show(Math.round(a));
}

function power() {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    show("Enter A and B");
    return;
  }
  show(Math.pow(a, b));
}

function circleArea() {
  let r = getA();
  if (isNaN(r)) {
    show("Enter a radius in A");
    return;
  }
  let area = Math.PI * Math.pow(r, 2);
  show(area.toFixed(2));
}

function squareRoot() {
  let a = getA();
  if (isNaN(a)) {
    show("Enter A");
    return;
  }
  if (a < 0) {
    show("Can't take the square root of a negative number");
    return;
  }
  show(Math.sqrt(a));
}

function mean() {
  let nums = getFileNumbers();
  if (nums == null) return;

  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  show((total / nums.length).toFixed(2));
}

function median() {
  let nums = getFileNumbers();
  if (nums == null) return;

  let sorted = [...nums].sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 == 0) {
    show((sorted[mid - 1] + sorted[mid]) / 2);
  } else {
    show(sorted[mid]);
  }
}

function mode() {
  let nums = getFileNumbers();
  if (nums == null) return;

  let counts = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    counts[num] = (counts[num] || 0) + 1;
  }

  let maxCount = 0;
  for (let key in counts) {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
    }
  }

  let modes = [];
  for (let key in counts) {
    if (counts[key] == maxCount) {
      modes.push(key);
    }
  }

  if (maxCount == 1) {
    show("No mode (every number appears once)");
  } else {
    show(modes.join(", "));
  }
}

function max() {
  let nums = getFileNumbers();
  if (nums == null) return;
  show(Math.max(...nums));
}

function min() {
  let nums = getFileNumbers();
  if (nums == null) return;
  show(Math.min(...nums));
}
