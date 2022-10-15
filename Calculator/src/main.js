var display = document.getElementById("display");
var calculation = "";
function onClickNumberBtn(btnNum) {
    var _a;
    if (display == null) {
        return;
    }
    if (((_a = display.textContent) === null || _a === void 0 ? void 0 : _a.slice(0, 1)) === "0" || calculation.slice(-3) === " + " || calculation === "") {
        display.textContent = btnNum;
    }
    else {
        display.textContent += btnNum;
    }
    calculation += btnNum;
}
function onClickPlus() {
    if (!display.textContent) {
        console.error("textContent is null.");
        return;
    }
    if (calculation === "") {
        calculation = display.textContent;
    }
    calculation += " + ";
}
function onClickEqual() {
    display.textContent = eval(calculation);
    calculation = "";
}
function onClickClear() {
    display.textContent = "0";
}
// check用
function check() {
    console.log(calculation);
    console.log(display.textContent);
}
