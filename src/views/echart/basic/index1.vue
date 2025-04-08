<script setup lang="ts">
import { ref } from 'vue'
import Bar from './components/bar.vue'
import Dialog from './components/dialog.vue'
import Polyline from './components/Polyline.vue'
import SortComponent from './components/sortBar.vue'

const dialogRef = ref<InstanceType<typeof Dialog> | null>(null)
const barRef = ref<InstanceType<typeof Bar> | null>(null)
const sortBarRef = ref<InstanceType<typeof SortComponent> | null>(null)
const polylineRef = ref<InstanceType<typeof Polyline> | null>(null)
</script>

<template>
  <Dialog ref="dialogRef" />
  <Bar ref="barRef" />
  <SortComponent ref="sortBarRef" />
  <Polyline ref="polylineRef" />
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
  </div>
</template>
