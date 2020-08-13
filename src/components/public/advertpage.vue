<template>
    <div>
        <!-- <h1>广告页<font style="font-size:40px">{{num}}</font></h1> -->
        <button v-if="num >= 3">{{num}}</button>
        <button v-else  @click="goHome">跳过</button>
        <img src="../../assets/images/timg.gif" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num:5,
                cleardata:null //清除定时器
            }
        },
        methods:{
            goHome(){
                this.$router.push("/homepage/jx");//推荐页面
            }
        },
        created(){
            // 倒计时定时器
            this.cleardata = setInterval(() => {
                if(this.num == 0){
                    this.$router.push("/homepage/jx");//推荐页面
                }else{
                    this.num--;
                }
            }, 1000);
            this.$store.state.vanTabbar = false;
        },
        // 销毁生命周期函数之前停止
        beforeDestroy() { //销毁vue数据与方法。组件结束执行
            // 定时器属于浏览器对象，属于window。
            clearInterval(this.cleardata);
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    div{
        
        position: fixed;
        background: #261a28;
        height: 100%;
        width: 100%;
        button{
            position: fixed;
            right: 20px;
            top: 20px;
            border-radius: 15px;
            background-color: #f7f8fa;
            border:0;
            font-size: 12px;
            width: 50px;
            height: 30px;
        }
    }
</style>