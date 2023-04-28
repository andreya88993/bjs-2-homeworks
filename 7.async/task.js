class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback){
        if (!time || !callback){
          throw new Error('Отсутствуют обязательные аргументы');
        } 
        if(this.alarmCollection.some(call => call.time === time)){
          console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({time, callback, canCall: true});
      }

      removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(call => call.time !== time);
      }

    getCurrentFormattedTime() {
        let date = new Date ();
        let currentTime = `${("0" + date.getHours()).substr(-2)}` + ":" + `${("0" + date.getMinutes()).substr(-2)}`;
        return currentTime;
    }

    start(){
        if (this.intervalId){
          return;
        }
    
        this.intervalId = setInterval(() => this.alarmCollection.forEach((call) => {
          if (call.time === this.getCurrentFormattedTime() && call.canCall){
            call.canCall = false;
            call.callback();
          }
        }), 1000);        
      }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;

    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}