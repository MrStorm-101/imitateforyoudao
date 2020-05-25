<template>
  <div id="app">
    <el-row>
      <el-col :span="15" :push="3" style="float:left">
        <div style="margin-top:40px">
          <el-select v-model="selected">
            <el-option
              v-for="item in language"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button type="danger" @click="transfer('rulesForm')" style="margin-left:20px">翻译</el-button>
          <el-button type="danger" @click="artificial" plain style="margin-left:20px">人工翻译</el-button>
        </div>
      </el-col>
      <el-col :span="10" :push="6" style="float:right">
        <el-checkbox type="danger" v-model="checked" style="top:-36px">划词</el-checkbox>
      </el-col>
    </el-row>
    <el-form :model="rulesForm">
      <el-row style="margin-top:20px">
        <el-col :span="12" :push="3">
          <el-form-item prop="mes">
            <el-input
              type="textarea"
              v-model="rulesForm.inputMes"
              :rows="12"
              class="changeStyle"
              style="width:700px; float:left;"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <div id="showMes">{{rulesForm.showMes}}</div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script src="../public/layui/layui.js"></script>
<script>
export default {
  name: "TranslateMain",
  data: function() {
    return {
      checked: false,
      selected: "",
      rulesForm: {
        inputMes: "",
        showMes: "",
        mes: ""
      },
      language: [
        { label: "中文 >> 英语", value: "en" },
        { label: "中文 >> 日语", value: "ja" },
        { label: "中文 >> 德语", value: "de" },
        { label: "中文 >> 法语", value: "fr" },
        { label: "中文 >> 韩语", value: "ko" },
        { label: "中文 >> 意大利语", value: "it" },
        { label: "中文 >> 丹麦语", value: "da" },
        { label: "中文 >> 希腊语", value: "el" },
        { label: "其它语言 >> 中文", value: "zh" }
      ]
    };
  },
  created() {
    const _this = this;
    layui.use(["layer", "form"], function() {
      (_this.layer = layui.layer), (_this.form = layui.form);
    });
  },
  methods: {
    transfer: function(formName) {
      var _this = this;
      var text = _this.rulesForm.inputMes;
      var language = _this.selected;
      console.log(language, "提交成功");
      if (language) {
        _this.$http
          .get(
            "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200521T075540Z.1e0bd1018bd4399d.13b7f0e21197575af9f242c84a429e5f5b24f43f&lang=" +
              language +
              "&text=" +
              text
          )
          .then(response => {
            //console.log(response);
            _this.rulesForm.showMes = response.body.text[0];
          });
      } else {
        top.layer.load(2, { time: 1000 });
        setTimeout(function() {
          layer.open({
            title: "提示",
            content: "请选择一种语言进行翻译",
            shade: 0.5,
            area: ["400px", "200px"],
            btn: ["确定"]
          });
        }, 1000);
      }

      //提交时校验
      // _this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    artificial: function() {
      top.layer.load(2, { time: 1000 });
      setTimeout(function() {
        layer.open({
          title: "提示",
          content: "此功能尚未开发，敬请期待",
          shade: 0.5,
          area: ["400px", "200px"],
          btn: ["我知道了"]
        });
      }, 1000);
    }
  }
};
</script>

<style scoped>
#app {
  border-bottom: 1px solid #dcdfe6;
  height: 500px;
}

#showMes {
  width: 700px;
  height: 262px;
  border: 1px solid #dcdfe6;
  border-radius: 3px 3px;
}
</style>