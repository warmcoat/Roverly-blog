## HTML 系列
### 1、什么是 HTML 语义化？
HTML 语意化就是用合乎语意的 HTML 标签开发，标签会清楚定义其内容、让页面兼具良好的语意和结构。以下会提到两个重点，HTML 语意化标签有哪些，另一个是，优点有哪些。
header、 h1~h6、hgroup、nav、main、article、 section、aside、details、time、footer、figure
#### 为什么要使用HTML 语义化标签
提升SEO

比起使用非语意化的标签例如：div、span，语意化标签可以帮助搜寻引擎重视在「标题」、「连结」里的关键字，这样可以让有语意化标签的网页更容易被使用者搜寻到。

便于开发

语意化标签可以提升代码的可读性、帮助开发者之间更容易理解网页架构、减少差异化，举例来说，你可以用div 来做一个按钮，但如果用button 对其他开发者而言会更一目了然知道那是个按钮； 除此之外，透过语意化标签，开发者可以轻易使用其中的原生功能。以 button 来说，就有许多原生功能是 div 没有的。

无障碍网页 (HTML accessibility)

HTML 语意化网站可以方便其他设备解析内容，例如：萤幕阅读器、盲人阅读器、移动设备。 a11y 在前端业界是越来越被看重的领域，用语意化标签也因此是许多公司会看重的。

### html 中的块状元素和行内元素有哪些？
1、块状元素（Block-level Elements）:
   
   块状元素以新行开始，占据一整行的宽度。

   常见的快状元素有： div、p、h1~h6、ul、ol、li、table、form等

2、行内元素（inline Elements）：

   行内元素不会独占一行，它只占据它包含的内容的宽度

   常见的行内元素有：`<span>`、`<a>`、`<strong>`、`<em>`、`<img>`、`<input>`、`<button>`等

### HTML5的本地存储机制

1、LocalStorage：LocalStorage是HTML5提供的一种持久化的本地存储方式。它允许网页在浏览器中存储键值对数据，并且该数据在页面关闭后仍然存在。LocalStorage的数据大小限制通常为5MB左右。

2、SessionStorage：SessionStorage也是HTML5提供的一种本地存储方式，与LocalStorage类似，但是SessionStorage的数据在页面关闭后会被清除。SessionStorage适合存储会话期间需要保持的临时数据。

3、IndexedDB：IndexedDB是一种高级的客户端数据库，它允许网页在浏览器中存储结构化数据。IndexedDB提供了更强大的查询和事务支持，适合存储大量数据或需要复杂查询的场景。

4、WebSQL：WebSQL是一种基于SQL的客户端数据库，但是它已经不再被HTML5标准所推荐使用，因为它的规范已经停止更新，并且不被所有浏览器支持。

### HTML中的锚点是什么

HTML中的锚点是指通过`<a>`标签创建的链接，可以在页面内部进行导航，例如跳转到页面的特定位置。

### html中href属性与src的区别？
1、href（Hypertext Reference）是用于指定链接目标的属性。它通常用于在HTML文档中创建超链接，可以链接到其他网页、文件、锚点等。例如，可以使用href属性将文本或图像转换为可点击的链接，点击后会跳转到指定的URL。

2、src（Source）是用于指定资源路径的属性。它通常用于在HTML文档中引入外部资源，如图像、音频、视频等。通过src属性，可以将外部资源嵌入到HTML文档中进行展示或播放。例如，可以使用src属性将图片文件嵌入到`<img>`标签中，或者将视频文件嵌入到`<video>`标签中。

href用于创建超链接，指向其他网页或资源。

src用于引入外部资源，如图像、音频、视频等。

## CSS 系列
