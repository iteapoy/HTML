

/*-------------- 6 line chart chartjs start ------------*/
if ($('#seolinechart1').length) {
    var ctx = document.getElementById("seolinechart1").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
            datasets: [{
                label: "Likes",
                backgroundColor: "rgba(104, 124, 247, 0.6)",
                borderColor: '#8596fe',
                data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            }
        }
    });
}
/*-------------- 6 line chart chartjs end ------------*/

/*-------------- 7 line chart chartjs start ------------*/
if ($('#seolinechart2').length) {
    var ctx = document.getElementById("seolinechart2").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
            datasets: [{
                label: "Share",
                backgroundColor: "rgba(96, 241, 205, 0.2)",
                borderColor: '#3de5bb',
                data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            }
        }
    });
}
/*-------------- 7 line chart chartjs end ------------*/

/*-------------- 8 line chart chartjs start ------------*/
if ($('#seolinechart3').length) {
    var ctx = document.getElementById("seolinechart3").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
            datasets: [{
                label: "New user",
                backgroundColor: "rgba(240, 161, 158, 0.2)",
                borderColor: '#f0a19e',
                data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            }
        }
    });
}
/*-------------- 8 line chart chartjs end ------------*/

/*-------------- 9 line chart chartjs start ------------*/
if ($('#seolinechart4').length) {
    var ctx = document.getElementById("seolinechart4").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
            datasets: [{
                label: "New user",
                backgroundColor: "rgba(246, 221, 141, 0.2)",
                borderColor: '#f6dd8d',
                data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            }
        }
    });
}
/*-------------- 9 line chart chartjs end ------------*/

/*-------------- 10 line chart chartjs start ------------*/
if ($('#seolinechart5').length) {
    var ctx = document.getElementById("seolinechart5").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
            datasets: [{
                label: "New user",
                backgroundColor: "rgba(248, 159, 92, 0.2)",
                borderColor: '#f89f5c',
                data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            }
        }
    });
}
/*-------------- 10 line chart chartjs end ------------*/


/*-------------- 11 line chart amchart start ------------*/
if ($('#salesanalytic1').length) {
    var chartData = [{
        "time":0,
        "temp":23.3,
        "humi":60.2,
        "HCHO":5,
        "CO2":400,
        "PM25":10
    } ,
    {
        "time":1,
        "temp":23.3,
        "humi":60.2,
        "HCHO":5,
        "CO2":400,
        "PM25":10
    } ,
    {
        "time":2,
        "temp":23.3,
        "humi":71.2,
        "HCHO":5,
        "CO2":400,
        "PM25":10
    } ,
    {
        "time":0,
        "temp":23.3,
        "humi":60.2,
        "HCHO":5,
        "CO2":400,
        "PM25":10
    } ,
    {
        "time":1,
        "temp":23.3,
        "humi":60.2,
        "HCHO":5,
        "CO2":400,
        "PM25":10
    } ,
    {
        "time":2,
        "temp":23.3,
        "humi":60.2,
        "HCHO":5,
        "CO2":400,
        "PM25":10
    }];

    var chart = AmCharts.makeChart("salesanalytic1", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 1,
        "valueAxes": [{
            "id": "v1",
            "title": "温度",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return  Math.round(value) + "°C";
            }
        }, {
            "id": "v2",
            "title": "湿度",
            "gridAlpha": 0,
            "position": "right",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return  Math.round(value) + "%";
            }
        }],
        "graphs": [{
            "id": "g4",
            "valueAxis": "v1",
            "lineColor": "#815FF6",
            "fillColors": "#815FF6",
            "fillAlphas": 1,
            "type": "column",
            "title": "温度",
            "valueField": "temp",
            "clustered": false,
            "columnWidth": 0.3,
            "legendValueText": "[[value]]°C",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]°C</small>"
        }, {
            "id": "g1",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#815FF6",
            "type": "smoothedLine",
            "title": "湿度",
            "useLineColorForBulletBorder": true,
            "valueField": "humi",
            "legendValueText": "[[value]]%",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]%</small>"
        }],
        // "chartScrollbar": {
        //     "graph": "g1",
        //     "oppositeAxis": false,
        //     "offset": 50,
        //     "scrollbarHeight": 45,
        //     "backgroundAlpha": 0,
        //     "selectedBackgroundAlpha": 0.5,
        //     "selectedBackgroundColor": "#f9f9f9",
        //     "graphFillAlpha": 0.1,
        //     "graphLineAlpha": 0.4,
        //     "selectedGraphFillAlpha": 0,
        //     "selectedGraphLineAlpha": 1,
        //     "autoGridCount": true,
        //     "color": "#95a1f9"
        // },
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "time",
        "categoryAxis": {
            "parseDates": false,
            "dashLength": 1,
            "minorGridEnabled": true,
            "color": "#5C6DF4"
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": false
        },
        "dataProvider": chartData
    });

    var chart2 = AmCharts.makeChart("salesanalytic2", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 1,
        "valueAxes": [{
            "id": "v3",
            "title": "浓度",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return  Math.round(value) + "ug/m3";
            }
        }, {
            "id": "v4",
            "title": "百万分比浓度",
            "gridAlpha": 0,
            "position": "right",
            "autoGridCount": false
        }],
        "graphs": [{
            "id": "g2",
            "valueAxis": "v3",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#3de5bb",
            "type": "smoothedLine",
            "title": "PM2.5",
            "useLineColorForBulletBorder": true,
            "valueField": "PM25",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]ug/m3</small>"
        }, {
            "id": "g3",
            "valueAxis": "v4",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#ffe598",
            "type": "smoothedLine",
            "dashLength": 5,
            "title": "二氧化碳",
            "useLineColorForBulletBorder": true,
            "valueField": "CO2",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]ppm</small>"
        }, {
            "id": "g5",
            "valueAxis": "v3",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#EE8434",
            "type": "smoothedLine",
            "title": "甲醛",
            "useLineColorForBulletBorder": true,
            "valueField": "HCHO",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]ug/m3</small>"
        }],
        // "chartScrollbar": {
        //     "graph": "g1",
        //     "oppositeAxis": false,
        //     "offset": 50,
        //     "scrollbarHeight": 45,
        //     "backgroundAlpha": 0,
        //     "selectedBackgroundAlpha": 0.5,
        //     "selectedBackgroundColor": "#f9f9f9",
        //     "graphFillAlpha": 0.1,
        //     "graphLineAlpha": 0.4,
        //     "selectedGraphFillAlpha": 0,
        //     "selectedGraphLineAlpha": 1,
        //     "autoGridCount": true,
        //     "color": "#95a1f9"
        // },
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "time",
        "categoryAxis": {
            "parseDates": false,
            "dashLength": 1,
            "minorGridEnabled": true,
            "color": "#5C6DF4"
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": false
        },
        "dataProvider": chartData
    });
    
    function refresh(){
        $.getJSON("data.json", function (data) {
            data=data['data'];
            var last = data[data.length-1];
            // console.log(last);
            $('#val_temp').html(last['temp']+" °C");
            $('#val_humi').html(last['humi']+" %");
            $('#val_HCHO').html(last['HCHO']+" ug/m3");
            $('#val_CO2').html(last['CO2']+" ppm");
            $('#val_PM25').html(last['PM25']+" ug/m3");
            // console.log(data);
            chart.dataProvider = data;
            chart.validateNow();
            chart.validateData();
            chart2.dataProvider = data;
            chart2.validateNow();
            chart2.validateData();
        })
    }

	refresh();
	
    window.setInterval("refresh()",60000);

    $('#refresh').click(function () {
        refresh();
    })
}

/*-------------- 11 line chart amchart end ------------*/
