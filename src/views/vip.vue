<template>
    <div id="appvip">
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
            />
            <div class="top">
            <van-row>
                <van-col span="4" offset="3" >
                    <van-image
                        round
                        width="80px"
                        height="80px"
                        :src="require('../assets/images/touxiang.jpg')"
                    />
                </van-col>
                <van-col span="10" offset="8" >
                    <div v-if="$store.state.username" class="cancellation">
                        <h3 v-text="$store.state.username"></h3>
                        <span>欢迎你<i v-text="$store.state.username"></i></span>
                    </div>
                    <div v-else style="height:80px;margin-left:10px">
                        <span style="display:block;height:30px;line-height:69px;font-size:25px">游客</span>
                        <span style="font-size:15px">登录后可同步VIP特权</span>
                    </div>
                </van-col>
                <van-col class="viplogin" span="4" offset="5" v-if="$store.state.username">
                    <!-- <router-link to="/login" style="text-align:center">登录</router-link> -->
                    <van-button class="loginbuttom" type="primary" size="small" @click="$store.state.username=''">注销</van-button>
                </van-col>
                <van-col class="viplogin" span="4" offset="5" v-else>
                    <!-- <router-link to="/login" style="text-align:center">登录</router-link> -->
                    <van-button class="loginbuttom" type="primary" size="small" to="/login">登录</van-button>
                </van-col>
            </van-row>
        </div>
        <router-link to="../autoplay" tag="div" class="vippicture">
        <van-image
            width="100%"
            :src="require('../assets/images/viptitle.jpg')"
            />
        </router-link>
        <van-tabs v-model="active">
            <van-tab title="腾讯视频VIP" to="/vip/ordinary">
                <h1 style="margin:10px 0 10px 10px">适用于非TV用户</h1>
                <router-view></router-view>
            </van-tab>
            <van-tab title="超级影视VIP" to="/vip/super">
                <h1 style="margin:10px 0 10px 10px">适用于TV全屏通会员</h1>
                <router-view></router-view>
            </van-tab>
        </van-tabs>
        <van-row>
            <van-col span="8">
                <span style="display:block;font-weight:bold;color:black;font-size:16px;margin-left:10px">VIP+套餐</span>
            </van-col>
            <van-col span="8" offset="7">
                <span style="display:block;font-size:16px;color:#a2a2b6;text-align:right">更多</span>
            </van-col>
        </van-row>
        <div class="swiper-container swiperHomeNav">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" @click="add(goods)">
                        <router-link to="/paymentInterface">
                            <!-- <span style="display:block;font-size:20px;color:black"> -->
                                <van-image
                                    width="100%"
                                    height="100%"
                                    :src="require('../assets/images/0.png')"
                                    />
                            <!-- </span> -->
                            <span style="font-size:12px;display:block">VIP + 美团外卖</span>
                            <van-button type="primary" size="small">购买</van-button>
                        </router-link>
                    </div>
                    <div class="swiper-slide" @click="add(goods2)">
                        <router-link to="/paymentInterface">
                            <!-- <span style="display:block;font-size:20px;color:black"> -->
                                <van-image
                                    width="100%"
                                    height="100%"
                                    :src="require('../assets/images/6.png')"
                                    />
                            <!-- </span> -->
                            <span style="font-size:12px;display:block">VIP + 喜马拉雅</span>
                            <van-button type="primary" size="small">购买</van-button>
                        </router-link>
                    </div>
                    <div class="swiper-slide" @click="add(goods3)">
                        <router-link to="/paymentInterface">
                            <!-- <span style="display:block;font-size:20px;color:black"> -->
                                <van-image
                                    width="100%"
                                    height="100%"
                                    :src="require('../assets/images/6.png')"
                                    />
                            <!-- </span> -->
                            <span style="font-size:12px;display:block">VIP + 肯德基</span>
                            <van-button type="primary" size="small">购买</van-button>
                        </router-link>
                    </div>
                    <div class="swiper-slide" @click="add(goods)">
                        <router-link to="/paymentInterface">
                            <!-- <span style="display:block;font-size:20px;color:black"> -->
                                <van-image
                                    width="100%"
                                    height="100%"
                                    :src="require('../assets/images/0.png')"
                                    />
                            <!-- </span> -->
                            <span style="font-size:12px;display:block">VIP + 美团外卖</span>
                            <van-button type="primary" size="small">购买</van-button>
                        </router-link>
                    </div>
                </div>
        </div>
        <van-row>
            <van-col span="8">
                <span style="display:block;font-weight:bold;color:black;font-size:16px;margin-left:10px">VIP活动</span>
            </van-col>
            <van-col span="8" offset="7">
                <span style="display:block;font-size:16px;color:#a2a2b6;text-align:right">更多</span>
            </van-col>
        </van-row>
        <van-grid :border="false" :column-num="2">
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/tv/0/690294933_498280/0" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/tv/0/695481371_498280/0" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/tv/0/250160525_498280/0" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/tv/0/250160306_498280/0" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        </van-grid>
        <!-- ===== -->
        <van-row>
            <van-col span="8">
                <span style="display:block;font-weight:bold;color:black;font-size:16px;margin-left:10px">VIP热门精选</span>
            </van-col>
            <van-col span="8" offset="7">
                <span style="display:block;font-size:16px;color:#a2a2b6;text-align:right">更多</span>
            </van-col>
        </van-row>
        <van-grid :border="false" :column-num="3">
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/vcover_vt_pic/0/ihhsfwvvhcm16nd1582120418719/350" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/vcover_vt_pic/0/vooy2m9hi5p1jqm1579487614/350" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/vcover_vt_pic/0/mzc0020095tf0wm1580795235/350" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        </van-grid>
        <van-row>
            <van-col span="8">
                <span style="display:block;font-weight:bold;color:black;font-size:16px;margin-left:10px">VIP热门精选</span>
            </van-col>
            <van-col span="8" offset="7">
                <span style="display:block;font-size:16px;color:#a2a2b6;text-align:right">更多</span>
            </van-col>
        </van-row>
        <van-grid :border="false" :column-num="3">
        <van-grid-item>
            <router-link to="/autoplay" tag="div">
            <van-image src="https://puui.qpic.cn/vupload/0/20190430_ax3mz16l0gr/0" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
            </router-link>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/vupload/0/20190430_zwzrvqqtst/0" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://puui.qpic.cn/vupload/0/20190430_zwzrvqqtst/0" />
            <span style="display:block;font-size:15px;color:black">绝密543</span>
        </van-grid-item>
        </van-grid>
        <van-notice-bar text="使用【微信支付/Q币/QQ钱包】开通腾讯视频，会员未到账" left-icon="volume-o" />
        <span style="display:block;padding-left:20px;height:50px;line-height:50px;background:#ffffff;border:1px solid #f7f7f7;color:black;font-size:14px">湖北用户专享免费看“精选佳作”的问题</span>
        <span style="display:block;padding-left:20px;height:50px;line-height:50px;background:#ffffff;border:1px solid #f7f7f7;color:black;font-size:14px">VIP付费超前点播常见问题</span>
        <span style="display:block;padding-left:20px;height:50px;line-height:50px;background:#ffffff;border:1px solid #f7f7f7;color:black;font-size:14px">使用【微信支付/Q币/QQ钱包】开通腾讯视频，会员未到账</span>
    </div>
</template>

<script>
import Swiper from "swiper"
    export default {
        data() {
            return {
                active: 2,
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
            };
        },
         mounted() {
            new Swiper('.swiperHomeNav', {
                slidesPerView: 3, //显示可视轮播图个数
                freeMode: true
            });
        },
        
    }
</script>

<style lang="scss" scoped>
    .top{
        background: #372920;
        background-size: 100% auto ;
        padding: .266667rem;
        .van-image{
            float: right;
        }
        .van-col{
            height: 80px;
            line-height: 80px;
            color:#fff;
            margin: 5% 0 5% 0;
            // a{
            //     color:#e7c25b;
            //     width: 40px;
            //     height:20px;
            //     border:1px solid #9a8041;
            //     border-radius: 10px;
            //     padding: 5px 10px 5px 10px;
            // }
            .loginbuttom{
                background: #372920;
                border: 1px solid #9a8041;
                color: #e7c25b;
            }
            .cancellation{
                position: relative;
                h3{
                    font-size: 30px;
                    margin-left: 10%;
                }
                span{
                    position: absolute;
                    left: 26px;
                    bottom: -32px;
                    font-size: 13px;
                }
            }
        }
        .viplogin{
            line-height: 80px;
        }
    }
    .vippicture{
        padding: 15px;
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
        .swiperHomeNav{
        .swiper-slide{
                // width: 150px;
                // height: 200px;
                // margin:10px 10px 0 0;
                border: 1px solid #f1f1f1;
                border-radius: 10px;
                &:nth-child(1){
                    margin-left: 15px;
                }
        }
    }
    #appvip{
        background-color: #ffffff;
    }
    .van-button{
        margin-bottom:10px;
        width: 100px;
        border-radius: 12px;
        background-color: #fcdb80;
        border:#fcdb80;
        color: #663d00;
    }
</style>