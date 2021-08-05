<template>
    <div class="nav-menu">
        <my-nav-user></my-nav-user> 
        <my-nav-settings></my-nav-settings> 
        <my-nav-message></my-nav-message> 
        <my-nav-notify></my-nav-notify> 
        <my-nav-drop-down></my-nav-drop-down>
    </div>
</template>
<script>
import  NavUser from './NavMenu/NavUser.vue'
import NavSettings from './NavMenu/NavSettings.vue'
import NavMessage from './NavMenu/NavMessage.vue'
import NavNotify from './NavMenu/NavNotify.vue'
import NavDropDown from './NavMenu/NavDropDown.vue'

export default {
    name: 'NavRight',
    components: {
        MyNavUser: NavUser,
        MyNavSettings: NavSettings,
        MyNavMessage: NavMessage,
        MyNavNotify: NavNotify,
        MyNavDropDown: NavDropDown
    }    
}
</script>

<style scoped>
.nav-menu {
    display: flex;
    justify-content: center;
    margin: 0 10px;
}
.nav-right {
    background-color: #3a3b3c;
    color: #fff;
    height: 40px;
    width: 40px;
    margin-left: 10px; 
    padding: 8px;
    border-radius: 50%; 
}
.nav-right:hover {
    background-color: #595a5c;
    cursor: pointer;
}
</style>