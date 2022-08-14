function button1() {
    let i;
    for (i = 0; i < 1000000000; i++) {

    }
    document.getElementById("box1").innerHTML = i;
}

function button2() {
    document.getElementById("box2").innerHTML = "Hi";
}

function button3() {
    const webWorkerObj = new Worker("worker.js");
    webWorkerObj.postMessage("Start worker");
    webWorkerObj.onmessage = function (e) {
        document.getElementById("box3").innerHTML = e.data;
    }
}

function button4() {
    document.getElementById("box4").innerHTML = "Hi";
}