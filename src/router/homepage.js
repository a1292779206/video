export default {
    path:"/homepage",
    name:"首页",
    component:()=>import("../views/homepage.vue"),
    children:[
        {
            path:"jx",
            name:"精选",
            component:()=>import("../components/home/jx.vue")
        },
        {
            path:"dsj",
            name:"电视剧",
            component:()=>import("../components/home/dsj.vue")
        },
        {
            path:"hy",
            name:"VIP",
            component:()=>import("../components/home/hy.vue")
        },
        {
            path:"dy",
            name:"电影",
            component:()=>import("../components/home/dy.vue")
        },
        {
            path:"zy",
            name:"综艺",
            component:()=>import("../components/home/zy.vue")
        },
        {
            path:"dm",
            name:"动漫",
            component:()=>import("../components/home/dm.vue")
        },
        {
            path:"se",
            name:"少儿",
            component:()=>import("../components/home/se.vue")
        },
        {
            path:"yl",
            name:"娱乐",
            component:()=>import("../components/home/yl.vue")
        },
        {
            path:"cy",
            name:"潮音",
            component:()=>import("../components/home/cy.vue")
        },
        {
            path:"yx",
            name:"游戏",
            component:()=>import("../components/home/yx.vue")
        },
        {
            path:"jlp",
            name:"纪录片",
            component:()=>import("../components/home/jlp.vue")
        }
    ]
}