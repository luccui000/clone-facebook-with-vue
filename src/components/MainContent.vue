<template>
    <div class="content-item main-content">
        <my-stories></my-stories>
        <div class="make-padding">
            <my-create-post></my-create-post>
            <my-create-room></my-create-room>
            <my-posts></my-posts>
        </div>
    </div>
</template>

<script>
import Stories from './Home/Stories.vue'
import CreatePost from './Home/CreatePost.vue'
import CreateRoom from './Home/CreateRoom.vue'
import Posts from './Home/Posts.vue'

export default { 
    name: 'MainContent',
    components: {
        MyStories: Stories,
        MyCreatePost: CreatePost,
        MyCreateRoom: CreateRoom,
        MyPosts: Posts
    }
}
</script>

<style scoped>

.main-content {
    margin-top: 60px;
    padding: 0 300px;
    flex: 2;
    background-color: #18191a; 
}
.make-padding {
    padding: 10px 150px;
}
</style>