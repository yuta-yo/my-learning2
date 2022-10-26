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
        calcItem.operator = plusOrMinus;
    }
    else {
        calcItem.operator = plusOrMinus;
    }
};
var onClickEqual = function () {
    if (calcItem.leftOperand && calcItem.operator) {
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
var calcForString = function (leftOperand, rightOperand) {
    if (calcItem.operator === "plus") {
        return "".concat(Number(leftOperand) + Number(rightOperand));
    }
    else if (calcItem.operator === "minus") {
        return "".concat(Number(leftOperand) - Number(rightOperand));
    }
    else {
        return "";
    }
};
// 確認用
function check() {
    console.log(calcItem.leftOperand + calcItem.operator + calcItem.rightOperand);
}
