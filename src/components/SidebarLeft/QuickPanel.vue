<template>
    <div class="panel-list"> 
        <div class="panel-item">
            <a href="#">
                <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647" alt="">
                <span>Minh Lực</span>
            </a>
        </div> 
        <div class="panel-item">
            <a href="#">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt="">
                <span>Friends</span>
            </a>
        </div> 
        <div class="panel-item">
            <a href="#">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt="">
                <span>Saved</span>
            </a>
        </div> 
        <div class="panel-item">
            <a href="#">
                <div class="panel-link">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt=""> 
                    <div class="panel-text">
                        <span>Groups</span>
                        <small>8 new</small>
                    </div>
                </div>
            </a>
        </div> 
        <div class="panel-item">
            <a href="#" >
                <img src="https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" alt="">
                <span>Marketplace</span>
            </a>
        </div> 
        <div class="panel-item">
            <a href="#">
                <div class="panel-link">
                    <img src="https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png" alt=""> 
                    <div class="panel-text">
                        <span>Watch</span>
                        <small>+9 new video</small>
                    </div>
                </div>
            </a>
        </div> 
        <div class="panel-item">
            <a href="#">
                <div class="panel-link">
                    <div class="panel-icon">
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                    <span>See mores</span> 
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuickPanel', 
    
}
</script>

<style scoped>
.panel-list  {
    margin-top: 10px;
    padding: 0 5px;
    width: 100%; 
    border-bottom: 1px solid #2f3031;
    height: calc(50% + 60px);
}  
.panel-list
.panel-item {  
    padding: 5px;  
}
.panel-list  
.panel-item a {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 5px;  
    text-align: left;
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
} 
 
.panel-link {
    display: flex;
} 
.panel-link span {
    margin-top: 5px;
}
.panel-link span small  {
    position: relative;
    left: 50px;
    top: -10px;
}
.panel-link .panel-icon {
    background-color: #3a3b3c;
    color: #fff;
    height: 40px;
    width: 40px;  
    border-radius: 50%;  
    padding-top: 10px;
    padding-left: 12px;
    margin-right: 10px;
} 
.panel-text {
    display: flex;
    flex-direction: column;
} 
.panel-text small {
    font-size: 12px;
    color: #4294ff;
} 
.panel-text small:before { 
    display: inline-block;
    content: '';
    -webkit-border-radius: 0.375rem;
    border-radius: 0.375rem;
    height: 0.5rem;
    width: 0.5rem; 
    margin-right: 4px;
    background-color: #4294ff;
}
</style>