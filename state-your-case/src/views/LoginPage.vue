<template>
  <div class="login">
    <h2 class="login-title">Welcome to Login!</h2>
    <div class="login-email-title" cl>Email Address</div>
    <input class="login-email-input" type="text" />
    <div class="login-password-title" cl>Password</div>
    <input class="login-password-input" type="text" />
    <div class="login-inputs">
      <button class="login-inputs-button">Login</button>
      <span class="login-inputs-info">Dont have an account?</span>
      <router-link to="/register" class="login-inputs-sign">Sign Up</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.login {
  height: 841px;
  overflow: hidden;
  &-title {
    width: 430px;
    height: 44px;
    margin: 0 auto;
    margin-top: 45px;
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    color: #4e4e4e;
  }
  &-email {
    &-title {
      width: 242px;
      height: 31px;
      margin-top: 41px;
      margin-left: 392px;
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;

      color: #4e4e4e;
    }
    &-input {
      width: 495px;
      height: 50px;
      outline: none;
      text-indent: 1em;
      margin-left: 392px;
      background: #fcfcfc;
      border: 0.5px solid #8c8c8c;
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }
  &-password {
    &-title {
      width: 242px;
      height: 31px;
      margin-top: 30px;
      margin-left: 392px;
      outline: none;
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;

      color: #4e4e4e;
    }
    &-input {
      width: 495px;
      height: 50px;
      outline: none;
      text-indent: 1em;
      margin-left: 392px;
      background: #fcfcfc;
      border: 0.5px solid #8c8c8c;
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }
  &-inputs {
    margin-left: 454px;
    margin-top: 49px;
    overflow: hidden;
    &-button {
      float: left;
      width: 139px;
      height: 50px;
      background: #ffa483;
      border-radius: 10px;
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      text-align: center;
      border: none;
      color: #ffffff;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background: #ff8c6a;
      }
    }
    &-info {
      float: left;
      margin-left: 28px;
      margin-top: 31px;
    }
    &-sign {
      float: left;
      margin-top: 31px;
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 16px;
      text-align: center;
      text-decoration-line: underline;

      color: #4e4e4e;
    }
  }
}
</style>
