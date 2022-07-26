import { AppState } from "./AppState.js";
console.log('controller loaded')

function _drawRacers() {
  console.log('Yo');
  let Racers  = AppState.racers
  let template = ''
  Racers.forEach(racer => template += racer.Template)
  console.log(template);
  document.getElementById('toTheRaces').innerHTML = template
}

function _moveRacers() {
  let Racers = AppState.racers

}

function _reset() {}

class Controller {
  constructor(){
    console.log("Working?")
    _drawRacers()
  }

  startRace() {
    setInterval
  }
}
















let controller = new Controller()


window['app'] = {controller : controller}