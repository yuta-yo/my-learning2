var calcItem = {
    leftOperand: "",
    rightOperand: "",
    operator: ""
};
var display = document.getElementById("display");
var onClickNumberBtn = function (num) {
    if (!calcItem.operator) {
        calcItem.leftOperand = "".concat(calcItem.leftOperand).concat(num);
        display.textContent = calcItem.leftOperand;
        return;
    }
    else if (calcItem.operator) {
        calcItem.rightOperand = "".concat(calcItem.rightOperand).concat(num);
        display.textContent = calcItem.rightOperand;
    }
};
var onClickPlusAndMinus = function (plusOrMinus) {
    if (calcItem.operator === "plus" || calcItem.operator === "minus") {
        var totalStr = calcForString(calcItem.leftOperand, calcItem.rightOperand);
        display.textContent = totalStr;
        calcItem.leftOperand = totalStr;
        calcItem.operator = plusOrMinus;
        calcItem.rightOperand = "";
        return;
    }
    else if (!display.textContent) {
        return;
    }
    else if (!calcItem.leftOperand) {
        calcItem.leftOperand = display.textContent;
    }
    else {
        calcItem.operator = plusOrMinus;
    }
};
var onClickEqual = function () {
    if (!calcItem.leftOperand) {
        return;
    }
    else if (calcItem.leftOperand && !calcItem.operator) {
        return;
    }
    else {
        var totalStr = calcForString(calcItem.leftOperand, calcItem.rightOperand);
        display.textContent = totalStr;
        calcItem.leftOperand = "";
        calcItem.operator = "";
        calcItem.rightOperand = "";
    }
};
var onClickClear = function () {
    if (calcItem.rightOperand) {
        calcItem.rightOperand = "";
        display.textContent = calcItem.leftOperand;
        return;
    }
    else {
        calcItem.leftOperand = "";
        calcItem.operator = "";
        display.textContent = "0";
    }
};
var calcForString = function (num1, num2) {
    if (calcItem.operator === "plus") {
        return "".concat(Number(num1) + Number(num2));
    }
    else if (calcItem.operator === "minus") {
        return "".concat(Number(num1) - Number(num2));
    }
    else {
        return "";
    }
};
// 確認用
function check() {
    console.log(calcItem.leftOperand + calcItem.operator + calcItem.rightOperand);
}
