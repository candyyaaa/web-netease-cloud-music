/*
 * @Description: 自动引入组件
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 02:34:28
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 02:39:10
 */
import component from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const createAutoImportComponent = () => {
  return component({
    // 需要搜索组件的文件夹
    dirs: ['src/components'],
    // 组件的有效文件扩展名
    extensions: ['vue'],
    // 是否搜索子目录
    deep: true,
    // 是否自动导入组件
    resolvers: [ElementPlusResolver()],
    // 生成 `components.d.ts` 文件的路径
    dts: './types/components.d.ts',
    // 允许子目录下的组件名称与父目录下的组件名称重复
    directoryAsNamespace: false
  })
}

export default createAutoImportComponent