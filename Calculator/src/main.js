// [leftNumber] [operator(+,-)] [rightNumber] = displayの式をイメージしています。
var leftNumber = "";
var rightNumber = "";
var operator = "";
var display = document.getElementById("display");
var onClickNumberBtn = function (num) {
    if (!operator) {
        leftNumber = leftNumber + num;
        display.textContent = leftNumber;
        return;
    }
    if (operator) {
        rightNumber = rightNumber + num;
        display.textContent = rightNumber;
    }
};
var onClickPlusAndMinus = function (plusOrMinus) {
    if (operator === "plus" || operator === "minus") {
        var totalStr = calcForString(operator, leftNumber, rightNumber);
        display.textContent = totalStr;
        leftNumber = totalStr;
        operator = plusOrMinus;
        rightNumber = "";
        return;
    }
    if (!display.textContent)
        return;
    if (!leftNumber) {
        leftNumber = display.textContent;
    }
    operator = plusOrMinus;
};
var onClickEqual = function () {
    if (!leftNumber)
        return;
    if (leftNumber && !operator)
        return;
    var totalStr = calcForString(operator, leftNumber, rightNumber);
    display.textContent = totalStr;
    leftNumber = "";
    operator = "";
    rightNumber = "";
};
var onClickClear = function () {
    if (rightNumber) {
        rightNumber = "";
        display.textContent = leftNumber;
        return;
    }
    leftNumber = "";
    operator = "";
    display.textContent = "0";
};
var calcForString = function (operator, num1, num2) {
    if (operator === "plus") {
        return (Number(num1) + Number(num2)).toString();
    }
    if (operator === "minus") {
        return (Number(num1) - Number(num2)).toString();
    }
    return "";
};
//確認用
function check() {
    console.log(leftNumber + operator + rightNumber);
}
