var modelFlag = 0;

function append(str) {
    if (str == 'C') {
        exp.value = "";
        ans.value = "";
    } else if (str == 'B') {
        cstr = String(exp.value);
        cstr = cstr.substring(0, cstr.length - 1);
        exp.value = cstr;
        if (exp.value.length != 0)
            caculate();
        else
            ans.value = "";
    } else if (str == '=') {
        caculate();
    } else {
        exp.value += str;
        caculate();
    }
}

function plus_min() {
    cstr = String(exp.value);
    if (cstr[0] == '-') {
        cstr = cstr.substring(1, cstr.length);
        exp.value = cstr;
        caculate();
    } else {
        cstr = "-" + cstr;
        exp.value = cstr;
        caculate();
    }
}

function caculate() {
    expStr = String(exp.value);
    while (expStr.search(/sin\((\S*)\)/) != -1) {
        contant = expStr.match(/sin\(([^\)]*)\)/);
        expStr = expStr.replace(contant[0], String(Math.sin(parseFloat(contant[1]) / 180 * Math.PI)));
    }

    while (expStr.search(/cos\((\S*)\)/) != -1) {
        contant = expStr.match(/cos\(([^\)]*)\)/);
        expStr = expStr.replace(contant[0], String(Math.cos(parseFloat(contant[1]) / 180 * Math.PI)));
    }


    if (expStr.length == 0) {
        ans.value = "0";
    } else {
        ans.value = eval(expStr);
    }
}

function keyboard() {
    key = window.event.keyCode;
    if (key >= 45 && key <= 57) {
        append(String.fromCharCode(key));
    } else if (key >= 40 && key <= 43) {
        append(String.fromCharCode(key));
    } else if (key == 13) {
        caculate();
    } else if (key == 8) {
        append('B');
    }
}

function model() {
    if (modelFlag == 0) {
        document.getElementById("calculator").style.width = "400px";
        document.getElementById("expand").style.top = String(document.getElementById("calculator").offsetTop + 242) + "px";
        document.getElementById("expand").style.left = String(document.getElementById("calculator").offsetLeft + 2) + "px";
        document.getElementById("expand").style.display = "block";
        modelFlag = 1;
    } else {
        document.getElementById("expand").style.display = "none";
        document.getElementById("calculator").style.width = "320px";
        modelFlag = 0;
    }
}

function Sqrt() {
    if (ans.value > 0) {
        ans.value = Math.sqrt(ans.value);
        exp.value = "";
    } else {
        ans.value = "Erro";
        exp.value = "";
    }
}