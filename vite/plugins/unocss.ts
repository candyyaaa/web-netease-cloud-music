/*
 * @Description:
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 02:14:58
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 02:20:59
 */
import unocss from 'unocss/vite'

const createUnocss = () => {
	return unocss({
		configFile: './unocss.config.ts'
	})
}

export default createUnocss
