/*
 * @Description: main入口
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 20:38:48
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-07 17:30:57
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import { registerStore } from '@/store'
import router from '@/router'

// tailwind 初始化css
import '@unocss/reset/tailwind.css'
// svg图标
import 'virtual:svg-icons-register'
// uno.css
import 'virtual:uno.css'

const app = createApp(App)
app.use(createPinia())
// 注册 pinia
registerStore()
app.use(router)
app.mount('#app')
