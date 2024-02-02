//#region constanten



//#endregion


function fProgrammAblauf() {

    // fCalcQuad();
    if (fCalcQuad() == NaN || fCalcQuad() == ''){
        console.log('Die Function fCalcQuad ist fehlgeschlagen')
    } else {
        console.log('Die Function fCalcQuad wurde berechnet');
        fBasisPrice();
        if( fBasisPrice() == NaN || fBasisPrice() == '' ){
            console.log('Die Function fBasisPrice ist fehlgeschlagen');
        } else {
            console.log('Die Function fBasisPreis wurde berechnet');
            fAdditionalPrice();
            if ( fAdditionalPrice() == NaN || fAdditionalPrice() == '' ){
                console.log('Die Function fAdditionalPrice ist fehlgeschlagen');
            } else {
                console.log('Die Function fAdditionalPrice wurde berechnet');
                fVariantPrice();
                if     ( fVariantPrice() == NaN || fVariantPrice() == '' ){
                    console.log('Die Function fVariantPrice ist fehlgeschlagen');
                } else {
                    console.log('Die Function fVariantPrice wurde berechnet');
                    fPrice();
                    if  ( fPrice() == NaN || fPrice() == '' ){
                        console.log('Die Function fPrice ist fehlgeschlagen');
                        } else {
                            console.log('Die Function fPrice wurde berechnet');
                            fViewPrice;
                        }
                    
                }
            }
        }
    }
}


function fCalcQuad          ( ){

let l = lange.value * 0.1 ;
let b =  breite.value * 0.1 ;

let q = ( l * b )   ;

console.log(l);
console.log(b);
console.log(q);

return q ;

}

function fBasisPrice        (mm, q) {
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
    console.log(basePrice);
    console.log('die Function fBasisPrice wurde aufgerufen');
    return basePrice;
}

function fAdditionalPrice   ( basePrice , formRiss = false , formBalken = false ){

    let addCosts = basePrice + ((formRiss ? 47.6 : 0) + (formBalken ? 71.4 : 0));
    console.log('fAdditionalPrice' + addCosts );
    console.log('die Function fAdditionalPrice wurde aufgerufen');
    return addCosts ;
}

function fVariantPrice      ( addCosts , varPrice1 = false , varPrice2 = false ){
    let varPrice  = addCosts * ((varPrice1 ? 1 : 0) + (varPrice2 ? 0.85 : 0));
    console.log('fVariantPrice' + varPrice);
    console.log('die Function fVariantPrice wurde aufgerufen');
    return varPrice ;
}

function fPrice             ( basePrice , addCosts , varPrice){
    let endPrice = basePrice + addCosts + varPrice ;
    console.log     ('fPrice' + endPrice);
    console.log     ('die Function fPrice wurde aufgerufen');
    return endPrice
}

function fViewPrice         ( endPrice ){
    console.log     ('Eingegebene Länge: ' + lange.value + ' cm');
    console.log     ('Eingegebene Breite: ' + breite.value + ' cm');
    console.log     ('Errechnete Fläche: ' + q + ' m²');

            alert   (endPrice) ;

    console.log     ('die Function fViewPrice wurde aufgerufen');

}
