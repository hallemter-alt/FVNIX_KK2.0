#!/bin/bash

# Vercel CLI 部署脚本
# 用于强制部署最新代码到 Vercel

echo "================================================"
echo "  Vercel CLI 强制部署脚本"
echo "================================================"
echo ""

# 1. 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安装"
    echo ""
    echo "请运行以下命令安装："
    echo "  npm install -g vercel"
    echo ""
    exit 1
fi

echo "✅ Vercel CLI 已安装"
echo ""

# 2. 确保在正确的目录
cd /home/user/webapp/fvnix-site || exit 1
echo "📁 当前目录: $(pwd)"
echo ""

# 3. 检查 Git 状态
echo "🔍 检查 Git 状态..."
git status --short
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  警告: 有未提交的更改"
    echo ""
fi

# 4. 确保在 main 分支
current_branch=$(git branch --show-current)
echo "🌿 当前分支: $current_branch"
if [ "$current_branch" != "main" ]; then
    echo "⚠️  警告: 不在 main 分支上"
    echo ""
    read -p "是否切换到 main 分支? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git checkout main
    else
        echo "❌ 取消部署"
        exit 1
    fi
fi

# 5. 拉取最新代码
echo ""
echo "⬇️  拉取最新代码..."
git pull origin main

# 6. 显示最新 commit
echo ""
echo "📝 最新 commit:"
git log --oneline -1
echo ""

# 7. 登录 Vercel（如果需要）
echo "🔐 检查 Vercel 登录状态..."
if ! vercel whoami &> /dev/null; then
    echo "❌ 未登录 Vercel"
    echo ""
    echo "请运行: vercel login"
    echo ""
    exit 1
fi
echo "✅ 已登录: $(vercel whoami)"
echo ""

# 8. 部署到生产环境
echo "🚀 开始部署到 Vercel 生产环境..."
echo ""
echo "选项："
echo "  1) 部署到生产环境 (推荐)"
echo "  2) 部署到预览环境"
echo "  3) 取消"
echo ""
read -p "请选择 (1/2/3): " -n 1 -r
echo ""

case $REPLY in
    1)
        echo "🚀 部署到生产环境..."
        vercel --prod --yes
        ;;
    2)
        echo "🚀 部署到预览环境..."
        vercel --yes
        ;;
    3)
        echo "❌ 取消部署"
        exit 0
        ;;
    *)
        echo "❌ 无效选择"
        exit 1
        ;;
esac

echo ""
echo "================================================"
echo "  ✅ 部署完成！"
echo "================================================"
echo ""
echo "查看部署状态："
echo "  https://vercel.com/dashboard"
echo ""
