import React from "react";
import avatar from "../../assets/fs-avatar.jpg";

function DataInfo() {
    return (
        <div className="data-info">
            <div className="data-info-pulse">
                <div className="data-info-pic">
                    <img className="data-info-img" src={avatar} alt="Farhad Sadykov's avatar" />
                </div>
            </div>
            <h1 className="data-info-title">
                Farhad Sadykov
            </h1>
            <p className="data-info-desc">
                I'm a front-end developer, web designer and monochrome photographer from St.Petersburg.
            </p>
        </div>
    );
}

export default DataInfo;