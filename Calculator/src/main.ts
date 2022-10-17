const display: HTMLElement = <HTMLElement>document.getElementById("display");

let calculation: string = ""

function onClickNumberBtn(btnNum: string): void {
  if (display == null) {
    return
  }
  // display画面に0か、calculationがカラか末尾に+がある場合は、display画面に押したボタンの数字が入力される。
  // それ以外の場合はdisplay画面の数字の後ろに押したボタンの数字を付け加える。
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
  if (display.textContent === "0") {
    calculation = "";
  }
  calculation = calculation.replace(/\d*$/, "");
  display.textContent = "0";
}

// check用
function check(): void {
  console.log(calculation)
  console.log(display.textContent)
}