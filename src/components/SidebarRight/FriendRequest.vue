<template>
    <div class="friend-request">
        <div class="request-item">
            <div class="request-name">
                <div class="request-text">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt="">
                    <span>Friend Requests</span>
                </div>
                <div class="request-setting">
                    <div class="request-setting-icon">
                        <ion-icon name="ellipsis-horizontal"></ion-icon> 
                    </div>
                </div>
            </div>
            <div class="friend-request-item">
                <div class="request-group">
                    <a href="#">
                        <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647" alt=""> 
                        <div class="request-input">
                            <label for="">Minh Luc</label>
                            <div class="request-button">
                                <button class="btn btn-primary">Confirm</button>
                                <button class="btn btn-secondary">Delete</button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.friend-request {
    margin: 20px 10px;
    background-color: #3a3b3c;
    height: 140px;
    width: 280px; 
    border-radius: 5px;
}
.request-item {
    text-align: left;
    padding: 10px;
}
.request-item .request-name {
    display: flex;
    justify-content: space-between;
    color: #fff; 
}
.request-item
.request-name 
.request-text span {
    font-size: 14px;
}
.request-item 
.request-name 
.request-text img {
    margin-right: 10px;
}
.request-item 
.request-name 
.request-setting
.request-setting-icon {
    width: 40px;
    height: 40px;
    padding-top: 10px;
    padding-left: 12px;
    border-radius: 50%;
}
.request-item 
.request-name 
.request-setting
.request-setting-icon:hover {
    background-color: #7c7d7e;
    cursor: pointer;
    
}
.friend-request-item {
    margin-top: 10px;
}
.request-group a {
    display: flex;
    text-decoration: none;
}
.request-group a img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
}
.request-input {
    display: flex;
    flex-direction: column;
    color: #fff;
}
.request-input 
.request-button {
    padding-top: 10px;
}
.request-input 
.request-button
button {
    margin-right: 5px;
}
</style> 