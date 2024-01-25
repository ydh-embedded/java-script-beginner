 let success = false  ;
    /* let success = true   ; */

function getProducts() {

    return new Promise (
        ( resolve , reject ) => {
          setTimeout(() => {
            if(success){
                resolve(
                 [
                     { name: "Milch"  , inStock: 1                    },
                     { name: "Kaffee" , inStock: 3                    },
                     { name: "Kuchen" , inStock: 5                    },
                 ]
                );
            } else {
                reject( "Reject gibt den Fehler aus !" );
            }
          }, 1000 );
    });
}


/*  let search = "Search-Variable aus einem Input Feld"   ; */
    let search = "Milch"   ;


/* getProducts().then().catch() */
   getProducts()
    .then((products) => {
        return products.find((product) => product.name === search )   ;
    })
    .then((product) => {
        console.log(product);
    })
    .catch((err) => {
        console.log(err);
    });