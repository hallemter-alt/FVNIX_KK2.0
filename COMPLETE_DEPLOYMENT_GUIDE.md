# 🚀 基于现有代码库构建新网站完整指南

## 📋 项目概述

**目标**：
1. ✅ 复用当前 FVNIX 代码库（大部分不变动）
2. ✅ 通过 GitHub 保存和管理代码
3. ✅ 部署到 Vercel
4. ✅ 连接到 WIX 管理的公司域名

---

## 🎯 整体流程

```
当前代码库 → 新 GitHub 仓库 → Vercel 部署 → WIX 域名绑定
```

---

## 第一步：准备新的 GitHub 仓库

### 选项 A：创建新仓库（推荐）

#### 1. 在 GitHub 创建新仓库
```
访问：https://github.com/new

Repository name: your-company-website
Description: 公司官方网站
Visibility: Private 或 Public（根据需要）

✅ 不要勾选 "Initialize this repository with README"
```

#### 2. 复制当前代码到新仓库
```bash
cd /home/user/webapp

# 创建新项目目录
cp -r fvnix-site your-company-website
cd your-company-website

# 移除旧的 Git 历史
rm -rf .git

# 初始化新的 Git 仓库
git init
git add .
git commit -m "Initial commit: Company website based on FVNIX template"

# 连接到新的 GitHub 仓库
git remote add origin https://github.com/YOUR-USERNAME/your-company-website.git
git branch -M main
git push -u origin main
```

### 选项 B：Fork 当前仓库
```
1. 访问：https://github.com/hallemter-alt/FVNIX_KK
2. 点击右上角的 "Fork" 按钮
3. 选择你的账号
4. 重命名仓库（可选）
```

---

## 第二步：自定义网站内容

### 需要修改的文件

#### 1. 基本信息 (`package.json`)
```json
{
  "name": "your-company-website",
  "version": "1.0.0",
  "description": "Your Company Official Website"
}
```

#### 2. 网站元数据 (`src/app/layout.tsx`)
```typescript
export const metadata = {
  title: '您的公司名称',
  description: '您的公司简介',
  keywords: ['关键词1', '关键词2'],
}
```

#### 3. 公司信息

**创建配置文件**: `src/config/company.ts`
```typescript
export const companyInfo = {
  name: {
    zh: "您的公司中文名",
    en: "Your Company Name",
  },
  logo: "/images/logo.png",
  contact: {
    email: "info@yourcompany.com",
    phone: "+86 123-4567-8900",
    address: "公司地址",
  },
  social: {
    linkedin: "https://linkedin.com/company/yourcompany",
    facebook: "https://facebook.com/yourcompany",
  }
}
```

#### 4. 产品数据 (`src/data/products.ts`)
```typescript
// 根据你的实际产品修改
export const products: Product[] = [
  {
    slug: "product-1",
    name: {
      zh: "产品名称",
      en: "Product Name",
    },
    // ... 其他字段
  },
  // 添加更多产品
]
```

#### 5. 首页内容 (`src/app/page.tsx`)
```typescript
// 修改首页的公司介绍、使命、愿景等内容
```

#### 6. 关于我们页面 (`src/app/about/page.tsx`)
```typescript
// 修改公司历史、团队信息等
```

### 可以保持不变的文件
```
✅ src/components/      - UI 组件（可复用）
✅ src/lib/             - 工具函数（可复用）
✅ src/app/products/    - 产品页面结构（可复用）
✅ src/app/documents/   - 文档页面结构（可复用）
✅ public/              - 静态资源（替换图片即可）
✅ tailwind.config.ts   - 样式配置（可复用）
```

---

## 第三步：部署到 Vercel

### 方法 1：通过 Vercel Dashboard（推荐）

#### 1. 登录 Vercel
```
访问：https://vercel.com
使用 GitHub 账号登录
```

#### 2. 导入项目
```
1. 点击 "Add New..." → "Project"
2. 选择 "Import Git Repository"
3. 找到你的新仓库：your-company-website
4. 点击 "Import"
```

#### 3. 配置项目
```
Project Name: your-company-website
Framework Preset: Next.js (自动检测)
Root Directory: ./
Build Command: npm run build (默认)
Output Directory: .next (默认)
Install Command: npm install (默认)
Node.js Version: 18.x 或 20.x (推荐)

Environment Variables:
  (如果需要可添加环境变量)
```

#### 4. 部署
```
点击 "Deploy" 按钮
等待 2-5 分钟
```

#### 5. 获取 Vercel URL
```
部署成功后会得到：
https://your-company-website.vercel.app
或
https://your-company-website-git-main-yourname.vercel.app
```

### 方法 2：通过 Vercel CLI

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录
vercel login

# 3. 进入项目目录
cd /home/user/webapp/your-company-website

# 4. 部署
vercel

# 5. 部署到生产环境
vercel --prod
```

---

## 第四步：连接 WIX 管理的域名

### 前提条件
- ✅ 你在 WIX 有一个域名（例如：`yourcompany.com`）
- ✅ Vercel 项目已成功部署

### 步骤详解

#### 1. 在 Vercel 添加自定义域名

##### A. 进入 Vercel 项目设置
```
Vercel Dashboard → 选择你的项目 → Settings → Domains
```

##### B. 添加域名
```
1. 在 "Add Domain" 输入框中输入：
   yourcompany.com
   或
   www.yourcompany.com

2. 点击 "Add"

3. Vercel 会显示 DNS 配置说明
```

##### C. 记录 Vercel 提供的 DNS 信息
```
类型 1: A Record
Name: @
Value: 76.76.21.21 (Vercel IP)

类型 2: CNAME Record
Name: www
Value: cname.vercel-dns.com
```

#### 2. 在 WIX 配置 DNS

##### A. 登录 WIX
```
访问：https://manage.wix.com
登录你的 WIX 账号
```

##### B. 进入域名管理
```
1. 点击左侧菜单的 "Domains"（域名）
2. 找到你要使用的域名
3. 点击域名后的 "Manage" 或 "Settings"
```

##### C. 编辑 DNS 记录
```
1. 找到 "DNS Settings" 或 "Advanced DNS"
2. 点击 "Edit DNS" 或 "Manage DNS Records"
```

##### D. 添加/修改 DNS 记录

**选项 1: 使用 A Record + CNAME（推荐）**
```
记录 1:
Type: A
Host: @ (或留空)
Points to: 76.76.21.21
TTL: 3600 (1 hour)

记录 2:
Type: CNAME
Host: www
Points to: cname.vercel-dns.com
TTL: 3600 (1 hour)
```

**选项 2: 使用 CNAME（仅限 www）**
```
记录 1:
Type: CNAME
Host: www
Points to: cname.vercel-dns.com
TTL: 3600 (1 hour)

然后在 Vercel 设置重定向：
yourcompany.com → www.yourcompany.com
```

##### E. 保存 DNS 设置
```
点击 "Save" 或 "Apply Changes"
```

#### 3. 等待 DNS 传播

```
⏱️ DNS 传播时间：
- 最快：几分钟
- 通常：1-2 小时
- 最长：24-48 小时

🔍 检查 DNS 传播状态：
访问：https://dnschecker.org
输入你的域名查看全球 DNS 状态
```

#### 4. 在 Vercel 验证域名

```
回到 Vercel Dashboard → Domains

你的域名应该显示：
✅ Valid Configuration
或
🟡 Pending (等待 DNS 传播)

完成后会显示：
✅ yourcompany.com
✅ www.yourcompany.com
```

#### 5. 设置 HTTPS（自动）

```
Vercel 会自动：
✅ 生成 SSL 证书（Let's Encrypt）
✅ 强制 HTTPS 重定向
✅ 所有访问都通过 HTTPS

通常在域名验证后 5-10 分钟完成
```

---

## 第五步：WIX 特殊情况处理

### 情况 1：WIX 域名正在使用中

如果域名当前被 WIX 网站使用：

#### 方法 A：保留 WIX 网站，使用子域名
```
WIX 网站: www.yourcompany.com
Vercel 网站: app.yourcompany.com
或: shop.yourcompany.com

在 WIX DNS 添加：
Type: CNAME
Host: app (或 shop)
Points to: cname.vercel-dns.com
```

#### 方法 B：完全迁移到 Vercel
```
1. 在 WIX 删除或暂停当前网站
2. 保留域名在 WIX（仅作为 DNS 提供商）
3. 按上述步骤配置 DNS 指向 Vercel
4. WIX 域名保持在 WIX 管理，但网站在 Vercel 运行
```

### 情况 2：WIX Premium 域名

如果是 WIX Premium 域名：
```
✅ 可以修改 DNS 记录
✅ 域名所有权保持在 WIX
✅ 网站托管在 Vercel
✅ 邮箱服务（如果有）继续使用 WIX 的 MX 记录
```

### 情况 3：保留 WIX 邮箱

如果使用 WIX 的邮箱服务：
```
⚠️ 不要删除 MX 记录！

保留这些记录：
Type: MX
Priority: 10
Points to: mx.wix.com (或类似)

只修改 A 和 CNAME 记录指向 Vercel
```

---

## 第六步：验证和测试

### 1. 测试域名访问
```bash
# 检查 DNS 解析
nslookup yourcompany.com
nslookup www.yourcompany.com

# 检查 HTTPS
curl -I https://yourcompany.com
curl -I https://www.yourcompany.com
```

### 2. 浏览器测试
```
✅ https://yourcompany.com
✅ https://www.yourcompany.com
✅ 检查 SSL 证书（应该显示绿色锁）
✅ 检查所有页面正常加载
```

### 3. 功能测试
```
✅ 产品页面过滤功能
✅ 文档页面过滤功能
✅ 搜索功能
✅ 表单提交（如果有）
✅ 多语言切换（如果有）
```

---

## 第七步：持续维护和更新

### Git 工作流程

```bash
# 1. 修改代码
# 编辑文件...

# 2. 提交更改
git add .
git commit -m "Update: 描述你的更改"

# 3. 推送到 GitHub
git push origin main

# 4. Vercel 自动部署
# Vercel 会自动检测 GitHub 更新并重新部署
```

### Vercel 自动部署设置

```
Vercel Dashboard → Settings → Git

✅ Automatic Deployments: Enabled
✅ Production Branch: main
✅ Deploy Previews: Enabled (可选)
```

---

## 📋 完整检查清单

### GitHub 阶段
- [ ] 创建新的 GitHub 仓库
- [ ] 复制当前代码到新仓库
- [ ] 修改公司信息和内容
- [ ] 推送代码到 GitHub

### Vercel 阶段
- [ ] 连接 GitHub 仓库到 Vercel
- [ ] 配置项目设置
- [ ] 成功部署并获取 Vercel URL
- [ ] 测试 Vercel URL 正常工作

### 域名阶段
- [ ] 在 Vercel 添加自定义域名
- [ ] 获取 Vercel 的 DNS 配置信息
- [ ] 在 WIX 修改 DNS 记录
- [ ] 等待 DNS 传播
- [ ] 验证域名绑定成功
- [ ] 确认 HTTPS 正常工作

### 测试阶段
- [ ] 测试所有页面正常访问
- [ ] 测试所有功能正常工作
- [ ] 检查移动端显示
- [ ] 检查不同浏览器兼容性

---

## 🆘 常见问题

### Q1: DNS 修改后多久生效？
**A**: 通常 1-2 小时，最长 48 小时。

### Q2: 会影响 WIX 邮箱吗？
**A**: 不会，只要保留 MX 记录。

### Q3: 可以同时保留 WIX 网站吗？
**A**: 可以，使用子域名（如 app.yourcompany.com）。

### Q4: Vercel 部署失败怎么办？
**A**: 查看构建日志，确认代码有 `export const dynamic = 'force-dynamic'`。

### Q5: 域名可以从 WIX 转移吗？
**A**: 可以，但如果当前在 WIX 管理很方便，只改 DNS 即可。

---

## 📚 相关资源

### 文档链接
- **Vercel 域名配置**: https://vercel.com/docs/concepts/projects/domains
- **Next.js 部署**: https://nextjs.org/docs/deployment
- **WIX DNS 设置**: https://support.wix.com/en/article/adding-or-updating-cname-records-in-your-wix-account

### 工具链接
- **DNS 检查**: https://dnschecker.org
- **SSL 检查**: https://www.ssllabs.com/ssltest/
- **网站速度**: https://pagespeed.web.dev/

---

## 🎉 总结

**完整流程**：
1. ✅ 复制代码到新 GitHub 仓库
2. ✅ 自定义公司内容
3. ✅ 部署到 Vercel
4. ✅ 在 WIX 修改 DNS 指向 Vercel
5. ✅ 验证域名和 HTTPS

**优势**：
- 🚀 快速部署（基于现有代码）
- 💰 免费托管（Vercel Hobby 计划）
- 🔒 自动 HTTPS
- 📊 性能优化（CDN 加速）
- 🔄 自动部署（Git 推送即更新）

**预计时间**：
- 代码准备：1-2 小时
- Vercel 部署：10 分钟
- DNS 配置：10 分钟
- DNS 生效：1-24 小时

---

**准备开始了吗？让我知道你在哪一步需要帮助！** 🚀
