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
        text: '折线图',
      },
      tooltip: {},
      xAxis: {

      },
      yAxis: {

      },
      series: [
        {
          data: [10, 22, 28, 43, 49],
          type: 'line',
          stack: 'x',
        },
        {
          data: [5, 4, 3, 5, 10],
          type: 'line',
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
