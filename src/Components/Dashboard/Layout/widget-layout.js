import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import {TopEarners1, TopEarners2, Transactions1, Transactions2} from "../../Widgets";
import AlarmListWidget from "../../Widgets/Alarm/alarm-list.widget.jsx";
import PortfolioWidget from "../../Widgets/Portfolio/portfolio.widget.jsx";
import TopEarnersWidgetPort from "../../Widgets/TopEarners/top-earners-port.widget.jsx";
const layout = [
    {i: "a", x: 0, y: 0, w: 5, h: 2.8},
    {i: "b", x: 5, y: 0, w: 2.45, h: 5},
    {i: "c", x: 5, y: 0, w: 5.95, h: 2.8},
    {i: "d", x: 0, y: 0, w: 3.5, h: 4},
    {i: "e", x: 0, y: 0, w: 3, h: 4},
    {i: "f", x: 10, y: 0, w: 2.2, h: 1.5}
];
const WidgetLayout = () => {

    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={15}
            rowHeight={100}
            width={1800}
            isResizable={false}
            preventCollision={false}
            autoSize={true}
        >
            <div key="a"><TopEarners1/></div>
            <div key="b"><TopEarnersWidgetPort/></div>
            <div key="c"><Transactions1/></div>
            <div key="d"><Transactions2/></div>
            <div key = "e"><AlarmListWidget ></AlarmListWidget></div>
            <div key = "f"><PortfolioWidget></PortfolioWidget></div>
        </GridLayout>
    );
}
export default WidgetLayout;