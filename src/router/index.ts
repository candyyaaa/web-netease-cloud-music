/*
 * @Description: router
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 21:19:34
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-06 23:19:00
 */

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory('/'),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/views/home/index.vue')
		}
	]
})

export default router
