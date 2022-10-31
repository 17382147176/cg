<template>
  <div>
    <div id="loginNav">
      <img src="../assets/img/logo.png" width="143" height="45" />
    </div>

    <div>
      <el-form class=" login-container">
        <h1 class="centerClass">登录</h1>
        <div class="statusChoose">
          <el-radio v-model="radio" label="1">学生登录</el-radio>
          <el-radio v-model="radio" label="2">教师登录</el-radio>
          <el-radio v-model="radio" label="3">管理员登录</el-radio>
        </div>

        <el-form-item>
          <el-input
            type="text"
            auto-complete="off"
            placeholder="账号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            auto-complete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-input
                type="text"
                auto-complete="off"
                placeholder="图形验证码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="code-box">
            <!-- <img :src="ruleForm.codeimg" alt="" class="codeimg" /> -->
          </el-col>
        </el-row>
        <el-checkbox class="remember">记住密码</el-checkbox>
        <el-link type="info" class="forgetPsw" :underline="false"
          >忘记密码</el-link
        >
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.forgetPsw {
  position: absolute;
  right: 39%;
}
.statusChoose {
}
#loginNav {
  background-color: #525864;
}
.centerClass {
  text-align: center;
}
.login-wrap {
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 100%;
}
.login-container {
  border-radius: 10px;
  margin: 100px auto;
  width: 350px;
  padding: 30px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  text-align: left;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.remember {
  margin: 0px 0px 35px 0px;
}
.code-box {
  text-align: right;
}
.codeimg {
  height: 40px;
}
</style>
<script type="text/ecmascript-6">
import { login } from '../api/userMG'
import { setCookie, getCookie, delCookie } from '../utils/util'
import md5 from 'js-md5'
export default {
  name: 'login',
  data() {
    return {
      radio:'1',
    }
  }

}
</script>
