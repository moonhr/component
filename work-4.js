"use strict";
const root = document.getElementById('root');
const main = document.getElementById('main');
class hour {
    constructor(hour) {
        this.hour = hour;
    }
}
const mode = () => {
    let today = new Date();
    let hours = today.getHours();
    let time = new hour(hours);
    console.log(time.hour);
    const decision = () => {
        if (time.hour > 9 || time.hour < 18) {
            return ligthMode(),
                console.log('light모드');
        }
        else {
            return darkMode(),
                console.log('dark모드');
        }
    };
    const ligthMode = () => {
        main;
    };
    const darkMode = () => {
    };
    return decision();
};
mode();
