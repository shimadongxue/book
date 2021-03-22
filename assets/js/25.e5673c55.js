(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{380:function(t,r,a){"use strict";a.r(r);var o=a(45),v=Object(o.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),a("p",[t._v("!!!include(docs/blog/front-end/npx.md)!!!\n!!!include(docs/blog/front-end/垃圾回收.md)!!!\n")]),t._v(" "),a("h2",{attrs:{id:"virtual-dom-性能好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-性能好"}},[t._v("#")]),t._v(" Virtual DOM 性能好？")]),t._v(" "),a("p",[t._v("每次面试，面试人一谈到 react 就必然会谈到 Virtual DOM，一谈到 Virtual DOM 就会说它比原生操作 DOM 性能哪里哪里好。")]),t._v(" "),a("p",[t._v("但任何一个 v-dom 框架都不会说自己的性能快过 DOM 操作。就拿 react 为例子，它的目标是：“每次数据变化都以最小的代价来更新真实 DOM”。引入 v-dom，在内存中比较虚拟节点，然后找出不同，之后执行更新。")]),t._v(" "),a("p",[t._v("就能更改页面上一个元素的内容，直接操作 DOM 的反应速度绝对会比你 diff 一次之后再更新来的快。但这时你可能会觉得当程序到达一定的复杂度之后，v-dom 性能上的优势才能体现出来。但是，无论你代价再少也好，v-dom 都是有消耗的，光从你要生成整个页面的 v-dom 就会比单单生成原生 dom 要多消耗一大截内存，更别说其中的复杂递归，比对，然后再变换。但是！它依然是纯 js 层面的计算，比起后面的 DOM 操作来说，依然便宜了太多。")]),t._v(" "),a("p",[t._v("所以 v-dom 真正的价值是什么？")]),t._v(" "),a("p",[t._v("框架给你的保证是，你在不需要手动优化的情况下，我依然可以给你提供过得去的性能。")]),t._v(" "),a("p",[t._v("我认为是带来了跨屏能力，以及代码的可维护性， 同时为函数式的 UI 编程方式打开了大门。")])])}),[],!1,null,null,null);r.default=v.exports}}]);