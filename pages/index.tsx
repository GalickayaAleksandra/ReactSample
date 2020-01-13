import "../sass/main.scss";
import * as React from "react";
import Head from 'next/head';
import Wrapper from "../components/wrapper";
import TopBrend from "../components/top-brend";
import Stock from "../components/stock";
import News from "../components/news";
import * as NewsService from "../services/news.service"
interface Props {
    news: NewsService.News[]
}
export default class extends React.Component<Props> {
    static async getInitialProps() {
        const news = await NewsService.getNews();
        return {
            news
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Head>
                    <title>FOOSESHOES</title>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"></link>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin ="anonymous"></link>
                </Head>
                <body>
                    <section className="top-header">
                        <div className="container">
                            <div className="top-part">
                                <div className="logo">
                                    <a href="#">
                                        <img src={require("../img/logo.png")} />
                                    </a>
                                </div>
                                <div className="register">
                                    <div className="icon-search">
                                        <a href="#">
                                            <img src={require("../img/icon.png")} />
                                        </a>
                                    </div>
                                    <div className="icon-login">
                                        <a href="#">
                                            <img src={require("../img/icon-login.png")} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="header">
                        <div className="container">
                            <header>
                                <nav className="navbar header-container">
                                    <button id="menu" className="burger-menu"><i className="fas fa-bars"></i></button>
                                    <ul className="nav-menu">
                                        <li className="menu"><a href="#">Home</a></li>
                                        <li className="menu"><a href="#">Products</a></li>
                                        <li className="menu"><a href="#">About</a></li>
                                        <li className="menu"><a href="#">Pages</a></li>
                                        <li className="menu"><a href="#">Blog</a></li>
                                        <li className="menu"><a href="#">Contact</a></li>
                                    </ul>
                                </nav>
                                <div className="favorites">
                                    <div className="star">
                                        <a href="#" className="icon-favorites">
                                            <img src={require("../img/star.png")} />
                                        </a>
                                        <button>
                                            <div className="amount">30</div>
                                        </button>
                                    </div>
                                    <div className="basket">
                                        <a href="#" className="icon-favorites">
                                            <img src={require("../img/basket.png")} />
                                        </a>
                                        <button>
                                            <div className="amount">0</div>
                                        </button>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </section>
                    <Wrapper />
                    <TopBrend />
                    <section className="special-offers">
                        <div className="container">
                            <div className="row align-items-start">
                                <div className="col-xl-4 mb-3 col-md-4  box-container">
                                    <div className="sale">
                                        <div>ON SALE</div>
                                    </div>
                                </div>
                                <div className="col-xl-4  mb-3 col-md-4  box-container">
                                    <div className="offers">
                                        <div>SPECIAL OFFERS</div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mb-3 col-md-4  box-container">
                                    <div className="must-have">
                                        <div>MUST HAVE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Stock />
                    <section className="line"></section>
                    <News news={this.props.news} />
                    <section className="widget">
                        <div className="container">
                            <div className="row align-items-start">
                                <div className="col-xl-4 col mb-3 col-md-4">
                                    <div className="column-1">
                                        <div className="text-widget">TEXT WIDGET</div>
                                        <div className="text-widget-block">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
                                        Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis
                                        dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor
                                        ligula, eget lacinia odio sem nec elit.</div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col mb-3 col-md-4">
                                    <div className="column-2">
                                        <div className="text-widget">TWITTER WIDGET</div>
                                        <div className="text-widget-block">
                                            <div className="widget-block1">
                                                <div className="widget-block1-text"><a href="#">@ericafustero</a>Why thank you. Your work
                                                looks awesome by the way!<a href="before">@treemelody</a></div>
                                                <div className="date">19 days ago</div>
                                            </div>
                                            <div className="widget-block2">
                                                <div className="widget-block2-text"><a href="#">@roymarvelous</a>You can seek a refund through
                                                TF if it is not as advertised - but it is :)</div>
                                                <div className="date">21 days ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col mb-3 col-md-4">
                                    <div className="column-3">
                                        <div className="text-widget">FLICKR WIDGET</div>
                                        <div className="foto-card">
                                            <img src={require("../img/foto.png")} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="footer">
                        <div className="container">
                            <footer>
                                <div className="form">
                                    <input type="textarea" className="email" placeholder="Enter email for newsletter" />
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="feedback">
                                    <button><i className="fab fa-facebook-f"></i></button>
                                    <button><i className="fab fa-twitter"></i></button>
                                    <button><i className="fab fa-google-plus-g"></i></button>
                                    <button><i className="fab fa-linkedin-in"></i></button>
                                    <button><i className="fas fa-ellipsis-h"></i></button>
                                </div>
                            </footer>
                        </div>
                    </section>
                    <section className="authors">
                        <div className="container">
                            <div className="author-container">
                                <div className="left-part">
                                    <div>Copyright © Fooseshoes 2013. </div>
                                    <div>Designed by EnzoLiVolti. </div>
                                </div>
                                <div className="adress">Home / Support / Terms and Conditions / Faqs / Contact us</div>
                            </div>
                        </div>
                    </section>
                    <script src="../js/libs.min.js"></script>
                    <script src="../js/common.js"></script>
                    <script src="../js/jQuery.min.js"></script>
                    <script src="../js/bootstrap.min.js"></script>
                    <script src="../js/main.js"></script>
                </body>

            </>
        );
    }
}
