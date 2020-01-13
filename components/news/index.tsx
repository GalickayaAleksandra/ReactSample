import "./index.scss";

import * as React from "react";
interface Props {
    news: Array<{
        title: string;
        description: string;
    }>
}
const News = (props: Props) => (
    <section className="news">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-xl-4 col mb-1 col-md-4">
                    <div className="shipping">FREE SHIPPING</div>
                    <div className="inf-shipping">Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Donec erat sem, </div>
                </div>
                <div className="col-xl-4 col- mb-1 col-md-4">
                    <div className="shipping">TESTIMONIALS</div>
                    <div className="testimonials">vel, vulputate vel nibh. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Donec erat sem, vehicula id dictum sit [...]</div>
                    <div className="author">- John Doe -</div>
                </div>
                <div className="col-xl-4 col mb-1 col-md-4">
                    <div className="shipping">BLOG NEWS</div>
                    <div className="blog">
                        {props.news.map(item => (
                            <div className="blog-part1">
                                <button><span>APR</span><span>01</span></button>
                                <div className="developments">
                                    <div className="part1">{item.title}</div>
                                    <div className="part2">{item.description}</div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="blog-part1">
                            <button><span>APR</span><span>01</span></button>
                            <div className="developments">
                                <div className="part1">Nice & clean. The best for you blog!</div>
                                <div className="part2">Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh.
                                </div>
                            </div>
                        </div>
                        <div className="blog-part2">
                            <button><span>APR</span><span>01</span></button>
                            <div className="developments">
                                <div className="part1">Nice & clean. The best for you blog!</div>
                                <div className="part2">Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel nibh.
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default News;