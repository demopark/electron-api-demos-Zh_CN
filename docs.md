# 文档

这个应用程序已被开发为一个轻量级 Electron 应用程序, 用一些用于演示本身相关的代码组织的例外来演示了如何创建一个基本的 Electron 应用程序.

应用程序中显示的所有示例代码都是 _应用程序中实际的使用代码_. 这些 JavaScript 块已被迁出到自己单独的文件中, 并按进程 (主进程 或 渲染器) 然后按章节 (通信，菜单，本地UI，媒体，系统，窗口) 进行组织.

为了便于维护, 只在一个地方和组织中进行代码更新. 这样可以很容易找到你要找的示例代码。

所有的页面（或视图）都是单独的 `.html` 文件，它们使用 [HTML imports](http://www.html5rocks.com/en/tutorials/webcomponents/imports/) 的方式附加到 `index.html` 上。

你想要增加一个示例吗? 跳转到 [增加一个新示例](#添加一个章节或示例) 章节.

## 文件夹结构

![应用程序结构和操作图](/assets/img/diagram.png)

#### `assets`
此个目录包含应用自身的资产: CSS, fonts, images 和 共享的 JavaScript 库或其他帮手等.

#### `main-process`
此目录包含在主进程中需要使用 JavaScript 的每个示例部分的子文件夹. 这个结构镜像在 `renderer-process` 目录中.

`main.js`文件位于根目录下, 每个 `.js` 文件都放在这些目录中执行.

#### `renderer-process`
此目录包含在渲染器进程中需要使用 JavaScript 的每个示例部分的子文件夹. 这个结构镜像在`main-process`目录中.

每个 HTML 页面视图都需要其演示所需的相应的渲染器进程 `.js` 文件.

每个页面视图读取其相关主进程和渲染器进程文件的内容, 并将它们添加到代码段的页面.

#### `sections`
此目录包含每个示例部分的子文件夹. 这些子文件夹包含每个示例页面的 HTML 文件. 这些文件每个都附加到位于根目录的 `index.html`.

#### `index.html`
这是应用程序中的主视图. 它包含带导航的边栏, 并使用 [HTML imports](http://www.html5rocks.com/en/tutorials/webcomponents/imports/) 将每个部分的 HTML 页面附加到 `body`.

#### `main.js`
此文件包含应用程序的生命周期说明, 比如如何开始和退出, 这是应用程序的主要过程. 它捕获 `main-process` 目录中的每个 `.js` 文件并执行.

在 `package.json` 中将这个文件设置为 `main` 文件.

#### `package.json`
使用 `npm` 和 Electron.js 时需要此文件. 它包含应用程序的详细信息: 作者, 依赖项, 存储库, 并指向 `main.js` 作为应用程序的主进程文件.

#### Docs
文件: `CODE_OF_CONDUCT`, `README`, `docs` 和 `CONTRIBUTING` 文件构成了项目的文档.

## UI 术语

![UI 术语](/assets/img/ui-terminology.png)

## CSS 命名约定

没有太严格的和更多的使用指导:

- 应该避免直接使用样式元素, 但在某些情况下可以. 比如 `<p>` 或 `<code>`.
- 属于一起的元素以其父类为前缀. `.section`, `.section-header`, `.section-icon`.
- 状态使用 `is-` 前缀.
- 实用程序使用 `u-` 前缀.

## 添加一个章节或示例

下面是添加新章节或示例的基本技巧。 一般提示 - 对于其中一些只要复制一个类似的现有项目的行或文件开始就可以!

### 新章节

包含一个或多个示例的全新页面。

#### index.html

此页面包含侧边栏列表以及使用 HTML imports 导入的每个章节模板.

- 添加示例到 `index.html` 侧边栏适当的类别中.
 - 更新 `id`. 比如 `id="button-dialogs"`.
 - 更新 `data-section`. 比如 `data-section="dialogs"`.
- 将示例模板路径添加到 `index.html` 中 `head` 的 import 链接中.
 - 比如 `<link rel="import" href="sections/native-ui/dialogs.html">`

#### Template

此模板将添加到应用程序的 `index.html` 中.

- 在 `sections` 目录中，从当前类别中复制一个现有模板的 `html` 文件到你添加的章节中.
- 更新这些 `id` 标记
 - 比如 `id="dialogs-section"`
- 使用与你的新节相关的文本更新 `header` 标记中的所有文本.
 - 根据需要删除示例和提示.

### 示例

你为示例创建的任何代码应根据运行的位置添加到 `main-process` 或 `renderer-process` 目录.

`main-process` 目录中的所有 JavaScript 文件在应用程序启动时运行, 但您将链接到该文件, 以便在示例中显示（见下文）.

你添加的渲染器进程代码将被读取并显示在示例中, 然后在模板页面上显示, 以便在该过程中运行（见下文）.

- 首先从模板页面复制和粘贴现有的 `<div class="demo">` 块.
- 更新示例按钮 `id`.
	- 比如 `<button class="demo-button" id="information-dialog">View Demo</button>`
- 如果示例包含写入到 DOM 的响应, 更新 `id`, 否则删除:
	- 比如 `<span class="demo-response" id="info-selection"></span>`
- 更新示例的文本描述.
- 如果要显示 main 或 renderer 进程示例代码，请相应地包含或删除该标记.
	- 通过将路径添加到 `data-path` 中的 `code`，可以读取示例代码并将其添加到 DOM.
		- 比如 `<pre><code data-path="renderer-process/native-ui/dialogs/information.js"></pre></code>`
	- 在模板底部的脚本标记中 `require` 您的渲染过程代码
		- 比如 `require('./renderer-process/native-ui/dialogs/information')`

#### 尝试一下

到此为止, 你应该能够运行应用程序, `npm start`, 并看到你的章节或示例。 