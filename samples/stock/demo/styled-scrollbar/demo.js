$(function() {
	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {
		
		// Create the chart
		window.chart = new Highcharts.StockChart({
		    chart: {
		        renderTo: 'container'
		    },

		    rangeSelector: {
		        selected: 1
		    },

		    title: {
		        text: 'AAPL Stock Price'
		    },

		    scrollbar: {
				barBackgroundColor: 'gray',
				barBorderRadius: 7,
				barBorderWidth: 0,
				buttonBackgroundColor: 'gray',
				buttonBorderWidth: 0,
				buttonBorderRadius: 7,
				trackBackgroundColor: 'none',
				trackBorderWidth: 1,
				trackBorderRadius: 8,
				trackBorderColor: '#CCC'
		    },

		    series: [{
		        name: 'AAPL Stock Price',
		        data: data,
		        tooltip: {
		        	yDecimals: 2
		        }
		    }]
		});
	});
});