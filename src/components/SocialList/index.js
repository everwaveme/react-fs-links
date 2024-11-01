import React from "react";

function SocialList({ name, desc, icon, link }) {
    const iconStyle = {
        backgroundImage: `url(${icon})`
    };

    return (
        <li className="card-social-item">
            <a className="card-social-link" href={link} target="_blank" rel="noopener noreferrer">
                <div className="card-social-icon" style={iconStyle}>
                </div>
                <div className="card-social-info">
                    <h2 className="card-social-title">
                        {name}
                    </h2>
                    <p className="card-social-desc">
                        {desc}
                    </p>
                </div>
            </a>
        </li>
    );
}

export default SocialList;