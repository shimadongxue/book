#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist


#创建.nojekyll 防止Github Pages build错误
touch .nojekyll
# 如果是发布到自定义域名
echo 'blog.aimike.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# git push -f "https://${access_token}@github.com/PanJiaChen/awesome-bookmarks.git" master:gh-pages

git push -f "https://${mike_access_token}@github.com/shimadongxue/book.git" master:gh-pages

cd -
