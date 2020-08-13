<template>
  <div id="app">
      <van-tabbar v-model="active" v-show="$store.state.vanTabbar">
        <van-tabbar-item to="/homepage/jx" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/smallvideo" icon="fire-o">小视频</van-tabbar-item>
        <van-tabbar-item to="/vip" icon="diamond-o">vip会员</van-tabbar-item>
        <van-tabbar-item to="/doki" icon="like-o">doki</van-tabbar-item>
        <van-tabbar-item to="/personalcenter" icon="smile-o">个人中心</van-tabbar-item>
      </van-tabbar>

      <!-- 动画效果 -->
      <transition mode="out-in" name="routerview">
        <!-- 路由模块 -->
          <router-view></router-view>
      </transition>
      <!-- 控制底部显示 -->
      <div class="bottomHeight"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0
    }
  }
}
</script> 

<style lang="scss">
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
      .bottomHeight{
        height: 50px;
        width: 100%;
      }
      #app{
        width: 100%;
        height: 100%;
        overflow: hidden;
      .van-tabbar{
        z-index: 1000;
      }
      }
      
</style>
