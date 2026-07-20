# 个人主页 (Personal Website)

基于 [Astro](https://astro.build/) 的极简静态个人主页，部署在 GitHub Pages。

## 页面结构

单个页面，4 个区块（顶部导航锚点跳转）：

1. **About** — 个人简介 + 头像
2. **Papers** — 发表的论文
3. **Games** — 制作的游戏
4. **Projects** — 开源项目

## 目录结构

```
personal-site/
├── src/
│   ├── components/         # 卡片、导航、页脚
│   ├── content/            # ★ 内容在这里
│   │   ├── papers/         #   每篇论文一个 .md
│   │   ├── games/          #   每个游戏一个 .md
│   │   └── projects/       #   每个项目一个 .md
│   │   └── config.ts       #   内容字段定义
│   ├── layouts/            # 页面模板
│   ├── pages/index.astro   # 唯一一个页面
│   └── styles/global.css   # 全局样式
├── public/images/          # 头像、游戏封面
├── .github/workflows/      # GitHub Actions 自动部署
└── astro.config.mjs
```

## 本地预览

```bash
npm install      # 第一次需要
npm run dev      # 打开 http://localhost:4321
```

## 添加内容

| 想做的事 | 操作 |
|---|---|
| 加一篇论文 | 在 `src/content/papers/` 新建 `xxx.md`，参考 [schema](src/content/config.ts) 和已有的示例 |
| 加一个游戏 | 在 `src/content/games/` 新建 `xxx.md` |
| 加一个开源项目 | 在 `src/content/projects/` 新建 `xxx.md` |
| 改个人简介 | 编辑 `src/pages/index.astro` 顶部的 `hero` 区块 |
| 换头像/封面 | 把图片放进 `public/images/`，文件名跟 markdown 里一致即可 |
| 换主题色 | 编辑 `src/styles/global.css` 顶部的 `:root` 变量 |

> **99% 的日常更新 = 新建一个 .md 文件 + git push**

## 部署到 GitHub Pages

### 第一次部署

1. **创建 GitHub 仓库**
   - 在 GitHub 新建一个仓库，名字必须是 **`你的用户名.github.io`**
   - 不要勾选 "Add a README"

2. **初始化并推送代码**
   ```bash
   cd personal-site
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
   git push -u origin main
   ```

3. **打开 GitHub Pages**
   - 进入仓库 → Settings → Pages
   - Source 选 **GitHub Actions**
   - 等 1~2 分钟，访问 `https://你的用户名.github.io`

### 替换占位符（上线前必做）

- `astro.config.mjs` → `site` 字段填你的用户名
- `src/pages/index.astro` → 邮箱、GitHub、Scholar、Twitter 链接
- `src/components/Footer.astro` → 邮箱、GitHub、Scholar 链接
- `src/content/papers/*.md` → 替换为你的真实论文
- `src/content/games/*.md` → 替换为你的真实游戏
- `src/content/projects/*.md` → 替换为你的真实项目
- `public/images/` → 放入头像和游戏封面

### 之后每次更新

```bash
git add .
git commit -m "add new paper: xxx"
git push
# → GitHub Actions 自动构建并部署，1~2 分钟后生效
```

## 技术栈

- [Astro 4](https://astro.build/) — 静态站点生成
- 原生 CSS（带暗色模式自动适配）
- GitHub Actions 自动部署

无前端框架、无 JS 依赖（除 Astro 本身），所有内容用 Markdown 写。