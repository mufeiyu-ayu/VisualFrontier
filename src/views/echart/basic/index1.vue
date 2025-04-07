<script setup lang="ts">
import { ref } from 'vue'
import Dialog from './components/dialog.vue'

const dialogRef = ref<InstanceType<typeof Dialog> | null>(null)
function handleClick() {
  dialogRef.value?.open()
}
</script>

<template>
  <Dialog ref="dialogRef" />
  <div>
    <ElButton @click="handleClick">
      打开弹窗
    </ElButton>
  </div>
</template>
