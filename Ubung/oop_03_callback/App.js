function getProducts(callback) {

    setTimeout(() => {
        callback
        ([
            { name: "Milch"  , inStock: 1                    },
            { name: "Kaffee" , inStock: 3                    },
            { name: "Kuchen" , inStock: 5                    },
        ]);
    } , 3000 );

}

function findProduct( productName , callback ) {
    getProducts((products) => {
        let product = products.find((product) => product.name === productName  );
        callback(product);
    });
}

findProduct("Milch" , console.log);