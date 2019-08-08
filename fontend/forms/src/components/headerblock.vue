<template>
  <div class="header">
    <div class="banner">
      <img src="../assets/banner.png" alt />
    </div>
    <div class="header-right">
      <ul>
        <li>
          <div class="wraper">
            <router-link to="feedback" class="feedback">
              <i class="fa fa-user"></i> 反馈
            </router-link>
          </div>
        </li>
        <li>
          <div class="wraper">
            <router-link to="/" class="login">
              <i class="fa fa-user"></i> 个人中心
            </router-link>

           
          </div>
        </li>

        <li>
          <div class="wraper">
            <a href="#" class="search">
              <i class="fa fa-search"></i>search
            </a>
          </div>
        </li>
        <li>
          <div class="wraper">
            <input class="sinput" type="text" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerblock"
};
</script>

<style  scoped>
.header {
  height: 60px;
  width: 100%;
  background: #eee;
  display: block;
  font-size: 30px;
  padding-top: 12px;
  box-sizing: border-box;
  /* color: red; */
}
.banner img {
  height: 40px;
}
.banner {
  float: left;
  margin-left: 12px;
}
.search {
  width: 800px;
}
.sinput {
  border: none;
  border-bottom: 0.11em solid #333;
  text-align: center;
  outline: none;
  height: 30px;
  line-height: 25px;
  transition: 0.6s;
  float: left;
  display: block;
  /* width: 40%!important; */
  box-sizing: border-box;
  background: none;
  margin-right: 30px;
}
.sinput:focus {
  border-radius: 12px;
}
.searchbutton {
  /* 按钮美化 */
  width: 80px; /* 宽度 */
  height: 30px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 3px; /* 边框半径 */
  background: #1e90ff; /* 背景颜色 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  font-family: Microsoft YaHei; /* 设置字体 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
  padding: 0px;
  margin-left: 12px;
  float: right;
}
.login button {
  /* 按钮美化 */
  width: 80px; /* 宽度 */
  height: 30px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 3px; /* 边框半径 */
  background: #1e90ff; /* 背景颜色 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  font-family: Microsoft YaHei; /* 设置字体 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
  padding: 0px;
  margin-left: 12px;
}
.login,
.feedback,
.search {
  text-decoration: none;
  color: #777;
  font-size: 18px;
  margin-right: 13px;
}
.login:hover,
.feedback:hover {
  color: #3dd;
}
.search {
  text-decoration: none;
  color: #777;
  font-size: 18px;
  margin-right: 45px;
}
.search:hover {
  color: #3dd;
}
.header-right li {
  float: right;
}
.header-right ul {
  margin-right: 30px;
}
</style>