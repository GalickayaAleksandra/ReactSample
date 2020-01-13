import "./index.scss";
import * as React from "react";
interface Props { }
const Wrapper = (props: Props) => (
    <section className="wrapper">
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active-scroll">
                        <div className="wrapper-container">
                            <div className="wrapper-image">
                                <img src={require("../../img/background.png")} />
                            </div>
                            <div className="description">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="m437 0h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75zm45 437c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45v-362c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45zm0 0" />
                                    <path d="m91 422h90v-212h-90zm30-182h30v152h-30zm0 0" />
                                    <path
                                        d="m331.085938 210c-.027344 0-.058594 0-.085938 0-10.371094 0-20.472656 1.734375-30 5.101562v-5.101562h-90v212h90v-107c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v107h90v-117.3125c0-48.546875-39.382812-94.640625-89.914062-94.6875zm59.914062 182h-30v-77c0-24.8125-20.1875-45-45-45s-44.996094 20.1875-45 44.996094v77.003906h-30v-152h30v30.019531l24.007812-18.03125c10.441407-7.84375 22.886719-11.988281 35.992188-11.988281h.058594c31.929687.03125 59.941406 30.257812 59.941406 64.6875zm0 0" />
                                    <path d="m91 180h90v-90h-90zm30-60h30v30h-30zm0 0" /></svg>
                                <button className="price">$145,99</button>
                                <div className="product">
                                    <div>Pink Shoes</div>
                                    <div>2013 Collection</div>
                                </div>
                                <div className="text">
                                    <div>Nunc non fermentum nunc. Sed ut ante </div>
                                    <div>eget leo tempor consequat sit amet eu orci. </div>
                                    <div>Donec dignissim dolor eget..</div>
                                </div>
                                <div className="icon-wrapper">
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
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>
);
export default Wrapper;