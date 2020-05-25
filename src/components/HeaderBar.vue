<template>
  <div id="app">
    <el-row type="flex">
      <el-col :span="10" :push="1" style="float:left">
        <img src="../assets/image/logo.png" alt />
      </el-col>
      <el-col :span="14" :push="6" style="float:right">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#e02433"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <a href="#">同传</a>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="#">翻译机</a>
          </el-menu-item>
          <el-menu-item index="3">
            <el-popover placement="bottom" width="500" trigger="click">
              <div id="popover-full">
                <div id="popover-top">
                  <h2>
                    <span style="color:#e02433">网易自营</span>人工翻译服务，专业、精准、地道！
                  </h2>
                </div>
                <br />
                <div id="popover-medium">
                  <span style="color:rgba(153,153,153,1)">精选全球上万名译员实时待命，专家审校，母语润色。严格质量</span>
                  <br />
                  <span style="color:rgba(153,153,153,1)">把控，多重售后保障，让您翻译无忧！</span>
                </div>
                <div id="popover-bottom">
                  <div class="messageBox">
                    <h3>快速翻译</h3>
                    <span style="color:rgba(153,153,153,1)">最快一分钟</span>
                    <br />
                    <span style="color:rgba(153,153,153,1)">立等可取</span>
                  </div>
                  <div class="messageBox">
                    <h3>文档翻译</h3>
                    <span style="color:rgba(153,153,153,1)">精准匹配译员</span>
                    <br />
                    <span style="color:rgba(153,153,153,1)">多重质量把控</span>
                  </div>
                  <div class="messageBox">
                    <h3>母语润色</h3>
                    <span style="color:rgba(153,153,153,1)">涵盖上千学科</span>
                    <br />
                    <span style="color:rgba(153,153,153,1)">母语专家润色！</span>
                  </div>
                </div>
              </div>
              <span slot="reference">人工翻译</span>
            </el-popover>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#">翻译API</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="#">翻译APP</a>
          </el-menu-item>
          <el-menu-item index="6">
            <a href="#">登录</a>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data: function() {
    return {
      activeIndex: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#app {
  box-shadow: 3px 3px 20px #dcdcdc;
}

#popover-full {
  padding: 20px;
}

.messageBox {
  border: 1px solid #f8f8ff;
  border-radius: 10px 10px;
  width: 100px;
  height: 100px;
  float: left;
  margin: 10px;
  text-align: center;
  text-justify: auto;
  vertical-align: center;
  opacity: 0.8;
}

.messageBox:hover {
  background: #dcdcdc;
}

.messageBox > h3 {
  margin-top: 10px;
}

img {
  height: 60px;
  width: 310px;
  position: absolute;
  left: 10%;
}
</style>