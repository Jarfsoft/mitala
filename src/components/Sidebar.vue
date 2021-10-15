<template>
   <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed">Scores</span>
    </h1>
    <div v-if="!collapsed">
      <p><b>Level 1:</b></p>
      <ol>
        <li v-for="(l, i) in level1" :key="i">{{l.user.slice(1)}} --- {{l.score}}</li>
        <li v-for="(l, i) in 5 - level1.length" :key="i">---</li>
      </ol>
      <p><b>Level 2:</b></p>
      <ol>
        <li v-for="(l, i) in level2" :key="i">{{l.user.slice(1)}} --- {{l.score}}</li>
        <li v-for="(l, i) in 5 - level2.length" :key="i">---</li>
      </ol>
      <p><b>Level 3:</b></p>
      <ol>
        <li v-for="(l, i) in level3" :key="i">{{l.user.slice(1)}} --- {{l.score}}</li>
        <li v-for="(l, i) in 5 - level3.length" :key="i">---</li>
      </ol>
    </div>
     <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <button class="arrow">←</button>
    </span>
  </div>
</template>

<script>
  import { collapsed, toggleSidebar, sidebarWidth } from './state'
  import { getData as onlineData } from './APIHelper'

  import { mapState } from 'vuex'
  
  export default {
    name: 'Sidebar',
    data() {
      return {
        level1: [],
        level2: [],
        level3: []
      }
    },
    computed: {
      ...mapState({
        callUpdateScores: 'updateScores'
      })
    },
    methods: {
      updateScores() {
        const scores = []
        this.level1.splice(0,this.level1.length)
        this.level2.splice(0,this.level2.length)
        this.level3.splice(0,this.level3.length)
        onlineData().then((data) => {
          scores.push(...data.result)
          this.level1.push(...scores.filter((i) => i.user[0] == 1).sort((a, b) => b.score - a.score).slice(0, 6))
          this.level2.push(...scores.filter((i) => i.user[0] == 2).sort((a, b) => b.score - a.score).slice(0, 6))
          this.level3.push(...scores.filter((i) => i.user[0] == 3).sort((a, b) => b.score - a.score).slice(0, 6))
        });
      }
    },
    setup() {
      return { collapsed, toggleSidebar, sidebarWidth }
    },
    mounted() {
      this.updateScores()
    },
    watch: {
      callUpdateScores() {
        if (this.callUpdateScores) {
          this.updateScores()
          this.$store.commit('setUpdateScores', false)
        }
      }
    }
  }
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
  .arrow {
    width: 20px;
    padding: 0;
  }
  .sidebar {
    color: black;
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .sidebar h1 {
    text-align: center;
    margin-top: 2rem;
    height: 2.5em;
  }
  .sidebar p {
    text-align: center;
  }
  .collapse-icon {
    position: absolute;
    padding: 0.75em 0;
    transition: 0.2s linear;
  }
  .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }
</style>