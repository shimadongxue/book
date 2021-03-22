(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{391:function(t,n,e){"use strict";e.r(n);var o=e(45),s=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"document-documentelement-与-document-body-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#document-documentelement-与-document-body-区别"}},[t._v("#")]),t._v(" document.documentElement 与 document.body 区别")]),t._v(" "),e("blockquote",[e("p",[t._v("2018-08-13")])]),t._v(" "),e("p",[t._v("在前端开发中，我们经常需要获取网页中滚动条滚过的长度，获取该值的方式一般通过"),e("code",[t._v("scrollTop")]),t._v("属性，如："),e("code",[t._v("document.body.scrollTop")]),t._v("，或者"),e("code",[t._v("document.documentElement.scrollTop")]),t._v("，这两者都是经常用来获取文档滚动条滚过长度值的方式，他们又有什么区别呢？")]),t._v(" "),e("p",[t._v("之前一直没注意，只到有一天发现了一个 bug:"),e("code",[t._v("document.body.scrollTop")]),t._v(" 拿到的值一直是 0。")]),t._v(" "),e("p",[t._v("在这个之前我们先来了解一下 "),e("code",[t._v("<!DOCTYPE HTML>")]),t._v("是干嘛的？为什么每个页面都需要加上这段声明。")]),t._v(" "),e("blockquote",[e("p",[t._v("doctype 声明不属于 HTML 标签，它是一条指令，告诉浏览器编写页面所用的标记的版本。\n这个声明的目的是防止浏览器在渲染文档时，切换到我们称为“"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("怪异模式(兼容模式)"),e("OutboundLink")],1),t._v("”的渲染模式。"),e("code",[t._v("<!DOCTYPE html>")]),t._v(" 能确保浏览器按照最佳的相关规范进行渲染，而不是使用一个不符合规范的渲染模式。")])]),t._v(" "),e("p",[e("code",[t._v("document.documentElement")]),t._v(" 与 "),e("code",[t._v("document.body")])]),t._v(" "),e("ul",[e("li",[t._v("document 代表的是整个文档(对于一个网页来说包括整个网页结构)")]),t._v(" "),e("li",[t._v("document.documentElement 是整个文档节点树的根节点，在网页中即 html 标签")]),t._v(" "),e("li",[t._v("document.body 是整个文档 DOM 节点树里的 body 节点，网页中即为 body 标签元素")])]),t._v(" "),e("p",[t._v("但在标准模式下"),e("code",[t._v("document.body.scrollTop")]),t._v("是无效的。")]),t._v(" "),e("blockquote",[e("p",[t._v("从 Chrome 61 开始，标准模式中 document.scrollingElement 已被修正为 document.documentElement。换句话说，这个版本开始标准模式中 document.body.scrollTop 始终都等于 0。")])]),t._v(" "),e("p",[t._v("所以这里建议使用兼容写法：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scrollTop "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("或者")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBodyScrollTop")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" el "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollingElement "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("每当这时候我就有一些怀念"),e("code",[t._v("jQuery")]),t._v("了")]),t._v("。")])])}),[],!1,null,null,null);n.default=s.exports}}]);