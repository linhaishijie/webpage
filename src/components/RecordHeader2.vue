<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="显示申请批阅"></el-checkbox>
    <el-checkbox label="显示优秀报告"></el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      checkList: ["显示申请批阅", "显示优秀报告"],
    };
  },
};
</script>

<style>
</style>