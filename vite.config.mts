/*
 * @Description: vite 配置
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 20:38:48
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-08 04:33:46
 */
import { defineConfig, loadEnv } from 'vite'
import { pathResolve } from './vite/utils'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
	console.log('mode ----------->', mode)
	console.log('command ----------->', command)

	// 所有的环境变量
	const env = loadEnv(mode, process.cwd(), '')
	// 端口
	const port = Number(env.VITE_PORT) ?? 8800
	// 是否删除console 和 debugger
	const dropConsole = env.VITE_DROP_CONSOLE === 'true'

	return defineConfig({
		// 打包配置
		build: {
			outDir: 'web-netease-cloud-music-dist',
			assetsInlineLimit: 1000,
			rollupOptions: {
				output: {
					// 分类输出
					chunkFileNames: 'js/[name]-[hash].js',
					entryFileNames: 'js/[name]-[hash].js',
					assetFileNames: '[ext]/[name]-[hash].[ext]',
					manualChunks(id) {
						// 超大静态资源拆分
						if (id.includes('node_modules')) {
							return id.toString().split('node_modules/')[1].split('/')[0].toString()
						}
						// 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
						if (id.includes(pathResolve('/src/store/index.ts'))) {
							return 'vendor'
						}
					}
				}
			}
		},

		// css 配置
		css: {
			devSourcemap: true
		},

		// 环境变量
		define: {
			__VUE_PROD_DEVTOOLS__: true
		},

		// esbuild 配置
		esbuild: {
			// 删除 所有的console 和 debugger
			drop: command === 'build' && dropConsole ? ['console', 'debugger'] : []
		},

		// vite 插件
		plugins: createVitePlugins(env, command === 'build'),

		//设置别名
		resolve: {
			alias: [
				{ find: '@', replacement: `${pathResolve('src')}/` },
				{ find: '#', replacement: `${pathResolve('types')}/` }
			]
		},

		// 服务器配置
		server: {
			// 监听所有地址
			host: '0.0.0.0',
			// 端口
			port: port,
			// 服务启动时是否自动打开浏览器
			open: true,
			// 允许跨域
			cors: true,
			// 代理配置
			proxy: {
				'/api': {
					target: 'http://localhost:8090',
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		}
	})
}
