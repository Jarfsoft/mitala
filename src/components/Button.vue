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
  @media (max-width: 600px) {
    .btn {
      width: 50px;
      height: 50px;
    }
  }
  @media (min-width: 600px) {
    .btn {
      width: 100px;
      height: 100px;
    }
  }
  .btn {
    border-radius: 50%;
  }
</style>