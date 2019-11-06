module.exports = {
    title: '前端记录',
    base:'/tech/',
    description: 'welcome to my tech blog',
    markdown:{
        lineNumbers: true
    },
    themeConfig:{
        nav:[
            {text:'Blog', link:'/blog/'}
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
                'c'

            ]
        }
    }
}