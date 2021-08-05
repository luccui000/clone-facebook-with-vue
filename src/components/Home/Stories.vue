<template>
    <div class="card-stories">
        <my-create-story
            :user_img="user_avatar"
        ></my-create-story>
        <my-card-story 
            v-for="(item, index) in stories"
            :user_avatar="item.user_avatar"
            :user_name="item.user_name"
            :src="item.src" 
            :current_idx="index"
            :key="item.id"
        ></my-card-story>  
    </div>
</template>


<script>

import CardStory from './CardStory.vue'
import CreateStory from './CreateStory.vue'

export default {
    name: 'Stories',
    components: {
        MyCreateStory: CreateStory,
        MyCardStory: CardStory,
    }, 
    data() {
        return {
            stories: [
                {
                    id: 1,
                    user_avatar: "https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647",
                    user_name: "Chi Lan Thach",
                    src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/198992538_4024791050967268_8116317478374566810_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=825194&_nc_ohc=8YsLrJ7xQDUAX_sUuq0&_nc_ht=scontent-hkg4-1.xx&oh=bf8286f11b203929fe3373a797f3b92e&oe=61106852",
                },
                {
                    id: 2,
                    user_avatar: "https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647",
                    user_name: "Chi Lan Thach",
                    src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/198992538_4024791050967268_8116317478374566810_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=825194&_nc_ohc=8YsLrJ7xQDUAX_sUuq0&_nc_ht=scontent-hkg4-1.xx&oh=bf8286f11b203929fe3373a797f3b92e&oe=61106852",
                },
                {
                    id: 3,
                    user_avatar: "https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647",
                    user_name: "Chi Lan Thach",
                    src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/198992538_4024791050967268_8116317478374566810_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=825194&_nc_ohc=8YsLrJ7xQDUAX_sUuq0&_nc_ht=scontent-hkg4-1.xx&oh=bf8286f11b203929fe3373a797f3b92e&oe=61106852",
                },
                {
                    id: 4,
                    user_avatar: "https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647",
                    user_name: "Chi Lan Thach",
                    src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/198992538_4024791050967268_8116317478374566810_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=825194&_nc_ohc=8YsLrJ7xQDUAX_sUuq0&_nc_ht=scontent-hkg4-1.xx&oh=bf8286f11b203929fe3373a797f3b92e&oe=61106852",
                },
                {
                    id: 5,
                    user_avatar: "https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647",
                    user_name: "Chi Lan Thach",
                    src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/198992538_4024791050967268_8116317478374566810_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=825194&_nc_ohc=8YsLrJ7xQDUAX_sUuq0&_nc_ht=scontent-hkg4-1.xx&oh=bf8286f11b203929fe3373a797f3b92e&oe=61106852",
                }
            ],
            user_avatar: "https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647"
        }
    }
}
</script>

<style scoped>
.card-stories {
    padding: 10px 100px;
    display: flex;
    flex-wrap:nowrap; 
    overflow: hidden;
}
</style>