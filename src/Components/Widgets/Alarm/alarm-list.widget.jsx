import {Component} from 'react';
import './alarm-list.styles.css'
import './alarm card/alarm-card.component.jsx'
import AlarmCard from "./alarm card/alarm-card.component";

class AlarmListWidget extends Component {

    render() {

        return (
            <div className = "alarm-list-parent">
                <h1 className = "alarm-list-title"> Alarm List</h1>
                <div className={'card-wrapper'}>
                    <AlarmCard title = "Bitcoin"></AlarmCard>
                </div>
                <div className={'card-wrapper'}>
                        <AlarmCard title = "Doge"></AlarmCard>
                </div>

            </div>
        )
    }
}

export default AlarmListWidget;