<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        />
        <div v-for="(item,index) in lists" :key="index" class="list">
        <van-card
            :tag="item.name"
            :price="item.price"
            :desc="item.name"
            :title="item.name"
            thumb="https://puui.qpic.cn/vupload/0/20190610_g4elyvi8qtj/0"
            />

            <div slot="tags" class="inp">
                    <van-tag plain @click="item.num <=1?1:item.num--">-</van-tag>
                    <input type="text" v-model="item.num" class="num" >
                    <van-tag plain @click="item.num++">+</van-tag>
                </div>
                <div slot="footer">
                    <div class="checkboxselect" @click="inputselect(index)">
                        <van-icon name="success" v-show="item.isSelect" />
                    </div>  
                    <!-- <van-checkbox class="checkboxbutton" v-model="item.isSelect"></van-checkbox> -->
                    <van-button size="mini"  class="delbutton" @click="del(index)">删除</van-button>
                </div>
        </div>
        <van-submit-bar
            :price="totals * 100"
            button-text="提交订单"
            @submit="$router.push('/paymentProcess')"
            >
            <van-checkbox @click="checkAll" :value="checked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
               lists:[],
               checked:true,
               totals:0
            }
        },
        methods: {
            del(index){
                this.lists.splice(index,1)
            },
            checkAll(){
                this.lists.forEach((data)=>{
                    data.isSelect = !this.checked
                })
                    this.checked = !this.checked
            },
            checkboxclick(){
                // 第一次页面加载过程中，判断数据中isSelet状态，如果全部为true，那么返回true
                    this.checked = this.lists.every((item)=>{
                        return item.isSelect; //只有选项中全部为true，返回true。只要有一个false，返回false
                    })
            },
            inputselect(index){
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick()
            },
            sum(){
                this.totals =  this.lists.reduce((total,item)=>{
                    if(!item.isSelect){
                        return total
                    }else{
                    return total + parseInt(item.price) * parseInt(item.num)
                    }
                },0)
            }
        },
        created(){
            this.lists = this.$store.state.vip.lists;
            this.sum()
            this.checkboxclick()
        },
        beforeUpdate() {
            this.sum();//执行计算总价格
        },
    }
</script>

<style lang="scss" scoped>
    .van-submit-bar{
        bottom: 50px;
    }
    .list{
        position: relative;
    }
    .delbutton{
        position: absolute;
        right:20px;
        bottom: 5px;
    }
    .inp{
        position: absolute;
        left: 164px;
        top: 44px;
    }
    .num{
        width: 30px;
        text-align: center;
        font-size: 16px;
    }
    .van-card{
        margin: 20px 0 20px 50px;
    }
    .checkboxselect{
        position: absolute;
        top:50%;
        left:5px;
        margin-top:-10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #C8C9CC;
        i{
            display: block;
            width: 20px;
            height: 20px;
            background: #1989FA;
            border-radius: 50%;
            text-align: center;
            line-height: 22px;
            font-size: 16px;
            color:#fff;
        }
    }
</style>