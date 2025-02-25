# Website of EASE Research Group

## 项目协作指南

### 0. 准备工作

- 首先联系 Dr. Xiaopu LYU，请求添加为本项目的协作者。你将收到一封邮件并要求你登录GitHub确认。

- 本地安装好`Git`。

- 本地安装好`Node.js`。

### 1. 首次参与协作

1. 将项目克隆到本地：
```bash
git clone https://github.com/ease-xp/ease-xp.github.io.git
```

2. 修改内容。

3. 修改文件后生成新的搜索索引（若没有修改任何内容则此步可跳过）：
```bash
node scripts/generate-search-index.js
```

4. 添加修改：
```bash
git add .
```

5. 说明本次修改的内容（最好详细说明本次修改的内容）：
```bash
git commit -m "What you have done."
```

6. 推送到远程仓库：
```bash
git push
```

7. 推送完成以后等待1-2分钟即可查看到最新的修改内容，若没有修改可关闭浏览器、清除浏览器cookies。若依然没有更新，请查看仓库是否depoly成功。

### 2. 非首次修改

1. 每次修改前应当确保当前本地仓库与远程仓库已保持最新。
```bash
git pull
```

2. 修改内容。

3. 重复上述的3-7步骤。

## 使用注意事项

### 0. 注意

尽可能每次只有一个人进行修改。避免修改内容冲突。

### 1. 搜索功能

搜索功能实现依赖于 `search.json` 文件，该文件由 `generate-search-index.js` 脚本生成。

因此，每次更新内容以后务必更新索引文件。

更新索引文件的命令如下：

```bash
node scripts/generate-search-index.js
```

更新索引文件后，务必确保 `search.json` 文件存在且内容正确。

### 2. 本地预览

本地预览，请：

1. 先安装依赖：

```bash
npm install
```

2. 启动本地预览。

```bash
npx live-server --port=3000
```


