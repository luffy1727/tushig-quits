import React, { Component } from 'react';

const data = 
{
    quitDay: 1646496066000, //  new Date(2022, 03, 05) i f' ed up again 
    dailyCost: 6000, // cost of a Camel pack in Sweden counted as in 0.5 pack a day
    previousSavings: 0 // previous savings before coming to sweden: 1930000
  };

class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = { time: Date.now(), tugriks: null,
         years: null, months: null, days: null, hours: null, minutes: null,
        seconds : 0, savings: null, obj: null };
    }

    init (secs) {
        this.setState({
            seconds: secs,
            minutes : Math.floor(secs / 60),
            hours : Math.floor(secs / (60 * 60)),
            days : Math.floor(Math.floor(secs / (60 * 60)) / 24),
            years : Math.floor(Math.floor(Math.floor(secs / (60 * 60)) / 24) / 365),
            months :  Math.floor(Math.floor(Math.floor(secs / (60 * 60)) / 24) / 30),
            savings :  Math.floor(Math.floor(secs / (60 * 60)) / 24) * data.dailyCost
        });
    }

    secondsToTime(){
        this.setState(prevState => ({
            seconds: prevState.seconds + 1,
            hours : Math.floor(this.state.seconds / (60 * 60)),
            days : Math.floor(this.state.hours / 24),
            years : Math.floor(this.state.days / 365),
            months :  Math.floor(this.state.days / 30),
            minutes : Math.floor(this.state.seconds / 60),
            savings :  this.state.days * data.dailyCost
        }));
      }

    componentDidMount() {
        console.log(new Date(data.quitDay).getTime());
        this.init(Math.floor((new Date(this.state.time).getTime() - new Date(data.quitDay).getTime())/1000));
        this.interval = setInterval(() => this.secondsToTime(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
  
    render() {
      return(
          <div className = "App-container">
            <div className = "App-timeline">
                <div className = "App-timeline-div">
                    <h1>{this.state.time % 60}</h1>
                    <p>Секунд</p>
                </div>
                <div className = "App-timeline-div">
                    <h1>{this.state.minutes % 60}</h1>
                    <p>Минут</p>
                </div>
                <div className = "App-timeline-div">
                    <h1>{this.state.hours % 24}</h1>
                    <p>Цаг</p>
                </div>
                <div className = "App-timeline-div">
                    <h1>{this.state.days % 30}</h1>
                    <p>Өдөр</p>
                </div>
            </div>
            <div className = "App-timeline">
                <div className = "App-timeline-div">
                    <h1>{this.state.months % 12}</h1>
                    <p>Сар</p>
                </div>
                <div className = "App-timeline-div">
                    <h1>{this.state.years}</h1>
                    <p>Жил</p>
                </div>
                <div className = "App-timeline-div-savings">
                    <h1>{this.state.savings + data.previousSavings}₮</h1>
                    <p>Хэмнэлт</p>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Timer;