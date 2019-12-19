//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minute = 0) {

    if(hour < 0)
      hour = hour * -1;
    if(minute < 0)
      minute = minute * -1;
      
    while(minute >= 60){
      minute -= 60;
      hour += 1;
    }

    this.hour = hour % 12;
    this.minute = minute;
  }

  toString(){
    let hour;
    let minute;

    if(this.hour < 10)
      hour = `0${this.hour}`;
    else  
      hour = `${this.hour}`;

    if(this.minute < 10)
      minute = `0${this.minute}`;
    else  
      minute = `${this.minute}`;

    
    return `${hour}:${minute}`;
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
