$('#hour12').highcharts({
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
    },
    title: {
        text: 'Last 12 Hours'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
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
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
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
            var d = new Date();
            var data = [],
                time = (new Date(d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()+' '+d.getHours()+':00:00')).getTime(),
                i;

            for (i = -11; i <= 0; i += 1) {
                var amount = Math.floor(Math.random() * 5) + 35;
                data.push({
                    x: time + i * 60 * 60 * 1000,
                    y: amount
                });
            }
            return data;
        }())
    }]
});
