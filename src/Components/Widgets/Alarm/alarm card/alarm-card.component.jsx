import {Component} from "react";
import './alarm-card.styles.css'

class AlarmCard extends Component{

    render(){
        const{cardTitle, cardPrice, type} = this.props.alarms;
        return(
            <div className={"card-wrapper"}>
                {console.log(cardPrice)}
                {console.log(cardTitle)}
                    <h2 className={'alarm-details alarm-card-coin'}>{cardTitle}</h2>
                    <h2 className={'alarm-details alarm-card-price'} >{cardPrice}</h2>
                <h2 className={'alarm-details alarm-card-type'}>{type}</h2>
            </div>
        )
    }
}

export default AlarmCard;