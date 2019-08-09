<template>
    <div class="Mmutltext">
        <div class="title">
            <div class="title-left">{{ data.name }} :</div>
            <div class="title-right"></div>
        </div>
        <div v-for="v in data.values" :key="v.id">
            <div class="values clearfix">
            <div v-for="item in v.data" class="value" :key="item.id">
                <label>{{ item.name }}</label>
                <input v-model="item.value" type="text">
            </div>
            </div>
        </div>
        <div class="add">+</div>
        
    </div>
</template>

<script>
    export default {
        name:"Mmutltext",
        props:["data"],
        data(){
            return{
                data:{
                    name:"工作经历",
                    id:100,
                    
                    values:[
                        {
                        id:1,  
                        data:[{
                            name:"时间",
                            value:"2016-02-08",
                            id:1
                        },
                        {
                            name:"公司名称",
                            value:"阿里",
                            id:2
                        },
                        {
                            name:"工作时间",
                            value:"3月",
                            id:3
                        }]
                        },
                        {
                        id:2,  
                        data:[{
                            name:"时间",
                            value:"2016-02-08",
                            id:1
                        },
                        {
                            name:"公司名称",
                            value:"阿里",
                            id:2
                        },
                        {
                            name:"工作时间",
                            value:"3月",
                            id:3
                        }]
                        }
                    ]
                }
            };
        },
        // props:["data"]
    }
</script>

<style  scoped>
.title{
    margin: 0 auto;
    width:100%;
    height: 30px;
    background: #999;
    line-height: 30px;
    text-align: left;
    padding-left:20px;
    box-sizing: border-box;
}
.values{
    margin: 0 auto;
    width:100%;
    /* background: #ccc; */
    margin-top:10px
}
.value{
    float: left;
    width:48%;
    /* background: #eee; */
    margin-left: 1%;
    height: 25px;
    line-height: 25px;
}
.value label{
    text-indent: 0%;
}
.value input{
    margin-left: 10px;
    outline: none;
    background: none;
    border:none;
    text-align: center
}
.add{
    height: 25px;
    line-height: 25px;
    font-size: 25px;
    margin-bottom: 12px;
    font-weight: 1000;
    background: #999;
    width: 80%;
    margin: 3px auto;
}
</style>