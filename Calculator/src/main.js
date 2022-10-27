var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var OPERATOR;
(function (OPERATOR) {
    OPERATOR["PLUS"] = "plus";
    OPERATOR["MINUS"] = "minus";
})(OPERATOR || (OPERATOR = {}));
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
        calcItem = {
            leftOperand: totalStr,
            operator: plusOrMinus,
            rightOperand: ""
        };
    }
    else if (!display.textContent) {
        return;
    }
    else if (!calcItem.leftOperand) {
        calcItem = __assign(__assign({}, calcItem), { leftOperand: display.textContent, operator: plusOrMinus });
    }
    else {
        calcItem.operator = plusOrMinus;
    }
};
var onClickEqual = function () {
    if (calcItem.leftOperand && calcItem.operator) {
        var totalStr = calcForString(calcItem.leftOperand, calcItem.rightOperand);
        display.textContent = totalStr;
        calcItem = {
            leftOperand: "",
            operator: "",
            rightOperand: ""
        };
    }
};
var onClickClear = function () {
    if (calcItem.rightOperand) {
        calcItem.rightOperand = "";
        display.textContent = calcItem.leftOperand;
    }
    else {
        calcItem = __assign(__assign({}, calcItem), { leftOperand: "", operator: "" });
        display.textContent = "0";
    }
};
var calcForString = function (leftOperand, rightOperand) {
    if (calcItem.operator === OPERATOR.PLUS) {
        return "".concat(Number(leftOperand) + Number(rightOperand));
    }
    else if (calcItem.operator === OPERATOR.MINUS) {
        return "".concat(Number(leftOperand) - Number(rightOperand));
    }
    else {
        return "";
    }
};
// 確認用
function check() {
    console.log("".concat(calcItem.leftOperand).concat(calcItem.operator).concat(calcItem.rightOperand));
}
