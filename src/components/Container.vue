<template>
  <div v-for="color in colorsBtn" :key="color">
    <Button :class="color" :color="color"/>
  </div>
</template>

<script>
  import Button from './Button'

  export default {
    name: 'Container',
    components: {
      Button
    },
    data() {
      return{
        colorsBtn: ['red', 'blue', 'green', 'slategray', 'violet', 'orange', 'slateblue', 'cyan']
      }
    }
  }
</script>

<style>
  .red {
    position: absolute;
    margin: 15% 26%;
  }
  .blue {
    position: absolute;
    margin: 15% 74%;
  }
  .green {
    position: absolute;
    margin: 55% 26%;
  }
  .slategray {
    position: absolute;
    margin: 55% 74%;
  }
  .violet {
    position: absolute;
    margin: 35% 15%;
  }
  .orange {
    position: absolute;
    margin: 35% 85%;
  }
  .slateblue {
    position: absolute;
    margin: 4% 50%;
  }
  .cyan {
    position: absolute;
    margin: 66% 50%
  }
</style>