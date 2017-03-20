<template>
  <div>

    <group>
 
      <x-button type="primary" action-type="button">3</x-button>
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
    }
  }

</script>
