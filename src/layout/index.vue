<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

/**
 * 控制侧边栏是否折叠的状态
 */
const isCollapse = ref(false)

/**
 * 切换侧边栏折叠状态
 */
function toggleSidebar() {
  isCollapse.value = !isCollapse.value
}

/**
 * 当前激活的菜单项
 */
const activeMenu = ref('1-1')

/**
 * 路由实例
 */
const router = useRouter()

/**
 * 处理菜单点击事件
 * @param index 菜单项的索引
 */
function handleMenuSelect(index: string) {
  switch (index) {
    case '1-1':
      router.push('/echart/basic')
      break
    case '1-2':
      router.push('/echart/basic2')
      break
    default:
      break
  }
}
</script>

<template>
  <div class="layout-container h-screen w-screen flex flex-col overflow-hidden">
    <!-- 顶部导航栏 -->
    <div class="header-container bg-white h-16 shadow-sm flex items-center justify-between px-4 z-10">
      <div class="flex items-center">
        <div class="logo-container mr-4 text-xl font-bold text-blue-600">
          Visual Frontier
        </div>
        <ElButton
          type="primary"
          :icon="isCollapse ? 'Expand' : 'Fold'"
          size="small"
          text
          @click="toggleSidebar"
        />
      </div>
      <div class="flex items-center">
        <ElDropdown>
          <span class="flex items-center cursor-pointer">
            <ElAvatar size="small" class="mr-2" />
            <span>管理员</span>
            <ElIcon class="ml-1"><ArrowDown /></ElIcon>
          </span>
          <template #dropdown>
            <ElDropdownMenu>
              <ElDropdownItem>个人信息</ElDropdownItem>
              <ElDropdownItem>设置</ElDropdownItem>
              <ElDropdownItem divided>
                退出登录
              </ElDropdownItem>
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </div>
    </div>

    <!-- 主内容区 -->
    <div class="main-container flex flex-1 overflow-hidden">
      <!-- 侧边栏 -->
      <div
        class="sidebar-container transition-all bg-slate-800 text-white overflow-y-auto"
        :class="{ 'w-64': !isCollapse, 'w-16': isCollapse }"
      >
        <ElMenu
          class="h-full border-none"
          :default-active="activeMenu"
          :collapse="isCollapse"
          background-color="#1e293b"
          text-color="#fff"
          active-text-color="#409EFF"
          @select="handleMenuSelect"
        >
          <ElSubMenu index="1">
            <template #title>
              <ElIcon><DataLine /></ElIcon>
              <span>数据可视化</span>
            </template>
            <ElMenuItem index="1-1">
              <ElIcon><Histogram /></ElIcon>
              <span>基础图表</span>
            </ElMenuItem>
            <ElMenuItem index="1-2">
              <ElIcon><Histogram /></ElIcon>
              <span>基础图表2</span>
            </ElMenuItem>
          </ElSubMenu>

          <ElSubMenu index="2">
            <template #title>
              <ElIcon><SetUp /></ElIcon>
              <span>系统管理</span>
            </template>
            <ElMenuItem index="2-1">
              <ElIcon><User /></ElIcon>
              <span>用户管理</span>
            </ElMenuItem>
            <ElMenuItem index="2-2">
              <ElIcon><Setting /></ElIcon>
              <span>系统设置</span>
            </ElMenuItem>
          </ElSubMenu>
        </ElMenu>
      </div>

      <!-- 内容区 -->
      <div class="content-container flex-1 p-4 bg-gray-50 overflow-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-menu) {
  border-right: none;
}

:deep(.el-menu--collapse) {
  width: 64px;
}
</style>
