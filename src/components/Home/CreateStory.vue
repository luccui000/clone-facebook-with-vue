<template>
    <a href="#" class="story-link">
        <div class="story-item">
            <img :src="user_img" alt="">
            <button class="story-button">
                <ion-icon name="add-outline"></ion-icon>
            </button>
        </div>
    </a>
</template>


<script>
export default {
    name: "CreateStory",
    props: {
        user_img: {
            type: String,
            required: true
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
    background-color: #242526;
    box-sizing: border-box;
    border-radius: 8px;
    justify-content: center;
}
.story-item 
.story-button {
    margin-top: -15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2e89ff;
    border: 4px solid #18191a;
    color: #fff;
    font-weight: 700;
    align-self: center;
}
.story-item img {
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
}
</style>