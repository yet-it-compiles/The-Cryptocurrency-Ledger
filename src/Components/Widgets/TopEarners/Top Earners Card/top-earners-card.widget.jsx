import {Component} from "react";

class TopEarnersCardWidget extends Component {

    render() {
        const {name, price, percent} = this.props;

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