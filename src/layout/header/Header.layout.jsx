import React from "react";

import LogoWhite from "assets/img/logo-white.png";

const Header = (props) => {
    const { aboutSectionRef } = props;

    const handleClick = () => {
        aboutSectionRef.current.scrollIntoView({
            block: "center",
        });
    };
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={LogoWhite} alt="Logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">React-Reuse</span>
                    <span className="heading-primary--sub">Improve life quality</span>
                </h1>

                <div href="#" className="btn btn--white btn--animated" onClick={handleClick}>
                    Discover our mission
                </div>
            </div>
        </header>
    );
};

export default Header;
