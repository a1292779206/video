<template>
    <div>
        <van-sticky>
        <div class="top">
        <van-image
        width="90"
        height="40"
        src="https://vm.gtimg.cn/tencentvideo/vstyle/mobile/v2/style/img/common/search_logo.png"
        />
        <van-search
            show-action
            placeholder="输入片名、主演或导演"
            shape="round"
            right-icon="cross"
            >
            <div slot="action" @click="$router.go(-1)">返回</div>
        </van-search>
         <div class="swiper-container swiperHomeNav">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link to="/search/hotsearch">热搜</router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/search/variety">电影</router-link>
                    </div>
                </div>
            </div>
        </div>
        </van-sticky>
        <router-view></router-view>
    </div>
</template>

<script>
import Swiper from "swiper"
    export default {
        methods: {
            // getHome(){
            //     this.$router.push("/homepage/jx")
            // }
        },
        mounted() {
            new Swiper('.swiperHomeNav', {
                slidesPerView: 8, //显示可视轮播图个数
                freeMode: true
            });
        },
        created() {
            this.$store.state.vanTabbar =  false
        },
        destroyed() {
            this.$store.state.vanTabbar =  true
        },
    }
</script>

<style lang="scss" scoped>
.top{
    position: relative;
    .van-image{
        position: fixed;
        top: 5px;
        left: 5px;
    }
    .van-search{
        padding-left: 100px;
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
        }
        .swiper-wrapper{
            background-color: #ffffff;
        }
    .swiper-container {
        width: 100%;
        height: 100%;
        }
        .swiper-slide {
        text-align: center;
        font-size: 18px;
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
    
</style>