/*
 * @Description: vite 插件抽离
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 22:36:07
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 17:44:35
 */

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import EnhanceLog from 'vite-plugin-enhance-log'
import vueDevtools from 'vite-plugin-vue-devtools'
import createAutoImport from './auto-import'
import createCompression from './compression'
import createImagemin from './imagemin'
import createImagesImport from './images-import'
import createMetaLayouts from './meta-layouts'
import createPages from './pages'
import createProgress from './progress'
import createStyleImport from './style-import'
import createSvgIcons from './svg-icons'
import createUnocss from './unocss'
import createAutoImportComponent from './vue-components'
import type { PluginOption } from 'vite'

/**
 * 抽离 vite 插件
 * @param {object} viteEnv 环境变量
 * @param {boolean} isBuild 是否是打包
 * @returns {Array} vitePlugins
 */
const createVitePlugins = (
	viteEnv: Record<string, string>,
	isBuild: boolean = false
): (PluginOption | PluginOption[])[] => {
	const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx(), EnhanceLog(), vueDevtools()]

	const { VITE_USE_IMAGEMIN } = viteEnv
	const viteUseImagemin = VITE_USE_IMAGEMIN && Boolean(VITE_USE_IMAGEMIN)

	vitePlugins.push(createAutoImport())
	isBuild && vitePlugins.push(createCompression(viteEnv))
	isBuild && viteUseImagemin && vitePlugins.push(createImagemin())
	vitePlugins.push(createImagesImport())
	vitePlugins.push(createMetaLayouts())
	vitePlugins.push(createPages())
	isBuild && vitePlugins.push(createProgress())
	vitePlugins.push(createStyleImport())
	vitePlugins.push(createSvgIcons())
	vitePlugins.push(createUnocss())
	vitePlugins.push(createAutoImportComponent())

	return vitePlugins
}

export default createVitePlugins
