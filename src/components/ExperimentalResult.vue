<template>
  <div ref="main" style="width: 50rem; height: 18rem"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var chartDom = this.$refs.main;
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: { text: "业务数据( 实验结果 )" },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: ["第一期", "第二期", "第三期"],
        },
        yAxis: {
          type: "value",
          name: "人次",
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            data: [105932, 610, 28081],
            type: "line",
            itemStyle: {
              color: "rgba(239, 52, 52, 1)",
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>