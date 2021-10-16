<template>
  <div class="rightSidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed">Instructions</span>
    </h1>
    <ol class="instruction-list" v-if="!collapsed">
      <li><p>Choose a level and hit the Start button.</p></li>
      <li><p>Pay close attention to the button pattern that will be shown by the brightness on them.</p></li>
      <li><p>Repeat the pattern perfectly or else you'll lose.</p></li>
    </ol>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <button class="arrow2">→</button>
    </span>
  </div>
</template>

<script>
  import { collapsed, toggleSidebar, sidebarWidth } from './rightState'
  
  export default {
    name: 'RightSidebar',
    setup() {
      return { collapsed, toggleSidebar, sidebarWidth }
    },
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
  .arrow2 {
    width: 20px;
    padding: 0;
  }
  .instruction-list {
    padding-inline-start: 1rem !important;
  }
  .rightSidebar {
    color: black;
    background-color: var(--sidebar-bg-color);
    float: right;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .rightSidebar h1 {
    text-align: center;
    margin-top: 2rem;
    height: 2.5em;
  }
  .rightSidebar p {
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