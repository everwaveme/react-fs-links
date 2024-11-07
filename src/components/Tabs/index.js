import React, { useState } from "react";
import ListItem from "../ListItem";
import dataSocial from "../../data/dataSocial";
import dataDev from "../../data/dataDev";
import dataPhotography from "../../data/dataPhotography";

function Tabs() {
    const [toggleValue, setToggleValue] = useState(1);

    function toggleTab(value) {
        setToggleValue(value);
    }

    return (
        <div>
            <div className="card-tabs-wrap">
                <button className={toggleValue === 1 ? 'card-tab active-tab' : 'card-tab'} onClick={() => toggleTab(1)}>
                    Social
                </button>
                <button className={toggleValue === 2 ? 'card-tab active-tab' : 'card-tab'} onClick={() => toggleTab(2)}>
                    Dev
                </button>
                <button className={toggleValue === 3 ? 'card-tab active-tab' : 'card-tab'} onClick={() => toggleTab(3)}>
                    Photography
                </button>
            </div>

            <ul className={toggleValue === 1 ? 'card-list active-list' : 'card-list'}>
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

            <ul className={toggleValue === 2 ? 'card-list active-list' : 'card-list'}>
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

            <ul className={toggleValue === 3 ? 'card-list active-list' : 'card-list'}>
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