/*
 * @Description: 用户接口模型
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-08 00:57:30
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-08 01:09:08
 */

export interface LoginCellphoneParams {
	/**
	 * 手机号码
	 */
	phone: string
	/**
	 * 密码
	 */
	password: string
	/**
	 * 国家码，用于国外手机号登录，例如美国传入：1
	 */
	countrycode?: string
	/**
	 * md5 加密后的密码,传入后 password 参数将失效
	 *
	 */
	md5_password?: string
	/**
	 * 验证码
	 *
	 */
	captcha?: string
}

export interface LoginCellphoneResponse {
	loginType: number
	code: number
	account: {
		id: number
		userName: string
		type: number
		status: number
		whitelistAuthority: number
		createTime: number
		salt: string
		tokenVersion: number
		ban: number
		baoyueVersion: number
		donateVersion: number
		vipType: number
		viptypeVersion: number
		anonimousUser: boolean
		uninitialized: boolean
	}
	token: string
	profile: {
		defaultAvatar: boolean
		mutual: boolean
		remarkName: string
		avatarImgIdStr: string
		backgroundImgIdStr: string
		followed: boolean
		backgroundUrl: string
		userType: number
		vipType: number
		authStatus: number
		djStatus: number
		detailDescription: string
		experts: unknown
		expertTags: unknown
		accountStatus: number
		nickname: string
		birthday: number
		gender: number
		province: number
		city: number
		avatarImgId: number
		backgroundImgId: number
		avatarUrl: string
		description: string
		userId: number
		signature: string
		authority: number
		followeds: number
		follows: number
		eventCount: number
		avatarDetail: string
		playlistCount: number
		playlistBeSubscribedCount: number
	}
	bindings: [
		{
			tokenJsonStr: string
			expiresIn: number
			bindingTime: number
			refreshTime: number
			url: string
			expired: boolean
			userId: number
			id: number
			type: number
		},
		{
			tokenJsonStr: string
			expiresIn: number
			bindingTime: number
			refreshTime: number
			url: string
			expired: boolean
			userId: number
			id: number
			type: number
		},
		{
			tokenJsonStr: string
			expiresIn: number
			bindingTime: number
			refreshTime: number
			url: string
			expired: boolean
			userId: number
			id: number
			type: number
		}
	]
}
