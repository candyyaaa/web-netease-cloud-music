/*
 * @Description: 用户接口
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-08 00:57:03
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-08 01:13:38
 */
import { alovaInstance } from '@/api'
import type { LoginCellphoneParams, LoginCellphoneResponse } from './model'

export const loginCellphone = (params: LoginCellphoneParams) => {
	return alovaInstance.Get<LoginCellphoneResponse>('/login/cellphone', { params })
}
