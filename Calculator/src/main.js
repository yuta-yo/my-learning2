var calcItem = {
    leftOperand: "",
    rightOperand: "",
    operator: ""
};
var display = document.getElementById("display");
var onClickNumberBtn = function (num) {
    if (!calcItem.operator) {
        calcItem.leftOperand = calcItem.leftOperand + num;
        display.textContent = calcItem.leftOperand;
        return;
    }
    if (calcItem.operator) {
        calcItem.rightOperand = calcItem.rightOperand + num;
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
    if (!display.textContent)
        return;
    if (!calcItem.leftOperand) {
        calcItem.leftOperand = display.textContent;
    }
    calcItem.operator = plusOrMinus;
};
var onClickEqual = function () {
    if (!calcItem.leftOperand)
        return;
    if (calcItem.leftOperand && !calcItem.operator)
        return;
    var totalStr = calcForString(calcItem.leftOperand, calcItem.rightOperand);
    display.textContent = totalStr;
    calcItem.leftOperand = "";
    calcItem.operator = "";
    calcItem.rightOperand = "";
};
var onClickClear = function () {
    if (calcItem.rightOperand) {
        calcItem.rightOperand = "";
        display.textContent = calcItem.leftOperand;
        return;
    }
    calcItem.leftOperand = "";
    calcItem.operator = "";
    display.textContent = "0";
};
var calcForString = function (num1, num2) {
    if (calcItem.operator === "plus") {
        return (Number(num1) + Number(num2)).toString();
    }
    if (calcItem.operator === "minus") {
        return (Number(num1) - Number(num2)).toString();
    }
    return "";
};
//確認用
function check() {
    console.log(calcItem.leftOperand + calcItem.operator + calcItem.rightOperand);
}
