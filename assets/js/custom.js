var pieCharts =  {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '',
            data: [75, 25],
            backgroundColor: ['#6FB5EB', '#E6E6E6'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                display: false,
            }
        },
        legend: {
            display: false,
        },
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                display: false
            }
        },
        cutout: 30,
        responsive: true
    }
};

var myChart =  {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            label: '',
            data: [12, 19, 15, 10],
            backgroundColor: ['#FA8B0F'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                display: false,
            }
        },
        legend: {
            display: false,
        },
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                display: false
            }
        }
    }
};

var pieChartSec =  {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '',
            data: [50, 50],
            backgroundColor: ['#60D9BC', '#E6E6E6'],
            borderWidth: 1
        }]
    },
    options: {
        cutout:'65%',
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                display: false,
            }
        },
        legend: {
            display: false,
        },
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                display: false
            }
        },
        responsive: true
    }
};

var myBarSec =  {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],
        datasets: [{
            label: '',
            data: [12, 19, 15, 10, 5],
            backgroundColor: ['#528BD6'],
            borderWidth: 1,
            barThickness: 10
        }]
    },
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                display: false,
            }
        },
        legend: {
            display: false,
        },
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                display: false
            }
        }
    }
};

var lineChartVal = {
    type: 'line',
    data: {
        labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'ماي', 'يونيو', 'يوليوز', 'شتنبر', 'اكتوبر', 'ديسمبر'],
        datasets: [
            {
                label: 'الطلبات',
                borderColor: '#F98436',
                backgroundColor: '#F98436',
                data: [50, 80, 20, 30, 80, 120, 100, 40, 140, 90],
                cubicInterpolationMode: 'monotone'
            },
            {
                label: 'العملاء',
                borderColor: '#7366EF',
                backgroundColor: '#7366EF',
                data: [0, 35, 60, 40, 30, 10, 50, 30, 25, 70],
                cubicInterpolationMode: 'monotone'
            },
            {
                label: 'الدخل',
                borderColor: '#84C1F0',
                backgroundColor: '#84C1F0',
                data: [100, 20, 10, 30, 70, 0, 5, 15, 30, 200],
                cubicInterpolationMode: 'monotone'
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: false,
        },
        scales: {
            x: {
                grid: {
                    display: false, 
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Date'
                },
            },
            y: {
                scaleLabel: {
                    display: false,
                    labelString: 'Index Returns'
                },
                ticks: {
                    min: 0,
                    max: 200,
                    stepSize: 50
                },
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    font: {
                        size: 16
                    },
                    padding: 20
                }
            }
        }
    }
};

var ordersPie = {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '',
            data: [75, 25],
            backgroundColor: ['#FA8B0F', '#E6E6E6'],
            borderWidth: 1
        }]
    },
    options: {
        cutout:'65%',
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                display: false,
            }
        },
        legend: {
            display: false,
        },
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                display: false
            }
        },
        responsive: true
    }
}

var orderBarGraph = {
    type: 'bar',
    data: {
        labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'ماي', 'يونيو', 'يوليوز', 'شتنبر', 'اكتوبر', 'ديسمبر'],
        datasets: [
            {
                label: 'الدخل',
                borderColor: '#948BF3',
                backgroundColor: '#948BF3',
                borderRadius: 10,
                data: [50, 80, 20, 30, 80, 120, 100, 40, 140, 90]
            },
            {
                label: 'العملاء',
                borderColor: '#5FCF97',
                backgroundColor: '#5FCF97',
                borderRadius: 10,
                data: [50, 35, 60, 40, 30, 10, 50, 30, 25, 70]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        scales: {
            x: {
                grid: {
                    display: false, 
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Date'
                },
            },
            y: {
                scaleLabel: {
                    display: false,
                    labelString: 'Index Returns'
                },
                ticks: {
                    min: 0,
                    max: 200,
                    stepSize: 50
                },
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    font: {
                        size: 16
                    },
                    padding: 20
                }
            }
        }
    }
};

window.onload = function() {
    var ctx1 = document.getElementById('barChart').getContext('2d');
    window.myLine = new Chart(ctx1, myChart);
    var ctx2 = document.getElementById('pieChart').getContext('2d');
    window.myLine = new Chart(ctx2, pieCharts);
    var ctx3 = document.getElementById('secPie').getContext('2d');
    window.myLine = new Chart(ctx3, pieChartSec);
    var ctx4 = document.getElementById('barChartSec').getContext('2d');
    window.myLine = new Chart(ctx4, myBarSec);
    var ctx5 = document.getElementById('lineChart').getContext('2d');
    window.myLine = new Chart(ctx5, lineChartVal);
    var ctx6 =  document.getElementById('ordersChart').getContext('2d');
    window.myLine = new Chart(ctx6, ordersPie);
    var ctx7 = document.getElementById('orderBarGraph').getContext('2d');
    window.myLine = new Chart(ctx7, orderBarGraph);
};






