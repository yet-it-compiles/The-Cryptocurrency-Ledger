import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {TopEarners1, TopEarners2, Transactions1, Transactions2} from "../../Widgets";

const layout = [
    {i: "a", x: 0, y: 0, w: 5, h: 2.8},
    {i: "b", x: 5, y: 0, w: 2.45, h: 5},
    {i: "c", x: 5, y: 0, w: 5.95, h: 2.8},
    {i: "d", x: 0, y: 0, w: 3.5, h: 4}
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
            <div key="b"><TopEarners2/></div>
            <div key="c"><Transactions1/></div>
            <div key="d"><Transactions2/></div>
        </GridLayout>
    );
}
export default WidgetLayout;