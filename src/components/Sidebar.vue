<template>
   <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed">Scores</span>
    </h1>
    <div v-if="!collapsed">
      <p><b>Level 1:</b></p>
      <ol>
        <li v-for="(l, i) in level1" :key="i">{{i+1}}: {{l.user}} --- {{l.score}}</li>
        <li v-for="(l, i) in 5 - level1.length" :key="i">---</li>
      </ol>
      <p><b>Level 2:</b></p>
      <ol>
        <li v-for="(l, i) in level2" :key="i">{{i+1}}: {{l.user}} --- {{l.score}}</li>
        <li v-for="(l, i) in 5 - level2.length" :key="i">---</li>
      </ol>
      <p><b>Level 3:</b></p>
      <ol>
        <li v-for="(l, i) in level3" :key="i">{{i+1}}: {{l.user}} --- {{l.score}}</li>
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
  const scores = []
  onlineData().then((data) => {
    scores.push(...data)
  });
  const level1 = scores.filter((i) => {i.level == 1}).sort((a, b) => b.score - a.score).slice(0, 6)
  const level2 = scores.filter((i) => {i.level == 2}).sort((a, b) => b.score - a.score).slice(0, 6)
  const level3 = scores.filter((i) => {i.level == 3}).sort((a, b) => b.score - a.score).slice(0, 6)
  export default {
    setup() {
      return { collapsed, toggleSidebar, sidebarWidth, level1, level2, level3 }
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