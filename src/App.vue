<template>
  <div id="temp">
    <h1>Hello World</h1>
  </div>
</template>

<script>
  import Button from './components/Button'
  
  const temp = document.getElementById("temp");

  temp.appendChild(Button);
  export default {
    name: 'App',
    components: {

    }
  }
</script>

<style>

</style>
