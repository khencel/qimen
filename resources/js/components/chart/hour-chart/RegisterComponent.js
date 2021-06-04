Vue.component(
    'part-hour-chart',
    ()=>import('../hour-chart/PartChart.vue')
);

Vue.component(
    'chart-review-parts',
    ()=>import('../hour-chart/preview/Part.vue')
);

Vue.component(
    'chart-generate-point',
    ()=>import('../hour-chart/preview/ChartGeneratePoint.vue')
);

Vue.component(
    'hour-chart-part-preview',
    require('../hour-chart/PartChartPreview.vue').default
);




