import React from "react";

function ListItem({ name, desc, icon, link }) {
    const iconStyle = {
        backgroundImage: `url(${icon})`
    };

    return (
        <li className="card-item">
            <a className="card-item-link" href={link} target="_blank" rel="noopener noreferrer">
                <div className="card-item-icon" style={iconStyle}>
                </div>
                <div className="card-item-info">
                    <h2 className="card-item-title">
                        {name}
                    </h2>
                    <p className="card-item-desc">
                        {desc}
                    </p>
                </div>
            </a>
        </li>
    );
}

export default ListItem;