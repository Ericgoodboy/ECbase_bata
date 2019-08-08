<template>
    <div class="nav">
        <div class="placeholder"></div>
        <div class="wraper">
            <ul>
                <li>标题</li>
                <li>标题</li>
                <li>标题</li>
                <li>标题</li>
                <li>标题</li>
                <li>标题</li>
                
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"v-nav"
    }
</script>

<style  scoped>
    .nav{
        height:40px;
        width:100%;
        background: rgba(141, 120, 189, 0.486);
        display: block;
        font-size: 24px;
        padding-top: 0px;
        box-sizing: border-box;
        /* color: red; */
    }
    .wraper{
        width:80%;
        height: 100%;
        /* background: rgba(141, 120, 189, 0.486); */
        margin:0 auto;
    }
    li{
        width: 13.5%;
        height: 100%;
        line-height: 40px;;
        font-size: 16px;
        float: left;
        text-align: center
    }
</style>