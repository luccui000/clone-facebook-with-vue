<template>
    <div class="content-item sidebar-right"> 
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
.sidebar-right { 
    margin-top: 60px;
    width: 290px; 
    background-color: #18191a;
    height: calc(100vh - 60px);  
    flex: 1;
    position: fixed;
    top: 0;
    right: 0;
}
</style>