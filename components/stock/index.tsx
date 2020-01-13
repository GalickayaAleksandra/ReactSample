import "./index.scss";
import * as React from "react";
interface Props { }
const Stock = (props: Props) => (
    <section className="stock">
        <div className="container">
            <div className="stock-container">
                <div className="inf-product">New arrivals on FooseShoes</div>
                <button>Show All</button>
            </div>
            <div className="row align-self-center">
                <div className="col-xl-4 col- mb-5 col-md-6 col-lg-4  box-container">
                    <div className="part-1">
                        <div className="img"><img src={require("../../img/card-1.png")} /></div>
                        <button className="stock-button">$145,99</button>
                        <div className="name-block">
                            <div className="name1">
                                <button>
                                    <img src={require("../../img/icon-1.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/star.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-3.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-4.png")} />
                                </button>
                            </div>
                            <span>Even&Odd</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col mb-5 col-md-6 col-lg-4  box-container">
                    <div className="part-2">
                        <div className="img"><img src={require("../../img/card-1.png")} /></div>
                        <button className="stock-button">$145,99</button>
                        <button className="stock-button-top">ON SALE!</button>
                        <div className="name-block">
                            <div className="name1">
                                <button>
                                    <img src={require("../../img/icon-1.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/star.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-3.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-4.png")} />
                                </button>
                            </div>
                            <span>Even&Odd</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col mb-5 col-md-6 col-lg-4  box-container">
                    <div className="part-3">
                        <div className="img"><img src={require("../../img/card-1.png")} /></div>
                        <button className="stock-button">$145,99</button>
                        <div className="name-block">
                            <div className="name1">
                                <button>
                                    <img src={require("../../img/icon-1.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/star.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-3.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-4.png")} />
                                </button>
                            </div>
                            <span>Even&Odd</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stock-container">
                <div className="inf-product">Best sellers of the month</div>
                <button>Show All</button>
            </div>
            <div className="row align-self-center ">
                <div className="col-xl-4 col mb-5 col-md-6 col-lg-4  box-container">
                    <div className="part-4">
                        <div className="img"><img src={require("../../img/card-1.png")} /></div>
                        <button className="stock-button">$145,99</button>
                        <div className="name-block">
                            <div className="name1">
                                <button>
                                    <img src={require("../../img/icon-1.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/star.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-3.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-4.png")} />
                                </button>
                            </div>
                            <span>Even&Odd</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col mb-5 col-md-6 col-lg-4  box-container">
                    <div className="part-5">
                        <div className="img"><img src={require("../../img/card-1.png")} /></div>
                        <button className="stock-button">$145,99</button>
                        <div className="name-block">
                            <div className="name1">
                                <button>
                                    <img src={require("../../img/icon-1.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/star.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-3.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-4.png")} />
                                </button>
                            </div>
                            <span>Even&Odd</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col mb-5 col-md-6 col-lg-4  box-container">
                    <div className="part-6">
                        <div className="img"><img src={require("../../img/card-1.png")} /></div>
                        <button className="stock-button">$145,99</button>
                        <button className="stock-button-top1">Out OF STOCK</button>
                        <div className="name-block">
                            <div className="name1">
                                <button>
                                    <img src={require("../../img/icon-1.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/star.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-3.png")} />
                                </button>
                                <button>
                                    <img src={require("../../img/icon-4.png")} />
                                </button>
                            </div>
                            <span>Even&Odd</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


export default Stock;