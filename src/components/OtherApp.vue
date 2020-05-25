<template>
  <div id="app">
    <el-row>
      <el-col :span="24" :push="2">
        <a href="#">
          <div class="other">
            <div style="float:left">
              <img src="../assets/image/人工翻译.png" alt />
            </div>
            <div style="float:right">
              <h3>有道人工翻译</h3>
              <span>新用户专享100元翻译礼包</span>
              <br />
              <span>立即领取</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="other">
            <div style="float:left">
              <img src="../assets/image/有道同传.png" alt />
            </div>
            <div style="float:right">
              <h3>有道同传</h3>
              <span>商务会议同传服务提供商</span>
              <br />
              <span>自研技术，安全可靠</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="other">
            <div style="float:left">
              <img src="../assets/image/翻译王.png" alt />
            </div>
            <div style="float:right">
              <h3>有道翻译王</h3>
              <span>43种语言的智能翻译机</span>
              <br />
              <span>离线翻译更强大</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="other">
            <div style="float:left">
              <img src="../assets/image/词典.png" alt />
            </div>
            <div style="float:right">
              <h3>有道词典</h3>
              <span>支持全文翻译和屏幕取词</span>
              <br />
              <span>智能调整语序</span>
            </div>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  list-style: none;
  border-bottom: 1px solid #dcdfe6;
}
.other {
  float: left;
  margin: 5%;
}

.other span {
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
}

a {
  color: black;
}
</style>