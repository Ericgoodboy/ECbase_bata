<template>
    <div class="left">
        <div class="avtor">
            <img src="../../assets/logo.png" alt="" srcset="">
        </div>
        <div class="baseinfos">
            <ul>
                <li>
                    <div class="info">
                        <label for="number">电话：</label>
                        <div class="infoinput">
                            <input ref="phoneinput" v-model="baseinfo.phone.value" type="text" @blur="baseinfo.phone.showinput=false"   placeholder="" v-show="baseinfo.phone.showinput">
                            <p @dblclick="baseinfo.phone.showinput=true" v-show="!baseinfo.phone.showinput">{{ baseinfo.phone.value }}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="info">
                        <label for="number">Q Q ：</label>
                        <div class="infoinput">
                            <input v-model="baseinfo.qq.value" type="text" @blur="baseinfo.qq.showinput=false" placeholder="" v-show="baseinfo.qq.showinput">
                            <p @dblclick="baseinfo.qq.showinput=true" v-show="!baseinfo.qq.showinput">{{ baseinfo.qq.value }}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="info">
                        <label for="number">微信：</label>
                        <div class="infoinput">
                            <input v-model="baseinfo.wx.value" type="text" @blur="baseinfo.wx.showinput=false" placeholder="" v-show="baseinfo.wx.showinput">
                            <p @dblclick="baseinfo.wx.showinput=true" v-show="!baseinfo.wx.showinput">{{ baseinfo.wx.value }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"left",
        data(){
            return {
                baseinfo:{
                    phone:{
                        showinput:false,
                        value:"3726890272"
                    },
                    qq:{
                        showinput:false,
                        value:"3726890272"
                    },
                    wx:{
                        showinput:false,
                        value:"3726890272"
                    }
                }
            }
        }
    }
</script>

<style  scoped>
.avtor img{
    width:80px;
    user-select: none;
    margin-bottom: 30px;
}
.left{
    float: left;
    display: block;
    border-right:1px solid rgba(60, 60, 60, 60);
    height: 100%;
    width: 15%;
}


.infoinput{
    display: inline;
}
.infoinput input{
    width: 80px !important;
    outline: none;
    border: none;
    border-bottom: 1px solid #333;
}
.infoinput input{
    width: 80px !important;
    display: block;
}
.info{
    font-size: 15px;
    margin-top: 10px;
}
.info label{
    float: left;
}
</style>