export default [
    {
        path:"/search",
        name:"搜索",
        component:()=>import("../components/searchInterface/search.vue"),
        children:[
            
            {
                path:"hotsearch",
                name:"热搜",
                component:()=>import("../components/searchInterface/hotsearch.vue")
            },
            {
                path:"variety",
                name:"综艺",
                component:()=>import("../components/searchInterface/variety.vue")
            },
        ]
    }
]