// Data of the line chart
var series = [
    {data: [18147,19838,20566,21590,21725,22332,25097,28758,
        31992,34618,37009,39779,41583,45636
        ]}
    
 ];

 // Configuration about the plot
 var title = {
    text: 'Year vs Fulltime men applied '   
 };
 var subtitle = {
    text: ''
 };
 var xAxis = {
    title: {
        text: 'Year'
     },
    categories: ['2005', '2006', '2007', '2008', '2009', '2010'
       ,'2011', '2012', '2013', '2014', '2015', '2016','2017', '2018']
 };
 var yAxis = {
    title: {
       text: 'Fulltime Men Applied'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
 };  
 var tooltip = {
    valueSuffix: ''    // /xB0C is basically degrees
 }
 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.chart = {type:"pie"}
json.title = title;
json.subtitle = subtitle;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);