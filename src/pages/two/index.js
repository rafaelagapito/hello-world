import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import mdbostrap from 'axios';
import ChartLine from "../../Component/line";
import 'bootstrap/dist/css/bootstrap.min.css';

class Two extends Component {
    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="elements col-lg-12">
                            <h1>Page Two</h1>
                        </div>
                        <div className="elements col-lg-12">
                            <div className="card">
                                <ChartLine/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}



export default Two;