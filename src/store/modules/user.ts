/*
 * @Description: 用户状态
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 23:28:21
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-08 00:36:24
 */

export const useUserStoreForSetup = defineStore(
	'userStore',
	() => {
		const token = ref('token111')

		const setToken = (value: string): void => {
			token.value = value
		}

		return { token, setToken }
	},
	{
		persist: {
			key: 'token',
			paths: ['token']
		}
	}
)
