<template>
    <div class="search">
        <div>
            <ion-icon name="search-outline"></ion-icon> 
        </div>
        <input type="text" class="input-text" placeholder="Search Facebook">  
    </div>
</template>

<script>
export default {
    name: 'NavSearch',
    components: {

    }
}
</script>

<style scoped> 

.search {
    position: relative;
}
.search div {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 8px;
    left: -2px;
    color: #95979c; 
}
.search .input-text {
    width: 240px;
    height: 38px;
    background-color: #3a3b3c;
    border: 1px solid transparent;
    border-radius: 20px;
    color: #fff;
    padding: 0 30px;
}
</style>