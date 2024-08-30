import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "博客",
  description: "前端笔记",
  head:[
    ['link',{rel:"icon",href:"/public/favicon.ico"}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      // { text:"语法练习", link :"/test"}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: "语法练习", link: "/grammarTest/test" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  // 全局自定标题
  markdown:{
    container:{
      warningLabel:"警告"
    },
    image:{
      lazyLoading:true
    }
  }
})
