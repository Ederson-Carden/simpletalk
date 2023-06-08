<!--  -->
<template>
<div class='main'>
    <!-- 头部 -->
    <div class="top">
        星穹铁道聊天室
    </div>
    <div class="center">
        <div class="center_top">
            <div class="center_left">
                <!-- 房主 -->
                <div class="cl1" 
                @click="showPopup(item.id)"
                v-for="(item,index) in tableData" 
                :key="index" 
                v-show="(item.id)==1">
                    <div style="position: absolute;"><img width="12" src="../assets/img/home.png" alt=""></div>
                    <!-- 头像 -->
                    <div class="cl11">
                        <img width="60" src="../assets/img/nan.png" alt="">
                        <div class="cl111"><img width="15" src="../assets/img/mkf1.png" alt=""></div>
                    </div>
                    <!-- 名字 -->
                    <p style="margin-bottom:10px">{{item.name}}</p>
                    <div class="c1" style="text-align: center;">
                        <img style="margin-right:3px" width="15" height="15" src="../assets/img/v.png" alt="">
                        {{item.title}}
                    </div>
                    <div class="c1">
                        <img style="margin-right:3px" width="15" src="../assets/img/v.png" alt="">
                        {{item.text}}
                    </div>
                </div>
                <!-- 成员 -->
                <div class="cl1" 
                @click="showPopup(item.id)" 
                v-for="(item,id) in tableData" 
                :key="'0'+id" 
                v-show="((item.id)==(listid[0]))||((item.id)==(listid[1]))||((item.id)==(listid[2]))||((item.id)==(listid[3]))">
                    <!-- 头像 -->
                    <div class="cl11">
                        <img width="60" :src="item.imgURL" style="border-radius: 50%" alt="">
                        <div class="cl111"><img width="15" src="../assets/img/mkf1.png" alt=""></div>
                    </div>
                    <!-- 名字 -->
                    <p style="margin-bottom:10px">{{item.name}}</p>
                    <div class="c1" style="text-align: center;">
                        <img style="margin-right:3px" width="15" height="15" src="../assets/img/v.png" alt="">
                        {{item.title}}
                    </div>
                    <div class="c1">
                        <img style="margin-right:3px" width="15" src="../assets/img/v.png" alt="">
                        {{item.text}}
                    </div>
                </div>
                <!-- 上麦 -->
                <div @click="Toast();" class="cl1 cl2" v-for="(item,id) in tableData" :key="'1'+id" v-show="(item.id)==1">
                    <div>
                        <img style="margin-top:40px;" width="30" src="../assets/img/jia.png" alt="">
                        <p style="color:#DFD3BF;">点击上麦</p>
                    </div>
                </div>
                </div>
            <!-- 中右 -->
            <div class="center_right">
                <div>
                    <img width="50" src="../assets/img/nan2.png" alt="">
                    <p>艾丝妲</p>
                </div>
                <div>
                    <img width="50" src="../assets/img/nan2.png" alt="">
                    <p>镜流</p>
                </div>
                <div>
                    <img width="50" src="../assets/img/nan2.png" alt="">
                    <p>停云</p>
                </div>
            </div>
        </div>
        <div class="center_footer">
            <p>听众</p>
            <div>
                <div>
                    <img width="50" src="../assets/img/nv1.png" alt="">
                    <p>艾丝妲</p>
                </div>
                <div>
                    <img width="50" src="../assets/img/nv1.png" alt="">
                    <p class="van-ellipsis">镜流</p>
                </div>
                <div>
                    <img width="50" src="../assets/img/nv1.png" alt="">
                    <p class="van-ellipsis">停云</p>
                </div>
                <div>
                    <img width="50" src="../assets/img/nv1.png" alt="">
                    <p class="van-ellipsis">银狼</p>
                </div>
            </div>
        </div>
        <div class="center_f">
            <div @click="jingyin()" id="c_f_img">
                <img width="30" src="../assets/img/mkf.png" alt="">
                <p>静音</p>
            </div>
            <div id="c_f_img1"  @click="jingyin1()" style="display:none;">
                <img width="30" src="../assets/img/jingyin.png" alt="">
                <p>静音</p>
            </div>
            <div class="xia" @click="back()">
                下麦
            </div>
        </div>
    </div>
    
    <div class="footer">
        <van-popup class="tanchu" v-model="show" position="bottom" :style="{ height: '60%' }">
           <div
            v-for="(item,index) in tableData" 
            :key="2+index" 
            style="text-align:left;"
            v-show="(item.id)==(showid)">
            <div style="display:flex;justify-content: space-between;">
                <div>
                    <img width="80" :src="item.imgURL" style="border-radius: 50%" alt="">
                </div>
                <div>
                    <div style="display:flex;align-items: center;">
                        <img width="20" src="../assets/img/tan.png" alt="">
                        <span>举报</span>
                    </div>
                    <div style="margin-top:30px">
                        关注TA
                    </div>
                </div>
            </div>
            <p style="margin-top:10px;font-weight: 600;">{{item.name}}</p>
            <p style="margin-top:10px;"><span style="font-size:24px;">{{item.num}} </span> 关注 <span style="font-size:24px;margin-left:30px;"> {{item.num1}} </span> 粉丝</p>
            <div style="display:flex;align-items: center;margin-top:20px;"><img width="20" src="../assets/img/v2.png" alt="">{{item.title}}</div>
            <div style="margin-top:10px;">{{item.text}}</div>
            <div class="" style="margin-top:10px;">
                <img style="margin-bottom:-4px" width="20" height="20" src="../assets/img/v2.png" alt="">
                {{item.gushi}}
            </div>
            <div style="margin-top:15px;" class="c_down" @click="down(item.id)">
                <div> 强制下麦</div>
            </div>
            </div>
        </van-popup>
    </div>
</div>
</template>

<script>

export default {
data() {
return {
    show: false,
    showid:'',
    listid:[2,3,4],
    tableData:[
        {
            id:1,
            name:'李源',
            title:'穹批3年',
            text:'50级',
            num:23,
            num1:18,
            imgURL:require('../assets/img/nan.png'),
            gushi:'关注我吧！',
        },
        {
            id:2,
            name:'希儿',
            title:'穹批1年',
            text:'30级',
            num:11,
            num1:15,
            imgURL:require('../assets/img/希儿.jpg'),
            gushi:'随蝴蝶一起消散吧！旧日的幻影！',
        },
        {
            id:3,
            name:'卡夫卡',
            title:'穹批6年',
            text:'60级',
            num:455,
            num1:154,
            imgURL:require('../assets/img/卡夫卡.png'),
            gushi:'让我看看躲起来的人都在哪呢？Boom~',
        },
        {
            id:4,
            name:'景元',
            title:'穹批4年',
            text:'45级',
            num:465,
            num1:464,
            imgURL:require('../assets/img/景元.gif'),
            gushi:'煌煌威灵，尊吾敕令',
        },
    ]
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
methods:{
    showPopup(options) {
      this.show = true;
      this.showid = options;
      console.log(this.showid)
    },
    Toast(){
        this.$toast('您是房主哦');
    },
    down(options){
        this.listid = this.listid.filter(item => item != options)
        this.show = false;
        console.log(this.listid)
    },
    back(){
        this.$router.push('/')
    },
    jingyin(){
        document.getElementById('c_f_img').style.display="none";
        document.getElementById('c_f_img1').style.display="block";
    },
    jingyin1(){
        document.getElementById('c_f_img').style.display="block";
        document.getElementById('c_f_img1').style.display="none";
    }
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped lang='less'>
/* @import url(); 引入css类 */
@import '../style/index.less';
@import '../style/xqtd.less';

</style>