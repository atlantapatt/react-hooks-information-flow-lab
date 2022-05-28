import React from "react";

function Header(props) {
    return (
        <div>
            <header>
                <button onClick={props.onDarkModeClick}>
                {props.isDarkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header