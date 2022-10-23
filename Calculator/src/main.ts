// [leftOperand] [operator(+,-)] [rightOperand] = displayの式をイメージしています。
type CalcItem = {
  leftOperand: string;
  rightOperand: string;
  operator: "plus" | "minus" | "";
}
let calcItem: CalcItem = {
  leftOperand: "",
  rightOperand: "",
  operator: "",
}

const display: HTMLElement = <HTMLElement>document.getElementById("display");

const onClickNumberBtn = (num: string): void => {
  if(!calcItem.operator) {
    calcItem.leftOperand = `${calcItem.leftOperand}${num}`;
    display.textContent = calcItem.leftOperand;
    return;
  }

  if(calcItem.operator) {
    calcItem.rightOperand = `${calcItem.rightOperand}${num}`;
    display.textContent = calcItem.rightOperand;
  }
}

const onClickPlusAndMinus = (plusOrMinus: "plus" | "minus"): void => {
  if(calcItem.operator === "plus" || calcItem.operator === "minus") {   
    const totalStr = calcForString(calcItem.leftOperand, calcItem.rightOperand);
    display.textContent = totalStr;
    calcItem.leftOperand = totalStr;
    calcItem.operator = plusOrMinus;
    calcItem.rightOperand = "";
    return;
  }

  if (!display.textContent) return;
  if(!calcItem.leftOperand) {
    calcItem.leftOperand = display.textContent;
  }

  calcItem.operator = plusOrMinus;
}

const onClickEqual = (): void => {
  if(!calcItem.leftOperand) return;

  if(calcItem.leftOperand && !calcItem.operator) return ;

  const totalStr = calcForString(calcItem.leftOperand, calcItem.rightOperand);
  display.textContent = totalStr;
  calcItem.leftOperand = "";
  calcItem.operator = "";
  calcItem.rightOperand = "";
}

const onClickClear = (): void => {
  if(calcItem.rightOperand) {
    calcItem.rightOperand = "";
    display.textContent = calcItem.leftOperand;
    return;
  } 
  
  calcItem.leftOperand = "";
  calcItem.operator = "";
  display.textContent = "0";
}

const calcForString = (num1: string, num2: string): string => {
  if(calcItem.operator === "plus") {
    return  `${Number(num1) + Number(num2)}`;
  }

  if(calcItem.operator === "minus") {
    return `${Number(num1) - Number(num2)}`;
  }
  
  return "";
}

//確認用
function check(): void {
  console.log(calcItem.leftOperand + calcItem.operator + calcItem.rightOperand);
}