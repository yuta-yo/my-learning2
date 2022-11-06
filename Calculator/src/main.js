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
    OPERATOR["MULTIPLY"] = "multiply";
})(OPERATOR || (OPERATOR = {}));
var calcItem = {
    leftOperand: "",
    centerOperand: "",
    rightOperand: "",
    leftOperator: "",
    rightOperator: ""
};
var display = document.getElementById("display");
var onClickNumberBtn = function (num) {
    // どの位置のOperandに数字を入れるか決定するため、右から左へOperatorの有無を評価する。
    // Operatorがある場合、該当するOperatorの右のOperandに数字を入れる。
    if (calcItem.rightOperator) {
        calcItem.rightOperand = "".concat(calcItem.rightOperand).concat(num);
        display.textContent = calcItem.rightOperand;
    }
    else if (calcItem.leftOperator) {
        calcItem.centerOperand = "".concat(calcItem.centerOperand).concat(num);
        display.textContent = calcItem.centerOperand;
    }
    else {
        calcItem.leftOperand = "".concat(calcItem.leftOperand).concat(num);
        display.textContent = calcItem.leftOperand;
    }
};
var onClickPlusAndMinusBtn = function (plusOrMinus) {
    if (display.textContent === null) {
        return;
    }
    if (calcItem.rightOperator === OPERATOR.MULTIPLY) {
        calcItem.centerOperand = calcForString(calcItem.rightOperator, calcItem.centerOperand, calcItem.rightOperand);
        display.textContent = calcForString(calcItem.leftOperator, calcItem.leftOperand, calcItem.centerOperand);
        calcItem = {
            leftOperand: display.textContent,
            centerOperand: "",
            rightOperand: "",
            leftOperator: plusOrMinus,
            rightOperator: ""
        };
    }
    else if (calcItem.leftOperator === OPERATOR.PLUS || calcItem.leftOperator === OPERATOR.MINUS || calcItem.leftOperator === OPERATOR.MULTIPLY) {
        display.textContent = calcForString(calcItem.leftOperator, calcItem.leftOperand, calcItem.centerOperand);
        calcItem = __assign(__assign({}, calcItem), { leftOperand: display.textContent, centerOperand: "", leftOperator: plusOrMinus });
    }
    else if (!calcItem.leftOperand) {
        calcItem = __assign(__assign({}, calcItem), { leftOperand: display.textContent, leftOperator: plusOrMinus });
    }
    else {
        calcItem.leftOperator = plusOrMinus;
    }
};
var onClickMultiplyBtn = function () {
    if (display.textContent === null) {
        return;
    }
    if (calcItem.rightOperator === OPERATOR.MULTIPLY) {
        display.textContent = calcForString(calcItem.rightOperator, calcItem.centerOperand, calcItem.rightOperand);
        calcItem = __assign(__assign({}, calcItem), { centerOperand: display.textContent, rightOperand: "", rightOperator: OPERATOR.MULTIPLY });
    }
    else if (calcItem.leftOperator === OPERATOR.MULTIPLY) {
        display.textContent = calcForString(calcItem.leftOperator, calcItem.leftOperand, calcItem.centerOperand);
        calcItem = __assign(__assign({}, calcItem), { leftOperand: display.textContent, centerOperand: "", leftOperator: OPERATOR.MULTIPLY });
    }
    else if (calcItem.leftOperator === OPERATOR.PLUS || calcItem.leftOperator === OPERATOR.MINUS) {
        display.textContent = calcItem.centerOperand;
        calcItem = __assign(__assign({}, calcItem), { rightOperator: OPERATOR.MULTIPLY });
    }
    else if (!calcItem.leftOperand) {
        calcItem = __assign(__assign({}, calcItem), { leftOperand: display.textContent, leftOperator: OPERATOR.MULTIPLY });
    }
    else {
        calcItem.leftOperator = OPERATOR.MULTIPLY;
    }
};
var onClickEqualBtn = function () {
    if (calcItem.rightOperand) {
        calcItem.centerOperand = calcForString(calcItem.rightOperator, calcItem.centerOperand, calcItem.rightOperand);
        display.textContent = calcForString(calcItem.leftOperator, calcItem.leftOperand, calcItem.centerOperand);
        calcItemReset();
        return;
    }
    if (calcItem.centerOperand && !calcItem.rightOperator) {
        display.textContent = calcForString(calcItem.leftOperator, calcItem.leftOperand, calcItem.centerOperand);
        calcItemReset();
    }
};
var onClickClearBtn = function () {
    if (calcItem.rightOperand) {
        calcItem.rightOperand = "";
        display.textContent = calcItem.centerOperand;
        return;
    }
    if (calcItem.centerOperand && !calcItem.rightOperator) {
        calcItem.centerOperand = "";
        display.textContent = calcItem.leftOperand;
    }
    else {
        calcItem = __assign(__assign({}, calcItem), { leftOperand: "", centerOperand: "", leftOperator: "", rightOperator: "" });
        display.textContent = "0";
    }
};
var calcForString = function (operator, leftOperand, rightOperand) {
    if (operator === OPERATOR.PLUS) {
        return "".concat(Number(leftOperand) + Number(rightOperand));
    }
    else if (operator === OPERATOR.MINUS) {
        return "".concat(Number(leftOperand) - Number(rightOperand));
    }
    else if (operator === OPERATOR.MULTIPLY) {
        return "".concat(Number(leftOperand) * Number(rightOperand));
    }
    else {
        return "";
    }
};
var calcItemReset = function () {
    calcItem = {
        leftOperand: "",
        centerOperand: "",
        rightOperand: "",
        leftOperator: "",
        rightOperator: ""
    };
};
// 確認用
function check() {
    console.log("".concat(calcItem.leftOperand).concat(calcItem.leftOperator).concat(calcItem.centerOperand).concat(calcItem.rightOperator).concat(calcItem.rightOperand));
}
