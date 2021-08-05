<template>
    <div class="sidebar"> 
        <my-friend-request></my-friend-request>
        <my-friend-contact></my-friend-contact>
    </div>
</template>

<script> 

import FriendRequest from './SidebarRight/FriendRequest.vue'
import FriendContact from './SidebarRight/FriendContact.vue'

export default {
    name: 'SidebarRight',
    components: { 
        MyFriendRequest: FriendRequest,
        MyFriendContact: FriendContact
    }
}
</script>

<style scoped>
.sidebar {
    width: 290px;
    display: flex;
    flex-direction: column;
    background-color: #18191a;
    height: calc(100vh - 60px);
}
</style>