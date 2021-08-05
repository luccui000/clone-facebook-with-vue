<template>
    <a href="#" class="story-link">
        <div class="story-item"> 
            <div class="user-item user-avatar">
                <img :src="user_avatar" alt="">
            </div>
            <div class="user-item user-img">
                <img :src="src" alt="">
            </div>
            <div class="user-item user-name">
                {{ user_name }}
            </div>
            <div class="see-more-story" v-if="current_idx === 4">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
        </div>
    </a>
</template>


<script>
export default {
    props: {
        user_avatar: {
            type: String,
            required: true
        },
        user_name: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        current_idx: {
            type: Number,
            required: false
        }
    }
}
</script>

<style scoped>
.story-link {
    text-decoration: none;
    margin-right: 10px;
}
.story-item {
    margin-top: 10px;
    width: 110px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: black;
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;
}
.story-item 
.user-item {
    flex: 1;
}
.story-item 
.user-avatar { 
    position: relative;
    top: 5px;
    left: -25px;
}
.story-item 
.user-img img {
    width: 110px;
    height: 100%;
    align-items: center;
}
.story-item 
.user-avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%; 
    border: 4px solid #2e89ff;
}
.story-item 
.user-name {
    width: 70px;
    position: relative;
    bottom: -5px;
    left: 5px;
    color: #fff;
    font-weight: 700;
    text-align: left;
}
.see-more-story { 
    width: 45px;
    height: 45px;
    background-color: #3e4042;
    border-radius: 50%;
    color: #fff;
    padding-top: 10px;
    padding-left: 4px;
    position: absolute;
    top: 50%;
    left: calc(50% + 15px);
    transform: translate(50%, -50%);
}
.see-more-story:hover {
    background-color: #5c5e61;
}
</style>