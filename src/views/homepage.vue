<template>
    <div id="appview">
        <van-sticky> <!-- 吸顶-->
        <div class="top">
        <van-row class="topSearchNav">
            <van-col span="4"><span class="icon"> </span></van-col>
            <van-col span="8" offset="12">
                <van-search @focus="getSearch" placeholder="斗罗大陆" />
            </van-col>
        </van-row>
         <div class="swiper-container swiperHomeNav">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link to="/homepage/jx">精选</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/dsj">电视剧</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/hy">VIP</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/dy">电影</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/zy">综艺</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/dm">动漫</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/se">少儿</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/yl">娱乐</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/cy">潮音</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/yx">游戏</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/jlp">纪录片</router-link>
                    </div>
                </div>
            </div>
            </div>
            </van-sticky>
            <!-- 过渡效果与路由器结合 -->
            <transition mode="out-in" name="routerview">
                <router-view></router-view>
            </transition>
    </div>
</template>

<script>
import Swiper from "swiper"
    export default {
        methods:{
            getSearch(){
                this.$router.push("/search/hotsearch")
            }
        },
        mounted() {
            new Swiper('.swiperHomeNav', {
                slidesPerView: 8, //显示可视轮播图个数
                freeMode: true
            });
        },
    }
</script>

<style lang="scss" scoped>

    // 路由过度效果
	.routerview-enter,
	.routerview-leave-to{
		opacity: 0;
		transform: translateX(200px);
	}
	.routerview-enter-active,
	.routerview-leave-active{
		transition: all .3s ease;
	}
        .top{
            background-color: #ffffff;
        }
        .topSearchNav{
            background-color: #ffffff;
            .icon{
                display: inline-block;
                width: 112px;
                height: 44px;
                background: url(../assets/images/0.jpg) 0 0/100% no-repeat;
                margin: 0  0 0 10px;
            }
            .van-search{
                padding: 10px;
            }
        }
        .swiperHomeNav{
            // margin-bottom: 10px;
            a{
                &.router-link-active{
                    color:#FF6B00;
                    font-weight: bold;
                    border-bottom: 1px solid #FF6B00;
                }
            }
        }
 // swiper公共样式
        .swiper-container {
        width: 100%;
        height: 100%;
        }
        .swiper-slide {
        text-align: center;
        font-size: 17px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        }
        #appview{
        background-color: #ffffff;
        overflow: hidden;
    }
</style>