/*
 * @Description: pinia 状态
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 23:26:16
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-06 23:49:26
 */
import { useUserStoreForSetup } from './modules/user'

export interface AppStore {
	useUserStoreForSetup: ReturnType<typeof useUserStoreForSetup>
}

const appStore: AppStore = {} as AppStore

/**
 * 全局注册app状态
 * @returns {void}
 */
export const registerStore = (): void => {
	appStore.useUserStoreForSetup = useUserStoreForSetup()
}

export default appStore
