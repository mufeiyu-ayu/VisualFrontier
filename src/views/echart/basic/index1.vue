<script setup lang="ts">
import { ref } from 'vue'
import Bar from './components/bar.vue'
import Circle from './components/circle.vue'
import Cookie from './components/cookie.vue'
import Dialog from './components/dialog.vue'
import Polyline from './components/Polyline.vue'
import Scatter from './components/scatter.vue'
import SortComponent from './components/sortBar.vue'
import StackPol from './components/stackPol.vue'

const dialogRef = ref<InstanceType<typeof Dialog> | null>(null)
const barRef = ref<InstanceType<typeof Bar> | null>(null)
const sortBarRef = ref<InstanceType<typeof SortComponent> | null>(null)
const polylineRef = ref<InstanceType<typeof Polyline> | null>(null)
const stackPolRef = ref<InstanceType<typeof StackPol> | null>(null)
const cookieRef = ref<InstanceType<typeof Cookie> | null>(null)
const circleRef = ref<InstanceType<typeof Circle> | null>(null)
const scatterRef = ref<InstanceType<typeof Scatter> | null>(null)
</script>

<template>
  <Dialog ref="dialogRef" />
  <Bar ref="barRef" />
  <SortComponent ref="sortBarRef" />
  <Polyline ref="polylineRef" />
  <StackPol ref="stackPolRef" />
  <Cookie ref="cookieRef" />
  <Circle ref="circleRef" />
  <Scatter ref="scatterRef" />
  <div>
    <ElButton @click="dialogRef.open()">
      打开弹窗
    </ElButton>
    <ElButton @click="barRef.open()">
      打开柱状图
    </ElButton>
    <ElButton @click="sortBarRef.open()">
      打开排序柱状图
    </ElButton>
    <ElButton @click="polylineRef.open()">
      打开折线图
    </ElButton>
    <ElButton @click="stackPolRef.open()">
      打开堆叠折线图
    </ElButton>
    <ElButton @click="cookieRef.open()">
      打开饼图
    </ElButton>
    <ElButton @click="circleRef.open()">
      打开圆环图
    </ElButton>
    <ElButton @click="scatterRef.open()">
      打开散点图
    </ElButton>
  </div>
</template>
