import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "理想城",
  description: "理想城相关文档",
  head: [['link', { rel: 'icon', href: '/img/地球星球.png' }]],
  sitemap: {
    hostname: 'https://docs.lzplus.top'
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/地球星球.svg',
    nav: [
      { text: '文档', link: '/' },
      {
        text: '友链',
        items: [
          { text: '博客', link: 'https://blog.gjcloak.top/' },
          { text: '理想城', link: 'https://lzplus.top/' },
          { text: '状态', link: 'https://status.lzplus.top/status/all' }
        ]
      },
      { text: '订阅', link: 'https://lzplus.top/@docs' }
    ],

    sidebar: [
      {
        text: '基础规范',
        items: [
          { text: '实例说明', link: '/basic/Arcology-Project-Description' },
          { text: '实例规则', link: '/basic/Instance-Rules' },
          { text: '隐私政策', link: '/basic/Privacy-Policy' },
          { text: '注意事项', link: '/basic/IMPORTANT_NOTES'}
        ]
      },
      {
        text: '其他',
        items: [
          { text: '联系我们', link: '/other/contact-us' },
          { text: '服务架构', link: '/other/Service-Architecture' },
          { text: '赞助', link: '/other/sponsor' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: '更新于 ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    editLink: {
      pattern: 'https://github.com/gongjuecloak/docs/edit/main/:path',
      text: '在GitHub上编辑'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gongjuecloak/docs' }
    ],
    footer: {
      message: '基于 <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans">CC-BY-SA-4.0</a> 授权',
      copyright: '© 2020-2024 理想城 版权所有'
    }
  }
  
})
