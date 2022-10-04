// const num0:any = document.getElementById("num0");
// const num1:any = document.getElementById("num1");
// const num2:any = document.getElementById("num2");
// const num3:any = document.getElementById("num3");
// const num4:any = document.getElementById("num4");
// const num5:any = document.getElementById("num5");
// const num6:any = document.getElementById("num6");
// const num7:any = document.getElementById("num7");
// const num8:any = document.getElementById("num8");
// const num9:any = document.getElementById("num9");
const display:any = document.getElementById("display");
// const clear:any = document.getElementById("clear");
// const plusminus:any = document.getElementById("plusminus");
// const percent:any = document.getElementById("percent");
// const divide:any = document.getElementById("divide");
// const times:any = document.getElementById("times");
// const minus:any = document.getElementById("minus");
// const plus:any = document.getElementById("plus");
// const equals:any = document.getElementById("equals");
// const point:any = document.getElementById("point");

let calculation: string = ""

// function func0():void {
//   if(display.textContent.startsWith(0)||calculation.endsWith(" + ")) {
//     display.textContent = 0
//   // } else if(calculation.endsWith(" + ")) {
//   //   display.textContent = 0
//   } else {
//   display.textContent += 0
//   }
//   calculation += "0"
// }

function func0():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 0
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 0
  } else {
  display.textContent += 0
  }
  calculation += "0"
}

// function func1() {
//   if(display.textContent.startsWith(0)||calculation.endsWith(" + ")) {
//     display.textContent = 1
//   // } else if(calculation.endsWith(" + ")) {
//   //   display.textContent = 1
//   } else {
//   display.textContent += 1
//   }
//   calculation += "1"
// }

function func1():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 1
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 1
  } else {
  display.textContent += 1
  }
  calculation += "1"
}

// function func2():void {
//   if(display.textContent.startsWith(0)||calculation.endsWith(" + ")) {
//     display.textContent = 2
//   // } else if(calculation.endsWith(" + ")) {
//   //   display.textContent = 2
//   } else {
//     display.textContent += 2
//   }
//   calculation += "2"
// }

function func2():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 2
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 2
  } else {
    display.textContent += 2
  }
  calculation += "2"
}

// function func3():void {
//   if(display.textContent.startsWith(0)||calculation.endsWith(" + ")) {
//     display.textContent = 3
//   // } else if(calculation.endsWith(" + ")) {
//   //   display.textContent = 3
//   } else {
//     display.textContent += 3
//   }
//   calculation += "3"
// }

function func3():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 3
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 3
  } else {
    display.textContent += 3
  }
  calculation += "3"
}

function func4():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 4
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 4
  } else {
    display.textContent += 4
  }
  calculation += "4"
}

function func5():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 5
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 5
  } else {
    display.textContent += 5
  }
  calculation += "5"
}
function func6():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 6
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 6
  } else {
    display.textContent += 6
  }
  calculation += "6"
}
function func7():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 7
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 7
  } else {
    display.textContent += 7
  }
  calculation += "7"
}
function func8():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 8
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 8
  } else {
    display.textContent += 8
  }
  calculation += "8"
}
function func9():void {
  if(display.textContent.startsWith(0)||calculation.slice(-3) === (" + ")||calculation === "") {
    display.textContent = 9
  // } else if(calculation.endsWith(" + ")) {
  //   display.textContent = 9
  } else {
    display.textContent += 9
  }
  calculation += "9"
}

function funcPlus():void {
  if (calculation === "") {
    calculation = display.textContent
  }
  calculation += " + "
}

function funcEquals():void {
  display.textContent = eval(calculation)
  calculation = ""
}

function funcClear():void {
  display.textContent = 0
}

// check用
function check():void {
 console.log(calculation)
 console.log(display.textContent)
}