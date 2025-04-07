<script setup lang="ts">
import * as echarts from 'echarts'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

// 创建一个模板引用
const chartRef = ref<HTMLElement | null>(null)
const chartInstance = ref<echarts.ECharts | null>(null)
const visible = ref(false)

// 初始化图表的函数
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
        text: 'ECharts 入门示例',
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
}

function handleOpen() {
  visible.value = true
  nextTick(() => {
    initChart()
  })
}

function handleClose() {
  visible.value = false
  if (chartInstance.value) {
    chartInstance.value.dispose()
  }
}

// 监听窗口大小变化，调整图表大小
function handleResize() {
  if (chartInstance.value) {
    chartInstance.value.resize()
  }
}

// 添加窗口大小变化的监听
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
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
    <div ref="chartRef" class="w-full" style="height: 400px" />
  </ElDialog>
</template>
