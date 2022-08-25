import {Component} from 'react';
import './alarm-list.styles.css'
import './alarm card/alarm-card.component.jsx'
import AlarmCard from "./alarm card/alarm-card.component";

class AlarmListWidget extends Component {
    constructor() {
        super();

        this.state = {
            alarms:[
                {
                coinName: "bitcoin",
                coinPrice:  12345,
                type: "buy"
                }  ,
                {
                coinName: "doge",
                coinPrice:  12345,
                type: "sell"
                }

            ]
        };
    }

    render() {

        return (
            <div className = "alarm-list-parent">
                <h1 className = "alarm-list-title"> Alarm List</h1>
                <div className={'card-container'}>
                    {
                        this.state.alarms.map((alarm) => {

                            return (<AlarmCard alarms={alarm}/>)
                        })
                    }
                </div>

            </div>
        )
    }
}

export default AlarmListWidget;