<template>
<nav class="navbar">
    <div class="left"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="">
        <my-nav-search></my-nav-search>
    </div>
    <div class="center">
        <my-nav-switch></my-nav-switch>
    </div>
    <div class="right"> 
        <my-nav-right></my-nav-right>
    </div>
</nav>
</template>

<script>
import NavSearch from './Navbar/NavSearch.vue'
import NavSwitch from './Navbar/NavSwitch.vue'
import NavRight from './Navbar/NavRight.vue'

export default {
    name: 'NavSearch',
    components: {
        MyNavSearch: NavSearch,
        MyNavSwitch: NavSwitch, 
        MyNavRight: NavRight
    }    
}
</script>

<style scoped>
.navbar {
    background-color: #242526;
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #2f3031;
}
.navbar .left {
    display: flex; 
    margin-top: -15px;
}
.navbar .left img {
    widows: 40px;
    height: 40px;
    margin: 0 10px;
}
</style>