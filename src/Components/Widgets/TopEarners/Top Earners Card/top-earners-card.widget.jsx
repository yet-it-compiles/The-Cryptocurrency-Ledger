import {Component} from "react";
import "./top-earners-card.css";
class TopEarnersCardWidget extends Component {

    render() {
        console.log(this.props);
        const name = this.props.cards.coinname;
        const price = this.props.cards.price;
        const percent =  this.props.cards.percent;
        console.log(name);
        return(
            <div className={"top-earners-card-widget"}>
                <div className={"top-earners-card-widget-top-line"}>
                    <h2 className={"top-earners-card-widget-coin"}>
                        {name}
                    </h2>
                    <h2 className={"top-earners-card-widget-price"}>
                        {price}
                    </h2>
                </div>

                <div className={"top-earners-card-widget-bottom-line"}>
                    <h2 className={"top-earners-card-widget-percent"}>
                        {percent}%
                    </h2>
                </div>


            </div>
        )
    }
}
export default TopEarnersCardWidget;