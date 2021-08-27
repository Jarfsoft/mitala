<template>
  <div v-for="color in colorsBtnTemp" :key="color">
    <Button :class="color" :color="color"/>
  </div>
  <label for="level">Level: </label>
  <select v-model="level">
    <option v-for="l in levels" :value="l" :key="l">{{l}}</option>
  </select>
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
        colorsBtn: ['red', 'blue', 'green', 'slategray', 'violet', 'orange', 'slateblue', 'cyan'],
        colorsBtnTemp: [],
        level: 1,
        levels: [1, 2, 3]
      }
    },
    mounted() {
      this.colorsBtnTemp = this.colorsBtn.slice(0, 4)
    },
    watch: {
      level() {
        if(this.level === 1) {
          this.colorsBtnTemp = this.colorsBtn.slice(0, 4)
        }
        else if(this.level === 2) {
          this.colorsBtnTemp = this.colorsBtn.slice(0, 6)
        }
        else if(this.level === 3) {
          this.colorsBtnTemp = this.colorsBtn
        }
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