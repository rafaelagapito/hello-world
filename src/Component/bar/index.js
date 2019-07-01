import React, { Component } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';


class ChartBar extends Component {

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
        axios.get("https://private-afe609-testefront.apiary-mock.com/anual-result").then(res => {
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
                            label: " Mounths",
                            data: data,
                            backgroundColor: [
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                                "#03A9F4",
                            ],
                        }
                    ]
                }
            });
        });
    }

    render() {

        return (
            <div>
                {Object.keys(this.state.chartData).length &&
                    <Bar
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                fontSize: 20
                            }
                        }}
                    />

                }
            </div>
        );
    }
}


export default ChartBar;