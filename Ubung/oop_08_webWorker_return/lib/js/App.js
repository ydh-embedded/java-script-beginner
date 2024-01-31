
document.addEventListener("DOMContentLoaded", (event) => {

import ("./worker.js").then(({ worker }) => {
        self.postMessage(worker(data));
})

let worker = new Worker("./worker.js" , { type: "module"});

worker.addEventListener("message" ,
        (event) => {
            let data = event.data   ;
            console.log(data)       ;
            
        }
);


worker.addEventListener("error" ,
        (event) => {
            /* let data = event.data   ; */
            console.log(event)       ;
            
        }
);



function startMyWork() {
    worker.postMessage([ 1 , 6 , 4 , 8 , 11 , 68 , 43 , 22 , 2 , 8 , 9 , 12 ])
}


document
    .querySelector('#startWorker')
    .addEventListener( "click" , startMyWork )
    ;


});