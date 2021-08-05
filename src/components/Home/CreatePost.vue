<template>
    <div class="upload-post">
        <div class="upload-group"> 
            <img :src="getUser.avatar" alt="">
            <button class="upload-button">What's on your mind, Lực ?</button> 
        </div>
        <div class="upload-type">
            <div class="upload-item video-icon">   
                <ion-icon name="videocam-outline"></ion-icon> 
                <span>Live Videos</span>
            </div> 
            <div class="upload-item photo-icon">  
                <ion-icon name="images-outline"></ion-icon>
                <span>Photo/Videos</span>
            </div> 
            <div class="upload-item activity-icon">  
                <ion-icon name="happy-outline"></ion-icon>
                <span>Felling/Activity</span>
            </div> 
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'getUser'
        ])
    }
}
</script>

<style scoped>

.upload-post {
    background-color: #242526; 
    border-radius: 10px;
    padding: 10px 10px;
}
.upload-group {
    display: flex;  
    border-bottom: 1px solid #595f66;
    padding-bottom: 10px;
} 
.upload-group img {
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    margin-right: 10px;
}
.upload-group button {
    border-radius: 20px;
    flex: 1;
    text-align: left;
    padding-left: 20px;
    background-color: #3a3b3c;
    color: #909296;
    border: 1px solid transparent;
} 
.upload-type {
    margin-top: 10px; 
    margin-bottom: 0px;
    margin-left: -10px;
}
.upload-item { 
    display: inline-block;
    width: 32%;
    height: 40px;
    padding: 8px; 
    color: #aeb1b6;
    cursor: pointer;
    border-radius: 10px;
}
.upload-item:hover {
    background-color: #3a3b3c;
}
.video-icon ion-icon { 
    margin-right: 10px; 
    color: red;
}
.photo-icon ion-icon{
    margin-right: 10px; 
    color: green;
}
.activity-icon ion-icon{
    margin-right: 10px;
    color: yellow;
}
</style>