import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

    const handleDropDown = () => {
        const list = document.getElementsByClassName("dropdown-list");
        const dropdown = list[0];
        dropdown.classList.toggle("active");
    }

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('Sign in')}>Sign in</button>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <div id="header-shop-group">
                <div id="header-shop-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" width="22" height="32" aria-hidden="true" focusable="false">
                        <path d="M21.4958951,12.3901667 L21.4958951,21.4958951 C21.4958951,21.8659618 21.3606805,22.1862069 21.0902472,22.4566402 C20.8198139,22.7270735 20.4995687,22.8622881 20.1295021,22.8622881 L3.73278602,22.8622881 C3.36271939,22.8622881 3.04247423,22.7270735 2.77204093,22.4566402 C2.50160763,22.1862069 2.36639301,21.8659618 2.36639301,21.4958951 L2.36639301,12.3901667 L5.09917903,12.3901667 L5.09917903,16.0303231 L18.7631091,16.0303231 L18.7631091,12.3901667 L21.4958951,12.3901667 Z M22.8622881,7.83196504 C22.8622881,8.58633162 22.5954172,9.23038022 22.0616672,9.76413016 C21.5279173,10.2978801 20.8838687,10.5647511 20.1295021,10.5647511 C19.3751355,10.5647511 18.7310869,10.2978801 18.197337,9.76413016 C17.6635871,9.23038022 17.3967161,8.58633162 17.3967161,7.83196504 C17.3967161,8.58633162 17.1298451,9.23038022 16.5960952,9.76413016 C16.0623453,10.2978801 15.4182967,10.5647511 14.6639301,10.5647511 C13.9095635,10.5647511 13.2655149,10.2978801 12.731765,9.76413016 C12.198015,9.23038022 11.9311441,8.58633162 11.9311441,7.83196504 C11.9311441,8.58633162 11.6642731,9.23038022 11.1305232,9.76413016 C10.5967732,10.2978801 9.95272463,10.5647511 9.19835805,10.5647511 C8.44399147,10.5647511 7.79994287,10.2978801 7.26619294,9.76413016 C6.732443,9.23038022 6.46557203,8.58633162 6.46557203,7.83196504 C6.46557203,8.58633162 6.19870107,9.23038022 5.66495113,9.76413016 C5.13120119,10.2978801 4.4871526,10.5647511 3.73278602,10.5647511 C2.97841944,10.5647511 2.33437084,10.2978801 1.8006209,9.76413016 C1.26687097,9.23038022 1,8.58633162 1,7.83196504 C1,7.3409151 1.1209815,6.88545532 1.36294814,6.46557203 L3.90358514,1.71522134 C4.02456846,1.4946047 4.1918076,1.320249 4.40530758,1.19214902 C4.61880755,1.06404903 4.85009572,1 5.09917903,1 L18.7631091,1 C19.0121924,1 19.2434806,1.06404903 19.4569806,1.19214902 C19.6704805,1.320249 19.8377197,1.4946047 19.958703,1.71522134 L22.49934,6.46557203 C22.7413066,6.88545532 22.8622881,7.3409151 22.8622881,7.83196504 Z"></path>
                    </svg>
                </div>
                <span id="header-shop-text">
                    <span >
                        Shop Manager
                    </span>
                </span>
            </div>
            <ul onClick={handleDropDown} id="header-user-group">
                <li id="header-user-img-list-item">
                    <img id="header-user-img" src="https://www.etsy.com/images/avatars/default_avatar_75x75.png" alt=""></img>
                </li>
                <li>
                    <div className="header-user-you-group">
                        <span id="header-user-text">You</span>
                        <div className="arrow-down"></div>
                    </div>
                </li>
                <ul className="dropdown-list">
                    <li>
                        <a href="#">
                            <h2 className="header-name">{currentUser.first_name}</h2>
                        </a>
                    </li>
                    <li onClick={logout}>
                        <a href="#">
                            <button className="header-button" id="logout-button">Sign out</button>
                        </a>
                    </li>
                </ul>
            </ul>
            
        </hgroup>
    );
    
    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;
