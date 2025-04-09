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
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Step Start',
          type: 'line',
          step: 'start',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Step Middle',
          type: 'line',
          step: 'middle',
          data: [220, 282, 201, 234, 290, 430, 410],
        },
        {
          name: 'Step End',
          type: 'line',
          step: 'end',
          data: [450, 432, 401, 454, 590, 530, 510],
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
