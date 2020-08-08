import React from "react";

import nat1Large from "assets/img/nat-1-large.jpg";
import nat2Large from "assets/img/nat-2-large.jpg";
import nat3Large from "assets/img/nat-3-large.jpg";

const AboutSection = () => {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        You're going to fall in love with nature
                    </h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias consequuntur
                        accusantium cupiditate. Ut, sed. Nisi accusamus numquam fuga, ullam provident ut
                        eligendi voluptatem, iste iusto velit, nulla natus repellendus illum!
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Live adventurous that you never had before
                    </h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias consequuntur
                        accusantium cupiditate. Ut, sed. Nisi accusamus numquam fuga, ullam provident ut
                        eligendi voluptatem, iste iusto velit, nulla natus repellendus illum!
                    </p>

                    <button className="btn-text">Learn more &rarr; </button>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={nat1Large} alt="nat-1" className="composition__photo composition__photo--p1" />
                        <img src={nat2Large} alt="nat-2" className="composition__photo composition__photo--p2" />
                        <img src={nat3Large} alt="nat-3" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
