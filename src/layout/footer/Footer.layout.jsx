import React from "react";

import LogoGreen from "assets/img/logo-green-2x.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={LogoGreen} alt="Full logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <span className="footer__link">Company</span>
                            </li>
                            <li className="footer__item">
                                <span className="footer__link">Contact us</span>
                            </li>
                            <li className="footer__item">
                                <span className="footer__link">Carrers</span>
                            </li>
                            <li className="footer__item">
                                <span className="footer__link">Privacy policy</span>
                            </li>
                            <li className="footer__item">
                                <span className="footer__link">Terms</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <span className="footer__link">Jonas Schmedtmann</span> for his online course{" "}
                        <span className="footer__link">Advanced CSS and Sass</span>. Rebuilt by{" "}
                        <span href="https://nsarg7.github.io/" className="footer__link">
                            Narek Sargsyan
                        </span>
                        Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for
                        both personal and commercial use, but NOT to claim it as your own design. A credit to
                        the original author, Jonas Schmedtmann, is of course highly appreciated!
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
