/*
 * @Description: uno.css 配置
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-07 02:24:41
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 02:26:19
 */
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	// 规则
	rules: [],
	// 快捷方式
	shortcuts: [],
	// 主题
	theme: {},
	// 预设
	presets: [
		// uno 默认预设
		presetUno(),
		// 属性模式预设
		presetAttributify(),
		// 图标预设
		presetIcons({ scale: 1.2, warn: true }),
		// 排版预设
		presetTypography(),
		// 字体预设
		presetWebFonts({
			// fonts: {
			// 	sans: 'Roboto',
			// 	mono: ['Fira Code', 'Fira Mono:400,700'],
			// 	lobster: 'Lobster',
			// 	lato: [
			// 		{
			// 			name: 'Lato',
			// 			weights: ['400', '700'],
			// 			italic: true
			// 		},
			// 		{
			// 			name: 'sans-serif',
			// 			provider: 'none'
			// 		}
			// 	]
			// }
			/* 
				web-fonts生成的字体样式
				
				@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Fira+Code&family=Fira+Mono:wght@400;700&family=Lobster&family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');

				.font-lato {
					font-family: "Lato", sans-serif;
				}
				.font-lobster {
					font-family: "Lobster";
				}
				.font-mono {
					font-family: "Fira Code", "Fira Mono", ui-monospace, SFMono-Regular, Menlo,
						Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
				}
				.font-sans {
					font-family: "Roboto", ui-sans-serif, system-ui, -apple-system,
						BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
						sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
						"Noto Color Emoji";
				}
			*/
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()]
})
