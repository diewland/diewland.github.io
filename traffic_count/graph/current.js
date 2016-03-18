// initialize max, min
var max = [ 0, null ];
var min = [ 0, null ];
function setMax(amount, time){
    var d = time ? new Date(time) : new Date();
    $('#max').html("MAX: " + amount + " at " + d.toLocaleTimeString());
    max = amount;
}
function setMin(amount, time){
    var d = time ? new Date(time) : new Date();
    $('#min').html("MIN: " + amount + " at " + d.toLocaleTimeString());
    min = amount;
}
setMin(99);
setMax(0);

$('#current').highcharts({
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                // TODO set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.floor(Math.random() * 10) + 30
                    series.addPoint([x, y], true, true);
                    // update max, min
                    if(y < min){
                        setMin(y, x);
                    }
                    else if(y > max){
                        setMax(y, x);
                    }
                }, 1000);
            }
        }
    },
    title: {
        text: 'Traffic Count from LPN Tower 1'
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
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) { // size of graph is 20
                // var amount = Math.floor(Math.random() * 10) + 30;
                var amount = 35;
                data.push({
                    x: time + i * 1000,
                    y: amount
                });
                // update max, min
                if(amount < min){
                    setMin(amount, time);
                }
                else if(amount > max){
                    setMax(amount, time);
                }
            }
            return data;
        }())
    }]
});
