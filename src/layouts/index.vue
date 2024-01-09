<!--
 * @Description: 
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 17:41:47
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-08 10:37:20
-->
<script setup lang="ts">
import Header from './components/header/index.vue'
import Aside from './components/aside/index.vue'
</script>

<template>
	<div h-full w-full>
		<el-container h-full direction="vertical">
			<Header />

			<el-container>
				<Aside />

				<el-main>
					<routerView></routerView>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
