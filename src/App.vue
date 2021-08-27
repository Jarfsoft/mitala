<template>
    <h1>Hello World</h1>
    <Container :class="`cont`"/>
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
  .cont {
    background-color: burlywood;
    margin: 5rem;
    border: black solid 2px;
  }
</style>
