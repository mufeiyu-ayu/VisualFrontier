import Layout from '@/layout/index.vue'
import EchartBasic1 from '@/views/echart/basic/index1.vue'
import EchartBasic2 from '@/views/echart/basic/index2.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/echart/basic',
      children: [
        {
          path: 'echart/basic',
          name: 'echartBasic',
          component: EchartBasic1,
          meta: {
            title: '基础图表',
            icon: 'Histogram',
          },
        },
        {
          path: 'echart/basic2',
          name: 'echartBasic2',
          component: EchartBasic2,
        },
      ],
    },
  ],
})

export default router
// hello world
