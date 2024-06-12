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
  minute: number
  constructor(hour: number, minute: number) {
    this.hour = hour
    this.minute = minute
  }
}

const mode = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  let time = new hour(hours, minutes)
  console.log(time.hour)

}

mode()