<template>
  <div class="app">
    App.vue现有{{total}}
    <hr>
<!--    传给子组件一个money值,v-on是监听子组件的update:money事件，$event获取子组件事件的结果-->
<!--    <Child :money="total" v-on:update:money="total = $event" />-->
    <Child :money.sync="total"/>
  </div>

</template>

<script>
import Child from './Child.vue'
export default {
  data(){
    return { total:10000}
  },

  components: {
    Child:Child
  }
}
</script>

<style lang="scss">
.app {
  border:3px solid #ff1500;
  padding:10px;
}
</style>
