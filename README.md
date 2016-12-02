### 一个简单的开发结构，主要用来写后台。

准备搭建一些 init 项目，用于平时快速开发或者外包类型。

**此项目的技术栈特别简单，主要适用需要 jquery 生态快速开发的需求**

```bash
├── bs
│   ├── bootstrap-datepicker.js
│   ├── bootstrap-datepicker.zh-CN.js
│   ├── bootstrap-editable.js
│   ├── bootstrap-table-editable.js
│   ├── bootstrap-table-filter-control.js
│   ├── bootstrap-table-mobile.js
│   ├── bootstrap-table-zh-CN.js
│   ├── bootstrap-table.js
│   └── bootstrap.js
├── bs-common.js // 公用的 bs 框架的一些配置
├── gutil.js // artDialog 的常用弹框的二次封装
└── lib
    ├── dialog.js // artDialog
    ├── jquery.js
    └── template-native.js // artTemplate
```

#### 需要注意的地方

1. gulp 作为任务启动
2. npm 包可以作为下载库，但是目前都是直接拷贝到文件
3. scss 可以直接编译到 css 文件夹
4. js 需要手动拷贝到 ./build 文件夹
5. clean 的时候只会清理相应的目录或者文件

可以做的事：利用 gulp copy 到 build 目录一些常用资源，但是我觉得必要性不大。