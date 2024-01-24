class Rechteck {
  constructor(x, y, b, h) {
    this.x = x;
    this.y = y;
    this.b = b;
    this.h = h;
  }

  verbreitern(b) {
    this.b += b;
  }

  erhoehen(h) {
    this.h += h;
  }

  skalieren(f) {
    this.b *= f;
    this.h *= f;
  }

  verschieben(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return "Ort: " + this.x + "/" + this.y + ", Größe " + this.b + "/" + this.h;
  }
}