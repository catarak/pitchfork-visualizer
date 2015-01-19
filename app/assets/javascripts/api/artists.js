


$(function() {//get data
    $.getJSON("api/artists", function(data) {
      drawChart(data);
    })
});

//Width and height
var w = 1000;
var h = 500;
var padding = 25;
var barPadding = 1;

function drawChart(data) {
  var y = d3.scale.linear();
  y.range([h - padding, padding]);
  y.domain([0, 10.0]);
  var barWidth = (w - padding*2)/ data.length;
  var chart = d3.select(".bar")
              .attr("width", w)
              .attr("height", h);
  var bar = chart.selectAll("g")
                 .data(data)
                 .enter().append("g")
                 .attr("transform", function(d, i) { return "translate(" + (padding + (i * barWidth)) + ",0)"; });
  bar.append("rect")
     .attr("y", function(d) { return y(d.score); })
     .attr("height", function(d) { return h - padding - y(d.score); })
     .attr("width", barWidth - barWidth/2);

  bar.append("text")
      .attr("x", barWidth / 4)
      .attr("y", function(d) { return y(d.score) + 3; })
      .attr("dy", ".75em")
      .text(function(d) { return d.score; });

  bar.append("text")
      .attr("class", "label")
      .attr("x", barWidth / 4)
      .attr("y", function(d) { return h - padding + 3; })
      .attr("dy", ".75em")
      .text(function(d) { return d.release_year; });
  bar.append("text")
      .attr("class", "label")
      .attr("x", barWidth / 4)
      .attr("y", function(d) { return h - padding + 13; })
      .attr("dy", ".75em")
      .text(function(d) { return d.album; });

  //draw axis
  var yAxis = d3.svg.axis();
  yAxis.scale(y);
  yAxis.orient("left");
  chart.append("g")
       .attr("class", "axis")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis);
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
