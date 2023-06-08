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
          <van-circle fill="none" layer-color="#E1E1E1" color="#F57876" :clockwise="false" v-model="currentRate" :speed="50" :rate="currentRate" size="280px" />
        </div>
        <!-- 进度条内容 -->
        <div class="c_t1">
          <div>{{dateFormatYear(date)}}</div>
          <div style="font-size:20px;font-weight: 600;color: #F57876;">当前时间</div>
          <div style="font-size:50px;font-weight: 700;color: #F57876;">{{dateFormatTime(date)}}</div>
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
export default {
data() {
    return {
      currentRate: 10,
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
          title: 'csgo连麦',
          num1:8,
        }
      ],
      date:new Date()
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
    to(){
      this.$router.push('/csgo')
    },
    //格式化年月日
    dateFormatYear(time) {
          var date=new Date(time);
          var year=date.getFullYear();
          /* 在日期格式中，月份是从0开始的，因此要加0
          * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
          * */
          var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
          var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
          // 拼接
          return year+"年"+month+"月"+day+"日";
    },
    //格式化时分秒
    dateFormatTime(time) { 
      var date=new Date(time);
      var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
      var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      //计算当前时间在一天里的占比
      this.currentRate = (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) / 3600 / 24 * 100
      // console.log(this.currentRate)
      // console.log(date)
      return hours + ":" + minutes + ":" + seconds;
    }
  },
  mounted() {
          //显示当前日期时间
          let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
          this.timer = setInterval(() => {
           _this.date = new Date(); // 修改数据date
           }, 1000)
       },
      beforeDestroy() {
       if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
      }
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
@import '../style/home.less';
</style>
