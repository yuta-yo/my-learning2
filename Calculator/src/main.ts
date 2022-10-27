enum OPERATOR {
  PLUS = "plus",
  MINUS = "minus" 
}

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
  } else if(calcItem.operator) {
    calcItem.rightOperand = `${calcItem.rightOperand}${num}`;
    display.textContent = calcItem.rightOperand;
  }
}

const onClickPlusAndMinus = (plusOrMinus: "plus" | "minus"): void => {
  if(calcItem.operator === "plus" || calcItem.operator === "minus") {   
    const totalStr = calcForString(calcItem.leftOperand, calcItem.rightOperand);
    display.textContent = totalStr;
    calcItem = {
      leftOperand: totalStr,
      operator: plusOrMinus,
      rightOperand: "",
    }
  } else if(!display.textContent) {
    return;
  } else if(!calcItem.leftOperand) {
    calcItem = {
      ...calcItem,
      leftOperand: display.textContent,
      operator: plusOrMinus,
    }
  } else {
    calcItem.operator = plusOrMinus;
  }
}

const onClickEqual = (): void => {
  if(calcItem.leftOperand && calcItem.operator) {
    const totalStr = calcForString(calcItem.leftOperand, calcItem.rightOperand);
    display.textContent = totalStr;
    calcItem = {
      leftOperand: "",
      operator: "",
      rightOperand: "",
    }
  }
}

const onClickClear = (): void => {
  if(calcItem.rightOperand) {
    calcItem.rightOperand = "";
    display.textContent = calcItem.leftOperand;
  } else {
    calcItem = {
      ...calcItem,
      leftOperand: "",
      operator: "",
    }
    display.textContent = "0";
  }
}

const calcForString = (leftOperand: string, rightOperand: string): string => {
  if(calcItem.operator === OPERATOR.PLUS) {
    return `${Number(leftOperand) + Number(rightOperand)}`;
  } else if(calcItem.operator === OPERATOR.MINUS) {
    return `${Number(leftOperand) - Number(rightOperand)}`;
  } else {
    return "";
  } 
}

// 確認用
function check(): void {
  console.log(`${calcItem.leftOperand}${calcItem.operator}${calcItem.rightOperand}`);
}