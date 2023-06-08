<!--  -->
<template>
    <div class='main'>
        <!-- 头部 -->
        <div class="top">
         <van-icon name="arrow-left" @click="back1()" />   CSGO聊天室
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
                        <img width="50" src="../assets/img/jingcha.png" style="border-radius: 50%" alt="">
                        <p>苍蝇头</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/fei.png" style="border-radius: 50%" alt="">
                        <p>土匪</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/ak.png" style="border-radius: 50%" alt="">
                        <p>发把AK</p>
                    </div>
                </div>
            </div>
            <div class="center_footer">
                <p>听众</p>
                <div>
                    <div>
                        <img width="50" src="../assets/img/nv1.png" alt="">
                        <p>中门对狙</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/nv1.png" alt="">
                        <p class="van-ellipsis">这把我的</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/nv1.png" alt="">
                        <p class="van-ellipsis">压力怪</p>
                    </div>
                    <div>
                        <img width="50" src="../assets/img/nv1.png" alt="">
                        <p class="van-ellipsis">保枪啦</p>
                    </div>
                </div>
            </div>
            <div class="center_f">
                <div id="change" @mouseenter="anxia()" @mouseup="taiqi()" @mouseleave="likai()">
                    <div id="cf1" >
                        按住说话,插一句
                    </div>
                    <div id="cf2" style="display:none;">
                        <img  width="25" src="../assets/img/hua.png" alt="">正在说话
                    </div>
                    <div id="cf3" style="display:none;">
                        发送成功
                    </div>
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
        listid:[2,3],
        tableData:[
            {
                id:1,
                name:'森破',
                title:'枪龄8年',
                text:'狙击手',
                num:6,
                num1:6666,
                gushi:'Navi职业选手',
                imgURL:require('../assets/img/s1mple.png'),
            },
            {
                id:2,
                name:'发把狙',
                title:'枪龄4年',
                text:'残局大师',
                num:11,
                num1:157,
                gushi:'平平无奇玩狙小子。',
                imgURL:require('../assets/img/AWP.png'),
            },
            {
                id:3,
                name:'厨艺大师',
                title:'枪龄3年',
                text:'纸上谈兵',
                num:115,
                num1:152,
                gushi:'喜欢杀游戏里的小鸡。',
                imgURL:require('../assets/img/fei2.png'),
            },
        ],
        userInfo:{}
    }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        this.userInfo = JSON.parse(JSON.stringify(this.$store.state.userInfo))
        this.userInfo.id = 4
        this.userInfo.title = '枪龄2年'
        this.userInfo.text = '上古尊者'
        this.userInfo.gushi = '又菜又爱玩的AK小子。'
        this.tableData.push(this.userInfo)
    },
    methods:{
        showPopup(options) {
          this.show = true;
          this.showid = options;
          console.log(this.showid)
        },
        anxia(){
            document.getElementById('cf1').style.display="none";
            document.getElementById('cf2').style.display="block";
            //禁止鼠标右键事件
            document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            })
            document.getElementById('cf3').style.display="none";
        },
        taiqi(){
            document.getElementById('cf1').style.display="none";
            document.getElementById('cf2').style.display="none";
            document.getElementById('cf3').style.display="block";
        },
        likai(){
            document.getElementById('cf1').style.display="block";
            document.getElementById('cf2').style.display="none";
            document.getElementById('cf3').style.display="none";
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
    @import '../style/csgo.less';
    
    </style>