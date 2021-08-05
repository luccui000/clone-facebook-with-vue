<template>
    <ul class="create-room">
        <li class="create-room-item create-room-button">
            <ion-icon name="videocam-sharp"></ion-icon>
            <span>Create Room</span> 
        </li> 
        <li 
            class="create-room-item user-active"
            v-for="item in 8"
            :key="item"
        >
            <img :src="getUser.avatar" alt="">
            <div class="active"></div> 
        </li>
    </ul>    
</template>

<script>
import { mapGetters } from 'vuex'  

export default {
    name: 'CreateRoom',
    components: { 
    },
    computed: {
        ...mapGetters([
            'getUser'
        ])
    }
}
</script>

<style scoped>

.create-room { 
    margin-top: 20px;
    background-color: #242526; 
    border-radius: 10px;
    padding: 10px 10px;
    width: 100%;
    height: 70px;
    overflow: hidden; 
}
.create-room-item {  
    list-style: none;
    display: inline-block; 
} 
.create-room-button {
    cursor: pointer;
    width: 140px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #4498fd;
    padding-bottom: 2px;
    color: #4498fd;
    font-weight: 700;  
}
.create-room-button:hover {
    background-color: #3a3b3c;
}
.create-room-button ion-icon {
    margin-top: 10px;
    margin-right: 10px; 
}
.user-active {
    position: relative;
}
.user-active img {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;  
}
.active {
    position: absolute;
    bottom: 10px;
    right: -2px;;
    display: inline-block;
    content: ''; 
    border-radius: 0.375rem;
    height: 8px;
    width: 8px;  
    background-color: #4294ff;
}
</style>