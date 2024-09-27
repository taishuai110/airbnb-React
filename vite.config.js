import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';
import tailwindcss from "tailwindcss";

export default ({ mode }) => {
  // 获取env环境变量
  /**
   *  mode: 判断生产production还是开发development
   *  第二个参数: env的路径
   *  第三个参数[可选], 接受一个string || string[] 里面规定能读取哪些前缀变量
   *  
   *  return 返回一个对象 对象里面的属性都是要被读取的环境变量
   */
  const env = loadEnv(mode, `${__dirname}/env`, ['VITE_']) || {};

  // 配置项
  return defineConfig({

    // 让src里面也能访问到环境变量
    envDir: "./env",

    plugins: [react()],

    resolve: {
      alias: {
        '@': resolve(__dirname, "./src")
      }
    },

    // 新增css配置
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    },

    // 解决路由跨域问题
    server: {
      host: env.VITE_API_HOST, // 本地地址
      open: false, // 是否自动启动浏览器
      port: env.VITE_API_PORT, // 端口号
      // 跨域配置
      proxy: {
        '/api': {
          target: env.VITE_API_ENV,
          changeOrigin: true, // 开启代理
          // rewrite: (path) => path.replace(/^\/api/, '') // 把/api替换成空字符
        }
      }
    }
  })
}
