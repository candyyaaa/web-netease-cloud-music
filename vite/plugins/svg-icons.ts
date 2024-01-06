/*
 * @Description: 用于生成 svg 雪碧图
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 01:24:46
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 02:02:05
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'

const createSvgIcons = () => {
	return createSvgIconsPlugin({
		// 指定需要缓存的图标文件夹
		iconDirs: [resolve(process.cwd(), 'src/assets/icons/')],
		// 指定symbolId格式
		symbolId: 'icon-[dir]-[name]'
	})
}

export default createSvgIcons
