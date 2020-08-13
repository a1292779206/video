export default [
    {
        path:"/personalcenter",
        name:"个人中心",
        component:()=>import("../views/personalcenter.vue")
    },
    {
        path:"/login",
        name:"登录",
        component:()=>import("../components/personalcenter/login.vue")
    },
    {
        path:"/register",
        name:"注册",
        component:()=>import("../components/personalcenter/register.vue")
    }
]