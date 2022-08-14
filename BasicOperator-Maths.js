function add() {
    let x = document.getElementById("box1_input1").value;
    x = Number(x);
    let y = document.getElementById("box1_input2").value;
    y = Number(y);
    let res = x + y;
    document.getElementById("res1").innerHTML = res;
}

function Subtract() {
    let x = document.getElementById("box2_input1").value;
    x = Number(x);
    let y = document.getElementById("box2_input2").value;
    y = Number(y);
    let res = x - y;
    document.getElementById("res2").innerHTML = res;
}

function Multiply() {
    let x = document.getElementById("box3_input1").value;
    x = Number(x);
    let y = document.getElementById("box3_input2").value;
    y = Number(y);
    let res = x * y;
    document.getElementById("res3").innerHTML = res;
}

function Divide() {
    let x = document.getElementById("box4_input1").value;
    x = Number(x);
    let y = document.getElementById("box4_input2").value;
    y = Number(y);
    let res = x / y;
    document.getElementById("res4").innerHTML = res;
}

function Remainder() {
    let x = document.getElementById("box5_input1").value;
    x = Number(x);
    let y = document.getElementById("box5_input2").value;
    y = Number(y);
    let res = x % y;
    document.getElementById("res5").innerHTML = res;
}

function Exponentiation() {
    let x = document.getElementById("box6_input1").value;
    x = Number(x);
    let y = document.getElementById("box6_input2").value;
    y = Number(y);
    let res = x ** y;
    document.getElementById("res6").innerHTML = res;
}

