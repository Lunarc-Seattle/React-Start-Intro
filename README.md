
# 🚀 从头开始：用 Vite 创建 React + TypeScript 项目 (中英文对照)

## 1. 准备工作 | Prerequisites

确保你已经安装了 **Node.js 和 npm**  
Make sure you have **Node.js and npm** installed.

检查版本 | Check versions:

```bash
node -v
npm -v
````

---

## 2. 创建 Vite 项目 | Create Vite Project

```bash
npm create vite@4.1.0// latest version for now
```

过程 | During the setup:

* **项目名称 | Project name**: `react-app`// 自己选
* **选择框架 | Select a framework**: `React`//上下箭头自己选
* **选择变体 | Select a variant**: `TypeScript`//

完成后会提示 | After done, it will show:

```
Done. Now run:

  cd react-app
  npm install
  npm run dev
```

---

## 3. 进入项目并安装依赖 | Enter the project & install dependencies

```bash
cd react-app// 进入文件夹
npm install// 安装第三方库
```

---

## 4. 启动开发服务器 | Start the development server

```bash
npm run dev
```

浏览器打开 | Open in browser: [http://localhost:5173](http://localhost:5173)

---

## 5. 如果 VS Code 的 `code .` 命令无法使用 | If `code .` doesn't work

**现象 | Symptom**:

```bash
zsh: command not found: code
```

### 🔧 解决步骤 | Fix steps

1. 确认 VS Code 安装路径 | Confirm VS Code path:

```bash
ls "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"
```

2. 创建命令行快捷方式 | Create symlink:

```bash
sudo ln -s "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code" /usr/local/bin/code
```

3. 如果提示 `File exists`，先删除再创建 | If `File exists`, remove and recreate:

```bash
sudo rm /usr/local/bin/code
sudo ln -s "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code" /usr/local/bin/code
```

4. 确认 `/usr/local/bin` 在你的 `PATH` 中 | Ensure `/usr/local/bin` is in your PATH:

编辑 `~/.zshrc` | Edit `~/.zshrc`:

```bash
nano ~/.zshrc
```

添加这一行 | Add this line:

```bash
export PATH="/usr/local/bin:$PATH"
```

保存退出后运行 | Save and run:

```bash
source ~/.zshrc
```

5. 现在再试 | Now try:

```bash
code .
```

---

## 6. npm 警告信息（可选）| npm Warning (Optional)

你可能会看到 | You might see:

```
npm notice New major version of npm available! 9.8.1 -> 11.3.0
```

可以选择更新 | You can update with:

```bash
npm install -g npm@latest
```

