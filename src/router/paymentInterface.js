export default [
    {
        path:"/paymentInterface",
        name:"支付界面",
        component:()=>import("../components/recharge/paymentInterface.vue")
    },
    {
        path:"/paymentProcess",
        name:"付款",
        component:()=>import("../components/recharge/paymentProcess.vue"),
    }
]