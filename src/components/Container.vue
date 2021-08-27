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
    margin: 27% 26%;
    transform: translate(-50%, -50%);
  }
  .blue {
    position: absolute;
    margin: 27% 74%;
    transform: translate(-50%, -50%);
  }
  .green {
    position: absolute;
    margin: 67% 26%;
    transform: translate(-50%, -50%);
  }
  .slategray {
    position: absolute;
    margin: 67% 74%;
    transform: translate(-50%, -50%);
  }
  .violet {
    position: absolute;
    margin: 47% 15%;
    transform: translate(-50%, -50%);
  }
  .orange {
    position: absolute;
    margin: 47% 85%;
    transform: translate(-50%, -50%);
  }
  .slateblue {
    position: absolute;
    margin: 16% 50%;
    transform: translate(-50%, -50%);
  }
  .cyan {
    position: absolute;
    margin: 78% 50%;
    transform: translate(-50%, -50%);
  }
</style>