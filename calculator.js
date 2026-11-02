
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

// TODO: copy the pattern from add()
function subtract() {

}

// TODO: copy the pattern from add()
function multiply() {

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

// TODO: only needs A. Use Math.round()
function roundA() {

}

// TODO: Use Math.pow(a, b)
function power() {

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

// TODO: Use Math.sqrt(). What if A is negative?
function squareRoot() {

}

// ===== PART 2: STATS FROM A FILE =====
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

  // (a, b) => a - b sorts by number. Plain sort() puts 10 before 9!
  let sorted = [...nums].sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 == 0) {
    show((sorted[mid - 1] + sorted[mid]) / 2);
  } else {
    show(sorted[mid]);
  }
}

// TODO: most common number.
// Hint: counts[num] = (counts[num] || 0) + 1, then find the biggest count
function mode() {

}

// TODO: Hint: Math.max(...nums)
function max() {

}

// TODO: Hint: Math.min(...nums)
function min() {

}