<template>
  <div v-for="color in colorsBtnTemp" :key="color">
    <Button @click="select" :class="color" :color="color"/>
  </div>
  <div class="controllers" v-if="!game">
    <label for="level">Level: </label>
    <select v-model="level">
      <option v-for="l in levels" :value="l" :key="l">{{l}}</option>
    </select>
    <button @click="start">Start</button>
  </div>
  <div class="score" v-if="game">
    <span v-if="showing">Watch</span>
    <span v-if="!showing">Go!</span>
    <h1>Score: {{score}}</h1>
  </div>
</template>

<script>
  import { postData as saveOnline } from './APIHelper'
  import Button from './Button'
  import address1 from '../assets/audios/Do.wav'
  import address2 from '../assets/audios/Re.wav'
  import address3 from '../assets/audios/Mi.wav'
  import address4 from '../assets/audios/Fa.wav'
  import address5 from '../assets/audios/Sol.wav'
  import address6 from '../assets/audios/La.wav'
  import address7 from '../assets/audios/Si.wav'
  import address8 from '../assets/audios/Do(8va).wav'
  import address9 from '../assets/audios/wrong.wav'

  const note0 = new Audio(address1)
  const note1 = new Audio(address2)
  const note2 = new Audio(address3)
  const note3 = new Audio(address4)
  const note4 = new Audio(address5)
  const note5 = new Audio(address6)
  const note6 = new Audio(address7)
  const note7 = new Audio(address8)
  const wrong = new Audio(address9)

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
        levels: [1, 2, 3],
        game: false,
        colorsOrder: [],
        showing: false,
        actual: 0,
        score: 0
      }
    },
    methods: {
      start() {
        this.game = true
      },
      generateNumber() {
        let num
        if(this.level === 1) {
          num = Math.floor(Math.random() * (3 - 0 + 1) + 0)
          this.colorsOrder.push(num)
        }
        else if(this.level === 2) {
          num = Math.floor(Math.random() * (5 - 0 + 1) + 0)
          this.colorsOrder.push(num)
        }
        else if(this.level === 3) {
          num = Math.floor(Math.random() * (7 - 0 + 1) + 0)
          this.colorsOrder.push(num)
        }
        this.playSound(num)
      },
      playSound(num) {
        const elem = document.querySelector(`.${this.colorsBtn[num]}`)
        elem.style.backgroundColor = this.colorsBtn[num];
        switch(num) {
          case 0:
            note0.play()
            break
          case 1:
            note1.play()
            break
          case 2:
            note2.play()
            break
          case 3:
            note3.play()
            break
          case 4:
            note4.play()
            break
          case 5:
            note5.play()
            break
          case 6:
            note6.play()
            break
          case 7:
            note7.play()
            break
        }
        setTimeout(() => {
          elem.style.backgroundColor = `dark${this.colorsBtn[num]}`
        },1000)
      },
      showPattern(i = 0) {
        setTimeout(() => {
          this.playSound(this.colorsOrder[i])
          i++
          if(i !== this.colorsOrder.length) this.showPattern(i)
          else {
            setTimeout(() => {
              this.generateNumber()
              this.showing = false
            }, 1000)
          }
        }, 1000)
      },
      playGame() {
        this.generateNumber()
      },
      verify(color) {
        if(color === this.colorsBtn[this.colorsOrder[this.actual]])
        {
          this.actual++
          this.playSound(this.colorsBtn.indexOf(color))
          if(this.actual === this.colorsOrder.length) {
            setTimeout(() => {
              this.score++
              this.showing = true
              this.showPattern()
              this.actual = 0
            }, 1000)
          }
        }
        else {
          wrong.play()
          this.game = false
          setTimeout(() => {
            const user = prompt('Enter your name:', 'Name')
            if(user !== null) {
              saveOnline(this.level.toString(10) + user, this.score)
              this.$store.commit('setUpdateScores', true)
            }
            this.actual = 0
            this.score = 0
            this.colorsOrder = []
          }, 1000)
        }
      },
      select(e) {
        if(!this.showing && this.game)
        {
          this.verify(e.path[0].classList[1])
        }
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
      },
      game() {
        if(this.game) this.playGame()
      }
    }
  }
</script>

<style>
  @media (max-width: 600px) {
    .controllers h1 {
      font-size: 25px;
    }
    .controllers label,
    .controllers select,
    .controllers button {
      height: 20px;
      width: auto;
      font-size: 12px;
    }
  }
  @media (min-width: 600px) {
    .controllers label,
    .controllers select,
    .controllers button {
      height: 25px;
      width: auto;
      font-size: 18px;
    }
  }
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
  .controllers {
    display: flex;
    position: absolute;
    margin: 50% 50%;
    transform: translate(-50%, -50%);
  }
  .controllers select {
    margin: 0 0.5rem;
  }
  .score{
    position: absolute;
    margin: 50% 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .score span{
    text-align: center;
  }
  .score h1 {
    margin-top: 0;
  }
</style>