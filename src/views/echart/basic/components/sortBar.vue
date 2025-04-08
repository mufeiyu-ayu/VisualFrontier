<script setup lang="ts">
import * as echarts from 'echarts'

import { nextTick, onUnmounted, ref } from 'vue'

const visible = ref(false)
const sortBarRef = ref<HTMLElement | null>(null)
const sortBarInstance = ref<echarts.ECharts | null>(null)
function handleOpen() {
  visible.value = true
  nextTick(() => {
    initChart()
  })
}
const data = []
for (let i = 0; i < 5; i++) {
  data.push(Math.floor(Math.random() * 200))
}
const option = {
  xAxis: {
    max: 'dataMax',
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2, // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true,
      },
    },
  ],
  legend: {
    show: true,
  },
  animationDuration: 300,
  animationDurationUpdate: 300,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',
}
function initChart() {
  if (sortBarRef.value) {
    // 如果已经有实例，先销毁
    if (sortBarInstance.value) {
      sortBarInstance.value.dispose()
    }

    // 创建新实例
    sortBarInstance.value = echarts.init(sortBarRef.value)
    const data = option.series[0].data
    for (let i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000)
      }
      else {
        data[i] += Math.round(Math.random() * 200)
      }
    }
    // @ts-ignore
    sortBarInstance.value.setOption(option)
  }
}
function handleClose() {
  visible.value = false
}
onUnmounted(() => {
  if (sortBarInstance.value) {
    sortBarInstance.value.dispose()
  }
})
defineExpose({
  open: handleOpen,
})
</script>

<template>
  <ElDialog v-model="visible" destroy-on-close @close="handleClose">
    <div id="sortBar" ref="sortBarRef" style="width: 100%; height: 400px" />
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
