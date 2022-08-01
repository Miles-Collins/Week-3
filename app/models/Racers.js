export class Racer{

  constructor(name, img) {
    this.name = name
    this.img = img
  }


  get Template() {
    return `
    <div class="col-12 bg-dark big-height text-light"><img class="img-fluid tiny" src=${this.img} alt=""></div>
    `
  }
