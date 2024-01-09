/*
 * @Description:
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 23:52:42
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-08 00:46:24
 */
import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import GlobalFetch from 'alova/GlobalFetch'
import appStore from '@/store'
import { ElMessage } from 'element-plus'

export interface ResponseBody<T = unknown> {
	code: number
	data: T
	message: string
}

const token = appStore.useUserStoreForSetup.token

const alovaInstance = createAlova({
	// 请求根路径
	baseURL: '/api',
	// 它用于确定在 use hook
	statesHook: VueHook,
	// 请求适配器 GlobalFetch: window.fetch 请求方式
	requestAdapter: GlobalFetch(),
	// 请求超时时间，单位为毫秒，默认为0，表示永不超时
	timeout: 50000,

	// 全局请求拦截器
	beforeRequest(method) {
		if (token) {
			method.config.headers = {
				Authorization: `Bearer ${token}`
			}
		}
	},

	// 全局响应拦截器
	responded: {
		// 请求成功的拦截器
		// 当使用GlobalFetch请求适配器时，第一个参数接收Response对象
		// 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
		onSuccess: response => {
			// console.log(' ----------->', response, method)

			// if (userStore.token) {
			// 	method.config.headers = {
			// 		Authorization: `Bearer ${userStore.token}`
			// 	}
			// }

			return response.json()
		},
		// 请求失败的拦截器
		// 请求错误时将会进入该拦截器。
		// 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
		onError: error => {
			console.log(error)
			ElMessage.error(error.message)
		}
	}
})

export { alovaInstance }