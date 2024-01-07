/*
 * @Description: router
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 21:19:34
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 17:51:30
 */

import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { setupLayouts } from "virtual:meta-layouts"

const router = createRouter({
	history: createWebHistory('/'),
	routes: setupLayouts(routes)
})

export default router
