import { AppState } from "../services/AppState.js";
console.log('controller loaded')

function _drawRacers() {
  console.log('Yo');
  let Racers  = AppState.racers
  let template = ''
  Racers.forEach(racer => template += racer.Template)
  console.log(template);
  document.getElementById('toTheRaces').innerHTML = template
}

// function _moveRacers() {
//   greeting()
// }

class Controller {
  constructor(){
    console.log("Working?")
    _drawRacers()
  }
  greeting(){}
}
















let controller = new Controller()


window['app'] = {controller : controller}