<template>
  <button @mousedown="onPress" @mouseup="onPress" class="btn" :style="{ background: isOnPress ? color : 'dark' + color }" />
</template>

<script>
  export default {
    name: 'Button',
    props: {
      color: String
    },
    data(){
      return {
        isOnPress: false
      }
    },
    methods: {
      onPress() {
        this.isOnPress = !this.isOnPress
      }
    }
  }
</script>

<style>
  .btn {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
</style>