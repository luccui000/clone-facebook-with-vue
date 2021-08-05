<template>
    <div >
        <ul class="switch-list">
            <li class="switch-item switch-active"><a href="#"><ion-icon name="home"></ion-icon></a></li>
            <li class="switch-item"><a href="#"><ion-icon name="people"></ion-icon></a></li>
            <li class="switch-item"><a href="#"><ion-icon name="flag"></ion-icon></a></li>
            <li class="switch-item"><a href="#"><ion-icon name="file-tray"></ion-icon></a></li>
            <li class="switch-item"><a href="#"><ion-icon name="people-circle"></ion-icon></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavSwitch'
    
}
</script>

<style scoped>
.switch-list {
    list-style: none;
}
.switch-list .switch-item {
    display: inline-block;
    margin: 0 40px;
    font-size: 30px; 
}
.switch-list .switch-item a {
    color: #3a3b3c;
}
.switch-list .switch-active a {
    color: #2d88ff;
}
</style>