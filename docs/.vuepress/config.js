module.exports = {
    title: '前端记录',
    base:'/tech/',
    description: '欢迎来到我的博客',
    markdown:{
        lineNumbers: true
    },
    themeConfig:{
        nav:[
            {text:'Blog', link:'/blog/'},
            {text:'语言特性', link:'/js语言特性/'}
        ],
        sidebar:{
            '/blog/':[
                {
                    title:'浏览器的工作原理和实践',
                    collapsable: false,
                    children:[
                        '宏观视角下的浏览器',
                        '浏览器中的javascript执行机制',
                        'v8工作原理',
                        '浏览器中的页面循环系统',
                        '浏览器的页面',
                        '浏览器中的网络',
                        '浏览器安全'
                    ]
                },
                'c',

            ],
            '/js语言特性/':[
                '对象属性',
                '基本数据类型',
                '对象继承'
            ]
        }
    }
}