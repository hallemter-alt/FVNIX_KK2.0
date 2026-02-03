# 🚀 Vercel 部署指南

## 📋 部署前檢查清單

- [x] 代碼已提交到 Git
- [x] 代碼已推送到 GitHub
- [x] PR 已創建（可選，可以直接從分支部署）
- [x] 本地測試通過
- [x] 依賴項已正確配置

---

## 方法一：通過 Vercel Dashboard 部署（推薦）

### 步驟 1：訪問 Vercel
1. 前往 **https://vercel.com**
2. 使用 GitHub 賬號登錄
3. 如果沒有賬號，點擊 "Sign Up" 並選擇 "Continue with GitHub"

### 步驟 2：導入 GitHub 項目
1. 在 Vercel Dashboard 點擊 **"Add New..."** → **"Project"**
2. 點擊 **"Import Git Repository"**
3. 如果是第一次使用，需要授權 Vercel 訪問 GitHub
4. 在列表中找到 **"FVNIX_KK"** 項目
5. 點擊 **"Import"**

### 步驟 3：配置項目設置

#### 基本設置
- **Project Name**: `fvnix-site`（或您喜歡的名稱）
- **Framework Preset**: Next.js（應該自動檢測）
- **Root Directory**: `./`（保持默認）
- **Build Command**: `npm run build`（自動檢測）
- **Output Directory**: `.next`（自動檢測）
- **Install Command**: `npm install`（自動檢測）

#### 分支設置
選擇要部署的分支：
- **選項 A**: 部署 `main` 分支（生產環境）
  - 需要先合併 PR #1
- **選項 B**: 部署 `genspark_ai_developer` 分支（測試環境）
  - 可以立即部署查看效果

### 步驟 4：環境變量（如果需要）
目前項目沒有需要配置的環境變量，可以跳過此步驟。

未來如果需要添加環境變量：
- 點擊 **"Environment Variables"**
- 添加變量，例如：
  ```
  NEXT_PUBLIC_API_URL=https://api.example.com
  DATABASE_URL=postgresql://...
  ```

### 步驟 5：部署
1. 檢查所有設置無誤
2. 點擊 **"Deploy"** 按鈕
3. 等待部署完成（通常 2-5 分鐘）

### 步驟 6：查看部署結果
部署完成後，您會看到：
- ✅ 部署成功的確認頁面
- 🔗 公共訪問 URL（例如：`https://fvnix-site.vercel.app`）
- 📊 部署日誌和統計信息

---

## 方法二：通過 Vercel CLI 部署

### 安裝 Vercel CLI
```bash
npm install -g vercel
```

### 登錄 Vercel
```bash
vercel login
```

### 部署到測試環境
```bash
cd /home/user/webapp/fvnix-site
vercel
```

按照提示操作：
1. Set up and deploy? → **Yes**
2. Which scope? → 選擇您的賬號
3. Link to existing project? → **No**（如果是第一次部署）
4. Project name? → `fvnix-site`
5. In which directory? → `./`（按 Enter）

### 部署到生產環境
```bash
vercel --prod
```

---

## 方法三：通過 GitHub Actions 自動部署

### 創建 GitHub Actions 工作流程

創建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

需要在 GitHub Secrets 中配置：
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

---

## 📊 部署後的配置

### 1. 自定義域名（可選）
1. 在 Vercel Dashboard 進入項目
2. 點擊 **"Settings"** → **"Domains"**
3. 添加您的自定義域名（例如：`fvnix.com`）
4. 按照提示配置 DNS 記錄：
   - **A Record**: 指向 Vercel IP
   - **CNAME**: 指向 `cname.vercel-dns.com`

### 2. 環境配置
在 Vercel Dashboard 中：
- **Production**: 生產環境配置
- **Preview**: 預覽環境（PR 部署）
- **Development**: 開發環境

### 3. 自動部署設置
默認情況下：
- Push 到 `main` 分支 → 自動部署到生產環境
- 創建 PR → 自動部署預覽環境
- Push 到其他分支 → 不自動部署（可配置）

您可以在 **Settings** → **Git** 中調整：
- 生產分支設置
- 忽略特定分支
- 部署鉤子

---

## 🔧 常見問題和解決方案

### 問題 1：構建失敗
**錯誤**: Build failed

**解決方案**:
1. 檢查本地是否能成功構建：
   ```bash
   npm run build
   ```
2. 檢查 Vercel 構建日誌查看具體錯誤
3. 確保 `package.json` 中的依賴完整

### 問題 2：Node 版本不匹配
**錯誤**: Node version mismatch

**解決方案**:
在項目根目錄創建 `.nvmrc` 文件：
```
18
```

或在 `package.json` 中指定：
```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### 問題 3：環境變量未生效
**解決方案**:
1. 確保環境變量以 `NEXT_PUBLIC_` 開頭（客戶端變量）
2. 在 Vercel Dashboard 中正確配置
3. 重新部署項目

### 問題 4：靜態文件 404
**解決方案**:
確保靜態文件在 `public` 目錄中，Next.js 會自動處理。

---

## 📈 性能優化建議

### 1. 啟用圖片優化
Next.js 自動優化圖片，但確保使用 `next/image` 組件：
```tsx
import Image from 'next/image';

<Image 
  src="/product.jpg" 
  width={500} 
  height={300} 
  alt="Product"
/>
```

### 2. 配置 Caching Headers
在 `next.config.ts` 中：
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },
};
```

### 3. 啟用壓縮
Vercel 默認啟用 Brotli 和 Gzip 壓縮，無需額外配置。

---

## 🔒 安全配置

### 1. 設置安全頭部
在 `next.config.ts` 中：
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};
```

### 2. 配置 CORS（如果需要）
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
        ],
      },
    ];
  },
};
```

---

## 📊 監控和分析

### 1. Vercel Analytics
在 Vercel Dashboard 中啟用：
- **Settings** → **Analytics**
- 查看訪問量、性能指標等

### 2. 性能監控
Vercel 自動提供：
- Core Web Vitals
- 頁面加載時間
- 首次內容繪製（FCP）
- 最大內容繪製（LCP）

### 3. 錯誤追蹤
集成 Sentry（可選）：
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

---

## 🎯 部署檢查清單

部署前確認：
- [ ] 代碼已推送到 GitHub
- [ ] 本地測試通過（`npm run build` 成功）
- [ ] 環境變量已配置（如果需要）
- [ ] `package.json` 依賴完整
- [ ] `.gitignore` 正確配置

部署後驗證：
- [ ] 網站可以訪問
- [ ] 所有頁面正常加載
- [ ] 產品過濾功能正常
- [ ] 文檔過濾功能正常
- [ ] 響應式設計正常
- [ ] 性能指標良好

---

## 📞 獲取幫助

### Vercel 資源
- 文檔: https://vercel.com/docs
- 支持: https://vercel.com/support
- 社區: https://github.com/vercel/next.js/discussions

### Next.js 資源
- 文檔: https://nextjs.org/docs
- 示例: https://github.com/vercel/next.js/tree/canary/examples

---

## 🚀 快速開始命令

```bash
# 方法 1: Vercel CLI
npm install -g vercel
vercel login
cd /home/user/webapp/fvnix-site
vercel --prod

# 方法 2: 直接推送到 GitHub（如果配置了自動部署）
git push origin main

# 本地測試構建
npm run build
npm start
```

---

## 📝 部署 URL 示例

部署成功後，您會獲得類似這樣的 URL：

- **生產環境**: `https://fvnix-site.vercel.app`
- **自定義域名**: `https://fvnix.com`（配置後）
- **預覽部署**: `https://fvnix-site-git-feature-branch.vercel.app`

每個 PR 也會自動生成預覽 URL！

---

**準備好部署了嗎？** 🚀

選擇上面的任一方法開始部署，最簡單的是方法一（Vercel Dashboard）！
