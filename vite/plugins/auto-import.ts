/*
 * @Description:
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 23:58:19
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 00:05:54
 */
import autoImport from 'unplugin-auto-import/vite'

const createAutoImport = () => {
	return autoImport({
		// 需要自动导入哪些库
		imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
		// eslint 报错问题
		eslintrc: {
			// true: 需要生成文件; false: 不需要生成文件
			enabled: true,
			filepath: './.eslintrc-auto-import.json'
		},
		dts: './types/auto-import.d.ts'
	})
}

export default createAutoImport
