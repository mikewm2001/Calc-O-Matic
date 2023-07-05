function addTwo() {
  var in1 = Number(document.getElementById("in1").value);
  var in2 = Number(document.getElementById("in2").value);
  var theSum = document.getElementById("answer");
  var added = in1 + in2;
  theSum.value = added;

  if (added < 0) {
    theSum.style.color = "red";
  }
  else {
    theSum.style.color = "black";
  }
}
function subTwo() {
  var in1 = Number(document.getElementById("in1").value);
  var in2 = Number(document.getElementById("in2").value);
  var theDiff = document.getElementById("answer");
  var subtracted = in1 - in2;
  theDiff.value = subtracted;

  if (subtracted < 0) {
    theDiff.style.color = "red";
  }
  else {
    theDiff.style.color = "black";
  }
}
function divTwo() {
  var in1 = Number(document.getElementById("in1").value);
  var in2 = Number(document.getElementById("in2").value);
  var theQuo = document.getElementById("answer");
  if (in2 == 0) {
    theQuo.value = "undefined"
  }
  else {
    var quotient = in1 / in2;
    theQuo.value = quotient;
  }

  if (in1 / in2 < 0) {
    theQuo.style.color = "red";
  }
  else {
    theQuo.style.color = "black";
  }
}
function mulTwo() {
  var in1 = Number(document.getElementById("in1").value);
  var in2 = Number(document.getElementById("in2").value);
  var theProd = document.getElementById("answer");
  var product = in1 * in2;
  theProd.value = product;

  if (product < 0) {
    theProd.style.color = "red";
  }
  else {
    theProd.style.color = "black";
  }
}
function power() {
  var in1 = Number(document.getElementById("in1").value);
  var in2 = Number(document.getElementById("in2").value);
  var thePower = document.getElementById("answer");
  var powered = in1;
  for (let i = 1; i < in2; i++) {
    powered *= in1;
  }
  if (in2 == 0) {
    thePower.value = 1;
  }
  else if (in2 < 0) {
    thePower.value = 1 / powered;
  }
  else {
    thePower.value = powered;
  }

  if (powered < 0) {
    thePower.style.color = "red";
  }
  else {
    thePower.style.color = "black";
  }

}
function clearAns() {
  var theThird = document.getElementById("answer");
  var theFirst = document.getElementById("in1");
  var theSecond = document.getElementById("in2");
  var cleared = "";
  theFirst.value = cleared;
  theSecond.value = cleared;
  theThird.value = cleared;
}