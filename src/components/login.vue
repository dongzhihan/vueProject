<template>
  <div>

    <group>
      <x-input title="用户名：" v-model="name"></x-input>
      <x-input title="密 码：" v-model="password"></x-input>
      <x-button type="primary" @click.native='loginClick()' action-type="button">登陆</x-button>
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
        sessionStorage["userName"]=this.name
        /*        this.$http.post(api.login, data, api.config).then(data => {
               if(data.data.Errcode==1)this.$router.push('/index')
                })*/
        this.$router.push('/index')
      }
    }
  }
</script>
