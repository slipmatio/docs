// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import SlipmatIndex from './SlipmatIndex.vue'
import './style.css'

// https://vitepress.dev/guide/extending-default-theme#layout-slots
export default {
  extends: DefaultTheme,
  Layout: SlipmatIndex,
} satisfies Theme
