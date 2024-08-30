import { defineConfig } from "vitepress";

export default defineConfig({
  title: "博客",
  description: "前端笔记",
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          { text: "Vue", link: "/webFront/vue-docs" },
          { text: "React", link: "/api-examples" },
        ]
      },
      { text: "Linux", link: "/docs/linux" },
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },

  // 全局自定标题
  markdown: {
    container: {
      warningLabel: "警告",
    },
    image: {
      lazyLoading: true,
    },
  },

  // 部署github 资源定位
  // base: "/blogs.github.io/",
  srcDir: './src',
});
