<template>
    <div>
        
        <van-nav-bar
        :title="$route.name"
        />
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :key="index"  :class="{current:index==currentIndex}" @click="selectItem(index,$event)">
                        <span class="left-item">{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <!-- 循环嵌套 -->
                    <li v-for="(item,index) in right" :key="index" class="right-item right-item-hook">
                        <img :src="item.src" alt="">
                        <van-divider :style="{ borderColor: '#000', padding: '0 14px' }">{{item.text}}</van-divider>
                        <ul>
                            <li v-for="(num,i) in item.content" :key="i" class="liList">
                                <div>
                                    <router-link to="/autoplay" tag="a">
                                        <img :src="item.src2[i]" alt="">
                                        <span>{{num}}</span>
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";
    export default {
        data:function(){
            return {
                left: [
                    "杨幂",
                    "唐嫣",
                    "迪丽热巴",
                    "胡歌",
                    "马天宇",
                ],
                 right: [
                    {
                    src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=258911320,1918584459&fm=26&gp=0.jpg",
                    text: "杨幂主演电视剧",
                    src2: [
                        "http://hbimg.b0.upaiyun.com/e74836dd868e26531b6a39d03c1630e6b2915a00c6f0e-Z3GBnr_fw658",
                        "http://hbimg.b0.upaiyun.com/e74836dd868e26531b6a39d03c1630e6b2915a00c6f0e-Z3GBnr_fw658",
                        "http://hbimg.b0.upaiyun.com/e74836dd868e26531b6a39d03c1630e6b2915a00c6f0e-Z3GBnr_fw658",
                        "http://hbimg.b0.upaiyun.com/e74836dd868e26531b6a39d03c1630e6b2915a00c6f0e-Z3GBnr_fw658",
                        "http://hbimg.b0.upaiyun.com/e74836dd868e26531b6a39d03c1630e6b2915a00c6f0e-Z3GBnr_fw658",
                        "http://hbimg.b0.upaiyun.com/e74836dd868e26531b6a39d03c1630e6b2915a00c6f0e-Z3GBnr_fw658",
                    ],
                    content: ["三生三世", "扶摇", "谈判官", "筑梦情缘", "古剑奇谭", "北京爱情故事"]
                    },
                    {
                    src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2162554247,22135348&fm=26&gp=0.jpg",
                    text: "唐嫣主演电视剧",
                    src2: [
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                    ],
                    content: ["何以笙箫默", "夏家三千金", "千金女贼", "锦绣未央", "活色生香", "仙剑奇侠传3"]
                    },
                    {
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4281462197,2499830683&fm=26&gp=0.jpg",
                    text: "迪丽热巴主演电视剧",
                    src2: [
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                    ],
                    content: ["何以笙箫默", "夏家三千金", "千金女贼", "锦绣未央", "活色生香", "仙剑奇侠传3"]
                    },
                    {
                    src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1587839851,1826951209&fm=26&gp=0.jpg",
                    text: "胡歌主演电视剧",
                    src2: [
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                    ],
                    content: ["何以笙箫默", "夏家三千金", "千金女贼", "锦绣未央", "活色生香", "仙剑奇侠传3"]
                    },
                    {
                    src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=128291213,428613691&fm=26&gp=0.jpg",
                    text: "马天宇主演电视剧",
                    src2: [
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=624994472,4067490550&fm=26&gp=0.jpg",
                    ],
                    content: ["马天宇", "夏家三千金", "千金女贼", "锦绣未央", "活色生香", "仙剑奇侠传3"]
                    },
                ],
                scrollY:0,
                listHeight:[]  //存储右边每一项li高度
            }
        },
        methods: {
                _initScroll(){
                    // 联动实例化插件对象
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });
                    this.rights = new BScroll(this.$refs.right,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });

                    // right这个对象监听滚动事件，
                    this.rights.on("scroll",(pos)=>{
                        this.scrollY = Math.abs(Math.round(pos.y));
                    })
                },
                // scrollToElement(){
                //     this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
                // },
                _getHeight(){
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0;//默认高度
                    this.listHeight.push(height); //添加高度数组中
                    // 循环对象
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; // 对象高度
                        this.listHeight.push(height);
                    }
                    
                },
                // 左侧点击效果
                // index 下标
                // event 点击对象事件
                selectItem(index,event){
                    // 在better-scroll指派事件的event和普通浏览器的点击事件event有个属性区别_constructed
                    // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];
                        // scrollToElement()//滚动到指定的目标元素
                        this.rights.scrollToElement(el);

                        // 左边联动
                        let leftItems = this.$refs.left.getElementsByTagName("li");
                        let elLi = leftItems[index];
                        this.lefts.scrollToElement(elLi);


                    }
                }
            },
            // 生命周期函数
            mounted() {  //页面渲染到浏览器时候
                // 生命周期函数执行代码速度比页面渲染浏览器执行速度快。html代码没有渲染成功？
                // 保证页面代码浏览器正常执行后，在执行当前生命周期函数代码段
                // $nextTick() 让所有DOM执行完后，回调执行方法
                
                this.$nextTick(()=>{
                    this._initScroll();//调用初始化联动效果
                    this._getHeight(); //获取右边每一项高度

                    // 跳转效果
                    if("id" in this.$route.query){
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[this.$route.query.id];
                        this.rights.scrollToElement(el);
                    }
                    // console.log(this.$route.query)

                })
                    

            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0; i < this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        // height2不存在时候，或落在height和height2之间时候，直接放回索引值
                        if(!height2 || (this.scrollY >=height && this.scrollY < height2) ){
                        
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLi = leftItems[i];
                            this.lefts.scrollToElement(elLi);
                            return i;
                        }
                    }
                    // 如果this.listHeight没有值，返回0
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
// scoped 样式覆盖
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写定义左右样式，不写高度，自动获取高度 */
            top:46px;
            bottom: 50px;
            background-color: #eeeeee;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex:0 0 80px;
            width: 80px;
            background-color: #C8EBFA;
        }
        .left li{
            width:100%;
            height: 100%;
            font-size:14px;
        }
        .left li.current{
            background-color: pink;
            color:#fff;
            font-weight: bold;
        }
        .left-item{
            display: block;
            width: 100%;
            height: 100%;
            line-height: 50px;
            height: 50px;
            text-align: center;
        }
        .right{
            flex:1;
            background-color: white;
            text-align: center;
            padding-left: 20px;
        }
        .right img{
            width: 90%;
        }
        .right-item>img{
            margin-left: 25%;
            width: 50%;
        }
        .right-item li{
            width: 100%;
            height: 100px;
            // line-height: 100px;
            text-align: center;
        }
        .right .liList{
            width: 30%;
            display: inline-block;
            position: relative;
        }
        
        .right-item li span{
            font-size: 11px;
        }
</style>

