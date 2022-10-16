const display: HTMLElement = <HTMLElement>document.getElementById("display");

let calculation: string = ""

function onClickNumberBtn(btnNum: string): void {
  if (display == null) {
    return
  }
  if (display.textContent?.slice(0, 1) === "0" || calculation.slice(-3) === " + " || calculation === "") {
    display.textContent = btnNum
  } else {
    display.textContent += btnNum
  }
  calculation += btnNum
}

function onClickPlus(): void {
  if (!display.textContent) {
    console.error("textContent is null.")
    return
  }
  if (calculation === "") {
    calculation = display.textContent
  }
  calculation += " + "
}

function onClickEqual(): void {  
  display.textContent = new Function("return " + calculation)();
  calculation = "";
}

function onClickClear(): void {
  display.textContent = "0"
}

// check用
function check(): void {
  console.log(calculation)
  console.log(display.textContent)
}