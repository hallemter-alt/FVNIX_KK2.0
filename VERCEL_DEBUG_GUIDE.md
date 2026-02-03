# 🔍 Vercel 构建失败诊断指南

## 当前情况

构建失败，错误信息：`Command "npm run build" exited with 1`

这个错误信息太简略，需要查看完整的构建日志。

---

## 📋 获取完整构建日志的步骤

### 方法 1：Vercel Dashboard（推荐）

1. **访问 Vercel Dashboard**
   - 前往：https://vercel.com/dashboard
   - 找到你的项目：`fvnix-site` 或 `FVNIX_KK`

2. **查看失败的部署**
   - 点击项目进入详情页
   - 点击 **Deployments** 标签
   - 找到最新的失败部署（红色 X 标记）
   - 点击进入该部署

3. **查看构建日志**
   - 点击 **Building** 或 **Build Logs** 标签
   - **向下滚动**查看完整日志
   - 特别注意以下部分：
     ```
     ✓ Compiled successfully
     Running TypeScript ...
     ← 这里可能有 TypeScript 错误
     
     Collecting page data ...
     ← 这里可能有页面生成错误
     
     Generating static pages ...
     ← 这里可能有预渲染错误
     ```

4. **复制完整错误信息**
   - 找到第一个错误（通常以 `⨯` 或 `Error:` 开头）
   - 复制从错误开始到构建失败的所有内容
   - 包括错误的文件路径、行号、具体错误消息

---

## 🔧 可能的问题和临时解决方案

### 问题 1：内存不足

**症状**：构建日志显示 `Killed` 或 `out of memory`

**解决方案**：
```bash
# 在项目根目录创建或修改 next.config.ts
export default {
  // 减少并发编译
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}
```

### 问题 2：Suspense 仍有问题

**症状**：错误提到 `useSearchParams` 或 `suspense boundary`

**解决方案**：将页面改为完全客户端渲染

**修改 `/documents/page.tsx`**：
```typescript
"use client";  // ← 添加这一行

import { Suspense } from "react";
// ... 其余代码保持不变
```

### 问题 3：动态导入问题

**症状**：错误提到 `Cannot read properties` 或组件导入失败

**解决方案**：使用动态导入

**修改页面**：
```typescript
import dynamic from 'next/dynamic';

const DocumentsFilters = dynamic(
  () => import('@/components/documents/DocumentsFilters'),
  { ssr: false }
);
```

---

## 🚨 紧急修复：强制客户端渲染

如果所有方法都失败，这是最后的备选方案：

### 步骤 1：修改 documents/page.tsx

```typescript
"use client";

import { useSearchParams } from "next/navigation";
import DocumentsFilters from "@/components/documents/DocumentsFilters";
import { getAllProducts, getDocumentOptions, getDocuments } from "@/lib/dataService";
import type { DocType } from "@/lib/types";

function parseList(v: unknown) {
  if (typeof v !== "string") return [];
  return v.split(",").map((s) => s.trim()).filter(Boolean);
}

export default function DocumentsPage() {
  const searchParams = useSearchParams();
  const allProducts = getAllProducts();
  const { types, productSlugs, lotNos } = getDocumentOptions();

  const productValues = allProducts
    .filter((p) => productSlugs.includes(p.slug))
    .map((p) => ({
      slug: p.slug,
      label: p.name.en || p.name.zh || p.slug,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const q = searchParams.get("q") || "";
  const selectedTypes = parseList(searchParams.get("type")) as DocType[];
  const selectedProducts = parseList(searchParams.get("product"));
  const selectedLots = parseList(searchParams.get("lot"));

  const docs = getDocuments({
    types: selectedTypes,
    productSlugs: selectedProducts,
    lotNos: selectedLots,
    q,
  });

  return (
    <main className="mx-auto max-w-6xl p-6">
      {/* ... 其余 JSX 保持不变 ... */}
    </main>
  );
}
```

### 步骤 2：同样修改 products/page.tsx

添加 `"use client"` 并使用 `useSearchParams()` hook。

---

## 📊 诊断检查清单

请检查以下内容并提供信息：

### 1. Vercel 构建日志
- [ ] 查看了完整的构建日志（不只是 "Build Failed"）
- [ ] 找到了第一个错误信息
- [ ] 复制了错误的文件路径和行号
- [ ] 复制了具体的错误消息

### 2. 构建阶段
- [ ] TypeScript 编译是否通过？
- [ ] 页面数据收集是否成功？
- [ ] 静态页面生成是否失败？
- [ ] 在哪个页面失败（/documents 还是 /products）？

### 3. 错误类型
- [ ] 是类型错误（TypeScript）？
- [ ] 是运行时错误（页面渲染）？
- [ ] 是内存错误（OOM）？
- [ ] 是依赖错误（missing module）？

### 4. Vercel 设置
- [ ] Production Branch 是否设置为 `main`？
- [ ] Framework Preset 是否设置为 `Next.js`？
- [ ] Node.js Version 是什么（推荐 18.x 或 20.x）？
- [ ] Build Command 是否是 `npm run build`？

---

## 🎯 下一步行动

### 立即执行

1. **获取完整构建日志**
   - 按上述方法 1 获取
   - 截图或复制完整错误信息

2. **提供以下信息**
   - 错误发生在哪个阶段（TypeScript / 页面生成 / 其他）
   - 错误提到的具体文件和行号
   - 完整的错误消息

3. **临时方案**（如果急需部署）
   - 考虑使用"强制客户端渲染"方案
   - 虽然会损失一些 SEO 和性能优势
   - 但可以快速让网站运行起来

---

## 📞 提供信息模板

请按以下格式提供信息：

```
### 构建阶段
[TypeScript 编译 / 页面数据收集 / 静态页面生成 / 其他]

### 错误文件
src/app/[具体路径]/page.tsx

### 错误行号
第 [X] 行

### 完整错误信息
[复制粘贴完整错误]

### 错误上下文
[错误前后 5-10 行的日志]

### Vercel 设置
- Node.js Version: [版本号]
- Framework: [Next.js / 其他]
- Build Command: [命令]
```

---

## 🔗 有用的链接

- **Next.js 16 文档**: https://nextjs.org/docs
- **Vercel 构建日志文档**: https://vercel.com/docs/deployments/logs
- **Next.js 错误参考**: https://nextjs.org/docs/messages
- **Suspense 错误**: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

---

**请提供完整的构建日志，我会根据具体错误信息提供精确的解决方案！**
