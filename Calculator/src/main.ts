type CalcOperator = "plus" | "minus" | "";

// [leftNumber] [operator(+,-)] [rightNumber] = displayの式をイメージしています。
let leftNumber: string = "";
let rightNumber: string = "";

let operator: CalcOperator = "";

const display: HTMLElement = <HTMLElement>document.getElementById("display");

const onClickNumberBtn = (num: string): void => {
  if(!operator) {
    leftNumber = leftNumber + num;
    display.textContent = leftNumber;
    return;
  }

  if(operator) {
    rightNumber = rightNumber + num;
    display.textContent = rightNumber;
  }
}

const onClickPlusAndMinus = (plusOrMinus: "plus" | "minus"): void => {
  if(operator === "plus" || operator === "minus") {   
    const totalStr = calcForString(operator, leftNumber, rightNumber);
    display.textContent = totalStr;
    leftNumber = totalStr;
    operator = plusOrMinus;
    rightNumber = "";
    return;
  }

  if (!display.textContent) return;
  if(!leftNumber) {
    leftNumber = display.textContent;
  }

  operator = plusOrMinus;
}

const onClickEqual = (): void => {
  if(!leftNumber) return;

  if(leftNumber && !operator) return ;

  const totalStr = calcForString(operator, leftNumber, rightNumber);
  display.textContent = totalStr;
  leftNumber = "";
  operator = "";
  rightNumber = "";
}

const onClickClear = (): void => {
  if(rightNumber) {
    rightNumber = "";
    display.textContent = leftNumber;
    return;
  } 
  
  leftNumber = "";
  operator = "";
  display.textContent = "0";
}

const calcForString = (operator: CalcOperator, num1: string, num2: string): string => {
  if(operator === "plus") {
    return  (Number(num1) + Number(num2)).toString();
  }

  if(operator === "minus") {
    return (Number(num1) - Number(num2)).toString();
  }

  return "";
}

//確認用
function check(): void {
  console.log(leftNumber + operator + rightNumber);
}