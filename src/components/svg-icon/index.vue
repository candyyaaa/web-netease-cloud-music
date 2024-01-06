<!--
 * @Description: svg-icon 使用本地svg图标
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 01:28:52
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 02:09:56
-->
<script setup lang="ts">
interface Props {
	name: string
	color?: string
	className?: string
	prefix?: string
}

const props = withDefaults(defineProps<Props>(), {
	className: 'svg-icon',
	prefix: 'icon'
})

const symbolId = computed<string>(() => `#${props.prefix}-${props.name}`)
const svgClass = computed<string>(() => props.className)
</script>

<template>
	<svg :class="svgClass" class="h-1.2em w-1.2em" fill-current aria-hidden="false">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>
