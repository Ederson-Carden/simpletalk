<!--  -->
<template>
  <div class='main'>
    <div class="top">
      <div>
        <div>为了防止账号丢失，请绑定手机号</div>
        <button class="butt">去绑定</button>
      </div>
    </div>
    <div class="center" >
      <div class="c_t">
        <div><img width="100" :src="userInfo.imgURL" style="border-radius: 50%" alt=""></div>
        <button class="butt" style="text-align: center;">编辑资料</button>
      </div>
      <p style="font-size: 18px;font-weight: 600;margin-bottom: 20px;margin-top:10px">{{userInfo.name}}</p>
      <p style="font-size: 28px;font-weight: 600;">{{userInfo.num}} <span style="margin-right:20px;font-size: 13px;font-weight: 400;">关注</span > {{userInfo.num1}} <span style="font-size: 13px;font-weight: 400;">粉丝</span></p>
      <p style="margin-top:30px">00后</p>
      <p style="margin-top:10px">{{userInfo.title}}</p>
      <p style="margin-top:30px">{{userInfo.text}}</p>
      <div class="c_b" >
        <div>
          <div class="c_b1">
            <img width="25" src="../assets/img/v1.png" style="margin-right:10px" alt=""> 
                   个人认证 1/3
          </div>
          <div style="padding-top:5px">
            <van-icon name="arrow" />
          </div>
        </div>
        
        
      </div>
      </div>
    <div class="footer">
      <van-tabbar route active-color="#4D4E4F" inactive-color="#A2A3A4">
        <van-tabbar-item replace to="/" icon="home-o">大厅</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
            
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      userInfo:{   }
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
  this.userInfo = JSON.parse(JSON.stringify(this.$store.state.userInfo))
  this.userInfo.id = 1
  this.userInfo.title = '练习时长两年半'
        this.userInfo.text = '个人练习生，会唱,跳,rap,还有篮球~~~~~~~'
        this.userInfo.gushi = '喜欢我，就关注我吧。'
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped lang='less'>
/* @import url(); 引入css类 */
@import '../style/index.less';
@import '../style/mine.less';
</style>