<template>
    <div id="app">
        
        <!-- Swiper -->
        <div class="swiper-container containerguidepage">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div v-show="flag">
                    <img class="animated fadeInUpBig" src="../../assets/images/1.jpg" alt="">
                    <h3 class="animated fadeInUpBig delay-2s">今天的你准备好了吗？</h3>
                </div>
            </div>
            <div class="swiper-slide">
                <div v-show="flag">
                    <img class="animated fadeInUpBig" src="../../assets/images/2.jpg" alt="">
                    <h3 class="animated fadeInUpBig delay-2s">精彩的情节准备开始!</h3>
                </div>
            </div>
            <div class="swiper-slide">
                <div v-show="flag">
                    <img class="animated fadeInUpBig" src="../../assets/images/3.jpg" alt="">
                    <h3 class="animated fadeInUpBig delay-2s">快！快！快！下一步~</h3>
                </div>
            </div>
            <div class="swiper-slide">
                <div v-show="flag">
                    <img class="animated fadeInUpBig" src="../../assets/images/4.jpg" alt="">
                    <van-button class="animated fadeInUpBig delay-3s" plain hairline type="primary" size="normal" to="/homepage/jx">点击体验</van-button>
                </div>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination paginationguidepage"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        data(){
            return {
                flag:true
            }
        },
        created(){
            this.$store.state.vanTabbar = false;
        },
        mounted(){
            let _this = this;
            new Swiper('.containerguidepage', {
                pagination: {
                    el: '.paginationguidepage',
                },
                on: {
                    touchStart: function(){
                        console.log(this.activeIndex);  
                    },
                    // 轮播图切换前效果
                    slideChangeTransitionStart:function(){
                        _this.flag = false; //隐藏
                    },
                    // 轮播图切换后效果
                    slideChangeTransitionEnd: function(){
                        // _this.flag[this.activeIndex] = true; //显示
                        _this.flag = true;
                    },
                },
            });
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
    .swiper-container{
        position: absolute;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        text-align: center;
        position: relative;
        img{
            margin-left:auto;
            margin-right:auto;
            width: 100%;
            height: 800px;
            // margin-top: 200px;
        }
        h3{
            color:#808080;
            position: absolute;
            top: 84%;
            left: 26%;
            font-size: 20px;
            color:pink
        }
        .van-button{
            position: absolute;
            width: 28%;
            height: 9%;
            bottom: 6%;
            right: 34%;
            z-index: 20;
            background-color: transparent;
            border-radius: 20px;
            color:white;
            border: 1px solid #ffffff;
            font-size: 12px;
        }
        
    }
</style>