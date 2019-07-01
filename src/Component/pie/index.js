import React, { Component } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';


class ChartPie extends Component {

    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentDidMount() {
        this.getChartData();
    }

    getChartData() {
        axios.get("https://private-afe609-testefront.apiary-mock.com/anual-percentage").then(res => {
            const coin = res.data;
            let labels = [];
            let data = [];
            coin.forEach(element => {
                labels.push(element.label);
                data.push(element.value);
            });

            this.setState({
                chartData: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Population",
                            data: data,
                            backgroundColor: [
                                "#ABE1FA",
                                "#2C82BE",
                                "#32B88B",

                            ],
                        }
                    ]
                }
            });
        });
    }

    render() {

        return (
            <div className="">
                {Object.keys(this.state.chartData).length &&
                    <Pie
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle
                            }
                        }}
                    />
                }
            </div>
        );
    }
}

export default ChartPie;