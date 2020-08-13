<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <router-link to="../autoplay" tag="a">
            <van-image
                width="100%"
                height="50%"
                :src="require('../../assets/images/6.jpg')"
                />
                <span style="color:block;font-size:15px">【安款】房似锦告白徐姑姑，锦姑死CP锁死了！</span>
            </router-link>
        </van-swipe-item>
        <van-swipe-item>
            <router-link to="../autoplay" tag="a">
            <van-image
                width="100%"
                height="50%"
                :src="require('../../assets/images/7.jpg')"
                />
                <span style="color:#000;font-size:15px">【枕上书】凤九夫看，你出来！帝看登场惊呆众人</span>
            </router-link>
        </van-swipe-item>
        <van-swipe-item>
            <router-link to="../autoplay" tag="a">
            <van-image
                width="100%"
                height="50%"
                :src="require('../../assets/images/8.jpg')"
                />
                <span style="color:#000;font-size:15px">【王牌】沈腾教外国友人说东北话一开口豆玲疯了</span>
            </router-link>
        </van-swipe-item>
        </van-swipe>
            <!-- 图 -->
            <h1 style="font-size:18px;color:black;margin:5px 0 0 10px">猜你会追</h1>
            <van-grid :border="false" :column-num="2">
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/9.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">安家</span>
                <span style="font-size:8px;color:#a2a2b6;">孙俪罗晋赢鲜别样地产中介</span>
            </van-grid-item>
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/2.png')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">三生三世枕上书</span>
                <span style="font-size:8px;color:#a2a2b6;">迪丽热巴高伟光再续前峰</span>
            </van-grid-item>
            </van-grid>
            <h1 style="font-size:18px;color:black;margin:5px 0 0 10px">创造营2020教练猜梗第三弹</h1>
            <van-grid :border="false" :column-num="2">
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/11.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">安家*独播热剧</span>
                <span style="font-size:8px;color:#a2a2b6;">撒花！房似锦告白徐姑姑</span>
            </van-grid-item>
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/7.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">枕上书*点播大结局</span>
                <span style="font-size:8px;color:#a2a2b6;">凤九夫君？帝君惊呆众人</span>
            </van-grid-item>
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/12.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">歌手*再唱毛不易歌曲</span>
                <span style="font-size:8px;color:#a2a2b6;">周深神仙噪音唱俄语听醉了</span>
            </van-grid-item>
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/13.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">降龙大师：魔龙咒</span>
                <span style="font-size:8px;color:#a2a2b6;">威武！陈浩民斩巨蛇战魔龙</span>
            </van-grid-item>
            </van-grid>
            <h1 style="font-size:18px;color:black;margin:5px 0 0 10px">少儿精选剧场</h1>
            <van-grid :border="false" :column-num="2">
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/14.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">迷你特工队X</span>
                <span style="font-size:8px;color:#a2a2b6;">海外知名的冒险动画融</span>
            </van-grid-item>
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/15.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">精灵梦叶罗丽合集</span>
                <span style="font-size:8px;color:#a2a2b6;">融化冰雪拯救人类世界</span>
            </van-grid-item>
            </van-grid>
            <h1 style="font-size:25px;color:black;margin:5px 0 0 10px">同步剧场</h1>
            <van-grid :border="false" :column-num="1">
                <van-grid-item>
                    <van-image :src="require('../../assets/images/16.jpg')" />
                    <span style="padding:5px 0 5px 0;display:block;font-size:15px;width:670px;text-align:left">安家[更新会员先看]</span>
                    <span style="font-size:8px;color:#a2a2b6;width:670px;text-align:left">闪闪约会相亲男，王子吃醋闪现！</span>
                </van-grid-item>
            </van-grid>
            <van-grid :border="false" :column-num="2">
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/17.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">无心法师3[会员抢先看]</span>
                <span style="font-size:8px;color:#a2a2b6;">青弯带无心回家查母亲死因</span>
            </van-grid-item>
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/18.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">枕上书[超前点播大结局]
</span>
                <span style="font-size:8px;color:#a2a2b6;">帝君为爱下厨学做糖酯鱼VIP nd更新至43集！
</span>
            </van-grid-item>
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/19.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">完美关系[更新]</span>
                <span style="font-size:8px;color:#a2a2b6;">                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">在北京[会员抢先看]</span>
</span>
            </van-grid-item>
            <van-grid-item to="/autoplay">
                <van-image :src="require('../../assets/images/20.jpg')" />
                <span style="margin:2px 0 2px 0;display:block;font-size:15px;">在北京[会员抢先看]</span>
                <span style="font-size:8px;color:#a2a2b6;">啥扎心说啥！甜虾机场互烈</span>
            </van-grid-item>
            </van-grid>
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
        
        mounted(){
            new Swiper('.swiperRecommend', {
                pagination: {
                    el: '.paginationRecommend',
                },
            });
        }
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
</style>