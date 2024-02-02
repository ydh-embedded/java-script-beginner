//#region constanten



//#endregion



function fCalcQuad          ( ){

let l =  parseFloat( lange.value) * 0.1 ;
let b =  parseFloat(breite.value) * 0.1 ;

let q = ( l * b )   ;

console.log(l);
console.log(b);
console.log(q);

return q ;

}

function fBasisPrice        ( mm, q ) {
    const platePrice = {
    //   index:  value,
            25: 300.00,
            30: 360.00,
            40: 420.00,
            50: 480.00,
            60: 560.00,
            70: 640.00,
            80: 720.00,
            90: 800.00,
            100: 880.00,
            110: 960.00,
            120: 1040.0

    };

    let basePrice = platePrice[mm] * q;
        console.log     (q);
    return basePrice;
}

function fAdditionalPrice   ( basePrice , formRiss = false , formBalken = false ){

    let addCosts = basePrice + ((formRiss ? 47.6 : 0) + (formBalken ? 71.4 : 0));
        console.log     ('fAdditionalPrice' + addCosts );
    return addCosts ;
}

function fVariantPrice      ( addCosts , varPrice1 = false , varPrice2 = false ){
    let varPrice  = addCosts * ((varPrice1 ? 1 : 0) + (varPrice2 ? 0.85 : 0));
        console.log     ('fVariantPrice' + varPrice);
    return varPrice ;
}

function fPrice             ( basePrice , addCosts , varPrice){
    let endPrice = basePrice + addCosts + varPrice ;
        console.log     ('fPrice' + endPrice);
    return endPrice
}

function fViewPrice         ( endPrice ){
        console.log     ('Eingegebene Länge: '  + lange.value + ' cm');
        console.log     ('Eingegebene Breite: ' + breite.value + ' cm');
        console.log     ('Errechnete Fläche: '  + q + ' m²');

            alert   (endPrice) ;
    

}



function fProgrammAblauf() {


    var q  = fCalcQuad();           //  q
    var bP = fBasisPrice();         //  basePrice
    var aC = fAdditionalPrice();    //  addCosts
    var vP = fVariantPrice();       //  varPrice

    if ( q == NaN ){
        console.log('Die Function fCalcQuad ist fehlgeschlagen');
        error = true ;
    } else {
        console.log(p);
        console.log(bP);
        
        
        if( fBasisPrice( bP , q ) == NaN ){
            console.log('Die Function fBasisPrice ist fehlgeschlagen');
            error = true ;
        } else {

            if ( fAdditionalPrice( bP , true , true ) == NaN ){
                console.log('Die Function fAdditionalPrice ist fehlgeschlagen');
                error = true ;
            } else {

                if     ( fVariantPrice( aC , true ,true ) == NaN ){
                    console.log('Die Function fVariantPrice ist fehlgeschlagen');
                    error = true ;
                } else {

                    if  ( fPrice( bP , aP , vP ) == NaN ){
                        console.log('Die Function fPrice ist fehlgeschlagen');
                        error = true ;
                        } else {

                            fViewPrice;
                        }
                    
                }
            }
        }
    }
}
