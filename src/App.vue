<template>
    <h1>Hello World</h1>
    <div v-for="color in colorsBtn" :key="color">
      <Button :color="color"/>
    </div>
</template>

<script>
  import Button from './components/Button'
  
  export default {
    name: 'App',
    components: {
      Button
    },
    data() {
      return{
        colorsBtn: ['red', 'blue', 'green', 'salmon', 'violet', 'orange', 'magenta', 'cyan']
      }
    }
  }
</script>

<style>

</style>
