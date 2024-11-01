import React from "react";
import SocialList from "../SocialList";
import dataSocial from "../../data/dataSocial";

function Tabs() {

    return (
        <div>
            <div className="card-tabs">
                <button className="card-tabs-social active">
                    Social
                </button>
                <button className="card-tabs-dev">
                    Dev
                </button>
                <button className="card-tabs-photography">
                    Photography
                </button>
            </div>

            <ul className="card-social-list active">
                {dataSocial.map((item) => {
                    return (
                        <SocialList
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