module.exports = {
    title: '前端记录',
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
                    title:'编码',
                    collapsable: false,
                    children:[
                        'c',
                        'js'
                    ]
                },
                'c'

            ]
        }
    }
}