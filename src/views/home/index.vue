<!--
 * @Description: home
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 21:38:32
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 03:05:16
-->
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import appStore from '@/store'
import SvgIcon from '@/components/svg-icon/index.vue'

const { token } = storeToRefs(appStore.useUserStoreForSetup)
const { setToken } = appStore.useUserStoreForSetup

const handleChangeToken = (token: string): void => {
	setToken(token)

	ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
</script>

<template>
	<div>
		<h4>Home</h4>

		<el-button type="primary" @click="handleChangeToken('token222')">改变token</el-button>

		<div>token: {{ token }}</div>

		<SvgIcon name="vue" />
	</div>
</template>

<style scoped></style>
