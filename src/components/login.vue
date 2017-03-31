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
        this.$router.push('/index')
      }
    }
  }

</script>
