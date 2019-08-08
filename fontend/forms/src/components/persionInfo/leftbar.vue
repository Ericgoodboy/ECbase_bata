<template>
    <div class="left">
        <div class="avtor">
            <img src="../../assets/logo.png" alt="" srcset="">
        </div>
        <div class="baseinfos">
            <ul>
                <li>
                    <div class="info">
                        <label for="number">电话<i class="fa fa-phone" aria-hidden="true"></i>：</label>
                        <div class="infoinput">
                            <input ref="phoneinput" v-model="baseinfo.phone.value" type="text" @blur="baseinfo.phone.showinput=false"   placeholder="" v-show="baseinfo.phone.showinput">
                            <p @dblclick="baseinfo.phone.showinput=true" v-show="!baseinfo.phone.showinput">{{ baseinfo.phone.value }}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="info">
                        <label for="number">Q Q <i class="fa fa-qq" aria-hidden="true"></i>：</label>
                        <div class="infoinput">
                            <input v-model="baseinfo.qq.value" type="text" @blur="baseinfo.qq.showinput=false" placeholder="" v-show="baseinfo.qq.showinput">
                            <p @dblclick="baseinfo.qq.showinput=true" v-show="!baseinfo.qq.showinput">{{ baseinfo.qq.value }}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="info">
                        <label for="number">微信<i class="fa fa-weixin" aria-hidden="true"></i>：</label>
                        <div class="infoinput">
                            <input v-model="baseinfo.wx.value" type="text" @blur="baseinfo.wx.showinput=false" placeholder="" v-show="baseinfo.wx.showinput">
                            <p @dblclick="baseinfo.wx.showinput=true" v-show="!baseinfo.wx.showinput">{{ baseinfo.wx.value }}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="info">
                        <label for="number">邮箱<i class="fa fa-envelope" aria-hidden="true"></i>：</label>
                        <div class="infoinput">
                            <input v-model="baseinfo.mail.value" type="text" @blur="baseinfo.mail.showinput=false" placeholder="" v-show="baseinfo.mail.showinput">
                            <p @dblclick="baseinfo.mail.showinput=true" v-show="!baseinfo.mail.showinput">{{ baseinfo.mail.value }}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="info">
                        <label for="number">提示<i class="fa fa-bell" aria-hidden="true"></i>：</label>
                        0
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
                    },
                    mail:{
                        showinput:false,
                        value:"213123445@qq.com"
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
    border-radius:50%;
}
.left{
    float: left;
    display: block;
    border-right:1px solid rgba(60, 60, 60, 60);
    height: 100%;
    width: 18%;
    border-radius: 10px;
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
.infoinput p{
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