<!--  -->
<template>
    <div class='main'>
        <!-- 头部 -->
        <div class="top">
         <van-icon name="arrow-left" @click="back1()" />   王者荣耀聊天室
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
                            <img width="60" :src="item.imgURL" style="border-radius: 50%" alt="" />
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
                            <img width="60" :src="item.imgURL" style="border-radius: 50%" alt="" />
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
                    <div @click="up();" id="cl12" v-for="(item,id) in tableData" :key="'1'+id" v-show="(item.id)==1">
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
                        <p>谋世之战</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/nan2.png" alt="">
                        <p>静谧之眼</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/nan2.png" alt="">
                        <p>替父从军</p>
                    </div>
                </div>
            </div>
            <div class="center_footer">
                <p>听众</p>
                <div>
                    <div>
                        <img width="50" src="../assets/img/nv1.png" alt="">
                        <p>谋世之战</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/nv1.png" alt="">
                        <p class="van-ellipsis">静谧之眼</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/nv1.png" alt="">
                        <p class="van-ellipsis">替父从军</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/nv1.png" alt="">
                        <p class="van-ellipsis">星辰之子</p>
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
                        <img width="80" :src="item.imgURL" style="border-radius: 50%" alt="" />
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
        listid:[2],
        tableData:[
            {
                id:1,
                name:'鹿灵守心',
                title:'农历3年',
                text:'王者99星',
                num:23,
                num1:18,
                gushi:'关注我吧。',
                imgURL:require('../assets/img/瑶.png'),
            },
            {
                id:2,
                name:'天籁弦音',
                title:'农历1年',
                text:'王者66星',
                num:11,
                num1:15,
                gushi:'关注我吧。',
                imgURL:require('../assets/img/cai.png'),
            },
            {
                id:3,
                name:'逆流之时',
                title:'农历2年',
                text:'王者50星',
                num:455,
                num1:154,
                gushi:'关注我吧。',
                imgURL:require('../assets/img/sun.png'),
            },
            {
                id:4,
                name:'李源',
                title:'农历12年',
                text:'王者555星',
                num:465,
                num1:464,
                gushi:'关注我吧。',
                imgURL:require('../assets/img/nan.png'),
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
        up(){
            // this.listid = this.listid.filter(item => item != options)
            this.list = this.listid.push(4)
            // this.show = false;
            console.log(this.listid)
            document.getElementById('cl12').style.display="none";
        },
        down(options){
            this.listid = this.listid.filter(item => item != options)
            // this.list = this.listid.push(options)
            this.show = false;
            document.getElementById('cl12').style.display="block";
            console.log(this.listid)
            // document.getElementById('c_f_img').style.display="none";
        },
        back(){
            // this.$router.push('/')
            this.listid = this.listid.filter(item => item != 4)
            document.getElementById('cl12').style.display="block";
        },
        back1(){
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
    @import '../style/wzry.less';
    
    </style>