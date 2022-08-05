import {Component} from "react";
import './alarm-card.styles.css'

class AlarmCard extends Component{

    render(){
        /*const alarms = this.props*/
        return(
            <div className={"card-wrapper"}>
                <h2 className={'alarm-details alarm-card-coin'}>Bitcoin</h2>
                <h2 className={'alarm-details alarm-card-price'}>$29999</h2>
                <h2 className={'alarm-details alarm-card-type'}>buy</h2>
            </div>
        )
    }
}

export default AlarmCard;