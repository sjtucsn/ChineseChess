# ChineseChess
中国象棋前端实现（采用react+typescript）

## 快速开始
-   若系统未安装node.js，可在[node.js官网](http://nodejs.cn/download/)下载，建议使用linux系统运行项目

克隆项目文件:

    git clone https://github.com/sjtucsn/ChineseChess.git
    
进入目录安装依赖，运行如下代码:

    npm i 
    
安装完成后，进入开发模式：

```bash
npm start
打开 http://localhost:8000 即可看到中国象棋游戏界面
```

项目构建，用于生产模式：

```bash
npm run build
将会生成dist目录，可配合nginx服务器访问游戏相应网址
```

## 特性
-   采用[react](https://github.com/facebook/react)框架编写前端代码，各个组件层次清晰，复用性高。
-   基于[ant-design](https://github.com/ant-design/ant-design)设计界面中的按钮，对话框等控件，样式精美。
-   基于[dva](https://github.com/dvajs/dva)架构响应游戏界面的状态分发事件，提升性能。
-   使用[roadhog](https://github.com/sorrycc/roadhog)本地调试和构建。
-   采用[typescript](https://github.com/Microsoft/TypeScript)提供可选的静态类型检查以及最新的ECMAScript特性，提高编程效率。
-   核心的算法采用alpha-beta剪枝算法，加上合适的棋盘价值评估函数，实现象棋AI部分。

## 功能
-   提供人机对弈，机机对弈，人人对弈三种模式。
-   电脑AI级别有三种可选：菜鸟级，入门级，大师级。
-   可选择出棋先后手与本方棋子颜色。
-   人机对弈与人人对弈游戏过程中提供提示功能，悔棋功能，换边功能以及让子功能。
-   机机对弈模式提供暂停和恢复功能，可随时暂停或恢复AI对弈。

## 目录结构

```bash
├── /public/            # 项目公共目录
│ ├── index.html        # 入口html文件
├── /src/               # 项目源码目录
│ ├── /assets/          # 棋盘，棋子样式图片与游戏界面背景图片等
│ ├── /components/      # UI组件
│ │ ├── /AI/            # AI相关组件
│ │ ├── /button/        # 游戏过程中的对话框以及按钮组件
│ │ └── /chess/         # 棋子相关样式组件
│ ├── /models/          # dva架构下的模型，用于管理游戏状态
│ │ ├── buttonClick.ts  # 处理游戏过程中的按钮与对话框点击事件
│ │ ├── chessClick.ts   # 处理点击棋子与点击棋盘事件
│ │ ├── chessInfo.ts    # 存储各个棋子的着法以及在棋盘上各个着点时的价值
│ │ └── index.ts        # 输出游戏相关状态
│ ├── /routes/          # 路由组件
│ │ └── ChessBoard.tsx  # 整个游戏界面组件，也是路由的入口
│ ├── index.css         # 入口文件样式表
│ ├── index.js          # 入口文件
│ └── router.js         # 路由配置     
├── package.json        # 项目信息
├── .eslintrc           # Eslint配置
├── .roadhogrc          # roadhog配置
└── tsconfig.json       # typescript相关配置
```
