<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-content">
        <div class="text-header">Sign in to Galaxy</div>
        <div class="input-wrapper">
          <div class="border-wrapper">
            <input v-model="userInfo.username" type="text" name="username" placeholder="username" class="border-item" />
          </div>
          <div class="border-wrapper">
            <input v-model="userInfo.password" type="text" name="password" placeholder="password" class="border-item" />
          </div>
        </div>
        <div class="action-wrapper">
          <div class="login-button" @click="submitLogin()">Sign in</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      redirectURL: '/',
      userInfo: {
        username: 'code-fusheng',
        password: '123456'
      }
    }
  },
  created() {
    if (this.$route.query.redirectURL != null) {
      this.redirectURL = this.$route.query.redirectURL
    }
  },
  methods: {
    submitLogin() {
      this.$store.dispatch('login', this.userInfo).then(res => {
        const { code } = res
        if (code === 200) {
          window.location.href = this.redirectURL
        }
      })
    }
  }
})
</script>

<style scoped>
.login-container {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: #060c21; */
  font-family: 'Poppins', sans-serif;
  /* border: 1px solid red; */
  /* background-color: white; */
}

.login-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #060c21;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 400px;
  z-index: 1;
  /* border: 2px solid white; */
}

.login-box:before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  background: #060c21;
  /* border: 2px solid rgb(173, 164, 164); */
}

.login-box:after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -2;
  background: rgb(255, 255, 255);
  filter: blur(40px);
}

.login-box:before,
.login-box:after {
  background: linear-gradient(235deg, #ff0000, #060c21, #00bcd4);
}

.login-content {
  background: #060c21;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-header {
  font-size: 25px;
  color: white;
  line-height: 100px;
}

.login-button {
  font-size: 22px;
  color: white;
}

.input-wrapper input {
  line-height: 44px;
  border: 0;
  background-color: rgb(41, 45, 62);
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #fff;
  outline: none;
}

.input-wrapper input::placeholder {
  text-transform: uppercase;
}

.input-wrapper .border-wrapper {
  background-image: linear-gradient(to right, #e8198b, #8eb4dd);
  width: 220px;
  height: 50px;
  line-height: 44px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0 0 0 / 45%);
  border-radius: 35px;
}

.input-wrapper .border-wrapper .border-item {
  height: calc(100% -4px);
  width: calc(100% - 4px);
  border-radius: 30px;
}

.action-wrapper .login-button {
  cursor: pointer;
  font-size: 18px;
  height: 45px;
  line-height: 45px;
  width: 150px;
  border: 2px solid #0e92b3;
  text-align: center;
  border-radius: 30px;
  margin-bottom: 20px;
}
</style>
