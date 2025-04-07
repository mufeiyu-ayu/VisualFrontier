<script setup lang="ts">
import { ref } from 'vue'
import Bar from './components/bar.vue'
import Dialog from './components/dialog.vue'

const dialogRef = ref<InstanceType<typeof Dialog> | null>(null)
const barRef = ref<InstanceType<typeof Bar> | null>(null)
</script>

<template>
  <Dialog ref="dialogRef" />
  <Bar ref="barRef" />
  <div>
    <ElButton @click="dialogRef.open()">
      打开弹窗
    </ElButton>
    <ElButton @click="barRef.open()">
      打开柱状图
    </ElButton>
  </div>
</template>
