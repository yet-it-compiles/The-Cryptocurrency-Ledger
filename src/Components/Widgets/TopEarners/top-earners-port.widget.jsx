import {Component} from 'react';
import "./top-earners-port.widget.css"
import TopEarnersCardWidget from "./Top Earners Card/top-earners-card.widget.jsx";
class TopEarnersWidgetPort extends Component{
    constructor() {
        super();

        this.state = {
            cards: [
                {
                    coinname: "bitcoin",
                    price: 123,
                    percent: 70
                },
                {
                    coinname: "coin",
                    price: 1234,
                    percent: 80
                }

        ]
        };
    }

    render() {

        return(
            <div className = "top-earners-port-widget">
                <div className={"top-earners-port-widget-wrapper"}>
                    <div className={"top-earners-port-widget-header"}>
                        <h1 className={"top-earners-port-widget-title"}>Top Earners</h1>
                    </div>
                    <div className={"top-earners-port-widget-card-wrapper"}>
                        {this.state.cards.map((card) => {
                            console.log(card);
                            return <TopEarnersCardWidget cards = {card}></TopEarnersCardWidget>
                        })}

                    </div>
                </div>
            </div>
        )
    }
}
export default TopEarnersWidgetPort;
