import {Component} from 'react';

class TopEarnersWidgetPort extends Component{
    constructor() {
        super();
    }

    render() {

        return(
            <div className = "top-earners-port-widget">
                <div className={"top-earners-port-widget-wrapper"}>
                    <div className={"top-earners-port-widget-header"}>
                        <h1 className={"top-earners-port-widget-title"}>Top Earners</h1>
                    </div>
                    <div className={"top-earners-port-widget-card-wrapper"}>
                        {
                            //this is where the map function will take the state array and add the Top earners card
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default TopEarnersWidgetPort;
