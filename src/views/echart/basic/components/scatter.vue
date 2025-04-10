<script setup lang="ts">
import * as echarts from 'echarts'
import { nextTick, onUnmounted, ref } from 'vue'

const visible = ref(false)
const chartRef = ref<HTMLElement | null>(null)
const chartInstance = ref<echarts.ECharts | null>(null)
const option = {
  xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
}

/**   笛卡尔 */
const option2 = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [
        [10, 5],
        [0, 8],
        [6, 10],
        [2, 12],
        [8, 9],
      ],
    },
  ],
}
console.log(option2)
function initChart() {
  if (chartRef.value) {
    // 如果已经有实例，先销毁
    if (chartInstance.value) {
      chartInstance.value.dispose()
    }
    // 创建新实例
    chartInstance.value = echarts.init(chartRef.value)
    chartInstance.value.showLoading()

    chartInstance.value.setOption({
      title: {
        text: '散点图',
      },
      tooltip: {},
      ...option,
    })
  }
  chartInstance.value.hideLoading()
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
