import * as d3 from "d3";
import React, { Component } from "react";

export default class TotalEnrollment extends Component {
    componentDidMount(){
        this.drawChart();
    }


    drawChart(){

       
    const data = d3.csv("totalEnrollment.csv");
    const width = 920;
    const height = 500;
    const marginTop = 20;
    const marginRight = 100;
    const marginBottom = 40;
    const marginLeft = 60;
  
  
     // Create the SVG container.
  const svg = d3.create("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height])
  .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

var nestdata = d3.nest() // nest function allows to group the calculation per level of a factor
.key(function(d) { return d.type;})
.entries(data);

// Add X axis --> it is a date format
var x = d3.scaleLinear()
.domain(d3.extent(data, function(d) { return d["year "]; }))
.range([marginLeft, width - marginRight]);

svg.append("g")
.attr("transform", `translate(0, ${height - marginBottom})`)
//.call(d3.axisBottom(x).ticks(5));
.call(d3.axisBottom(x).ticks(width/80).tickSizeOuter(0).tickFormat(d3.format("d")));

// Add Y axis
var y = d3.scaleLinear()
.domain([0, d3.max(data, function(d) { return +d.total_enrollment; })])
.range([height - marginBottom, marginTop]);


svg.append("g")
.attr("transform", `translate(${marginLeft},0)`)
  .call(d3.axisLeft(y).ticks(height/60))
  .call(g => g.select(".domain").remove())
  .call(g => g.selectAll(".tick line").clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1))
   .call(g => g.append("text")
       .attr("x", -marginLeft)
       .attr("y", 20)
       .attr("fill", "currentColor")
       .attr("text-anchor", "start")
       .text("↑ Total Enrollment"));

// color palette
var color = d3.scaleOrdinal()
.range(['#e41a1c','#377eb8']);

// var legend = d3-svg-legend.legendColor()
// .scale(color)
// .shapePadding(30)
// .shape("circle")
// .labelOffset(20);

// Draw the line
svg.selectAll(".line")
  .data(nestdata)
  .enter()
  .append("path")
    .attr("fill", "none")
    .attr("stroke", function(d){ return color(d.key) })
    .attr("stroke-width", 1.5)
    .attr("d", function(d){
      return d3.line()
        .x(function(d) { return x(d["year "]); })
        .y(function(d) { return y(d.total_enrollment); })
        (d.values)
    })

// svg.append("g")
//  .attr("class", "legend")
//  .attr("transform", "translate(840,100)")
// svg.select(".legend")
// .call(legend);

return svg.node();
}

render(){
    return( 
    <svg> TotalEnrollment </svg>
    );
}
}




  