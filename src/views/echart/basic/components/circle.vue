<script setup lang="ts">
import * as echarts from 'echarts'
import { nextTick, onUnmounted, ref } from 'vue'

const visible = ref(false)
const chartRef = ref<HTMLElement | null>(null)
const chartInstance = ref<echarts.ECharts | null>(null)
const option = {
  title: {
    text: '圆环图的例子',
    left: 'center',
    top: 'center',
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: 'A',
        },
        {
          value: 234,
          name: 'B',
        },
        {
          value: 1548,
          name: 'C',
        },
      ],
      radius: ['40%', '70%'],
    },
  ],
}
console.log(option)
const option2 = {
  legend: {
    orient: 'vertical',
    x: 'right',
    data: ['A', 'B', 'C', 'D', 'E'],
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      labelLine: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold',
        },
      },
      data: [
        { value: 335, name: 'A' },
        { value: 310, name: 'B' },
        { value: 234, name: 'C' },
        { value: 135, name: 'D' },
        { value: 1548, name: 'E' },
      ],
    },
  ],
}
function initChart() {
  if (chartRef.value) {
    // 如果已经有实例，先销毁
    if (chartInstance.value) {
      chartInstance.value.dispose()
    }

    // 创建新实例
    chartInstance.value = echarts.init(chartRef.value)
    chartInstance.value.setOption({
      title: {
        text: '圆环图',
      },
      tooltip: {},
      ...option2,
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
