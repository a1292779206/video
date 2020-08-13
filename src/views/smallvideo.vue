<template>
    <div id="appsmallvideo">
        <van-nav-bar
            :title="$route.name"
            left-arrow
            @click-left="$router.go(-1)"
            />
        <!-- 视频播放 -->
        <h3>今日热点</h3>
        <div>
        <div class='demo'>
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions">
            </video-player>
        </div>
        <span style="font-size:10px">其父白奕为白止帝君第二子，娶赤狐族伏觅仙母之女，遂生此天地间唯一只九尾红狐。
            其原身兼二族之长，通体红艳似鸽血，
            唯耳与爪雪白尔。及化人身，额生凤羽之花，貌擅倾世之色，长庖厨，好笑语，灵心慧性，择善固执，有豪侠气，
            得阖（读作hé）族盛宠。长，承其姑白浅上神之位，继为青丘女君!</span>
        <span style="float:right" @click="evaluate">
            <van-rate v-model="value" />
            <p style="font-size:10px">拿出你的小手点一点!</p>
        </span>
        <div class='demo'>
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions">
            </video-player>
        </div>
        <span style="font-size:10px">其父白奕为白止帝君第二子，娶赤狐族伏觅仙母之女，遂生此天地间唯一只九尾红狐。
            其原身兼二族之长，通体红艳似鸽血，
            唯耳与爪雪白尔。及化人身，额生凤羽之花，貌擅倾世之色，长庖厨，好笑语，灵心慧性，择善固执，有豪侠气，
            得阖（读作hé）族盛宠。长，承其姑白浅上神之位，继为青丘女君!</span>
        <span style="float:right" @click="evaluate">
            <van-rate v-model="value" />
            <p style="font-size:10px">拿出你的小手点一点!</p>
        </span>
        <div class='demo'>
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions">
            </video-player>
        </div>
        <span style="font-size:10px">其父白奕为白止帝君第二子，娶赤狐族伏觅仙母之女，遂生此天地间唯一只九尾红狐。
            其原身兼二族之长，通体红艳似鸽血，
            唯耳与爪雪白尔。及化人身，额生凤羽之花，貌擅倾世之色，长庖厨，好笑语，灵心慧性，择善固执，有豪侠气，
            得阖（读作hé）族盛宠。长，承其姑白浅上神之位，继为青丘女君!</span>
        <span style="float:right" @click="evaluate">
            <van-rate v-model="value" />
            <p style="font-size:10px">拿出你的小手点一点!</p>
        </span>
        </div>
        <h3>片后花絮</h3>
        <div>
        <div class='demo'>
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions">
            </video-player>
        </div>
        <span style="font-size:10px">其父白奕为白止帝君第二子，娶赤狐族伏觅仙母之女，遂生此天地间唯一只九尾红狐。
            其原身兼二族之长，通体红艳似鸽血，
            唯耳与爪雪白尔。及化人身，额生凤羽之花，貌擅倾世之色，长庖厨，好笑语，灵心慧性，择善固执，有豪侠气，
            得阖（读作hé）族盛宠。长，承其姑白浅上神之位，继为青丘女君!</span>
        <span style="float:right" @click="evaluate">
            <van-rate v-model="value" />
            <p style="font-size:10px">拿出你的小手点一点!</p>
        </span>
        <div class='demo'>
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions">
            </video-player>
        </div>
        <span style="font-size:10px">其父白奕为白止帝君第二子，娶赤狐族伏觅仙母之女，遂生此天地间唯一只九尾红狐。
            其原身兼二族之长，通体红艳似鸽血，
            唯耳与爪雪白尔。及化人身，额生凤羽之花，貌擅倾世之色，长庖厨，好笑语，灵心慧性，择善固执，有豪侠气，
            得阖（读作hé）族盛宠。长，承其姑白浅上神之位，继为青丘女君!</span>
        <span style="float:right" @click="evaluate">
            <van-rate v-model="value" />
            <p style="font-size:10px">拿出你的小手点一点!</p>
        </span>
        <div class='demo'>
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions">
            </video-player>
        </div>
        <span style="font-size:10px">其父白奕为白止帝君第二子，娶赤狐族伏觅仙母之女，遂生此天地间唯一只九尾红狐。
            其原身兼二族之长，通体红艳似鸽血，
            唯耳与爪雪白尔。及化人身，额生凤羽之花，貌擅倾世之色，长庖厨，好笑语，灵心慧性，择善固执，有豪侠气，
            得阖（读作hé）族盛宠。长，承其姑白浅上神之位，继为青丘女君!</span>
        <span style="float:right" @click="evaluate">
            <van-rate v-model="value" />
            <p style="font-size:10px">拿出你的小手点一点!</p>
        </span>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data() {
            return {
                value: 3,
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
                    poster: 'http://puui.qpic.cn/tv/0/701496010_1080607/0', 
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
        methods: {
            evaluate(){
                Toast("评价成功！")
            }
        },
    }
</script>

<style lang="scss" scoped>
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
  #appsmallvideo{
      background-color: #ffffff;
  }
</style>