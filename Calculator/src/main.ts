enum OPERATOR {
  PLUS = "plus",
  MINUS = "minus",
  MULTIPLY = "multiply"
}

// [leftOperand] [leftOperator(+,-,×)] [centerOperand] [rightOperator(+,-,×)] [rightOperand] = displayの式をイメージしています。
type Operator = "plus" | "minus" | "multiply" | "";
type CalcItem = {
  leftOperand: string;
  centerOperand: string;
  rightOperand: string;
  leftOperator: Operator;
  rightOperator: Operator;
}
let calcItem: CalcItem = {
  leftOperand: "",
  centerOperand: "",
  rightOperand: "",
  leftOperator: "",
  rightOperator: ""
}

const display: HTMLElement = <HTMLElement>document.getElementById("display");

const onClickNumberBtn = (num: string): void => {
  if(calcItem.rightOperator) {
    calcItem.rightOperand = `${calcItem.rightOperand}${num}`;
    display.textContent = calcItem.rightOperand;
  } else if(calcItem.leftOperator) {
    calcItem.centerOperand = `${calcItem.centerOperand}${num}`;
    display.textContent = calcItem.centerOperand;
  } else if(!calcItem.leftOperator) {
    calcItem.leftOperand = `${calcItem.leftOperand}${num}`;
    display.textContent = calcItem.leftOperand;
  }
}

const onClickPlusAndMinus = (plusOrMinus: OPERATOR.PLUS | OPERATOR.MINUS): void => {
  if(display.textContent === null) {
    return;
  }
  if(calcItem.rightOperator === OPERATOR.MULTIPLY) {
    calcItem.centerOperand = calcForString(calcItem.rightOperator,calcItem.centerOperand, calcItem.rightOperand);
    const totalStr = calcForString(calcItem.leftOperator,calcItem.leftOperand, calcItem.centerOperand);
    display.textContent = totalStr;
    calcItem = {
      leftOperand: totalStr,
      centerOperand: "",
      rightOperand: "",
      leftOperator: plusOrMinus,
      rightOperator: ""
    }
  } else if(calcItem.leftOperator === OPERATOR.PLUS || calcItem.leftOperator === OPERATOR.MINUS || calcItem.leftOperator === OPERATOR.MULTIPLY) {   
    const totalStr = calcForString(calcItem.leftOperator, calcItem.leftOperand, calcItem.centerOperand);
    display.textContent = totalStr;
    calcItem = {
      ...calcItem,
      leftOperand: totalStr,
      centerOperand: "",
      leftOperator: plusOrMinus
    }
  } else if(!calcItem.leftOperand) {
    calcItem = {
      ...calcItem,
      leftOperand: display.textContent,
      leftOperator: plusOrMinus
    }
  } else {
    calcItem.leftOperator = plusOrMinus;
  }
}

const onClickMultiply = (multiply: OPERATOR.MULTIPLY): void => {
  if(display.textContent === null) {
    return;
  }
  if(calcItem.rightOperator === OPERATOR.MULTIPLY) {
    const totalStr = calcForString(calcItem.rightOperator, calcItem.centerOperand, calcItem.rightOperand);
    display.textContent = totalStr;
    calcItem = {
      ...calcItem,
      centerOperand: totalStr,
      rightOperand: "",
      rightOperator: multiply
    }
  } else if(calcItem.leftOperator === OPERATOR.MULTIPLY) {
    const totalStr = calcForString(calcItem.leftOperator, calcItem.leftOperand, calcItem.centerOperand);
    display.textContent = totalStr;
    calcItem = {
      ...calcItem,
      leftOperand: totalStr,
      centerOperand: "",
      leftOperator: multiply
    }
  } else if(calcItem.leftOperator === OPERATOR.PLUS || calcItem.leftOperator === OPERATOR.MINUS) {   
    display.textContent = calcItem.centerOperand;
    calcItem = {
      ...calcItem,
      rightOperator: multiply
    }
  } else if(!calcItem.leftOperand) {
    calcItem = {
      ...calcItem,
      leftOperand: display.textContent,
      leftOperator: OPERATOR.MULTIPLY
    }
  } else {
    calcItem.leftOperator = OPERATOR.MULTIPLY;
  }
}

const onClickEqual = (): void => {
  if(calcItem.rightOperand) {
    calcItem.centerOperand = calcForString(calcItem.rightOperator,calcItem.centerOperand, calcItem.rightOperand);
    const totalStr = calcForString(calcItem.leftOperator,calcItem.leftOperand, calcItem.centerOperand);
    display.textContent = totalStr;
    calcItem = {
      leftOperand: "",
      centerOperand: "",
      rightOperand: "",
      leftOperator: "",
      rightOperator: ""
    }
  } else if(calcItem.centerOperand && !calcItem.rightOperator) {
    const totalStr = calcForString(calcItem.leftOperator,calcItem.leftOperand, calcItem.centerOperand);
    display.textContent = totalStr;
    calcItem = {
      leftOperand: "",
      centerOperand: "",
      rightOperand: "",
      leftOperator: "",
      rightOperator: ""
    }
  }
}

const onClickClear = (): void => {
  if(calcItem.rightOperand) {
    calcItem.rightOperand = "";
    display.textContent = calcItem.centerOperand;
  } else if(calcItem.centerOperand && !calcItem.rightOperator) {
    calcItem.centerOperand = "";
    display.textContent = calcItem.leftOperand;
  } else {
    calcItem = {
      ...calcItem,
      leftOperand: "",
      centerOperand: "",
      leftOperator: "",
      rightOperator: ""
    }
    display.textContent = "0";
  }
}
const calcForString = (operator: Operator, leftOperand: string, rightOperand: string): string => {
  if(operator === OPERATOR.PLUS) {
    return `${Number(leftOperand) + Number(rightOperand)}`;
  } else if(operator === OPERATOR.MINUS) {
    return `${Number(leftOperand) - Number(rightOperand)}`;
  } else if(operator === OPERATOR.MULTIPLY) {
    return `${Number(leftOperand) * Number(rightOperand)}`;
  } else {
    return "";
  } 
}

// 確認用
function check(): void {
  console.log(`${calcItem.leftOperand}${calcItem.leftOperator}${calcItem.centerOperand}${calcItem.rightOperator}${calcItem.rightOperand}`);
}