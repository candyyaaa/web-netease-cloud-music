/*
 * @Description: 工具方法
 * @Author: smellycat littlecandyi@163.com
 * @Date: 2024-01-06 22:08:34
 * @LastEditors: smellycat littlecandyi@163.com
 * @LastEditTime: 2024-01-06 23:18:48
 */
import { resolve } from 'path'

/**
 * 根据传入的路径获取绝对路径
 * @param {string} dir
 * @returns {string} path
 */
export const pathResolve = (dir: string): string => resolve(process.cwd(), '.', dir)
