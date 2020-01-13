import "./index.scss";
import * as React from "react";
interface Props { }
const TopBrend = (props: Props) => (
    <section className="top-brend">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl col-md-4   col-lg-2 ">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className="brend">Pink Shoes</div>
                            <div className="info">Now af $145,99</div>
                        </li>
                    </ul>
                </div>
                <div className="col-xl col-md-4  col-lg-2">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className="brend">Anna Field</div>
                            <div className="info">Limited Edition</div>
                        </li>
                    </ul>
                </div>
                <div className="col-xl col-md-4  col-lg-2">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className="brend">Prada</div>
                            <div className="info">Summer is coming</div>
                        </li>
                    </ul>
                </div>
                <div className="col-xl col-md-4  col-lg-2">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className="brend">Casadei</div>
                            <div className="info">All Colors avaiable</div>
                        </li>
                    </ul>
                </div>
                <div className="col-xl col-md-4  col-lg-2">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className="brend">Casadei</div>
                            <div className="info">All Colors avaiable</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
export default TopBrend;
