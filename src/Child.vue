<template>
  <div class="child">
    {{money}}
              <!-- $emit()触发一个事件，update:money   -->
    <button @click="$emit('update:money',money-100)">
      <span>花钱</span>
    </button>
  </div>
</template>
<script>
export default {
  props:["money"]
};
</script>

<style>
.child{
  border:3px solid green;
}
</style>