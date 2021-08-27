<template>
  <h1 class="center">Simon</h1>
  <div class="cont">
    <Container />
  </div>
</template>

<script>
  import Container from './components/Container'

  export default {
    name: 'App',
    components: {
      Container
    }
  }
</script>

<style>
  .center {
    text-align: center;
  }
  .cont {
    position: relative;
    background-color: cornflowerblue;
    margin: 0 auto;
    margin-bottom: 15rem;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: black solid 2px;
  }
</style>
