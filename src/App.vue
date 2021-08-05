<template> 
  <div class="app">
      <my-nav-bar></my-nav-bar>
      <main class="main-content">
        <my-sidebar-left></my-sidebar-left>
        <my-main-content></my-main-content>
        <my-sidebar-right></my-sidebar-right>
      </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SidebarLeft from './components/SidebarLeft.vue'
import MainContent from './components/MainContent.vue'
import SidebarRight from './components/SidebarRight.vue'

export default {
  name: 'Main',
  components: {
    MyNavBar: Navbar,
    MySidebarLeft: SidebarLeft,
    MyMainContent: MainContent,
    MySidebarRight: SidebarRight
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--bg-color);
} 
.grid {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}
.main-content {
  display: flex;
} 
</style>
