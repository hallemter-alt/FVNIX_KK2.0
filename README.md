# FVNIX_KK2.0 - 公司官网 2.0

## 🎯 项目简介

FVNIX_KK2.0 是基于原 FVNIX 代码库的增强版本，专为部署到新的生产环境而优化。

### 版本信息
- **版本**: 2.0.0
- **基于**: FVNIX_KK 原代码库
- **创建日期**: 2026-02-03
- **技术栈**: Next.js 16 + React 19 + TypeScript + Tailwind CSS

---

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run dev
```
访问：http://localhost:3000

### 生产构建
```bash
npm run build
npm start
```

---

## 📦 项目特性

### 核心功能
- ✅ **产品展示** - 35 种精油产品完整信息
- ✅ **多选过滤** - 产品和文档的高级过滤系统
- ✅ **文档中心** - TDS、COA、SDS、GCMS 技术文档
- ✅ **多语言支持** - 中文、英文、日文
- ✅ **批次追溯** - 产品批次管理系统
- ✅ **响应式设计** - 完美支持桌面和移动设备

### 技术优化
- ✅ **Next.js 16** - 最新版本，优化性能
- ✅ **强制动态渲染** - 解决 SSR 预渲染问题
- ✅ **TypeScript** - 完整类型安全
- ✅ **Tailwind CSS 4** - 现代化样式系统
- ✅ **Three.js** - 3D 交互式背景

---

## 🏢 公司信息

### FVNIX 公司简介
**福万年香料（云南）有限公司** (FV NIX) 是一家专注于高海拔天然植物精油的专业制造商。

### 核心优势
- 🌍 **全球市场地位**
  - 桉树油全球第一（市场份额 >40%）
  - 肉桂油全球前三（市场份额 ~30%）
  - 茶树油全球前二（市场份额 ~30%）

- 🏭 **生产实力**
  - 25+ 年行业经验
  - 100+ 全球客户
  - ¥514M 年营收

- 🎖️ **认证体系**
  - KOSHER 认证
  - REACH 合规
  - HACCP 食品安全
  - cGMP 制药标准
  - ISO 9001 质量管理
  - 食品生产许可证
  - 药用桉树油 GMP
  - 生物农药许可证

### 产品系列
1. **柑橘系列 (Citrus)** - 佛手柑、柠檬、甜橙等
2. **花香系列 (Floral)** - 薰衣草、天竺葵、依兰等
3. **草本系列 (Herbal)** - 迷迭香、百里香、罗勒等
4. **木质系列 (Woody)** - 雪松、檀香、柏树等
5. **辛香系列 (Spicy)** - 肉桂、丁香、生姜等
6. **树脂系列 (Resinous)** - 乳香、没药、安息香等

---

## 📁 项目结构

```
FVNIX_KK2.0/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 首页
│   │   ├── about/             # 关于我们
│   │   ├── products/          # 产品页面
│   │   ├── documents/         # 文档中心
│   │   ├── certifications/    # 认证页面
│   │   └── market-position/   # 市场地位
│   │
│   ├── components/             # React 组件
│   │   ├── layout/            # 布局组件
│   │   ├── products/          # 产品组件
│   │   └── documents/         # 文档组件
│   │
│   ├── lib/                    # 工具函数
│   │   ├── types.ts           # TypeScript 类型定义
│   │   └── dataService.ts     # 数据服务
│   │
│   └── data/                   # 数据文件
│       ├── products.ts        # 产品数据
│       ├── documents.ts       # 文档数据
│       └── lots.ts            # 批次数据
│
├── public/                     # 静态资源
│   ├── images/                # 图片
│   └── docs/                  # PDF 文档
│
├── docs/                       # 项目文档
│   ├── COMPLETE_DEPLOYMENT_GUIDE.md
│   ├── QUICK_DEPLOYMENT_FLOWCHART.md
│   └── ... (其他文档)
│
├── package.json               # 项目配置
├── next.config.ts             # Next.js 配置
├── tailwind.config.ts         # Tailwind 配置
└── tsconfig.json              # TypeScript 配置
```

---

## 🔧 配置说明

### 关键配置文件

#### 1. 动态渲染配置
已在以下页面启用强制动态渲染：
- `src/app/products/page.tsx`
- `src/app/documents/page.tsx`

```typescript
export const dynamic = 'force-dynamic';
```

#### 2. TypeScript 配置
完整的类型安全，所有组件和函数都有类型定义。

#### 3. Tailwind CSS
使用最新的 Tailwind CSS 4 版本，提供现代化的样式系统。

---

## 📝 自定义指南

### 修改公司信息
如需修改公司信息，编辑以下文件：
- `src/app/layout.tsx` - 网站标题和描述
- `src/app/page.tsx` - 首页内容
- `src/app/about/page.tsx` - 关于我们页面

### 修改产品数据
编辑 `src/data/products.ts` 文件：
```typescript
export const products: Product[] = [
  {
    slug: "your-product",
    name: {
      zh: "产品中文名",
      en: "Product Name",
    },
    // ... 其他字段
  },
]
```

### 添加新页面
在 `src/app/` 目录下创建新文件夹和 `page.tsx` 文件即可。

---

## 🚀 部署指南

### 部署到 Vercel

#### 方法 1：通过 GitHub
1. 将代码推送到 GitHub
2. 访问 https://vercel.com
3. Import Git Repository
4. 选择仓库并部署

#### 方法 2：使用 Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### 域名配置
详细说明请参考：
- `docs/COMPLETE_DEPLOYMENT_GUIDE.md`
- `docs/QUICK_DEPLOYMENT_FLOWCHART.md`

---

## 📚 文档资源

### 部署相关
- `COMPLETE_DEPLOYMENT_GUIDE.md` - 完整部署指南
- `QUICK_DEPLOYMENT_FLOWCHART.md` - 快速部署流程
- `HOW_TO_DEPLOY_LATEST.md` - Vercel 部署说明

### 技术相关
- `EMERGENCY_FIX_FORCE_DYNAMIC.md` - 动态渲染配置
- `FIX_REVALIDATE_ERROR.md` - 构建错误修复
- `CODE_VERIFICATION_REPORT.md` - 代码验证报告

### 测试相关
- `TEST_CASES.md` - 测试用例
- `IMPLEMENTATION_SUMMARY.md` - 实现总结

---

## 🔒 安全性

- ✅ HTTPS 强制加密（Vercel 自动提供）
- ✅ 输入验证和类型检查
- ✅ 无敏感信息泄露
- ✅ 安全的依赖版本

---

## 📈 性能优化

- ✅ Next.js 16 Turbopack 构建优化
- ✅ 图片自动优化
- ✅ 代码分割和懒加载
- ✅ 全球 CDN 加速（Vercel）
- ✅ 静态资源缓存

---

## 🐛 问题排查

### 常见问题

**Q: 构建失败怎么办？**
A: 确保所有使用 `useSearchParams()` 的页面都有 `export const dynamic = 'force-dynamic'`

**Q: 域名无法访问？**
A: 检查 DNS 配置，等待 DNS 传播（最多 48 小时）

**Q: 更新不生效？**
A: 确认 Git 推送成功，检查 Vercel Dashboard 部署状态

---

## 📞 支持和帮助

- **Next.js 文档**: https://nextjs.org/docs
- **Vercel 文档**: https://vercel.com/docs
- **React 文档**: https://react.dev

---

## 📄 许可证

MIT License

---

## 👥 维护者

- 初始版本：基于 FVNIX_KK 原代码库
- 2.0 版本：优化和增强

---

**最后更新**: 2026-02-03
**版本**: 2.0.0
**状态**: ✅ 生产就绪
