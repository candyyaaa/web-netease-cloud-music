/*
 * @Description: 根据文件目录自动生成路由
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 16:36:38
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 17:10:06
 */
import pages from 'vite-plugin-pages'

const createPages = () => {
	return pages({
		// 需要生成路由的文件夹
		dirs: ['src/views'],
		// 文件后缀
		extensions: ['vue'],
		// 排除
		exclude: ['**/components/**/*', '**/components/*', '**/components'],
		// 引入方式
    importMode: 'async',
    // 设置默认的路由块解析器，或者在SFC路由块中使用<route lang=xxx>
    routeBlockLang: 'json5'
	})
}

export default createPages
