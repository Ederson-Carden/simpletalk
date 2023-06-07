<template>
  <div class="home">
    <div class="tip">
        <div @click="handleclick()" style="background-color: #FF6361;">创建房间</div>
        <div @click="handleclick1()" style="background-color: #E79637;">随机加入</div>
    </div>
    <!-- 顶部 -->
    <div class="top">
      <img width="20" src="../assets/img/mail.png" alt="">
      <span>和谐沟通，友好交流</span>
      <img width="20" src="../assets/img/mair.png" alt="">
    </div>
    <!-- 内容 -->
    <div class="center">
      <div class="c_t">
      <!-- 环形进度条 -->
        <div>
          <van-circle fill="none" layer-color="#E1E1E1" color="#F57876" :clockwise="false" v-model="currentRate" :speed="50" :rate="67" size="280px" />
        </div>
        <!-- 进度条内容 -->
        <div class="c_t1">
          <div>6月7日，星期三</div>
          <div style="font-size:20px;font-weight: 600;color: #F57876;">当前时间</div>
          <div style="font-size:50px;font-weight: 700;color: #F57876;">18:30:00</div>
          <div style="margin-bottom: 40;">有15个聊天室正在聊天！！！</div>
        </div>
      </div>
      <div>
        <!-- 分割线 -->
        <div class="c_c">
          <van-divider>网路聊天，来聊聊</van-divider>
        </div>
      </div>
      <!-- 实时 -->
      <div class="c_b">
          <div class="cb">
            <div @click="to()" style="padding:10px;box-sizing:border-box;" v-for="(item,index) in tabledate" :key="index">
              <div class="c_b1">
                <div class="cb1">
                  <img width="15" src="../assets/img/hua.png" alt="">
                </div>
                <div style="margin-left:5px">{{item.num}}人在聊</div>
              </div>
              <div style="color:white;margin-top:10px;font-size:13px;">
                {{item.title}}
              </div>
              <div class="c_b2">
                <div><img width="20" src="../assets/img/nv.png" alt=""></div>
                <div style="margin-left:-5px"><img width="20" src="../assets/img/nv1.png" alt=""></div>
                <div style="margin-left:-5px"><img width="20" src="../assets/img/nv1.png" alt=""></div>
                <div style="margin-left:5px">{{item.num1}}人在线</div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="footer">
        <div>
          <van-tabbar route active-color="#4D4E4F" inactive-color="#A2A3A4">
            <van-tabbar-item replace to="/" icon="home-o">大厅</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
            <!-- <van-icon name="contact" /> -->
          </van-tabbar>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
data() {
    return {
      currentRate: 0,
      tabledate:[
        {
          num: 3,
          title: '狼人杀局！',
          num1:14,
        },
        {
          num: 5,
          title: '三国杀！',
          num1:11,
        },
        {
          num: 8,
          title: '西游杀！',
          num1:16,
        },
        {
          num: 4,
          title: '纯聊天！！！！',
          num1:8,
        }
      ]
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(5) + '%';
    },
  },
  methods:{
    handleclick(){
      this.$router.push('/xqtd')
    },
    handleclick1(){
      this.$router.push('/wzry')
    },
  }
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
@import '../style/home.less';
</style>
