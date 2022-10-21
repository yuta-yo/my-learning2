var calcItem = {
    leftNumber: "",
    rightNumber: "",
    operator: ""
};
var display = document.getElementById("display");
var onClickNumberBtn = function (num) {
    if (!calcItem.operator) {
        calcItem.leftNumber = calcItem.leftNumber + num;
        display.textContent = calcItem.leftNumber;
        return;
    }
    if (calcItem.operator) {
        calcItem.rightNumber = calcItem.rightNumber + num;
        display.textContent = calcItem.rightNumber;
    }
};
var onClickPlusAndMinus = function (plusOrMinus) {
    if (calcItem.operator === "plus" || calcItem.operator === "minus") {
        var totalStr = calcForString(calcItem.leftNumber, calcItem.rightNumber);
        display.textContent = totalStr;
        calcItem.leftNumber = totalStr;
        calcItem.operator = plusOrMinus;
        calcItem.rightNumber = "";
        return;
    }
    if (!display.textContent)
        return;
    if (!calcItem.leftNumber) {
        calcItem.leftNumber = display.textContent;
    }
    calcItem.operator = plusOrMinus;
};
var onClickEqual = function () {
    if (!calcItem.leftNumber)
        return;
    if (calcItem.leftNumber && !calcItem.operator)
        return;
    var totalStr = calcForString(calcItem.leftNumber, calcItem.rightNumber);
    display.textContent = totalStr;
    calcItem.leftNumber = "";
    calcItem.operator = "";
    calcItem.rightNumber = "";
};
var onClickClear = function () {
    if (calcItem.rightNumber) {
        calcItem.rightNumber = "";
        display.textContent = calcItem.leftNumber;
        return;
    }
    calcItem.leftNumber = "";
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
    console.log(calcItem.leftNumber + calcItem.operator + calcItem.rightNumber);
}
