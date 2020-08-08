import React from "react";

import LogoWhite from "assets/img/logo-white.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={LogoWhite} alt="Logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>

                <div href="#" className="btn btn--white btn--animated">
                    Discover our tours
                </div>
            </div>
        </header>
    );
};

export default Header;
