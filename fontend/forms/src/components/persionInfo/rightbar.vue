<template>
  <div class="right">
    <div class="title">
      <h1>详细信息</h1>
    </div>
    <div class="descinfo">
      <ul>
        <li>
          <div class="info">
            <label for="number">Q Q ：</label>
            <div class="infoinput">
              <input
                v-model="baseinfo.qq.value"
                type="text"
                @blur="baseinfo.qq.showinput=false"
                placeholder
                v-show="baseinfo.qq.showinput"
              />
              <p
                @dblclick="baseinfo.qq.showinput=true"
                v-show="!baseinfo.qq.showinput"
              >{{ baseinfo.qq.value }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="info">
            <label for="selfres">自我评价 ：</label>
            <div class="infoinput">
              <p @dblclick="changeselfres()">{{ descinfo.selfres.value }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="info">
            <label for="number">Q Q ：</label>
            <div class="infoinput">
              <input
                v-model="baseinfo.qq.value"
                type="text"
                @blur="baseinfo.qq.showinput=false"
                placeholder
                v-show="baseinfo.qq.showinput"
              />
              <p
                @dblclick="baseinfo.qq.showinput=true"
                v-show="!baseinfo.qq.showinput"
              >{{ baseinfo.qq.value }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="info">
            <label for="number">Q Q ：</label>
            <div class="infoinput">
              <input
                v-model="baseinfo.qq.value"
                type="text"
                @blur="baseinfo.qq.showinput=false"
                placeholder
                v-show="baseinfo.qq.showinput"
              />
              <p
                @dblclick="baseinfo.qq.showinput=true"
                v-show="!baseinfo.qq.showinput"
              >{{ baseinfo.qq.value }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="info">
            <label for="number">Q Q ：</label>
            <div class="infoinput">
              <input
                v-model="baseinfo.qq.value"
                type="text"
                @blur="baseinfo.qq.showinput=false"
                placeholder
                v-show="baseinfo.qq.showinput"
              />
              <p
                @dblclick="baseinfo.qq.showinput=true"
                v-show="!baseinfo.qq.showinput"
              >{{ baseinfo.qq.value }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="info">
            <label for="number">Q Q ：</label>
            <div class="infoinput">
              <input
                v-model="baseinfo.qq.value"
                type="text"
                @blur="baseinfo.qq.showinput=false"
                placeholder
                v-show="baseinfo.qq.showinput"
              />
              <p
                @dblclick="baseinfo.qq.showinput=true"
                v-show="!baseinfo.qq.showinput"
              >{{ baseinfo.qq.value }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="container" v-show="maskShow">
      <div class="mask" @click="maskSave()"></div>
      <div class="content">
        <textarea v-model="maskValue" name="ads" id cols="30" rows="10"></textarea>
        <button>保存</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "right",
  data() {
    return {
      maskValue: "",
      maskShow: false,
      maskRef:"",
      baseinfo: {
        phone: {
          showinput: false,
          value: "3726890272"
        },
        qq: {
          showinput: false,
          value: "3726890272"
        },
        wx: {
          showinput: false,
          value: "3726890272"
        }
      },
      descinfo: {
        selfres: { value: "我很帅，嗯，没有了，嗯，就是很帅呀" }
      }
    };
  },
  methods: {
    changeselfres() {
      this.maskShow = true;
      this.maskValue = this.descinfo.selfres.value;
      this.maskRef = "selfres"
      window.console.log(this.descinfo["selfres"].value)
    },
    maskSave(){
        this.descinfo[this.maskRef].value = this.maskValue;
        this.maskShow = false
    }
  }
};
</script>

<style scoped>
.title {
  width: 70%;
  float: left;
  /* margin-left: 6%; */
  border-bottom: 1px solid rgba(40, 40, 40, 0.8);
  line-height: 25px;
  letter-spacing: 3px;
  height: 40px;
}
.infoinput {
  display: inline;
}
.infoinput input {
  width: 300px !important;
  outline: none;
  border: none;
  border-bottom: 1px solid #333;
  height: 25px;
  display: block;
  text-align: center;
  float: right;
  font-size: 15px;
  letter-spacing: 2px;
  padding-bottom: 0px;
  line-height: 15px;
  box-sizing: border-box;
  padding-top: 10px;
}

.info {
  font-size: 15px;
  margin-top: 5px;
}
.info label {
  float: left;
}
.descinfo {
  width: 60%;
  margin: 0 auto;
  margin-top: 180px;
}

.mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.content {
  position: fixed;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  min-height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  text-align: center;
}
textarea {
  margin: 10px auto;
  display: block;
}
</style>