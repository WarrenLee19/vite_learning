import { defineConfig,normalizePath } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer';
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from 'path';
import windi from "vite-plugin-windicss";

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/style/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  // css 相关的配置
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  plugins: [
      react(),
      windi()
  ],
})
