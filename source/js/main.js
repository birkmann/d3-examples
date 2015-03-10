// import vendor/modernizr.js
// import vendor/jquery.js
// import vendor/d3.js

$(document).ready(function(){

	(function(d3) {

		'use strict';

		var dataset = [
			{ label: '1', count: 20 }, 
			{ label: '2', count: 15 },
			{ label: '3', count: 8 },
			{ label: '4', count: 33 },
			{ label: '5', count: 45 },
			{ label: '6', count: 12 },
			{ label: '7', count: 45 },
			{ label: '8', count: 40 },
			{ label: '9', count: 34 },
		];

		var width = 360;
		var height = 360;
		var radius = Math.min(width, height) / 2;

		var color = d3.scale.category20b();
		var color = d3.scale.ordinal().range(['#eee', '#ccc', '#aaa', '#999', '#666', '#444', '#222', '#111', '#000']);

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