<script setup lang="ts">
import * as echarts from 'echarts'
import { nextTick, onUnmounted, ref } from 'vue'

const visible = ref(false)
const chartRef = ref<HTMLElement | null>(null)
const chartInstance = ref<echarts.ECharts | null>(null)
function initChart() {
  if (chartRef.value) {
    // 如果已经有实例，先销毁
    if (chartInstance.value) {
      chartInstance.value.dispose()
    }

    // 创建新实例
    chartInstance.value = echarts.init(chartRef.value)
    chartInstance.value.setOption<echarts.EChartsOption>({
      title: {
        text: '柱状图',
        show: true,
        left: 'center',
        top: 'top',
        link: 'https://www.baidu.com',
        textStyle: {
          color: 'blue',
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'Arial',
          fontStyle: 'italic',
        },
        subtext: '副标题',
        sublink: 'https://www.baidu.com',
        subtextStyle: {
          color: 'red',
          fontSize: 16,
          fontWeight: 'bold',
        },
      },
      tooltip: {},
      xAxis: {
        data: ['一月', '二月', '三月', '四月', '五月', '六月'],
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [120, 200, 150, 80, 70, 110],
          barWidth: '20%',
          stack: 'x',
        },
        {
          type: 'bar',
          data: [110, 100, 200, 90, 80, 120],
          barWidth: '20%',
          stack: 'x',
        },
      ],
    })
  }
}
function handleOpen() {
  visible.value = true
  nextTick(() => {
    initChart()
  })
}

function handleClose() {
  visible.value = false
}
onUnmounted(() => {
  if (chartInstance.value) {
    chartInstance.value.dispose()
  }
})
defineExpose({
  open: handleOpen,
})
</script>

<template>
  <ElDialog v-model="visible" destroy-on-close @close="handleClose">
    <div ref="chartRef" style="width: 100%; height: 400px" />
    <template #footer>
      <ElButton @click="handleClose">
        关闭
      </ElButton>
      <ElButton type="primary" @click="handleClose">
        确定
      </ElButton>
    </template>
  </ElDialog>
</template>
