onmessage = function (e) {
    let i;
    for (i = 0; i < 1000000000; i++) {

    }
    this.postMessage(i);
}