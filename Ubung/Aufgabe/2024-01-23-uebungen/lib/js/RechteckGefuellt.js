class RechteckGefuellt extends Rechteck {
  constructor(x, y, b, h, f, rf, rd) {
    super(x, y, b, h);
    this.f = f;
    this.rf = rf;
    this.rd = rd;
  }

  fuellungFaerben(f) {
    this.f = f;
  }
  rahmenFaerben(rf) {
    this.rf = rf;
  }
  rahmenSkalieren(rd) {
    this.rd *= rd;
  }
  toString() {
    return super.toString() + ", Füllung: " + this.f + ", Rahmen: " + this.rf + "/" + this.rd;
  }
}