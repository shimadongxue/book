(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("blockquote",[a("p",[t._v("本篇文章其实陆陆续续写了快半年，主体部分写好了很久了，但由于种种原因一直没有发布。\n首先来说说写这篇文章的主要初衷是：在做前端后台项目的时候经常会用到很多 icon 图标，刚开始还好，但随着项目的不断迭代，每次修改添加图标会变得很麻烦，而且总觉得不够优雅，就开始琢磨着有啥简单方便的工作流呢？")])]),t._v(" "),a("h2",{attrs:{id:"演进史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#演进史"}},[t._v("#")]),t._v(" 演进史")]),t._v(" "),a("p",[t._v("首先我们来说一下前端 icon 的发展史。")]),t._v(" "),a("p",[a("strong",[t._v("远古时代")]),t._v("\n在我刚开始实习时，大部分图标都是用 img 来实现的。渐渐发现一个页面的请求资源中图片 img 占了大部分，所以为了优化有了"),a("code",[t._v("image sprite")]),t._v(" 就是所谓的雪碧图，就是将多个图片合成一个图片，然后利用 css 的 background-position 定位显示不同的 icon 图标。但这个也有一个很大的痛点，维护困难。每新增一个图标，都需要改动原始图片，还可能不小心出错影响到前面定位好的图片，而且一修改雪碧图，图片缓存就失效了，久而久之你不知道该怎么维护了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/28/16000934d9f88e9c?w=528&h=68&f=png&s=9826",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("font 库")]),t._v("\n后来渐渐地一个项目里几乎不会使用任何本地的图片了，而使用一些 font 库来实现页面图标。常见的如 "),a("a",{attrs:{href:"http://fontawesome.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Font Awesome"),a("OutboundLink")],1),t._v(" ，使用起来也非常的方便，但它有一个致命的缺点就是找起来真的很不方便，每次找一个图标特别的费眼睛，还有就是它的定制性也非常的不友善，它的图标库一共有 675 个图标，说少也不少，但还是会常常出现找不到你所需要图标的情况。当然对于没有啥特别 ui 追求的初创公司来说还是能忍一忍的。但随着公司的壮大，来了越来越多对前端指手画脚的人，丧心病狂的设计师，他们会说不！这 icon 这么丑，这简直是在侮辱他们高级设计师的称号啊！不过好在这时候有了"),a("a",{attrs:{href:"http://iconfont.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iconfont"),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("iconfont")]),t._v("\n一个阿里爸爸做的开源图库，人家还有专门的 "),a("a",{attrs:{href:"https://github.com/thx/iconfont-plus/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("github issue"),a("OutboundLink")],1),t._v("(虽然我的一个 issue 半年多了也没回应/(ㄒ o ㄒ)/~~)，但人家的图标数量还是很惊人的，不仅有几百个公司的开源图标库，还有各式各样的小图标，还支持自定义创建图标库，所以不管你是一家创业公司还是对设计很有要求的公司，它都能很好的帮助你解决管理图标的痛点。你想要的基本都有~")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/19/92e198653125f31275907d20f9322dbc",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"iconfont-三种使用姿势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iconfont-三种使用姿势"}},[t._v("#")]),t._v(" iconfont 三种使用姿势")]),t._v(" "),a("h3",{attrs:{id:"unicode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicode"}},[t._v("#")]),t._v(" unicode")]),t._v(" "),a("p",[t._v("最开始我们使用了"),a("code",[t._v("unicode")]),t._v("的格式，它主要的特点是\n"),a("strong",[t._v("优势")])]),t._v(" "),a("ul",[a("li",[t._v("兼容性最好，支持 ie6+")]),t._v(" "),a("li",[t._v("支持按字体的方式去动态调整图标大小，颜色等等")])]),t._v(" "),a("p",[a("strong",[t._v("劣势")])]),t._v(" "),a("ul",[a("li",[t._v("不支持多色图标")]),t._v(" "),a("li",[t._v("在不同的设备浏览器字体的渲染会略有差别，在不同的浏览器或系统中对文字的渲染不同，其显示的位置和大小可能会受到 font-size、line-height、word-spacing 等 CSS 属性的影响，而且这种影响调整起来较为困难")])]),t._v(" "),a("p",[a("strong",[t._v("使用方法：")]),t._v("\n第一步：引入自定义字体 `font-face")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" @font-face {\n   font-family: \"iconfont\";\n   src: url('iconfont.eot'); /* IE9*/\n   src: url('iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */\n   url('iconfont.woff') format('woff'), /* chrome, firefox */\n   url('iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/\n   url('iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */\n }\n")])])]),a("p",[t._v("第二步：定义使用 iconfont 的样式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('.iconfont {\n  font-family:"iconfont" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n')])])]),a("p",[t._v("第三步：挑选相应图标并获取字体编码，应用于页面")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<i class="iconfont">&#xe604;</i>\n')])])]),a("p",[t._v("效果图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/19/212123363f183d2984e314cc89b9e113",alt:""}})]),t._v(" "),a("p",[t._v("其实它的原理也很简单，就是通过 "),a("code",[t._v("@font-face")]),t._v(" 引入自定义字体(其实就是一个字体库)，它里面规定了"),a("code",[t._v("&#xe604")]),t._v(" 这个对应的形状就长这企鹅样。其实类似于 '花裤衩'，在不同字体设定下长得是不同的一样。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/19/d142cf85062436fadef23bae4e3eafb3",alt:""}})]),t._v(" "),a("p",[t._v("不过它的缺点也显而易见，"),a("code",[t._v("unicode")]),t._v("的书写不直观，语意不明确。光看"),a("code",[t._v("&#xe604;")]),t._v("这个"),a("code",[t._v("unicode")]),t._v("你完全不知道它代表的是什么意思。这时候就有了 "),a("code",[t._v("font-class")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"font-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#font-class"}},[t._v("#")]),t._v(" font-class")]),t._v(" "),a("p",[t._v("与 unicode 使用方式相比，具有如下特点：")]),t._v(" "),a("ul",[a("li",[t._v("兼容性良好，支持 ie8+")]),t._v(" "),a("li",[t._v("相比于 unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。")])]),t._v(" "),a("p",[a("strong",[t._v("使用方法：")]),t._v("\n第一步：拷贝项目下面生成的 fontclass 代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("../font_8d5l8fzk5b87iudi.css\n")])])]),a("p",[t._v("第二步：挑选相应图标并获取类名，应用于页面：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<i class="iconfont icon-xxx"></i>\n')])])]),a("p",[t._v("效果图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/19/b4e0fbe350b5be037b5622ce06bf0392",alt:"image.png"}})]),t._v(" "),a("p",[t._v("它的主要原理其实是和 "),a("code",[t._v("unicode")]),t._v(" 一样的，它只是多做了一步，将原先"),a("code",[t._v("&#xe604")]),t._v("这种写法换成了"),a("code",[t._v(".icon-QQ")]),t._v("，它在每个 class 的 before 属性中写了"),a("code",[t._v("unicode")]),t._v(",省去了人为写的麻烦。如 "),a("code",[t._v('.icon-QQ:before { content: "\\e604"; }')])]),t._v(" "),a("p",[t._v("相对于"),a("code",[t._v("unicode")]),t._v(" 它的修改更加的方便与直观。但也有一个大坑，之前楼主一个项目中用到了两组"),a("code",[t._v("font-class")]),t._v(" 由于没有做好命名空间，所有的 class 都是放在"),a("code",[t._v(".iconfont")]),t._v(" 命名空间下的，一上线引发了各种雪崩问题，修改了半天，所以使用"),a("code",[t._v("font-class")]),t._v("一定要注意命名空间的问题。")]),t._v(" "),a("h3",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" symbol")]),t._v(" "),a("p",[t._v("随着万恶的某某浏览器逐渐淡出历史舞台，svg-icon 使用形式慢慢成为主流和推荐的方法。相关文章可以参考张鑫旭大大的文章"),a("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/?spm=a313x.7781069.1998910419.50",target:"_blank",rel:"noopener noreferrer"}},[t._v("未来必热：SVG Sprite 技术介绍"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("支持多色图标了，不再受单色限制。")]),t._v(" "),a("li",[t._v("支持像字体那样通过 font-size,color 来调整样式。")]),t._v(" "),a("li",[t._v("支持 ie9+")]),t._v(" "),a("li",[t._v("可利用 CSS 实现动画。")]),t._v(" "),a("li",[t._v("减少 HTTP 请求。")]),t._v(" "),a("li",[t._v("矢量，缩放不失真")]),t._v(" "),a("li",[t._v("可以很精细的控制 SVG 图标的每一部分")])]),t._v(" "),a("p",[a("strong",[t._v("使用方法：")]),t._v("\n第一步：拷贝项目下面生成的 symbol 代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("引入  ./iconfont.js\n")])])]),a("p",[t._v("第二步：加入通用 css 代码（引入一次就行）：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v('<style type="text/css">\n    .icon')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -0.15em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" currentColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n</style>\n")])])]),a("p",[t._v("第三步：挑选相应图标并获取类名，应用于页面：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("svg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-hidden")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xlink:")]),t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#icon-xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("svg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("使用 svg-icon 的好处是我再也不用发送"),a("code",[t._v("woff|eot|ttf|")]),t._v(" 这些很多个字体库请求了，我所有的 svg 都可以内联在 html 内。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/19/9dae2c582c3d2d3d62e9b5079b82348a",alt:""}}),t._v("\n还有一个就是 svg 是一个真正的矢量，不管你再怎么的放缩它都不会失真模糊，而且 svg 可以控制的属性也更加的丰富，也能做出更加生动和复杂的图标。现在 ui 设计师平时都喜欢使用 sketch 来工作，只要轻松一键就能导出 svg 了，所以 svg 也更受设计师的青睐。"),a("a",{attrs:{href:"https://css-tricks.com/icon-fonts-vs-svg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inline SVG vs Icon Fonts "),a("OutboundLink")],1),t._v(" 这篇文章详细的比较了 "),a("code",[t._v("svg")]),t._v(" 和 "),a("code",[t._v("icon-font")]),t._v("的优劣，大家可以去看看。PS：这里其实还用到了 "),a("code",[t._v("SVG Sprite")]),t._v(" 技术。简单的理解就是类 svg 的似雪碧图，它在一个 svg 之中运用 symbol 标示了一个一个的 svg 图标，这样一个页面中我们遇到同样的 svg 就不用重复再画一个了，直接使用"),a("code",[t._v('<use xlink:href="#icon-QQ" x="50" y="50" />')]),t._v(" 就能使用了，具体的细节可以看这篇文章开头的文章 "),a("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/",target:"_blank",rel:"noopener noreferrer"}},[t._v("未来必热：SVG Sprite 技术介绍"),a("OutboundLink")],1),t._v("，在之后的文章中也会手摸手叫你自己如何制作 "),a("code",[t._v("SVG Sprite")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"创建-icon-component-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-icon-component-组件"}},[t._v("#")]),t._v(" 创建 icon-component 组件")]),t._v(" "),a("p",[t._v("我们有了图标，接下来就是如何在自己的项目中优雅的使用它了。\n之后的代码都是基于 vue 的实例(ps: react 也很简单，原理都是类似的)")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("//components/Icon-svg\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("svg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("svg-icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-hidden")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":xlink:href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iconName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("svg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon-svg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      iconClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        required"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    computed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iconName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("#icon-")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconClass"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".svg-icon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -0.15em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" currentColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入svg组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" IconSvg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/IconSvg'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局注册icon-svg")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon-svg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IconSvg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在代码中使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("svg icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("就这样简单封装了一个 "),a("code",[t._v("Icon-svg")]),t._v(" 组件 ，我们就可以简单优雅的在自己的 vue 项目之中使用图标了。")]),t._v(" "),a("h2",{attrs:{id:"进一步改造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进一步改造"}},[t._v("#")]),t._v(" 进一步改造")]),t._v(" "),a("p",[t._v("但作为一个有逼格的前端开发，怎能就此满足呢!目前还是有一个致命的缺点的，就是现在所有的 "),a("code",[t._v("svg-sprite")]),t._v(" 都是通过 iconfont 的 "),a("code",[t._v("iconfont.js")]),t._v(" 生成的。")]),t._v(" "),a("ul",[a("li",[t._v("首先它是一段用 js 来生成 svg 的代码，所有图标 icon 都很"),a("strong",[t._v("不直观")]),t._v("。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/19/2338a1978a732b5cbc3995c3b5e57300",alt:"如图所示"}}),t._v("\n你完全不知道哪个图标名对应什么图标，一脸尼克扬问号??? 每次增删改图标只能整体 js 文件一起替换。")]),t._v(" "),a("ul",[a("li",[t._v("其次它也做不到"),a("strong",[t._v("按需加载")]),t._v("，不能根据我们使用了那些 svg 动态的生成 "),a("code",[t._v("svg-sprite")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("自定义性差")]),t._v("，通常导出的 svg 包含大量的无用信息，例如编辑器源信息、注释等。通常包含其它一些不会影响渲染结果或可以移除的内容。")]),t._v(" "),a("li",[a("strong",[t._v("添加不友善")]),t._v("，如果我有一些自定义的 svg 图标，该如何和原有的 "),a("code",[t._v("iconfont")]),t._v(" 整合到一起呢？目前只能将其也上传到 "),a("code",[t._v("iconfont")]),t._v(" 和原有的图标放在一个项目库中，之后再重新下载，很繁琐。")])]),t._v(" "),a("h3",{attrs:{id:"使用-svg-sprite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-svg-sprite"}},[t._v("#")]),t._v(" 使用 svg-sprite")]),t._v(" "),a("p",[t._v("接下来我们就要自己来制作 "),a("code",[t._v("svg-sprite")]),t._v(" 了。这里要使用到 "),a("a",{attrs:{href:"https://github.com/kisenka/svg-sprite-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("svg-sprite-loader"),a("OutboundLink")],1),t._v(" 这个神器了， 它是一个 webpack loader ，可以将多个 svg 打包成 "),a("code",[t._v("svg-sprite")]),t._v(" 。")]),t._v(" "),a("p",[t._v("我们来介绍如何在 "),a("code",[t._v("vue-cli")]),t._v(" 的基础上进行改造，加入 "),a("code",[t._v("svg-sprite-loader")]),t._v("。")]),t._v(" "),a("p",[t._v("我们发现"),a("code",[t._v("vue-cli")]),t._v("默认情况下会使用 "),a("code",[t._v("url-loader")]),t._v(" 对 svg 进行处理，会将它放在"),a("code",[t._v("/img")]),t._v(" 目录下，所以这时候我们引入"),a("code",[t._v("svg-sprite-loader")]),t._v(" 会引发一些冲突。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认`vue-cli` 对svg做的处理，正则匹配后缀名为.svg的文件，匹配成功之后使用 url-loader 进行处理。")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(png|jpe?g|gif|svg)(\\?.*)?$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      limit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assetsPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img/[name].[hash:7].[ext]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("解决方案有两种，最简单的就是你可以将 test 的 svg 去掉，这样就不会对 svg 做处理了，当然这样做是很不友善的。")]),t._v(" "),a("ul",[a("li",[t._v("你不能保证你所有的 svg 都是用来当做 icon 的，有些真的可能只是用来当做图片资源的。")]),t._v(" "),a("li",[t._v("不能确保你使用的一些第三方类库会使用到 svg。")])]),t._v(" "),a("p",[t._v("所以最安全合理的做法是使用 webpack 的 "),a("a",{attrs:{href:"https://webpack.js.org/configuration/module/#rule-exclude",target:"_blank",rel:"noopener noreferrer"}},[t._v("exclude"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://webpack.js.org/configuration/module/#rule-include",target:"_blank",rel:"noopener noreferrer"}},[t._v("include"),a("OutboundLink")],1),t._v(" ，让"),a("code",[t._v("svg-sprite-loader")]),t._v("只处理你指定文件夹下面的 svg，"),a("code",[t._v("url-loaer")]),t._v("只处理除此文件夹之外的所以 svg，这样就完美解决了之前冲突的问题。\n代码如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/19/28b4391b217a47ab403c659480a192ef",alt:""}})]),t._v(" "),a("p",[t._v("这样配置好了，只要引入 svg 之后填写类名就可以了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" '@"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("icons"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("svg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入图标")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("svg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("use xlink"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#qq"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("svg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用图标")]),t._v("\n\n")])])]),a("p",[t._v("单这样还是非常的不优雅，如果我项目中有一百个 icon，难不成我要手动一个个引入么！ "),a("strong",[t._v("偷懒是程序员的第一生产力！！！")])]),t._v(" "),a("h2",{attrs:{id:"自动导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动导入"}},[t._v("#")]),t._v(" 自动导入")]),t._v(" "),a("p",[t._v("首先我们创建一个专门放置图标 icon 的文件夹如："),a("code",[t._v("@/src/icons")]),t._v("，将所有 icon 放在这个文件夹下。\n之后我们就要使用到 webpack 的 "),a("a",{attrs:{href:"https://webpack.js.org/guides/dependency-management/#require-context",target:"_blank",rel:"noopener noreferrer"}},[t._v("require.context"),a("OutboundLink")],1),t._v("。很多人对于 "),a("code",[t._v("require.context")]),t._v("可能比较陌生，直白的解释就是")]),t._v(" "),a("blockquote",[a("p",[t._v('require.context("./test", false, /.test.js$/);\n这行代码就会去 test 文件夹（不包含子目录）下面的找所有文件名以 '),a("code",[t._v(".test.js")]),t._v(" 结尾的文件能被 require 的文件。\n更直白的说就是 我们可以通过正则匹配引入相应的文件模块。")])]),t._v(" "),a("p",[t._v("require.context 有三个参数：")]),t._v(" "),a("ul",[a("li",[t._v("directory：说明需要检索的目录")]),t._v(" "),a("li",[t._v("useSubdirectories：是否检索子目录")]),t._v(" "),a("li",[t._v("regExp: 匹配文件的正则表达式")])]),t._v(" "),a("p",[t._v("了解这些之后，我们就可以这样写来自动引入 "),a("code",[t._v("@/src/icons")]),t._v(" 下面所有的图标了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("requireAll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("requireContext")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" requireContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requireContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./svg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.svg$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("之后我们增删改图标直接直接文件夹下对应的图标就好了，什么都不用管，就会自动生成 "),a("code",[t._v("svg symbol")]),t._v("了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/27/15ffc860a0fe3fed?w=1156&h=138&f=png&s=81800",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"更进一步优化自己的-svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更进一步优化自己的-svg"}},[t._v("#")]),t._v(" 更进一步优化自己的 svg")]),t._v(" "),a("p",[t._v("首先我们来看一下 从 "),a("code",[t._v("阿里iconfont")]),t._v(" 网站上导出的 svg 长什么样？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/27/15ffcbc9289b7613?w=1482&h=362&f=png&s=202494",alt:""}})]),t._v(" "),a("p",[t._v("没错虽然 iconfont 网站导出的 svg 内容已经算蛮精简的了，但你会发现其实还是与很多无用的信息，造成了不必要的冗余。就连 iconfont 网站导出的 svg 都这样，更不用说那些更在意 ui 漂不漂亮不懂技术的设计师了(可能)导出的 svg 了。好在 "),a("code",[t._v("svg-sprite-loader")]),t._v("也考虑到了这点，它目前只会获取 svg 中 path 的内容，而其它的信息一概不会获取。生成 svg 如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/27/15ffcc7231fc7aed?w=1146&h=105&f=png&s=50474",alt:""}})]),t._v(" "),a("p",[t._v("但任何你在 path 中产生的冗余信息它就不会做处理了。如注释什么的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/27/15ffcc9535745d8d?w=1512&h=296&f=png&s=124956",alt:""}})]),t._v(" "),a("p",[t._v("这时候我们就要使用另一个很好用的东西了-- "),a("a",{attrs:{href:"https://github.com/svg/svgo",target:"_blank",rel:"noopener noreferrer"}},[t._v("svgo"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("SVG files, especially exported from various editors, usually contain a lot of redundant and useless information such as editor metadata, comments, hidden elements, default or non-optimal values and other stuff that can be safely removed or converted without affecting SVG rendering result.")])]),t._v(" "),a("p",[t._v("它支持几十种优化项，非常的强大，8k+的 star 也足以说明了问题。")]),t._v(" "),a("p",[t._v("详细的操作可以参照 "),a("a",{attrs:{href:"https://github.com/svg/svgo",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/",target:"_blank",rel:"noopener noreferrer"}},[t._v("张鑫旭大大的文章"),a("OutboundLink")],1),t._v("（没错又是这位大大的文章，或许这就是大佬吧！）本文就不展开了。")]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("上面大概阐述了一下前端项目中 icon 使用的演进史。\n总的来说还是那句话，"),a("strong",[t._v("适合的才是最好的")]),t._v("。就拿之前争论的选择 vue react 还是 angular，个人觉得每个框架都有自己的特点和适用的业务场景，所以所有不结合业务场景的推荐和讨论都是瞎 bb。。。如上文其实大概讲了五种前端 icon 的使用场景，第一种"),a("code",[t._v("Font Awesome")]),t._v("不用它并不是因为它不好，而是业务场景不适合，如果你团队没有专门的设计师或者对 icon 的自定义度不高完全可以使用它，"),a("a",{attrs:{href:"https://github.com/FortAwesome/Font-Awesome",target:"_blank",rel:"noopener noreferrer"}},[t._v("Font Awesome"),a("OutboundLink")],1),t._v(" github 有五万多 star，足见社区对它的认可。还比如说，你们项目对低端浏览器有较高的适配要求，你还强行要用 svg 作为图标 icon，那你真的是存心和自己过不去了。所以所有方案都没有绝对的优与劣之分，适合自己业务场景，解决自己实际痛点，提高自己开发效率的方案就是好的方案。")]),t._v(" "),a("h2",{attrs:{id:"占坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#占坑"}},[t._v("#")]),t._v(" 占坑")]),t._v(" "),a("p",[t._v("本文所涉及的技术在 "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin"),a("OutboundLink")],1),t._v(" 中可以找到完整的实例。\n"),a("code",[t._v("vue-element-admin")]),t._v("也发布了新版本和配套的"),a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文文档"),a("OutboundLink")],1),t._v("(文档真的写的我要吐血了)不管使不使用本项目都推荐一看，应该能对你写 vue 的项目有所帮助。欢迎使用和提出不足。\n楼主个人免费"),a("a",{attrs:{href:"https://jianshiapp.com/circles/1209",target:"_blank",rel:"noopener noreferrer"}},[t._v("圈子"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("系列文章：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/59097cd7a22b9d0065fb61d2",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你用 vue 撸后台 系列一（基础篇）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/591aa14f570c35006961acac",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你用 vue 撸后台 系列二(登录权限篇)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/593121aa0ce4630057f70d35",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你用 vue 撸后台 系列三 (实战篇)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/595b4d776fb9a06bbe7dba56",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c92ff94f265da6128275a85",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你用 vue 撸后台 系列五(v4.0 新版本)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009090836",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你封装一个 vue component"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/59bb864b5188257e7a427c09",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你优雅的使用 icon"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5b56909a518825195f499806",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你用合理的姿势使用 webpack4（上）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc",target:"_blank",rel:"noopener noreferrer"}},[t._v("手摸手，带你用合理的姿势使用 webpack4（下）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);