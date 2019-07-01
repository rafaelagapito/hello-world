import React, { Component } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';


class ChartLine extends Component {

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
        axios.get("https://private-afe609-testefront.apiary-mock.com/time-data").then(res => {
            const coin = res.data.today;
            let labels = [];
            let data = [];
            coin.forEach(element => {
                labels.push(element.label);
                data.push(element.value);
            });

            const coin2 = res.data.yesterday;
            let labels2 = [];
            let data2 = [];
            coin2.forEach(element => {
                labels2.push(element.label);
                data2.push(element.value);
            });

            this.setState({
                chartData: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Today",
                            data: data,
                            backgroundColor: [
                                "#303F9F",
                                "#303F9F",
                                "#303F9F",
                                "#303F9F",
                                "#303F9F",
                                "#303F9F",
                                "#303F9F",
                            ],
                        },
                        {
                            label: "yesterday",
                            data: data2,
                            backgroundColor: [
                                "#BF3FFF",
                                "#BF3FFF",
                                "#BF3FFF",
                                "#BF3FFF",
                                "#BF3FFF",
                                "#BF3FFF",
                                "#BF3FFF",
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
                    <Line
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

export default ChartLine;