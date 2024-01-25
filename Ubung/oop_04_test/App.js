function getProducts() {
return  [
            { name: "Milch"  , inStock: 1                    },
            { name: "Kaffee" , inStock: 3                    },
            { name: "Kuchen" , inStock: 5                    },
        ];
}

function findProduct( productName ) {

        let products    =   getProducts()           ;
        let product     =   products.find((product) => product.name === productName )    ;
        return product  ;
}



console.log (findProduct("Kaffee"));
console.log (findProduct("Milch"));
console.log (findProduct("Kuchen"));