# FVNIX_KK2.0 快速启动指南

## 🚀 5 分钟完成部署

本指南将帮助你在 5 分钟内将 FVNIX_KK2.0 部署到线上。

---

## 📋 前提条件

在开始之前，请确保你拥有：

- ✅ GitHub 账号
- ✅ Vercel 账号（可以用 GitHub 登录）
- ✅ WIX 域名管理权限（可选，待域名确定后配置）

---

## 第一步：创建 GitHub 仓库（2 分钟）

### 1.1 在 GitHub 创建新仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `FVNIX_KK2.0`
   - **Description**: `FVNIX B2B Essential Oils Platform - Next.js 16`
   - **Visibility**: Private（推荐）或 Public
   - **不要勾选** "Initialize this repository with a README"
3. 点击 "Create repository"

### 1.2 记录仓库地址

复制新创建的仓库地址，格式如下：
```
https://github.com/YOUR_USERNAME/FVNIX_KK2.0.git
```

---

## 第二步：推送代码到 GitHub（1 分钟）

**请提供你的 GitHub 仓库地址**，我将立即帮你推送代码！

格式示例：
```
https://github.com/your-username/FVNIX_KK2.0.git
```

---

## 第三步：Vercel 部署（2 分钟）

### 3.1 导入项目

1. 访问 https://vercel.com/new
2. 点击 "Import Git Repository"
3. 选择 `FVNIX_KK2.0` 仓库
4. 点击 "Import"

### 3.2 配置项目

Vercel 会自动检测 Next.js 项目，使用默认配置即可：

- **Framework Preset**: Next.js（自动检测）
- **Root Directory**: `./`（默认）
- **Build Command**: `npm run build`（自动）
- **Output Directory**: `.next`（自动）

### 3.3 开始部署

点击 "Deploy" 按钮，等待 2-3 分钟，部署完成！

---

## 第四步：验证部署（1 分钟）

### 4.1 检查部署状态

部署成功后，Vercel 会显示：
```
✅ Your project is live!
🌐 https://fvnix-kk2-0.vercel.app
```

### 4.2 测试功能

访问你的网站，测试以下功能：

- [ ] 首页加载正常
- [ ] 产品页面（/products）可访问
- [ ] 文档中心（/documents）可访问
- [ ] 多选过滤功能正常
- [ ] 移动端响应式显示正常

---

## 🎯 预期结果

部署成功后，你将看到：

### 首页
- 3D 交互式场景
- 公司简介
- 核心优势展示
- CTA 按钮

### 产品页面 (/products)
- 35 种精油产品卡片
- 多选过滤器（系列、产地、提取方式、标签）
- 搜索功能
- 响应式网格布局

### 文档中心 (/documents)
- 技术文档列表（TDS、COA、GCMS、SDS）
- 多选过滤器（类型、产品、批次）
- 搜索功能
- PDF 下载链接

---

## 📱 自定义域名（可选）

### 5.1 等待域名确定

当你的域名确定后，执行以下步骤：

### 5.2 在 Vercel 添加域名

1. 进入 Vercel 项目页面
2. 点击 "Settings" → "Domains"
3. 输入你的域名（例如：`www.yourcompany.com`）
4. 点击 "Add"

### 5.3 配置 DNS

Vercel 会提供 DNS 配置信息，例如：

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 5.4 在 WIX 配置 DNS

1. 登录 WIX 域名管理
2. 进入 DNS 设置
3. 添加 Vercel 提供的 CNAME 记录
4. 保存更改

### 5.5 等待生效

DNS 传播通常需要 1-24 小时。你可以使用以下工具检查：
- https://dnschecker.org
- https://www.whatsmydns.net

---

## 🔄 日常更新流程

部署完成后，日常更新非常简单：

```bash
# 1. 修改代码（例如更新产品信息）
vim src/data/products.ts

# 2. 提交更改
git add .
git commit -m "更新产品信息"

# 3. 推送到 GitHub
git push

# 4. Vercel 自动部署（30 秒完成）
# 无需任何操作，Vercel 会自动检测并部署！
```

---

## ❓ 常见问题

### Q1: 部署失败怎么办？

**A**: 检查 Vercel 构建日志：
1. 进入 Vercel 项目页面
2. 点击 "Deployments"
3. 点击失败的部署
4. 查看详细日志

常见问题：
- **TypeScript 错误**: 确保使用最新代码
- **构建超时**: 稍后重试或联系 Vercel 支持

### Q2: 如何回滚到之前的版本？

**A**: 在 Vercel Dashboard：
1. 点击 "Deployments"
2. 找到之前成功的部署
3. 点击 "..." → "Promote to Production"

### Q3: 如何查看访问统计？

**A**: Vercel 提供免费的分析功能：
1. 进入项目页面
2. 点击 "Analytics" 标签
3. 查看访问量、地理分布、性能指标

### Q4: 如何启用预览部署？

**A**: 默认已启用！
- `main` 分支 → 生产环境
- 其他分支 → 预览环境
- Pull Request → 自动预览

---

## 📞 获取帮助

如果遇到问题：

1. **查看文档**:
   - [PROJECT_INFO.md](./PROJECT_INFO.md)
   - [COMPLETE_DEPLOYMENT_GUIDE.md](./COMPLETE_DEPLOYMENT_GUIDE.md)

2. **检查构建日志**:
   - Vercel Dashboard → Deployments → 点击查看日志

3. **联系支持**:
   - 我可以帮助你排查问题！

---

## ✅ 检查清单

部署前检查：

- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] Vercel 账号已准备
- [ ] 已了解基本操作流程

部署后验证：

- [ ] 网站可以访问
- [ ] 所有页面正常加载
- [ ] 过滤功能正常
- [ ] 移动端显示正常
- [ ] 文档链接可点击

---

## 🎉 开始行动！

**准备好了吗？** 请提供你的 GitHub 仓库地址，我们马上开始！

格式：
```
https://github.com/your-username/FVNIX_KK2.0.git
```

提供后，我将：
1. ✅ 配置 Git 远程仓库
2. ✅ 推送所有代码
3. ✅ 提供 Vercel 部署指引
4. ✅ 协助完成整个流程

**让我们开始吧！** 🚀
