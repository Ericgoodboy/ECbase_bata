<template>
  <div class="tright">
    <div class="title">
      <h1>详细信息</h1>
    </div>
    <div class="descinfo clearfix">
      <ul>
        <li v-for="item in descinfo" :key="item.id">
          <div v-if="item.dtype=='shorttext'" class="info">
            <label :for="item.name">{{ item.name }}</label>
            <div class="infoinput">
              <input
                v-model="item.value"
                type="text"
                @blur="item.editing=false"
                placeholder
                v-show="item.editing"
              />

              <p @dblclick="item.editing=true" v-show="!item.editing">{{ item.value }}</p>
            </div>
          </div>
          <div v-if="item.dtype=='longtext'" class="info">
            <label :for="item.name">{{ item.name }}</label>
            <div class="infoinput">
              <p @dblclick="changelongtext(item)" v-show="!item.editing">{{ item.value }}</p>
            </div>
          </div>
          <div v-if="item.dtype=='Mmutltext'" class="Mmutltext">
            <Mmutltext :data="item.data"></Mmutltext>
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
import Mmutltext from "./Mmutltext";
export default {
  name: "right",
  data() {
    return {
      maskValue: "",
      maskShow: false,
      maskRef: "",
      descinfo: [
        {
          id: 1,
          name: "姓名",
          dtype: "shorttext",
          value: "黄骐",
          editing: false
        },
        {
          name: "爱好",
          dtype: "longtext",
          value: "黄骐",
          editing: false,
          id: 2
        },
        {
          name: "入学年份",
          dtype: "shorttext",
          value: "黄骐",
          editing: false,
          id: 3
        },
        {
          name: "社团经历",
          dtype: "longtext",
          value: "黄骐",
          editing: false,
          id: 4
        },
        {
          name: "奖励经理",
          dtype: "longtext",
          value: "黄骐",
          editing: false,
          id: 6
        },
        {
          name: "政治面貌",
          dtype: "longtext",
          value: "黄骐",
          editing: false,
          id: 7
        },
        {
          name: "籍贯",
          dtype: "shorttext",
          value: "黄骐",
          editing: false,
          id: 8
        },
        {
          name: "自我介绍",
          dtype: "Mmutltext",
          data: {
            name: "获奖经历",
            id: 100,

            values: [
              {
                id: 1,
                data: [
                  {
                    name: "时间",
                    value: "2016-02-08",
                    id: 1
                  },
                  {
                    name: "公司名称",
                    value: "阿里",
                    id: 2
                  },
                  {
                    name: "工作时间",
                    value: "3月",
                    id: 3
                  }
                ]
              },
              {
                id: 2,
                data: [
                  {
                    name: "时间",
                    value: "2016-02-08",
                    id: 1
                  },
                  {
                    name: "公司名称",
                    value: "阿里",
                    id: 2
                  },
                  {
                    name: "工作时间",
                    value: "3月",
                    id: 3
                  }
                ]
              }
            ]
          },
          id: 9
        },
        {
          dtype: "Mmutltext",
          id:10,
          data: {
            name: "工作经历",
            id: 100,

            values: [
              {
                id: 1,
                data: [
                  {
                    name: "时间",
                    value: "2016-02-08",
                    id: 1
                  },
                  {
                    name: "公司名称",
                    value: "阿里",
                    id: 2
                  },
                  {
                    name: "工作时间",
                    value: "3月",
                    id: 3
                  }
                ]
              },
              {
                id: 2,
                data: [
                  {
                    name: "时间",
                    value: "2016-02-08",
                    id: 1
                  },
                  {
                    name: "公司名称",
                    value: "阿里",
                    id: 2
                  },
                  {
                    name: "工作时间",
                    value: "3月",
                    id: 3
                  }
                ]
              }
            ]
          }
        }
      ]
    };
  },
  components: {
    Mmutltext
  },
  methods: {
    changelongtext(item) {
      this.maskShow = true;
      this.maskValue = item.value;
      this.maskRef = item.id;
    },
    maskSave() {
      for (let i = 0; i < this.descinfo.length; i++) {
        let item = this.descinfo[i];
        if (item.id == this.maskRef) {
          item.value = this.maskValue;
          this.maskShow = false;
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
.tright {
  float: left;
  border-left: #333 1px solid;
}
.title {
  width: 100%;
  float: left;
  /* margin-left: 6%; */
  border-bottom: 1px solid rgba(40, 40, 40, 0.8);
  line-height: 25px;
  letter-spacing: 3px;
  height: 40px;
  border-radius: 12px;
}
.infoinput {
  display: inline-block;
  margin-bottom: 10px;
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

.li {
  font-size: 15px;
  margin-bottom: 90px !important;
  display: block;
  background: #333;
}
.info {
  margin-bottom: 8px;
}
.info label {
  float: left;
  min-width: 60px;
}
.descinfo {
  display: block;
  width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  padding-top: 20px;
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