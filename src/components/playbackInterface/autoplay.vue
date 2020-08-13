<template>
    <div id="appautoplay">
        <!-- 标题 -->
        <van-nav-bar
            :title="$route.name"
            left-arrow
            @click-left="$router.go(-1)"
            />
            <!-- 视频播放 -->
    <div class='demo'>
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions">
        </video-player>
    </div>
        <div class="swiper-container swiperHomeNav">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link to="/homepage/jx">
                            <div class="images">
                            <van-image
                                width="60"
                                height="60"
                                :src="require('../../assets/images/cat.jpeg')"
                                />
                            </div>
                            <div class="font">
                            <span style="font-size:10px;display:block;color:black">给你5万元</span>
                            <span style="font-size:10px">再送2月VIP</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/jx">
                            <div class="images">
                            <van-image
                                width="60"
                                height="60"
                               :src="require('../../assets/images/cat.jpeg')"
                                />
                            </div>
                            <div class="font">
                            <span style="font-size:10px;display:block;color:black">腾讯会议</span>
                            <span style="font-size:10px">高校云协作</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/jx">
                            <div class="images">
                            <van-image
                                width="60"
                                height="60"
                                :src="require('../../assets/images/cat.jpeg')"
                                />
                            </div>
                            <div class="font">
                            <span style="font-size:10px;display:block;color:black">主播云陪伴</span>
                            <span style="font-size:10px">放送有趣技能</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/jx">
                            <div class="images">
                            <van-image
                                width="60"
                                height="60"
                                :src="require('../../assets/images/cat.jpeg')"
                                />
                            </div>
                            <div class="font">
                            <span style="font-size:10px;display:block;color:black">我的积分</span>
                            <span style="font-size:10px">立即充值</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/homepage/jx">
                            <div class="images">
                            <van-image
                                width="60"
                                height="60"
                                :src="require('../../assets/images/cat.jpeg')"
                                />
                            </div>
                            <div class="font">
                            <span style="font-size:10px;display:block;color:black">我的等级</span>
                            <span style="font-size:10px">登录查看等级</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <van-button type="primary" size="large">3月还有这些VIP精彩热剧大片,点击观看</van-button>
            <van-row style="margin-top:10px">
                <van-col span="8">
                    <span style="display:block;font-weight:bold;color:black;font-size:16px;margin-left:10px">青春有你第2季</span>
                    <span style="display:block;font-weight:bold;color:black;font-size:10px;margin-left:10px">看点~加试:许佳琪霸气应战</span>
                    <span style="display:block;font-weight:bold;color:#a2a2b6;font-size:8px;margin-left:10px">本季热度7961~自制:综艺热度榜第一名</span>
                </van-col>
                <van-col span="8" offset="7">
                    <span style="display:block;font-size:10px;color:#a2a2b6;text-align:right">简介</span>
                </van-col>
            </van-row>
            <van-row style="margin-top:10px">
                <van-col span="8">
                    <span style="display:block;font-weight:bold;color:black;font-size:16px;margin-left:10px">正片专辑</span>
                </van-col>
                <van-col span="8" offset="7">
                    <span style="display:block;font-size:10px;color:#a2a2b6;text-align:right">查看更多</span>
                </van-col>
            </van-row>
            <!--  -->
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
    </div>
</template>

<script>
import Swiper from "swiper"
    export default {
        data() {
            return {
                playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    //如果true,浏览器准备好时开始回放。
                    autoplay: false, 
                    // 默认情况下将会消除任何音频。
                    muted: false, 
                    // 导致视频一结束就重新开始。
                    loop: false, 
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto', 
                    language: 'zh-CN',
                     // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '16:9',
                     // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    sources: [{
                        //类型
                        type: "video/mp4",
                        //url地址
                        src: 'http://vjs.zencdn.net/v/oceans.mp4' 
                    }],
                    //你的封面地址
                    poster: 'https://puui.qpic.cn/qqvideo_ori/0/v0932ii7nn8_360_204/0', 
                     //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true  
                    }
                }

            }
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

        .swiperHomeNav2{
            .swiper-slide{
                width: 150px;
                height: 150px;
                margin: 0 10px 0 0;
                .histroy{
                    display: block;
                    width: 170px;
                    height: 100px;
                    background: url(../../assets/images/5.png) no-repeat ;
                    background-size: cover;
                }
                .histroy1{
                    display: block;
                    width: 170px;
                    height: 100px;
                    background: url(../../assets/images/2.png) no-repeat ;
                    background-size: cover;
                }
                .histroy2{
                    display: block;
                    width: 170px;
                    height: 100px;
                    background: url(../../assets/images/3.png) no-repeat ;
                    background-size: cover;
                }
                .histroy3{
                    display: block;
                    width: 170px;
                    height: 100px;
                    background: url(../../assets/images/4.png) no-repeat ;
                    background-size: cover;
                }
            }
        }
  .demo{
    display: inline-block;
    width: 99%;
    height: 358px;
    text-align: center;
    line-height: 100px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }

  .demo:hover{
    display: block;
  }

  .swiperHomeNav{
      .swiper-slide{
          margin: 10px 0 10px 10px;
          .font{
              margin-top: 10px;
              float: left;
              line-height: 20px;
              padding: 0 0 0 10px;
          }
          .images{
              float: left;
          }
      }
  }

  .van-button{
        width: 93%;
        margin: 0 20px 0 20px;
        border-radius: 15px;
        border: #fcd97d;
        background: #fcd97d;
        color: #ffffff;
        font-size: 20px;
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
        #appautoplay{
            background-color: #ffffff;
        }
</style>