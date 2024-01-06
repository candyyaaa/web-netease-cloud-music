/*
 * @Description:
 *  当你使用unplugin-vue-components来引入ui库的时候，message, notification，toast 等引入样式不生效
 *  安装vite-plugin-style-import，实现message, notification，toast 等引入样式自动引入
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 02:43:47
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 03:09:54
 */
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

const createStyleImport = () => {
	return createStyleImportPlugin({
		resolves: [ElementPlusResolve()],
		libs: [
			{
				libraryName: 'element-plus',
				esModule: true,
				resolveStyle: name => {
					return `element-plus/theme-chalk/${name}.css`
				}
			}
		]
	})
}

export default createStyleImport
