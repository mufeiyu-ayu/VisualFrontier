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
      },
      tooltip: {},
      xAxis: {
        data: ['一月', '二月', '三月', '四月', '五月', '六月'],
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [120, 200, 150, 80, 70, {
            value: 110,
            itemStyle: {
              borderRadius: 5,
              borderWidth: 1,
              borderType: 'solid',
              borderColor: '#73c0de',
              shadowColor: '#5470c6',
              shadowBlur: 3,
            },
          }],
          barWidth: '20%',
        },
        {
          type: 'bar',
          data: [100, 300, 200, 400, 140, 320],
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
