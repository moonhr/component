// const root = document.getElementById('root')
// const main = document.getElementById('main')


let root = document.querySelector('#root');
let main = document.querySelector('#main');


class hour {
  hour: number
  constructor(hour: number) {
    this.hour = hour
  }
}

const mode = () => {
  let today = new Date();
  let hours = today.getHours();

  let time = new hour(hours)
  console.log(time.hour)

  const decision = () => {
    if(time.hour > 9 || time.hour < 18){
      return ligthMode(),
      console.log('light모드')
    } else {
      return darkMode(),
      console.log('dark모드')
    }
  }
  
  const ligthMode = () => {
    main

  }
  const darkMode = () => {
    
  }
  return decision()
}

mode()