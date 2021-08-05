<template>
    <div class="quick-shortcut">
        <h6>Your Shortcut</h6>
        <div class="panel-list"> 
            <div class="panel-item">
                <a href="#">
                    <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t31.18172-8/cp0/c36.0.50.50a/p50x50/27368478_202719923799067_4076084144422053532_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ac9ee4&_nc_ohc=aBP0kVDxW-oAX9jbbHK&_nc_ht=scontent.fsgn5-3.fna&oh=073c9c573d7908d29cc2200cbf92d850&oe=61308D0E" alt="">
                    <span>IOS CodeVn | Cộng đồng IOS phiên bản cũ</span>
                </a>
            </div> 
            <div class="panel-item">
                <a href="#">
                    <img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/cp0/c39.0.50.50a/p50x50/196416999_1978675208938475_6151176037774323669_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=ac9ee4&_nc_ohc=qcJ-ezoydYMAX_wWY7Z&_nc_ht=scontent.fsgn5-4.fna&oh=19bf2765ab798e19f98a0c5bb195dc59&oe=6132565C" alt="">
                    <span>J2 TEAM Community</span>
                </a>
            </div>
            <div class="panel-item">
                <a href="#">
                    <img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/cp0/c18.0.50.50a/p50x50/214501743_4550005118351020_323036139210136845_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ac9ee4&_nc_ohc=1K3VAhcgVQAAX_gNQ9X&_nc_ht=scontent.fsgn5-4.fna&oh=9201f5f076d6f3d9617c35a71f0ec78e&oe=612F923F" alt="">
                    <span>Trao đổi toán</span>
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
    </div>
</template>

<script>
export default {
    name: 'GroupShortcut', 
    
}
</script>

<style scoped>
.quick-shortcut  {
    margin: 10px;
    padding: 0 5px;
    width: 100%; 
    border-bottom: 1px solid #2f3031;
    text-align: left;
    height: calc(50% + 25px);
}
.quick-shortcut h6 {
    color: #a7aaaf;
} 
.panel-list
.panel-item {  
    margin-left: -10px;
    margin-right: 10px;
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
    border-radius: 10px;
    margin-right: 10px;
} 
.panel-list a span {
    flex: 1;
    font-size: 13px; 
}
.panel-link {
    display: flex;
    align-items: center;
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
</style>