import {Component} from 'react';
import "./portfolio.widget.css";
class PortfolioWidget extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div className={"portfolio-widget"}>
                <div className={"portfolio-widget-wrapper"}>
                    <h1 className={"portfolio-widget-title"}>Portfolio Snapshot</h1>
                    <div className={"portfolio-widget-total"}>
                        <h2 className={"portfolio-widget-text"} >Total Value</h2>
                        <h2 className={"portfolio-widget-value"}> 1234</h2>
                    </div>
                    <div className={"portfolio-widget-today"}>
                        <h2 className={"portfolio-widget-text"}>Today's Return</h2>
                        <h2 className={"portfolio-widget-value"}>1234</h2>
                    </div>
                    <button>Full Portfolio</button>
                </div>

            </div>
        )
    }
}

export default PortfolioWidget;