import { quickSort } from "./quickSort.js";
/*
Wir fügen die sortier function ein  */

self.addEventListener(
    "message" , (event) => {
        let data    =       event.data       ;
        import ("./quickSort.js").then(({ quickSort }) => {
            self.postMessage(quickSort(data));
        });
});