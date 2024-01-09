<!--
 * @Description: 404 notFound
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-08 10:53:10
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-08 04:17:03
-->
<route>
{
  name: "notFound",
  meta: {
		title: "404",
    layout: false
  }
}
</route>

<script setup lang="ts">
import notFound from '@/assets/images/not-found.jpg'
</script>

<template>
	<div>
		<div mt="10%" text-center>
			<img mx-auto :src="notFound" alt="notFound" />

			<p mt-4 text="#666">很抱歉，你要查找的网页找不到</p>
		</div>
	</div>
</template>
