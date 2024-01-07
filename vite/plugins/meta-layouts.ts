/*
 * @Description:
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 17:35:54
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 17:41:00
 */
import metaLayouts from 'vite-plugin-vue-meta-layouts'

const createMetaLayouts = () => {
	return metaLayouts({
		// 布局目录，默认 src/layouts
		target: 'src/layouts',
		// 默认布局，默认为 default
		defaultLayout: 'index',
		// 打开修复 https://github.com/JohnCampionJr/vite-plugin-vue-layouts/issues/134，默认为 false 关闭
		skipTopLevelRouteLayout: true
	})
}

export default createMetaLayouts
