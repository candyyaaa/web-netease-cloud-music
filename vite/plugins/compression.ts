/*
 * @Description: 使用 gzip 或者 brotli 来压缩资源
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 00:14:31
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 00:37:01
 */
import compression from 'vite-plugin-compression'

const createCompression = (env: Record<string, string>) => {
	const { VITE_BUILD_COMPRESS } = env
	const compressList = VITE_BUILD_COMPRESS.split(',')
	const plugins: ReturnType<typeof compression>[] = []

	if (compressList.includes('gzip')) {
		plugins.push(
			compression({
				ext: '.gz',
				deleteOriginFile: false
			})
		)
	}

	if (compressList.includes('brotli')) {
		plugins.push(
			compression({
				ext: '.br',
				algorithm: 'brotliCompress',
				deleteOriginFile: false
			})
		)
	}

	return plugins
}

export default createCompression
