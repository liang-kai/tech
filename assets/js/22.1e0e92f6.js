(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{231:function(t,a,v){"use strict";v.r(a);var s=v(0),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器中的页面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的页面","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器中的页面")]),t._v(" "),v("h2",{attrs:{id:"javascipt是如何影响dom构建的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javascipt是如何影响dom构建的","aria-hidden":"true"}},[t._v("#")]),t._v(" javascipt是如何影响DOM构建的")]),t._v(" "),v("p",[t._v("解释这个需要知道DOM解析的详细过程：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("地址栏发起请求、网络进程收到数据之后，渲染进程和网络进程开始通信，准备接受数据。")])]),t._v(" "),v("li",[v("p",[t._v("预解析：看看有哪些关键资源，优先请求。")])]),t._v(" "),v("li",[v("p",[t._v("收到的html文本开始进行逐行解析")]),t._v(" "),v("ol",[v("li",[t._v("字节流转为token。用栈结构把文本解析成token。大概就是“Start Tag html - Start Tag body - Start Tag div - ‘test’(文本) - End Tag div - End Tag body - End Tag html”")]),t._v(" "),v("li",[t._v("token 栈 解析为 DOM结构。")])])])]),t._v(" "),v("p",[t._v("当DOM解析遇到javascript标签的时候，会等待js下载完成，执行JS，因为JS要操作DOM的话，可能会改变DOM结构。")]),t._v(" "),v("h2",{attrs:{id:"css-是如何影响首屏的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-是如何影响首屏的","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 是如何影响首屏的")]),t._v(" "),v("p",[t._v("在预解析的阶段，CSS就会请求。")]),t._v(" "),v("p",[t._v("CSSOM之所以被需要，有两点：1.供JS调用stylesheets 2. 提供全文样式")]),t._v(" "),v("p",[t._v("JS执行，可能会改变stylesheets,基于这个逻辑，js 在执行之前，同样是要依赖CSSOM已经计算完成的。")]),t._v(" "),v("h2",{attrs:{id:"分层和合成机制：为啥css动画比js高效"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分层和合成机制：为啥css动画比js高效","aria-hidden":"true"}},[t._v("#")]),t._v(" 分层和合成机制：为啥CSS动画比JS高效")]),t._v(" "),v("p",[t._v("图像是如何展示在屏幕上的呢，明明刚才还是一堆文本呢。")]),t._v(" "),v("p",[t._v("首先能看到的那是一副图片格式，文本转为图才能被看到。")]),t._v(" "),v("p",[t._v("那么动画又是怎么回事呢？就是把一幅幅图短时间连续地替换，于是动起来了。")]),t._v(" "),v("p",[t._v("在每一秒，显示器都会在内存中的一个地方取60张图片。如果这里的60张图有未来得及生成的图，那就回卡顿。")]),t._v(" "),v("p",[t._v("再说生成图像的方式可以分为：重排、重绘和合成。")]),t._v(" "),v("p",[t._v("重排：需要整体重新计算布局，走一遍渲染流程，计算量最大。")]),t._v(" "),v("p",[t._v("重绘：不需要重新计算布局，但是要重新生成绘制列表，计算量次之。")]),t._v(" "),v("p",[t._v("合成：为了高效成图，在生成布局树的时候会进行分层（总不能所有的改变都在一个层上，会造成牵一发而动全身的效果），分层完之后进行栅格化成图，再合成输出。这个过程中为了优先展示视窗相关的，又做了分块处理。前两个都是占用主线程资源，而合成线程是另个线程，故此不会影响主线程的任务。")]),t._v(" "),v("p",[t._v("所以，优先使用合成机制展示动画。举个例子：加上will-change属性的在做动画的时候就直接使用合成线程。")]),t._v(" "),v("h2",{attrs:{id:"如何系统地优化页面性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何系统地优化页面性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何系统地优化页面性能")]),t._v(" "),v("p",[t._v("说优化性能，我们是想着更快地加载和响应。")]),t._v(" "),v("p",[t._v("按照页面生命周期，分析性能分三个阶段：")]),t._v(" "),v("ol",[v("li",[t._v("加载阶段。从输入URL到页面首次渲染完毕，越快越好。对照DOM解析过程，可以总结有两个因素：网络下载 和 JS执行。再本质的说：加快网络请求、减少文件大小、减少RTT时间。\n"),v("ol",[v("li",[t._v("使用CND加速。")]),t._v(" "),v("li",[t._v("使用构建工具压缩代码，移除注释。")]),t._v(" "),v("li",[t._v("合并请求。一个HTTP数据包最多可以携带14K的数据，如果小的JS能最大化利用这个大小最好。")]),t._v(" "),v("li",[t._v("内联JS和CSS的使用。")])])]),t._v(" "),v("li",[t._v("交互阶段。比如弹出个对话框啥的，跳转啥的，要求越流畅越好。之前也说了，页面是由图像的快速替换完成动画，而合成一帧图像有重排、重绘、合成的方式，其中重排、重绘占用主线程。所有需要保证主线程没有霸占性任务。\n"),v("ol",[v("li",[t._v("优化主线程任务。\n"),v("ol",[v("li",[t._v("降低霸占性任务。比如大任务拆分，使用webwork")]),t._v(" "),v("li",[t._v("降低垃圾回收频次，这就需要优化代码了，少使用占用大量内存的对象。")])])]),t._v(" "),v("li",[t._v("尽量使用CSS动画，不使用主线程。")]),t._v(" "),v("li",[t._v("避免强制同步。举个例子：")])]),t._v(" "),v("div",{staticClass:"language-javascript line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[t._v("    divDom"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("divDom"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),t._v("刚刚改变了div 的结构就要获取div的高度，强制性执行渲染绘制流程，这就慢了。\n如果在for循环中appendChild,这对性能是很大的需求，可能会造成局部抖动。")]),t._v(" "),v("li",[t._v("结束阶段。可以忽略。")])]),t._v(" "),v("h2",{attrs:{id:"虚拟dom和react架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom和react架构","aria-hidden":"true"}},[t._v("#")]),t._v(" 虚拟DOM和react架构")]),t._v(" "),v("p",[t._v("上面的介绍中，提了 局部抖动 和 强制同步 会造成性能巨大占用，影响体验。现在来说个解决方案——虚拟DOM。")]),t._v(" "),v("p",[t._v("虚拟ODM是JS的内部数据，和外面的HTML可以看做映射关系。")]),t._v(" "),v("p",[t._v("怎么更新呢？")]),t._v(" "),v("p",[t._v("首先有虚拟DOM，当有变化的时候，会生成一个新的DOM树，两个树之间对比（递归，优化版广度优先算法，有个假设，DOM一般不会跨层移动），找出变化的值，积累一定数量批量更新真实DOM。")]),t._v(" "),v("p",[t._v("相当于加了一层，可以控制DOM的更新。")]),t._v(" "),v("p",[t._v("这里得说下fiber机制。在DOM多的情况下，递归的diff算法还是有可能会成为瓶颈，于是用了一种协程机制，让出主线程，避免一个任务执行时间过久。")]),t._v(" "),v("p",[t._v("接下来说说react架构。")]),t._v(" "),v("p",[t._v("首先要有设计模式。不管是MVP还是MVVM，都是MVC的变种，将数据和试图分离，减轻项目的耦合度。react 也能看到mvc的模型。")]),t._v(" "),v("p",[t._v("结合Redux 我们来看下，我们把 vruil dom 看做View，contrioller 看做redux 的 action 和 dispatcher ,model看做redux 的store，当事件改变的时候，controller 更新 model ,model 使得 view 改变，虚拟DOM的改变促使真实DOM发生变化。")]),t._v(" "),v("h2",{attrs:{id:"pwa"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pwa","aria-hidden":"true"}},[t._v("#")]),t._v(" PWA")]),t._v(" "),v("h2",{attrs:{id:"webcomponent"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webcomponent","aria-hidden":"true"}},[t._v("#")]),t._v(" webcomponent")])])}),[],!1,null,null,null);a.default=e.exports}}]);