

let vRootElement = document.querySelector(":root") ;                            /* wir geben die style Elemente in der css Datei aus mit dem root element / header / usw. */


let color = window.getComputedStyle(vRootElement).getPropertyValue("--primary-color-text") ;

    console.log(color);


    vRootElement.style.setProperty( "--primary-color-text" , "" );



