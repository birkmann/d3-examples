// import vendor/modernizr.js
// import vendor/jquery.js
// import vendor/d3.js

$(document).ready(function(){

	(function(d3) {

		'use strict';

		var dataset = [
			{ label: '1', count: 10 }, 
			{ label: '2', count: 20 },
			{ label: '3', count: 30 },
			{ label: '4', count: 40 },
			{ label: '5', count: 50 },
			{ label: '6', count: 60 },
			{ label: '7', count: 70 },
			{ label: '8', count: 80 },
			{ label: '9', count: 90 },
		];

		var width = 360;
		var height = 360;
		var radius = Math.min(width, height) / 2;

		var color = d3.scale.category20b();
		var color = d3.scale.ordinal().range(['#113F8C', '#01A4A4', '#00A1CB', '#61AE24', '#D0D102', '#32742C', '#D70060', '#E54028', '#F18D05']);

		var svg = d3.select('#chart')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', 'translate(' + (width / 2) + 
				',' + (height / 2) + ')');

		var arc = d3.svg.arc()
			.outerRadius(radius);

		var pie = d3.layout.pie()
			.value(function(d) { return d.count; })
			.sort(null);

		var path = svg.selectAll('path')
			.data(pie(dataset))
			.enter()
			.append('path')
			.attr('d', arc)
			.attr('fill', function(d, i) { 
				return color(d.data.label);
			});

		})(window.d3);

});