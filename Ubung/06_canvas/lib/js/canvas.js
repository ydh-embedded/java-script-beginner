function drawCanvas() {
  const cvs = document.querySelector("#canvas");
  // Prüfen ob Canvas unterstützt wird
  if (cvs.getContext) {
    const context = cvs.getContext("2d");
    context.fillStyle = "rgb(255,0,255)";
    context.fillRect(10, 20, 50, 50);
  }
}

function flyingSqrs() {
  const cvs = document.querySelector("#flyingSqrs");
  if (cvs.getContext) {
    const context = cvs.getContext("2d");
    animate(cvs, context, 31, 69, 1, -1, 8, 25, 1, 1);
  }
}

/** 
 * function animate()
 * 
 * @param cvs         Canvas-Element
 * @param context     Context der canvas
 * @param ax          x-Koordinate des ersten Rechtecks
 * @param ay          y-Koordinate des ersten Rechtecks
 * @param aw          Breite des ersten Rechtecks
 * @param ah          Höhe des ersten Rechtecks
 * @param bx          x-Koordinate des zweiten Rechtecks
 * @param by          y-Koordinate des zweiten Rechtecks
 * @param bw          Breite des zweiten Rechtecks
 * @param bh          Höhe des zweiten Rechtecks
 * 
 * */
function animate(cvs, context, ax, ay, aw, ah, bx, by, bw, bh) {
  const caw = 50;
  const cah = 50;
  const cbw = 50;
  const cbh = 50;

  setTimeout(() => {
    // Bewegen und Abprallen für Quadrat A
    // Abprallpunkt für x-Achse bestimmen und Koordoinate neu setzen
    if (ax == (cvs.width - caw)) aw = -1;
    else if (ax == 0) aw = 1;

    // Abprallpunkt für y-Achse bestimmen und Koordoinate neu setzen
    if (ay == (cvs.height - cah)) ah = -1;
    else if (ay == 0) ah = 1;

    // Koordinaten neu berechnen
    ax = ax + aw;
    ay = ay + ah;


    // Bewegen und Abprallen für Quadrat B
    // Abprallpunkt für x-Achse bestimmen und Koordoinate neu setzen
    if (bx == (cvs.width - cbw)) bw = -1;
    else if (bx == 0) bw = 1;

    // Abprallpunkt für y-Achse bestimmen und Koordoinate neu setzen
    if (by == (cvs.height - cbh)) bh = -1;
    else if (by == 0) bh = 1;

    // Koordinaten neu berechnen
    bx = bx + bw;
    by = by + bh;

    // alles neu zeichnen
    context.clearRect(0, 0, 300, 200);
    context.fillStyle = "rgba(0,0,255,0.5)";
    context.fillRect(ax, ay, caw, cah);
    context.fillStyle = "rgba(0,255,0,0.5)";
    context.fillRect(bx, by, cbw, cbh);

    // selbstaufruf der Funktion animate
    self.animate(cvs, context, ax, ay, aw, ah, bx, by, bw, bh);
  }, 0);
}


document.addEventListener("DOMContentLoaded", _ => {
  drawCanvas();
  flyingSqrs();
});