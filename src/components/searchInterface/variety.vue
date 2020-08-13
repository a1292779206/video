<template>
    <div>
        
        <div class="content">
            <!-- <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :key="index"  :class="{current:index==currentIndex}" @click="selectItem(index,$event)">
                        <span class="left-item">{{item}}</span>
                    </li>
                </ul>
            </div> -->
            <div class="right" ref="right">
                <ul>
                    <!-- 循环嵌套 -->
                    <li v-for="(item,index) in right" :key="index" class="right-item right-item-hook">
                        <ul>
                            <li v-for="num in item.content" :key="num">
                                <div>
                                    <router-link to="/autoplay" tag="a">{{num + item.text}}</router-link>
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
                right:[
                    {content:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],text:["秦时明月之君临天下"]},
                    // {name:"众筹",content:[1,2,3,4]},
                    // {name:"小米手机",content:[1,2,3,4,5]},
                    // {name:"Redmi",content:[1,2,3]},
                    // {name:"黑鲨",content:[1,2,3,4]},
                    // {name:"电视",content:[1,2,3]}
                ],
            }
        },
        methods: {
                _initScroll(){
                    this.rights = new BScroll(this.$refs.right,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });
                },
               
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
                })
                    

            },
    }
</script>

<style lang="scss" scoped>
// scoped 样式覆盖
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写定义左右样式，不写高度，自动获取高度 */
            top:81px;
            bottom: 0px;
            background-color: #eeeeee;
            width: 100%;
            overflow: hidden;
        }
        .right{
            flex:1;
            background-color: #ffffff;
        }
        .right-item li{
            width: 100%;
            height: 41px;
            line-height: 41px;
            text-align: center;
            // border: 1px solid yellow;
            margin: 20px 0 20px 20px;
            padding:5px 0 10px 0;
            text-align: left;
            border-bottom: 1px solid #ededed;
            a{
            color: black;
            }
        }
</style>

