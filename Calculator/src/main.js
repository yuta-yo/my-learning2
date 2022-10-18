var display = document.getElementById("display");
var calculation = "";
function onClickNumberBtn(btnNum) {
    var _a;
    if (display == null) {
        return;
    }
    // display画面に0か、calculationがカラか末尾に+がある場合は、display画面に押したボタンの数字が入力される。
    // それ以外の場合はdisplay画面の数字の後ろに押したボタンの数字を付け加える。
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
    display.textContent = new Function("return " + calculation)();
    calculation = "";
}
function onClickClear() {
    if (display.textContent === "0") {
        calculation = "";
    }
    calculation = calculation.replace(/\d*$/, "");
    display.textContent = "0";
}
// check用
function check() {
    console.log(calculation);
    console.log(display.textContent);
}
