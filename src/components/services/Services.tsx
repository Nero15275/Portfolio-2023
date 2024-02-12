import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Figma Intermidiate
                            </p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Mobile App Design
                            </p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Web App Design
                            </p>
                        </li>


                    </ul>

                </article>
                {/* End of ui/ux */}
                <article className="service">
                    <div className="service__head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                convert Design to HTML & CSS
                            </p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Add functionality to the frontend using Javascript/Typescript
                            </p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Add services for Api-call
                            </p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Well Structured Clean Code
                            </p>
                        </li>

                    </ul>

                </article>
                {/* end of forntend Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Backend Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Create REST-APIs using node-express
                            </p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Create services Routes Handelers for Well Structured Clean Code
                            </p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Create protected Routes password encription middlewares
                            </p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icons" />
                            <p>
                                Use Nosql databases like mongodb
                            </p>
                        </li>

                    </ul>

                </article>
                {/* end of Backend Development */}
            </div>
        </section>
    );
};

export default Services;
