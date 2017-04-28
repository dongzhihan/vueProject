<template>
  <div>

    <group style="margin-top: 3rem">
      <x-input title="用户名：" v-model="name"   ></x-input>
      <x-input type="password" title="密 码：" v-model="password"></x-input>
      <x-button type="primary" @click.native='loginClick()' style="margin-top: 0.3rem" action-type="button">登陆</x-button>
    </group>

  </div>
</template>
<style>


</style>
<script>
  import api from '../js/api.js'
  import {
    Group,
    XInput,
    XButton
  } from 'vux'

  export default {
    data() {
      return {
        name: '',
        password: ''
      }
    },
    components: {
      Group,
      XInput,
      XButton
    },
    methods: {
      loginClick() {
        let data = {
          username: this.name,
          password: this.password
        }
    
        this.$http.post(api.login, data, api.apiConfig()).then(data => {
          if (data.data.ErrCode == 0) {  
            sessionStorage["userName"] = this.name;
            this.$router.push('/index');
          }
        })
      }
    }
  }

</script>
