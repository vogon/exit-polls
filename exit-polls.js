/*
 * I have stolen
 * the colors
 * that were in
 * your blog post
 *
 * and which
 * you were probably
 * saving
 * for products
 *
 * Forgive me
 * they were pretty
 * so accessible
 * and so coordinated
 *
 * https://www.tableau.com/about/blog/2016/7/colors-upgrade-tableau-10-56782
 */
var palette = [ "#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14e",
	"#edc949", "#b07aa2", "#ff9da7", "#9c755f", "#bab0ac" ];

/*
 * data from the Bureau of Labor Statistics:
 * https://data.bls.gov/cgi-bin/cpicalc.pl
 */
var deflator1976 = 4.28124780;
var deflator1980 = 2.95634709;
var deflator1984 = 2.34459095;
var deflator1988 = 2.05919696;
var deflator1992 = 1.73630078;
var deflator1996 = 1.55260038;
var deflator2000 = 1.41465157;
var deflator2004 = 1.28958708;
var deflator2008 = 1.13144266;
var deflator2012 = 1.06101640;
var deflator2016 = 1.01498290;

/*
 * data from the Roper Center at Cornell:
 * https://ropercenter.cornell.edu/polls/us-elections/how-groups-voted/how-groups-voted-2008/
 * https://ropercenter.cornell.edu/polls/us-elections/how-groups-voted/how-groups-voted-2012/
 * https://ropercenter.cornell.edu/groups-voted-2016/
 */

var clinton2016 = [
	{ nominalLow: 0, pctileLow: 0, dem: 0.53, gop: 0.41 },
	{ nominalLow: 50000, pctileLow: 0.36, dem: 0.46, gop: 0.49 },
	{ nominalLow: 100000, pctileLow: 0.66, dem: 0.47, gop: 0.47 },
	{ pctileLow: 1, dem: 0.47, gop: 0.47 }
];

var obama2012 = [
	{ nominalLow: 0, pctileLow: 0, dem: 0.60, gop: 0.37 },
	{ nominalLow: 50000, pctileLow: 0.41, dem: 0.46, gop: 0.52 },
	{ nominalLow: 100000, pctileLow: 0.72, dem: 0.44, gop: 0.54 },
	{ pctileLow: 1, dem: 0.44, gop: 0.54 }
];

var obama2008 = [
	{ nominalLow: 0, pctileLow: 0, dem: 0.73, gop: 0.25 },
	{ nominalLow: 15000, pctileLow: 0.06, dem: 0.60, gop: 0.37 },
	{ nominalLow: 30000, pctileLow: 0.18, dem: 0.55, gop: 0.43 },
	{ nominalLow: 50000, pctileLow: 0.37, dem: 0.48, gop: 0.49 },
	{ nominalLow: 75000, pctileLow: 0.58, dem: 0.51, gop: 0.48 },
	{ nominalLow: 100000, pctileLow: 0.73, dem: 0.49, gop: 0.49 },
	{ pctileLow: 0.99, dem: 0.49, gop: 0.49 }
];

var kerry2004 = [
	{ nominalLow: 0, pctileLow: 0,
		dem: 0.63, gop: 0.36, ind1: 0.00, ind2: 0.00 },
	{ nominalLow: 15000, pctileLow: 0.08,
		dem: 0.57, gop: 0.42, ind1: 0.00, ind2: 0.01 },
	{ nominalLow: 30000, pctileLow: 0.23,
		dem: 0.50, gop: 0.49, ind1: 0.00, ind2: 0.00 },
	{ nominalLow: 50000, pctileLow: 0.45,
		dem: 0.43, gop: 0.56, ind1: 0.00, ind2: 0.01 },
	{ nominalLow: 75000, pctileLow: 0.68,
		dem: 0.45, gop: 0.55, ind1: 0.00, ind2: 0.01 },
	{ nominalLow: 100000, pctileLow: 0.82,
		dem: 0.41, gop: 0.58, ind1: 0.01, ind2: 0.00 },
	{ pctileLow: 1, dem: 0.41, gop: 0.58 }
];

var gore2000 = [
	{ nominalLow: 0, pctileLow: 0,
		dem: 0.58, gop: 0.38, ind1: 0.01, ind2: 0.04 },
	{ nominalLow: 15000, pctileLow: 0.07,
		dem: 0.54, gop: 0.42, ind1: 0.01, ind2: 0.03 },
	{ nominalLow: 30000, pctileLow: 0.23,
		dem: 0.49, gop: 0.48, ind1: 0.01, ind2: 0.02 },
	{ nominalLow: 50000, pctileLow: 0.47,
		dem: 0.46, gop: 0.51, ind1: 0.01, ind2: 0.02 },
	{ nominalLow: 75000, pctileLow: 0.72,
		dem: 0.46, gop: 0.52, ind1: 0.00, ind2: 0.02 },
	{ nominalLow: 10000, pctileLow: 0.85,
		dem: 0.43, gop: 0.55, ind1: 0.00, ind2: 0.03 },
	{ pctileLow: 1, dem: 0.43, gop: 0.55 }
];

var clinton1996 = [
	{ nominalLow: 0, pctileLow: 0, dem: 0.60, gop: 0.29, ind: 0.11 },
	{ nominalLow: 15000, pctileLow: 0.11, 
		dem: 0.54, gop: 0.37, ind: 0.09 },
	{ nominalLow: 30000, pctileLow: 0.34,
		dem: 0.49, gop: 0.41, ind: 0.10 },
	{ nominalLow: 50000, pctileLow: 0.61,
		dem: 0.47, gop: 0.46, ind: 0.07 },
	{ nominalLow: 75000, pctileLow: 0.82,
		dem: 0.45, gop: 0.49, ind: 0.07 },
	{ nominalLow: 100000, pctileLow: 0.91,
		dem: 0.39, gop: 0.55, ind: 0.06 },
	{ pctileLow: 1, dem: 0.39, gop: 0.55 }
];

var clinton1992 = [
	{ nominalLow: 0, pctileLow: 0, dem: 0.58, gop: 0.23, ind: 0.19 },
	{ nominalLow: 15000, pctileLow: 0.14, 
		dem: 0.45, gop: 0.35, ind: 0.20 },
	{ nominalLow: 30000, pctileLow: 0.38,
		dem: 0.41, gop: 0.38, ind: 0.21 },
	{ nominalLow: 50000, pctileLow: 0.68,
		dem: 0.40, gop: 0.41, ind: 0.18 },
	{ nominalLow: 75000, pctileLow: 0.88,
		dem: 0.36, gop: 0.48, ind: 0.16 },
	{ pctileLow: 1, dem: 0.36, gop: 0.48 }
];

var datasets = [
	{ id: "clinton2016", friendly: "Clinton 2016", data: clinton2016 },
	{ id: "obama2012", friendly: "Obama 2012", data: obama2012 },
	{ id: "obama2008", friendly: "Obama 2008", data: obama2008 },
	{ id: "kerry2004", friendly: "Kerry 2004", data: kerry2004 },
	{ id: "gore2000", friendly: "Gore 2000", data: gore2000 },
	{ id: "clinton1996", friendly: "Clinton 1996", data: clinton1996 },
	{ id: "clinton1992", friendly: "Clinton 1992", data: clinton1992 }
];

var width = 800, height = 600;
var xBorder = 40, yBorder = 40;

var xScale = d3.scaleLinear()
	.domain([0, 1])
	.range([0, width - 2 * xBorder]);
var yScale = d3.scaleLinear()
	.domain([0.8, 0])
	.range([0, height - 2 * yBorder]);

var xAxis = d3.axisBottom(xScale)
	.tickFormat(d3.format(".0%"));

var yAxis = d3.axisLeft(yScale)
	.tickFormat(d3.format(".0%"));

var svg = d3.select("#graph").append("svg")
	.attr("width", width)
	.attr("height", height);
	
svg.append("g")
	.attr("transform", "translate(" + xBorder + ", " + (height - yBorder) 
		+ ")")
	.call(xAxis);

svg.append("g")
	.attr("transform", "translate(" + xBorder + ", " + yBorder + ")")
	.call(yAxis);

function drawDataset(dataset, dataset_id, color) {
	var line = d3.line()
		.x(function (datum) { return xScale(datum.pctileLow); })
		.y(function (datum) { 
			return yScale(datum.dem / (datum.dem + datum.gop));
		})
		.curve(d3.curveStepAfter);

	svg.append("g")
		.classed(dataset_id, true)
		.attr("fill", "none")
		.attr("stroke-width", 3)
		.attr("transform", "translate(" + xBorder + ", " + yBorder + ")")
		.append("path")
		.datum(dataset)
		.attr("stroke", color)
		.attr("d", line);
}

var palettedDatasets = [];

function showDataset(id) {
	console.log("show! " + id);
	var colorIdx = undefined;

	for (var i = 0; i < 10; i++) {
		if (palettedDatasets[i] === undefined) {
			colorIdx = i;
			palettedDatasets[colorIdx] = id;
			break;
		}
	}

	if (colorIdx === undefined) {
		console.warn("couldn't find a color for " + id);
		return;
	}

	datasets.forEach(function (dataset) {
		if (dataset.id == id) {
			drawDataset(dataset.data, id, palette[colorIdx]);
		}
	});

	$("#dataset-chooser").find("label[for=\"" + id + "\"] .label-line")
		.attr("stroke", palette[colorIdx]);
}

function hideDataset(id) {
	console.log("hide! " + id);

	for (var i = 0; i < palettedDatasets.length; i++) {
		if (palettedDatasets[i] == id) {
			delete palettedDatasets[i];
		}
	}

	$("#graph g." + id).remove();

	$("#dataset-chooser").find("label[for=\"" + id + "\"] .label-line")
		.attr("stroke", "transparent");
}

$(function() {
	var datasetChooserTemplate = $("#dataset-chooser-tmpl").html();
	Mustache.parse(datasetChooserTemplate);

	$("#graph").append(Mustache.render(datasetChooserTemplate,
		{ datasets: datasets }));

	$("#dataset-chooser").find("input[type=\"checkbox\"]")
		.each(function (unused, element) {
			$(element).change(function (e) {
				if (e.target.checked) {
					showDataset(e.target.id);
				} else {
					hideDataset(e.target.id);
				}
			});
		});
});