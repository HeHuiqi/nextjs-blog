nextjs 自动从pages目录根据文件path来确定路由URL
如：
pages/index.js 为 http://locahost:3000/
pages/posts/first-post.js 为  http://locahost:3000/posts/first-post.js

静态资源处理
图片放在 public/images 目录
国际化配置文件 public/locales 目录


YAML Front Matter 
// 解析markdown文件
npm i gray-matter
npm i remark remark-html

// 日期格式化
npm install date-fns