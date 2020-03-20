(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{226:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),s("h2",{attrs:{id:"http-1-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1","aria-hidden":"true"}},[t._v("#")]),t._v(" http 1.1")]),t._v(" "),s("p",[t._v("超文本传输协议，起先只是传输html文件用的，一个请求行就够用了。比如"),s("code",[t._v("get http://club.com")]),t._v(",这不，随着万维网的发展，不够用了，javascript\\css\\音视频都需要传输。")]),t._v(" "),s("p",[t._v("于是有了1.0版本，有了请求头。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    accept: 'text/html'\n    accept-encoding: gzip, \n    host\n    cookie\n    reffer\n    \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("有了响应头")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    content-type: 'text/html'\n    content-encoding: gzip\n    cache族\n    \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("1.1 版本又做了些改进，\n1. 增加了持久连接，减少TCP握手次数\n2. 为每个域名分配最多6个TCP\n3. 使用不同CDN实现域名分片")]),t._v(" "),s("h2",{attrs:{id:"http-2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0","aria-hidden":"true"}},[t._v("#")]),t._v(" http 2.0")]),t._v(" "),s("p",[t._v("之前的协议不能将带宽占满，存在如下问题：")]),t._v(" "),s("ol",[s("li",[t._v("TCP启动慢")]),t._v(" "),s("li",[t._v("多个TCP链接，竞争有限带宽")]),t._v(" "),s("li",[t._v("队头阻塞。使用了持久链接，如果有一个堵住了，其他资源就得等。")])]),t._v(" "),s("p",[t._v("于是有了2.0")]),t._v(" "),s("p",[t._v("好处：")]),t._v(" "),s("ol",[s("li",[t._v("主要是多路复用。\n如何实现？只使用一个TCP 链接，进行一次慢启动。然后把所有请求编号、打包，借助TCP管道连续发送。服务端收到数据后按照编号组装，响应了数据后就发送回去。客户端再安装编号组装拿到数据。编号打包的技术，称为 二进制分帧。")]),t._v(" "),s("li",[t._v("可以压缩请求头")]),t._v(" "),s("li",[t._v("接收服务端推送。")])]),t._v(" "),s("h2",{attrs:{id:"http-3-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-3-0","aria-hidden":"true"}},[t._v("#")]),t._v(" http 3.0")]),t._v(" "),s("p",[t._v("http2 似乎完美了，但追求还是要有的。\n不足之处在于TCP的限制：")]),t._v(" "),s("ol",[s("li",[t._v("首次连接慢")]),t._v(" "),s("li",[t._v("队头阻塞。 如果丢了一个TCP数据包，就需要等待重传。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);