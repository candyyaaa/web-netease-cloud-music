<!--
 * @Description: home
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 21:38:32
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-08 04:25:04
-->
<route>
{
	name: "home",
	meta: {
		title: "首页",
		layout: "index"
	}
}
</route>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import appStore from '@/store'
import { loginCellphone } from '@/api/user/'
import { useRequest } from 'alova'

const { token } = storeToRefs(appStore.useUserStoreForSetup)
const { setToken } = appStore.useUserStoreForSetup

const handleChangeToken = (token: string): void => {
	setToken(token)

	ElMessage({
		message: 'Congrats, this is a success message.',
		type: 'success'
	})
}

const query = {
	phone: '19124095613',
	password: 'Datuimao0.00'
}

const { send, loading } = useRequest(loginCellphone(query), { immediate: false, initialData: {} })
const handleLogin = () => {
	send().then(res => {
		console.log(res)
	})
}
</script>

<template>
	<div>
		<h4>Home</h4>

		<el-button type="primary" @click="handleChangeToken('token222')">改变token</el-button>

		<div>token: {{ token }}</div>

		<SvgIcon name="vue" />

		<el-button type="primary" :loading="loading" @click="handleLogin">登录</el-button>
	</div>
</template>

<style scoped></style>
