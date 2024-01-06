/*
 * @Description: 打包进度条
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 01:17:20
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 01:21:20
 */
import progress from 'vite-plugin-progress'
import picocolors from 'picocolors'

const createProgress = () => {
	return progress({
		format: `${picocolors.green(picocolors.bold('Building'))} ${picocolors.cyan(
			'[:bar]'
		)} :percent | Time: :elapseds`,
		width: 100
	})
}

export default createProgress
