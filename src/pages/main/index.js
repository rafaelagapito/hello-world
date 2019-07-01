import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import mdbostrap from 'axios';
import ChartPie from "../../Component/pie";
import ChartBar from "../../Component/bar";
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="elements col-lg-12">
                            <h1>Page One</h1>
                        </div>
                        <div className="elements col-lg-6">
                            <div className="card">
                                <ChartBar />
                            </div>
                        </div>
                        <div className="elements col-lg-6">
                            <div className="card">
                                <ChartPie />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Main;