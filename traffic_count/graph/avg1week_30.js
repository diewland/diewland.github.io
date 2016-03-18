$('#avg1week_30').highcharts({
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
    },
    title: {
        text: 'Average 1 week ( from last 30 days )'
    },
    xAxis: {
        categories: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
    },
    yAxis: {
        title: {
            text: 'Amount'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.x + '<br />' +
                'Found ' + Highcharts.numberFormat(this.y, 0) + ' cars';
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'LPN Tower 1',
        data: (function () {
            // TODO generate an array of random data
            var data = [], i;
            for (i = 0; i <= 6; i += 1) {
                var amount = Math.floor(Math.random() * 5) + 35;
                data.push(amount);
            }
            return data;
        }())
    }]
});
