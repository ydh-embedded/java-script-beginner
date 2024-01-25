


/*
Wir fügen die sortier function ein  */

self.addEventListener(
    "message" , (event) => {
        let data    =       event.data       ;
        self.postMessage(data
                .sort(( a , b ) => {
                    return a - b    ;
                })
        );
});