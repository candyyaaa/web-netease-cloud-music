/*
 * @Description: 自动导入图像，同级目录的文件名不能重复！
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 02:51:17
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 02:54:17
 */
import ViteImages from 'vite-plugin-vue-images'

const createImagesImport = () => {
	return ViteImages({
		// 图像目录的相对路径
    dirs: ['src/assets/images'],
    // 有效的图像扩展
    extensions: ['png', 'jpg', 'jpeg', 'svg', 'gif', 'ico', 'webp']
	})
}

export default createImagesImport
