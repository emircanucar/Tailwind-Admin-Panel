/* company facts slider */
var swiper = new Swiper(".companyFactsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* stats slider */
var swiper = new Swiper(".statsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*facts section chart*/
var dom = document.getElementById('facts-section-chart');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2020', '2021', '2022', '2023']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'San Fransisco',
            type: 'line',
            stack: 'Total',
            areaStyle: {
                color: '#914DF0'
            },
            Color: '#efefef',
            emphasis: {
                focus: 'series'
            },
            data: [10, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Bangkok',
            type: 'line',
            stack: 'Total',
            areaStyle: {
                color: '#3FAEA3'
            },
            emphasis: {
                focus: 'series'
            },
            data: [200, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Paris',
            type: 'line',
            stack: 'Total',
            areaStyle: {
                color: '#F4A26C'

            },
            emphasis: {
                focus: 'series'
            },
            data: [210, 232, 201, 154, 190, 330, 410]
        },



    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

/* stats section chart*/
var dom = document.getElementById('stats-section-chart');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {

    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: 'Gaziantep' },
                { value: 735, name: 'Mersin' },
                { value: 580, name: 'Kahramanmaraş' },
                { value: 4084, name: 'İstanbul' },
                { value: 300, name: 'Adana' }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);