<template>
    <div class="quick-shortcut">
        <div class="quick-header">
            <h6>Contacts</h6>
            <ul class="quick-header-icon"> 
                <li>
                    <ion-icon name="videocam"></ion-icon>
                </li>
                <li>
                    <ion-icon name="search"></ion-icon>
                </li>
                <li>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </li>
            </ul>
        </div>
        <div class="panel-list"> 
            <div class="panel-item">
                <a 
                    href="#" 
                    v-for="friend in getAllFriends"
                    :key="friend.id"
                >
                    <img :src="friend.avatar" alt="">
                    <span>{{ friend.name }}</span>
                    <div v-if="friend.isActive" class="active"></div> 
                </a>
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
            'getAllFriends'
        ])
    }
}
</script>

<style scoped>
.quick-shortcut {
    margin: 10px;
    padding: 0 5px;
    width: 100%;  
    text-align: left;
    height: calc(50% + 25px); 
}
.quick-shortcut
.quick-header {
    display: flex;
    justify-content: space-between;
}
.quick-shortcut
.quick-header 
.quick-header-icon {
    margin-top: -10px;
    margin-right: 20px;
    display: inline-block;
    list-style: none;
} 
.quick-shortcut
.quick-header 
.quick-header-icon li 
{
    display: inline-block;
    padding-top: 10px;
    padding-left: 12px;
    width: 40px;
    height: 40px;
    color: #a8aab1;
}
.quick-shortcut
.quick-header 
.quick-header-icon li:hover {
    background-color: #3a3b3c;
    border-radius: 50%;
}
.quick-shortcut
.quick-header h6 {
    color: #a7aaaf;
    text-align: left;
} 
.panel-list
.panel-item {  
    margin-left: -10px;
    margin-right: 10px;
    position: relative;
}

.panel-list
.panel-item
a .active::before {
    position: absolute; 
    top: 30px;
    left: 38px;
    display: inline-block;
    content: '';
    -webkit-border-radius: 0.375rem;
    border-radius: 0.375rem;
    height: 0.5rem;
    width: 0.5rem; 
    margin-right: 4px;
    background-color: #31a24c;
}

.panel-list  
.panel-item a {
    text-decoration: none;
    color: #fff;
    display: flex;
    padding: 5px;  
    text-align: left;
    align-items: center;
}
.panel-list 
.panel-item a:hover { 
    background-color: #3a3b3c;
    border-radius: 6px;
}
.panel-list  
.panel-item a img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #2d88ff;
    padding: 4px;
} 
.panel-list a span {
    flex: 1;
    font-size: 13px; 
}
</style>