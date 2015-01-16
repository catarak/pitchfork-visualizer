


$(function() {//get data
    $.getJSON("api/artists", function(data) {
      drawChart(data);
    })
});

//Width and height
var w = 960;
var h = 500;
var barPadding = 1;

function drawChart(data) {
  var y = d3.scale.linear();
  y.range([h, 0]);
  y.domain([0, 10.0]);
  var barWidth = w / data.length;
  var chart = d3.select(".bar")
              .attr("width", w)
              .attr("height", h);
  var bar = chart.selectAll("g")
                 .data(data)
                 .enter().append("g")
                 .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });
  bar.append("rect")
     .attr("y", function(d) { return y(d.score); })
     .attr("height", function(d) { return h - y(d.score); })
     .attr("width", barWidth - barWidth/2);
  
}

function drawAxes() {
  
}

//just for reference
// {
// artist: "Björk",
// album: "Bastards",
// label: " One Little Indian",
// release_year: 2012,
// reviewer: "Jayson Greene",
// score: 5.2,
// accolade: " ",
// publish_date: "2012-12-11",
// url: "http://pitchfork.com/reviews/albums/17386-bastards/"
// }
