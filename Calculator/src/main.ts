// [leftNumber] [operator(+,-)] [rightNumber] = displayの式をイメージしています。
type CalcItem = {
  leftNumber: string;
  rightNumber: string;
  operator: "plus" | "minus" | "";
}
let calcItem: CalcItem = {
  leftNumber: "",
  rightNumber: "",
  operator: "",
}

const display: HTMLElement = <HTMLElement>document.getElementById("display");

const onClickNumberBtn = (num: string): void => {
  if(!calcItem.operator) {
    calcItem.leftNumber = calcItem.leftNumber + num;
    display.textContent = calcItem.leftNumber;
    return;
  }

  if(calcItem.operator) {
    calcItem.rightNumber = calcItem.rightNumber + num;
    display.textContent = calcItem.rightNumber;
  }
}

const onClickPlusAndMinus = (plusOrMinus: "plus" | "minus"): void => {
  if(calcItem.operator === "plus" || calcItem.operator === "minus") {   
    const totalStr = calcForString(calcItem.leftNumber, calcItem.rightNumber);
    display.textContent = totalStr;
    calcItem.leftNumber = totalStr;
    calcItem.operator = plusOrMinus;
    calcItem.rightNumber = "";
    return;
  }

  if (!display.textContent) return;
  if(!calcItem.leftNumber) {
    calcItem.leftNumber = display.textContent;
  }

  calcItem.operator = plusOrMinus;
}

const onClickEqual = (): void => {
  if(!calcItem.leftNumber) return;

  if(calcItem.leftNumber && !calcItem.operator) return ;

  const totalStr = calcForString(calcItem.leftNumber, calcItem.rightNumber);
  display.textContent = totalStr;
  calcItem.leftNumber = "";
  calcItem.operator = "";
  calcItem.rightNumber = "";
}

const onClickClear = (): void => {
  if(calcItem.rightNumber) {
    calcItem.rightNumber = "";
    display.textContent = calcItem.leftNumber;
    return;
  } 
  
  calcItem.leftNumber = "";
  calcItem.operator = "";
  display.textContent = "0";
}

const calcForString = (num1: string, num2: string): string => {
  if(calcItem.operator === "plus") {
    return  (Number(num1) + Number(num2)).toString();
  }

  if(calcItem.operator === "minus") {
    return (Number(num1) - Number(num2)).toString();
  }

  return "";
}

//確認用
function check(): void {
  console.log(calcItem.leftNumber + calcItem.operator + calcItem.rightNumber);
}