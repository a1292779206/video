<template>
    <div>
         <div class="swiper-container swiperHomeNav">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" @click="add(goods)">
                        <router-link to="/paymentInterface">
                            <span style="display:block;font-size:15px;color:black">连续包月</span>
                            <span style="display:block;font-size:30px;color:#ff7038">&yen;15</span>
                            <span style="font-size:15px;color:#848494">每月自动续费,可以随时关闭</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide" @click="add(goods2)">
                        <router-link to="/paymentInterface">
                            <span style="display:block;font-size:15px;color:black">连续包月</span>
                            <span style="display:block;font-size:30px;color:#ff7038">&yen;15</span>
                            <span style="font-size:15px;color:#848494">每月自动续费,可以随时关闭</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide" @click="add(goods3)">
                        <router-link to="/paymentInterface">
                            <span style="display:block;font-size:15px;color:black">连续包月</span>
                            <span style="display:block;font-size:30px;color:#ff7038">&yen;15</span>
                            <span style="font-size:15px;color:#848494">每月自动续费,可以随时关闭</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide" @click="add(goods3)">
                        <router-link to="/paymentInterface">
                            <span style="display:block;font-size:15px;color:black">连续包月</span>
                            <span style="display:block;font-size:30px;color:#ff7038">&yen;15</span>
                            <span style="font-size:15px;color:#848494">每月自动续费,可以随时关闭</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide" @click="add(goods2)">
                        <router-link to="/paymentInterface">
                            <span style="display:block;font-size:15px;color:black">连续包月</span>
                            <span style="display:block;font-size:30px;color:#ff7038">&yen;15</span>
                            <span style="font-size:15px;color:#848494">每月自动续费,可以随时关闭</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide" @click="add(goods)">
                        <router-link to="/paymentInterface">
                            <span style="display:block;font-size:15px;color:black">连续包月</span>
                            <span style="display:block;font-size:30px;color:#ff7038">&yen;15</span>
                            <span style="font-size:15px;color:#848494">每月自动续费,可以随时关闭</span>
                        </router-link>
                    </div>
                </div>
        </div>
        <!-- ================== -->
        <!-- 优惠券单元格 -->
            <van-coupon-cell
            @click="showList = true"
            />
            <van-button type="primary" size="large" @click="add(goods)" to="/paymentInterface">立即以15元开通</van-button>
            <span style="font-size:20px;color:#848494;text-align:center;display:block">得150积分+150V力值</span>
    </div>
</template>

<script>
     import { createNamespacedHelpers } from 'vuex'

    const { mapMutations } = createNamespacedHelpers('vip')

import Swiper from "swiper"
    export default {
        data:function(){
            return{
                goods:{
                    id:1,
                    isSelect:true,
                    name:"月卡",
                    price:15.00,
                    num:1
                },
                goods2:{
                    id:2,
                    isSelect:true,
                    name:"月卡",
                    price:15.00,
                    num:2
                },
                goods3:{
                    id:3,
                    isSelect:true,
                    name:"月卡",
                    price:15.00,
                    num:3
                }
            }
        },
        methods: {
            // getVip(){
            //     this.$store.commit("vip/add",this.goods)
            //     // console.log("错做成都")
            // }
            ...mapMutations(["add"])
        },
        mounted() {
            new Swiper('.swiperHomeNav', {
                slidesPerView: 4, //显示可视轮播图个数
                freeMode: true
            });
        },
    }
</script>

<style lang="scss" scoped>
        
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
        
    .swiperHomeNav{
        .swiper-slide{
                width: 150px;
                height: 150px;
                margin-right: 10px;
                border: 1px solid #f2ca5b;
                border-radius: 10px;
                &:nth-child(1){
                    margin-left: 15px;
                }
        }
    }
    .van-button{
        width: 93%;
        margin: 0 20px 0 20px;
        border-radius: 15px;
        border: #fcd97d;
        background: #fcd97d;
        color: #663d00;
        font-size: 20px;
    }
</style>