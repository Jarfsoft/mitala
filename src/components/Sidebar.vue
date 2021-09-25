<template>
   <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed">Vue Sidebar</span>
    </h1>

     <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <button><b>←</b></button>
    </span>
  </div>
</template>

<script>
  import { collapsed, toggleSidebar, sidebarWidth } from './state'
  export default {
    setup() {
      return { collapsed, toggleSidebar, sidebarWidth }
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
    height: 2.5em;
  }
  .collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    transition: 0.2s linear;
  }
  .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }
</style>