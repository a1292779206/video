<template>
    <div id="box">
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        />

        <!-- 地址 -->
        <van-contact-card
        type="edit"
        name="残曦"
        tel="0000000000"
        :editable="false"
        />

        <div v-for="(item,index) in lists" :key="index">
            <van-card
            :tag="item.name"
            :num="item.num"
            :price="item.price"
            desc="描述信息"
            :title="item.name"
            thumb="https://puui.qpic.cn/vupload/0/20190610_g4elyvi8qtj/0"
            />
        </div>
        

        <!-- 提交订单 -->
        <van-submit-bar
        :price="sum*100"
        button-text="支付"
        @submit="onsubmit"
        />
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                name:"",
                totals:0
            }
        },
        methods: {
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(), //1584064700947验证
                    goodsList:this.lists,
                    type:2 //已支付
                }
                this.$store.commit("paymentList/add",order);
                // 清除购物车数据
                this.$store.state.vip.lists = [];
                this.$store.state.vip.num = 0;

                this.$router.push("/paymentList/paymentListAll");
            },
            // 未支付处理
            orderpay(){
                console.log("处理订单未支付");
                // 未支付订单处理
                let order = {
                    orderId:new Date().getTime(), //1584064700947验证
                    goodsList:this.lists,
                    type:1 //未支付
                }
                this.$store.commit("paymentList/add",order);

                // 清除购物车数据
                this.$store.state.vip.lists = [];
                this.$store.state.vip.num = 0;

                // 跳转路由
                this.$router.go("-1");
            }
        },
        computed:{
            // 总价格计算
            sum(){
                // 总价格计算
                // reduce()返回计算总价格
                // total 总价格累加
                // item 数据中对象
                return this.lists.reduce((total,item)=>{
                    // 判断选项
                    if(!item.isSelect) return total; //false不让计算总价格
                    return total + parseInt(item.price) * parseInt(item.num);//总价格
                },0);//总价格默认参数值为0
            }
        },
        created(){

            // 获取购物车数据
            this.lists = this.$store.state.vip.lists;
            
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    
</style>