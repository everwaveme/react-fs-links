import React from "react";

function CardInfo() {
    return (
        <div className="card-info">
            <div className="card-info-pulse">
                <div className="card-info-pic">
                    <img className="card-info-img" src="fs-avatar.jpg" alt="Farhad Sadykov's avatar" />
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