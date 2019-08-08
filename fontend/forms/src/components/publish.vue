<template>
  <div class="clearfix">
    <div class="title">
      <input placeholder="title" v-model="title" type="text" />
    </div>
    <div class="url">
        <input placeholder="内推地址url" v-model="title" type="text" />
    </div>
    <div ref="editor">

    </div>
    <div class="form">
        <label for="">反馈类型:</label>
      <div class="select">
        <select :v-model="d_type" name="类别">
          <option v-for="(k,v) in classes" :value="v" :key="v">
            {{ k }}
          </option>
          <!-- <option value="5">随笔</option> -->
        </select>
      </div>

      
      <button @click="submit()">提交</button>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import '../assets/lib/clearfix.css'
export default {
  name: "feedback",
  data(){
      return {
          title:"",
classes:{
        1:"bug反馈",
        2:"体验反馈",
      }
      }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.customConfig.uploadImgShowBase64 = true; // 使用 base64 保存图片
    editor.customConfig.colors = [
        '#000000',
        '#eeece0',
        '#1c487f',
        '#4d80bf',
        '#c24f4a',
        '#8baa4a',
        '#7b5ba1',
        '#46acc8',
        '#f9963b',
        '#ffffff'
    ]
    editor.customConfig.fontNames = [
        '宋体',
        '微软雅黑',
        'Arial',
        'Tahoma',
        'Verdana'
    ]
    editor.create();
  }
};
</script>

<style  scoped>
.title {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  position: relative;
  margin-top: 20px;
}
.title input {
  width: 100%;
  height: 40px;
  display: block;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.title:before {
  content: "";
  width: 100px;
  position: absolute;
  left: 50%;
  top: 100%;
  height: 5px;
  background: #1e90ff;
  z-index: inherit;
  transform: translate(-50%, 0);
  transition: 1.5s;
}
.title:hover::before {
  width: 80%;
  height: 1px;
}
.url input{
    width: 100%;
  height: 40px;
  display: block;
  text-align: left;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding-left: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15); 
}
.url{
    margin-bottom: 23px;
}

.form {
  margin-top: 30px;
  float: right;
  margin-right: 50px;
}
.form button {
  margin-left: 12px;
  margin-top: 10px;
}
.select {
  display: inline-block;
  width: 300px;
  position: relative;
  vertical-align: middle;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  color: #555;
  border: 1px solid #aaa;
  text-shadow: none;
  border-radius: 4px;
  transition: box-shadow 0.25s ease;
  z-index: 2;
}
.select:hover {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.select:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #ccc;
  top: 14px;
  right: 10px;
  cursor: pointer;
  z-index: -2;
}
.select select {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select select:focus {
  outline: none;
}

button {
  /* 按钮美化 */
  width: 270px; /* 宽度 */
  height: 40px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 3px; /* 边框半径 */
  background: #1e90ff; /* 背景颜色 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  font-family: Microsoft YaHei; /* 设置字体 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
}
button:hover {
  /* 鼠标移入按钮范围时改变颜色 */
  background: #5599ff;
}
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

/* blockquote 样式 */
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}

/* code 样式 */
code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
pre code {
  display: block;
}

/* ul ol 样式 */
ul, ol {
  margin: 10px 0 10px 20px;
}

</style>