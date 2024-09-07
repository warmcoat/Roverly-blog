import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_sidebar.mjs'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Roverly-blog/",
  head: [["link", {rel: "icon", href: "/Roverly-blog/cafei.png"}]],
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    styles: '/styles.css',
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    outlineTitle:'目录',
    outline: "deep",
    logo: './public/img/cafei.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Web前端' , items:[
        {text: 'javaScript', link: '/webFront/web-javascript'},
        {text: 'html', link: '/webFront/web-html'},
        {text: 'css', link: '/webFront/web-css'},
        {text: 'vue', link: '/webFront/web-vue'},
        {text: 'web面试题', link: '/webFront/web-mianshiti'}
      ]},
      {text : '后端知识', link: '/backend/nodejs/'}
    ],
/**
 *  sidebar: [
      {
        text: 'Web前端',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'JavaScript', link: '/webFront/web-javascript' },
          { text: 'HTML+CSS', link: '/webFront/web-htmlcss' },
          { text: 'vue全家桶', link: '/webFront/web-vue' },
          { text: 'web面试题', link: '/webFront/web-mianshiti' },
        ]
      }
    ],
 * 
 */

 

 
   

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: "Copyright@ 2024 Roverly",
    },
     // 设置搜索框的样式
     search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
    
})
