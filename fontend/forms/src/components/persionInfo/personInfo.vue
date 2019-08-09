<template>
    <div class="persionInfo  clearfix">
        <v-left></v-left>
        <v-right></v-right>
    </div>
</template>

<script>
    import left from './leftbar'
    import right from './rightbar'
    export default {
        name:"persionInfo",
        components:{
            "v-left":left,
            'v-right':right,
        }
    }
</script>

<style  scoped>
    .persionInfo{
        width: 70%;
        margin: 40px auto;
        /* height: 500px; */
    }
</style>