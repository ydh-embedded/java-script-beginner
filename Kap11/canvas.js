



function drawCanvas(){
    const cvs = document.querySelectorAll                                               // wiir erzeugen eine constante canvas  bzw. cvs
    if(cvs.getContext){                                                                 //  wir prüfen ob es einen canvas Context / ihnalt gibt
        const context = cvs.getContext("2d");
        context.fillStyle = "rgb(255,0,255)";
        context.fillRect( 10 ,  20 , 50 , 50 );                                 // x=10 y=20 höhe 50 breite 50px

    }
}
/**
 * @param cvs   Canvas - Element
 * @param context   Context der Canvas
 * @param ax   x-Koordinate des Rechteckes
 * @param ay   y-Koordinate des Rechteckes
 * @param aw   Breite des Rechteckes
 * @param ah   Höhe des Rechteckes
 * 
 * @param bx   x-Koordinate des 2ten Rechteckes
 * @param by   y-Koordinate des 2ten  Rechteckes
 * @param bw   Breite des Rechteckes
 * @param bh   Höhe des Rechteckes
 * 
 * 
 */
function animate( cvs , context , ax , ay , aw , ah , bx , by , bw , bh ) {                                                                   // animate lässt rechteck am rand zurück springen
    const canvasAW = 50  ;
    const canvasAH = 50  ;
    const canvasBW = 50  ;
    const canvasBH = 50  ;
    
    setTimeout(() => {
        // Bewegen und Abprallen für Quadrat A
                // Abprallpunkt für x-Achse bestimmen und Koordoinate neu setzen
                if( ax == (cvs.width - aw) ) aw = -1;
                else if( ax == 0 ) aw = 1;
                
                // Abprallpunkt für y-Achse bestimmen und Koordoinate neu setzen
                if( ay == (cvs.height - ah) ) ah = -1;
                else if( ay == 0 ) ah = 1;

                // Koordinaten neu berechnen
                ax = ax + aw;
                ay = ay + ah;


                // Bewegen und Abprallen für Quadrat B
                // Abprallpunkt für x-Achse bestimmen und Koordoinate neu setzen
                if( bx == (cvs.width - bw) ) bw = -1;
                else if( bx == 0 ) bw = 1;
                
                // Abprallpunkt für y-Achse bestimmen und Koordoinate neu setzen
                if( by == (cvs.height - bh) ) bh = -1;
                else if( by == 0 ) bh = 1;

                // Koordinaten neu berechnen
                bx = bx + bw;
                by = by + bh;

                // alles neu zeichnen
                context.clearRect(0, 0, 300, 200);
                context.fillStyle = "rgba(0,0,255,0.5)";
                context.fillRect( ax, ay, aw, ah);
                context.fillStyle = "rgba(0,255,0,0.5)";
                context.fillRect( bx, by, bw, bh);

                // selbstaufruf der Funktion animate
                self.animate(cvs, context, ax, ay, aw, ah, bx, by, bw, bh);
    }, 0);
}

function flyingSqrs(){

    const cvs = document.querySelector("#flyingSqrs");
    if ( cvs.getContext ) {
        cvs.getContext("2d");
        animate( cvs , context , 31 , 69 , 1 , -1 , 8 , 25 , 1 , 1 );
    }
}



document.addEventListener("DOMContentLoaded") , (event) => {
    drawCanvas();
    flyingSqrs();
}