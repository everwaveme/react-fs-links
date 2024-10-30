import React from "react";
import avatar from "../../assets/fs-avatar.jpg";

function CardInfo() {
    return (
        <div className="card-info">
            <div className="card-info-pulse">
                <div className="card-info-pic">
                    <img className="card-info-img" src={avatar} alt="Farhad Sadykov's avatar" />
                </div>
            </div>
            <h1 className="card-info-title">
                Farhad Sadykov
            </h1>
            <p className="card-info-desc">
                I'm a front-end developer, web designer and monochrome photographer from St.Petersburg.
            </p>
        </div>
    );
}

export default CardInfo;