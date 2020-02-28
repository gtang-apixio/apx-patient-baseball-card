import React from "react";
import "./Graph.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Graph extends React.Component {
  render() {
    const options = {
      chart: {
        // backgroundColor: "paleturquoise"
        backgroundColor: "white"
      },
      title: {
        text: `${this.props.name} Over Time`
      },
      yAxis: {
        title: {
          text: this.props.name
        }
      },
      xAxis: {
        title: {
          text: "Dates"
        },
        categories: this.props.dates
      },
      series: [
        {
          name: this.props.name,
          data: this.props.data
        }
      ]
    };

    const checkData =
      this.props.data !== "N/A" ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <div className="na-text">Not Enough Data!</div>
      );

    return <div className="line-graph">{checkData}</div>;
  }
}

export default Graph;
