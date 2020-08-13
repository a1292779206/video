<template>
    <div id="appperson">
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
            />
        <div class="top">
            <van-row>
                <van-col span="4">
                    <van-image
                        round
                        width="80px"
                        height="80px"
                        src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3210272353,5260557&fm=26&gp=0.jpg"
                    />
                </van-col>
                <van-col span="19" offset="1">
                    <div v-if="$store.state.username" class="cancellation">
                        <h3 v-text="$store.state.username"></h3>
                        <span @click="$store.state.username=''">注销账户</span>
                    </div>
                    <div v-else>
                        <router-link to="/login">登陆</router-link>/
                        <router-link to="/register">注册</router-link>
                    </div>
                </van-col>
            </van-row>
        </div>
         <div class="swiper-container swiperHomeNav">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link to="/vip">
                            <span style="display:block;font-size:15px;color:black">VIP会员</span>
                            <span style="font-size:8px;color:#ff7038">vip首季40元</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/vip">
                            <span style="display:block;font-size:15px;color:black">我的钻石</span>
                            <span style="font-size:8px;color:#a2a2b6">立即充值</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/vip">
                            <span style="display:block;font-size:15px;color:black">VIP待领取</span>
                            <span style="font-size:8px;color:#ff7038">@你 领29天</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/vip">
                            <span style="display:block;font-size:15px;color:black">我的积分</span>
                            <span style="font-size:8px;color:#a2a2b6">免费兑好礼</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/vip">
                            <span style="display:block;font-size:15px;color:black">我的等级</span>
                            <span style="font-size:8px;color:#a2a2b6">登录查看等级</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- <router-view></router-view> -->
            <van-grid>
                <van-grid-item to="/paymentList/paymentListAll" icon="new-o" text="全部订单" />
                <van-grid-item to="/paymentList/paymentListPlay" icon="bulb-o" text="待支付" />
                <van-grid-item to="/paymentList/paymentListGoods" icon="bar-chart-o" text="待收货" />
                <van-grid-item to="/paymentList/paymentListEnd" icon="comment-o" text="已完成" />
            </van-grid>
            <van-row>
                <van-col span="8">
                    <span style="display:block;font-weight:bold;color:black;font-size:16px;margin-left:10px">观看历史</span>
                </van-col>
                <van-col span="8" offset="7">
                    <span style="display:block;font-size:16px;color:#a2a2b6;text-align:right">更多</span>
                </van-col>
            </van-row>
            <!-- ====轮播2===== -->
            <div class="swiper-container swiperHomeNav2">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link to="/autoplay">
                            <span class="histroy"></span>
                            <span style="font-size:8px;color:#a2a2b6">【完美关系·好剧热播】黄轩邂逅菜鸟总裁佟丽娅</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/autoplay">
                            <span class="histroy1"></span>
                            <span style="font-size:8px;color:#a2a2b6">【枕上书点播大结局】帝君以心做戒送凤九</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/autoplay">
                            <span class="histroy2"></span>
                            <span style="font-size:8px;color:#a2a2b6">【在北京】徐天暗查工地被不明人绑架在线等</span>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/autoplay">
                            <span class="histroy3"></span>
                            <span style="font-size:8px;color:#a2a2b6">【安家】单膝跪地为房似锦试鞋，徐姑姑太会了！</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <van-row>
                <van-col span="8">
                    <span style="display:block;font-weight:bold;color:black;font-size:16px;margin-left:10px">我的下载</span>
                </van-col>
                <van-col span="8" offset="7">
                    <span style="display:block;font-size:16px;color:#a2a2b6;text-align:right">更多</span>
                </van-col>
            </van-row>
            <van-grid>
                <van-grid-item class="down" icon="new-o" text="微视" />
                <van-grid-item class="down" icon="bulb-o" text="关注" />
                <van-grid-item class="down" icon="bulb-o" text="关注" />
            </van-grid>
            <h1 style="margin-left:10px;font-weight:bold;color:black;font-size:16px">兴趣中心</h1>
            <van-grid :border="false" :gutter="10" :column-num="3" class="list">
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            </van-grid>
            <van-grid :border="false" :gutter="10" :column-num="3" class="list">
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            </van-grid>
            <van-grid :border="false" :gutter="10" :column-num="3" class="list">
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            <van-grid-item>
                <span style="display:block;font-size:15px;color:#FF00FF;margin:3px 0 3px 0">福利社</span>
                <span style="font-size:8px;color:#a2a2b6">肖战人气榜NO.1</span>
            </van-grid-item>
            </van-grid>
            <h1 style="margin-left:10px;font-weight:bold;color:black;font-size:16px">视频功能</h1>
            <van-grid>
                <van-grid-item icon="photo-o" text="关注" />
                <van-grid-item icon="photo-o" text="电视助手" />
                <van-grid-item icon="photo-o" text="明星装扮" />
            </van-grid>
            <h1 style="margin-left:10px;font-weight:bold;color:black;font-size:16px">免流量,看视频</h1>
            <van-grid>
                <van-grid-item icon="photo-o" text="腾讯王卡" />
                <van-grid-item icon="photo-o" text="极速5G" />
                <van-grid-item icon="photo-o" text="移动花卡" />
                <van-grid-item icon="photo-o" text="电信畅享卡" />
            </van-grid>
            <van-grid>
                <van-grid-item icon="photo-o" text="免费WIFI" />
                <van-grid-item icon="photo-o" text="移动免流" />
            </van-grid>
            <h1 style="margin-left:10px;font-weight:bold;color:black;font-size:16px">限时推广</h1>
            <van-grid>
                <van-grid-item icon="photo-o" text="领29天VIP" />
                <van-grid-item icon="photo-o" text="免费看电视" />
                <van-grid-item icon="photo-o" text="招行送会员" />
                <van-grid-item icon="photo-o" text="电信畅享卡" />
            </van-grid>
            <van-grid>
                <van-grid-item icon="photo-o" text="腾讯王卡" />
                <van-grid-item icon="photo-o" text="极速5G" />
                <van-grid-item icon="photo-o" text="移动花卡" />
                <van-grid-item icon="photo-o" text="电信畅享卡" />
            </van-grid>
            <van-grid>
                <van-grid-item icon="photo-o" text="腾讯王卡" />
                <van-grid-item icon="photo-o" text="极速5G" />
            </van-grid>
            <h1 style="margin-left:10px;font-weight:bold;color:black;font-size:16px">其他</h1>
            <van-cell title="设置" is-link to="#" />
            <van-cell title="个人信息" is-link to="#" />
            <van-cell title="意见反馈" is-link to="index" />
    </div>
</template>

<script>
import Swiper from "swiper"
    export default {
        methods:{
         
        },
        mounted() {
            new Swiper('.swiperHomeNav', {
                slidesPerView: 4, //显示可视轮播图个数
                freeMode: true
            });
            new Swiper('.swiperHomeNav2', {
                slidesPerView: 3, //显示可视轮播图个数
                freeMode: true
            });
        },
        
    }
</script>

<style lang="scss" scoped>
    .list{
        margin-bottom: 10px;
    }
    .down{
        margin-left: 10px;
    }
    .top{
        background: #F37D0F url("../assets/images/cat.jpg");
        background-size: 100% auto ;
        padding: .266667rem;
        .van-image{
            float: right;
        }
        .van-col{
            height: 80px;
            line-height: 80px;
            color:#fff;
            a{
                color:#fff;
            }
        }
         .cancellation{
             position: relative;
             h3{
                 font-size: 30px;
             }
             span{
                 position: absolute;
                 right: 0;
                 bottom: 0;
                 font-size: 13px;
             }
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
            .swiper-slide{
                width: 100px;
                height: 80px;
                margin: 0 10px 20px 0;
            }
        }
        .swiperHomeNav2{
            .swiper-slide{
                width: 150px;
                height: 150px;
                margin: 0 10px 0 0;
                .histroy{
                    display: block;
                    width: 170px;
                    height: 100px;
                    background: url(../assets/images/5.png) no-repeat ;
                    background-size: cover;
                }
                .histroy1{
                    display: block;
                    width: 170px;
                    height: 100px;
                    background: url(../assets/images/2.png) no-repeat ;
                    background-size: cover;
                }
                .histroy2{
                    display: block;
                    width: 170px;
                    height: 100px;
                    background: url(../assets/images/3.png) no-repeat ;
                    background-size: cover;
                }
                .histroy3{
                    display: block;
                    width: 170px;
                    height: 100px;
                    background: url(../assets/images/4.png) no-repeat ;
                    background-size: cover;
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
    #appperson{
        background-color: #ffffff;
    }
</style>