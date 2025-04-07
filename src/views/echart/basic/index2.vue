<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

// 创建一个模板引用
const chartRef = ref<HTMLElement | null>(null)
const chartInstance = ref<echarts.ECharts | null>(null)

onMounted(() => {
  // 使用模板引用获取 DOM 元素
  if (chartRef.value) {
    chartInstance.value = echarts.init(chartRef.value)
    chartInstance.value.setOption({
      title: {
        text: 'ECharts 入门示例222',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 40],
        },
      ],
    })
  }
})
</script>

<template>
  <div ref="chartRef" style="width: 600px; height: 400px" />
</template>
