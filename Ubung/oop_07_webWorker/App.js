document.addEventListener("DOMContentLoaded", () => {

let worker = new Worker("worker.js");

function startMyWork() {
    worker.postMessage([ 1 , 6 , 4 , 8 , 11 , 68 , 43 , 22 , 2 , 8 , 9 , 12 ]);
}

document.querySelector('#startWorker').addEventListener( "click" , startMyWork );
});