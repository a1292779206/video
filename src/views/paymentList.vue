<template>
    <div>
        
        <van-nav-bar
        title="订单列表"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/personalcenter')"
        />
        <van-tabs v-model="active"  @click="onadd">
            <van-tab title="全部订单">
            </van-tab>
            <van-tab title="待支付">
            </van-tab>
            <van-tab title="待收货">
            </van-tab>
            <van-tab title="已完成">
            </van-tab>
        </van-tabs>
        <!-- 三级路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                active: 0
            }
        },
        methods:{
            onadd(index){
                if(index == 0){
                    this.$router.push("/paymentList/paymentListAll");
                }else if(index == 1){
                    this.$router.push("/paymentList/paymentListPlay");
                }else if(index == 2){
                    this.$router.push("/paymentList/paymentListGoods");
                }else if(index == 3){
                    this.$router.push("/paymentList/paymentListEnd");
                }
            }
        },
        
        created(){
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