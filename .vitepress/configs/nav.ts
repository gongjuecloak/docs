/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '文档', link: '/docs/' },
      {
        text: '友链',
        items: [
          { text: '博客', link: 'https://blog.gjcloak.top/' },
          { text: '理想城', link: 'https://lzplus.top/' },
          { text: '市民广场', link: 'https://im.lzplus.top/' },
          { text: '状态', link: 'https://status.lzplus.top/status/all' }
        ]
      },
      { text: '订阅', link: 'https://lzplus.top/@docs' }
]