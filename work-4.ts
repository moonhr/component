// class Basic { 
//   name : string
//   age : number
//   job : string

//   constructor(name : string, age : number, job : string) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
// }



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
      return ligthMode()
    } else {
      return darkMode()
    }
  }
  
  const ligthMode = () => {

  }
  const darkMode = () => {
    
  }
}

mode()