<template>
    <div>
        <div class="swiper-container swiperRecommend">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../assets/images/1.png" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../assets/images/2.png" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../assets/images/3.png" alt="">
            </div>
            </div>
            <!-- Add Pagination -->
            <!-- <div class="swiper-pagination paginationRecommend"></div> -->
        </div>
            <!-- 图 -->
            <h1 style="font-size:18px;color:black;">猜你会追</h1>
            <van-grid :border="false" :column-num="2">
            <van-grid-item>
                <van-image src="http://puui.qpic.cn/tv/0/692446517_498280/0" />
                <span style="display:block;font-size:15px">绝密543</span>
                <span style="font-size:8px;color:#a2a2b6">陈思诚佟丽娅合体闯荡上海滩</span>
            </van-grid-item>
            <van-grid-item>
                <van-image src="http://puui.qpic.cn/tv/0/690590390_498280/0" />
                <span style="display:block;font-size:15px">绝密543</span>
                <span style="font-size:8px;color:#a2a2b6">陈思诚佟丽娅合体闯荡上海滩</span>
            </van-grid-item>
            <van-grid-item>
                <van-image src="http://puui.qpic.cn/tv/0/692446517_498280/0" />
                <span style="display:block;font-size:15px">绝密543</span>
                <span style="font-size:8px;color:#a2a2b6">陈思诚佟丽娅合体闯荡上海滩</span>
            </van-grid-item>
            <van-grid-item>
                <van-image src="http://puui.qpic.cn/tv/0/690590390_498280/0" />
                <span style="display:block;font-size:15px">绝密543</span>
                <span style="font-size:8px;color:#a2a2b6">陈思诚佟丽娅合体闯荡上海滩</span>
            </van-grid-item>
            </van-grid>
            <h1 style="font-size:18px;color:black;">热门综艺来明日之子4云海选开启</h1>
            <van-grid :border="false" :column-num="1">
                <van-grid-item>
                    <van-image src="http://puui.qpic.cn/tv/0/689810202_1080607/0" />
                    <span style="display:block;font-size:15px">【歌手·网红曲收割机】周深嗨跳《野狼Disco》</span>
                    <span style="font-size:8px;color:#a2a2b6">《凉凉》《芒种》《火红的萨日朗》，能听一整天</span>
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