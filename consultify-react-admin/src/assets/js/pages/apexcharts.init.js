    var options = {
        chart: {
            height: 380,
            type: "line",
            zoom: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        colors: ["#ff6b00", "#34c38f"],
        dataLabels: {
            enabled: !1
        },
        stroke: {
            width: [3, 3],
            curve: "straight"
        },
        series: [{
            name: "High - 2018",
            data: [26, 24, 32, 36, 33, 31, 33]
        }, {
            name: "Low - 2018",
            data: [14, 11, 16, 12, 17, 13, 12]
        }],
        title: {
            text: "Average High & Low Temperature",
            align: "left",
            style: {
                fontWeight: "500"
            }
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"],
                opacity: .2
            },
            borderColor: "#f1f1f1"
        },
        markers: {
            style: "inverted",
            size: 6
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            title: {
                text: "Month"
            }
        },
        yaxis: {
            title: {
                text: "Temperature"
            },
            min: 5,
            max: 40
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            floating: !0,
            offsetY: -25,
            offsetX: -5
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: !1
                    }
                },
                legend: {
                    show: !1
                }
            }
        }]
    },
    chart = new ApexCharts(document.querySelector("#line_chart_datalabel"), options);
    chart.render();
    

    options = {
    chart: {
        height: 215,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "45%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    series: [{
        name: "Total Sold",
        data: [46, 57, 59, 54, 62, 58, 64]
    }],
    colors: ["#2B3674"],
    xaxis: {
        categories: ["01", "02", "03", "04", "05", "06", "07"]
    },
   
    grid: {
        borderColor: "#f1f1f1"
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function(e) {
                return "$ " + e + " thousands"
            }
        }
    }
    };
    (chart = new ApexCharts(document.querySelector("#column_chart"), options)).render();

    options = {
    chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: "top"
            }
        }
    },
    dataLabels: {
        enabled: !0,
        formatter: function(e) {
            return e + "%"
        },
        offsetY: -22,
        style: {
            fontSize: "12px",
            colors: ["#304758"]
        }
    },
    series: [{
        name: "Inflation",
        data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, .8]
    }],
    colors: ["#ff6b00"],
    grid: {
        borderColor: "#f1f1f1"
    },
    xaxis: {
        categories: ["01", "02", "03", "04", "05", "06", "07"],
        position: "top",
        labels: {
            offsetY: -18
        },
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        crosshairs: {
            fill: {
                type: "gradient",
                gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [0, 100],
                    opacityFrom: .4,
                    opacityTo: .5
                }
            }
        },
        tooltip: {
            enabled: !0,
            offsetY: -35
        }
    },
    fill: {
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .25,
            gradientToColors: void 0,
            inverseColors: !0,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        }
    },
    yaxis: {
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        labels: {
            show: !1,
            formatter: function(e) {
                return e + "%"
            }
        }
    },
    title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: !0,
        offsetY: 330,
        align: "center",
        style: {
            color: "#444",
            fontWeight: "500"
        }
    }
    };
    (chart = new ApexCharts(document.querySelector("#column_chart_datalabel"), options)).render();


    options = {
    chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0
        }
    },
    dataLabels: {
        enabled: !1
    },
    series: [{
        data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
    }],
    colors: ["#34c38f"],
    grid: {
        borderColor: "#f1f1f1"
    },
    xaxis: {
        categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
    }
    };
    (chart = new ApexCharts(document.querySelector("#bar_chart"), options)).render();
    options = {
    chart: {
        height: 350,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: [0, 2, 4],
        curve: "smooth"
    },
    plotOptions: {
        bar: {
            columnWidth: "50%"
        }
    },
    colors: ["#f46a6a", "#ff6b00", "#34c38f"],
    series: [{
        name: "Team A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: "Team B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: "Team C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        opacity: [.85, .25, 1],
        gradient: {
            inverseColors: !1,
            shade: "light",
            type: "vertical",
            opacityFrom: .85,
            opacityTo: .55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
    markers: {
        size: 0
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        title: {
            text: "Points"
        }
    },
    tooltip: {
        shared: !0,
        intersect: !1,
        y: {
            formatter: function(e) {
                return void 0 !== e ? e.toFixed(0) + " points" : e
            }
        }
    },
    grid: {
        borderColor: "#f1f1f1"
    }
    };
    (chart = new ApexCharts(document.querySelector("#mixed_chart"), options)).render();
    options = {
    chart: {
        height: 370,
        type: "radialBar"
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: "22px"
                },
                value: {
                    fontSize: "16px"
                },
                total: {
                    show: !0,
                    label: "Total",
                    formatter: function(e) {
                        return 249
                    }
                }
            }
        }
    },
    series: [44, 55, 67, 83],
    labels: ["Computer", "Tablet", "Laptop", "Mobile"],
    colors: ["#ff6b00", "#34c38f", "#f46a6a", "#f1b44c"]
    };
    (chart = new ApexCharts(document.querySelector("#radial_chart"), options)).render();
    options = {
    chart: {
        height: 320,
        type: "pie"
    },
    series: [44, 55, 41, 17, 15],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: ["#34c38f", "#ff6b00", "#f46a6a", "#50a5f1", "#f1b44c"],
    legend: {
        show: !0,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: !1
            }
        }
    }]
    };
    (chart = new ApexCharts(document.querySelector("#pie_chart"), options)).render();

    options = {
    chart: {
        height: 320,
        type: "donut"
    },
    series: [44, 55, 41, 17, 15],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: ["#34c38f", "#ff6b00", "#f46a6a", "#50a5f1", "#f1b44c"],
    legend: {
        show: !0,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: !1
            }
        }
    }]
    };
    (chart = new ApexCharts(document.querySelector("#donut_chart"), options)).render();



    // apexchart dashbaord 1
    
        options = {
        chart: {
            height: 260,
            type: "area",
            toolbar: {
                show: !1
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            curve: "smooth",
            width: 3
        },
        series: [{
            name: "series1",
            data: [34, 40, 28, 52, 42, 109, 100]
        }, {
            name: "series2",
            data: [32, 60, 34, 46, 34, 52, 41]
        }],
        colors: ["#ff6b00", "#34c38f"],
        xaxis: {
            type: "datetime",
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"]
        },
        grid: {
            borderColor: "#f1f1f1"
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm"
            }
        }
        };
        (chart = new ApexCharts(document.querySelector("#spline_area"), options)).render();


        // dashboadr cart 2
     
            options = {
            chart: {
                height: 260,
                type: "area",
                toolbar: {
                    show: !1
                }
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                curve: "smooth",
                width: 3
            },
            series: [{
                name: "series5",
                data: [32, 60, 34, 46, 34, 52, 41, 52, 41, 52, 41, 52]
            }, {
                name: "series2",
                data: [32, 60, 34, 46, 34, 52, 41, 52, 41, 52, 41, 52]
            }],
            colors: ["#ff6b00", "#34c38f"],
            xaxis: {
                type: "",
                categories: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"]
            },
            grid: {
                borderColor: "#f1f1f1"
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
            };
            (chart = new ApexCharts(document.querySelector("#spline_area1"), options)).render();