import React from "react";
import ListItem from "../ListItem";
import dataSocial from "../../data/dataSocial";
import dataDev from "../../data/dataDev";
import dataPhotography from "../../data/dataPhotography";

function Tabs() {
    return (
        <div>
            <div className="card-tabs-wrap">
                <button className="card-tab active-tab">
                    Social
                </button>
                <button className="card-tab">
                    Dev
                </button>
                <button className="card-tab">
                    Photography
                </button>
            </div>

            <ul className="card-list active-list">
                {dataSocial.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            name={item.name}
                            desc={item.desc}
                            icon={item.icon}
                            link={item.link}
                        />
                    );
                })}
            </ul>

            <ul className="card-list">
                {dataDev.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            name={item.name}
                            desc={item.desc}
                            icon={item.icon}
                            link={item.link}
                        />
                    );
                })}
            </ul>

            <ul className="card-list">
                {dataPhotography.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            name={item.name}
                            desc={item.desc}
                            icon={item.icon}
                            link={item.link}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default Tabs;