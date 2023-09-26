<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="addr" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin-top: 0.9375rem"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          result: "完成",
        },
        {
          date: "2016-05-04",
          name: "罗斯福",
          result: "失败",
        },
        {
          date: "2016-05-01",
          name: "斯拉夫",
          result: "完成",
        },
        {
          date: "2016-05-03",
          name: "冯绍峰",
          result: "完成",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          result: "完成",
        },
        {
          date: "2016-05-04",
          name: "罗斯福",
          result: "失败",
        },
        {
          date: "2016-05-01",
          name: "斯拉夫",
          result: "完成",
        },
        {
          date: "2016-05-03",
          name: "冯绍峰",
          result: "完成",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          result: "完成",
        },
        {
          date: "2016-05-04",
          name: "罗斯福",
          result: "失败",
        },
        {
          date: "2016-05-01",
          name: "斯拉夫",
          result: "完成",
        },
        {
          date: "2016-05-03",
          name: "冯绍峰",
          result: "完成",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          result: "完成",
        },
        {
          date: "2016-05-04",
          name: "罗斯福",
          result: "失败",
        },
        {
          date: "2016-05-01",
          name: "斯拉夫",
          result: "完成",
        },
        {
          date: "2016-05-03",
          name: "冯绍峰",
          result: "完成",
        },
        {
          date: "2016-05-01",
          name: "斯拉夫",
          result: "完成",
        },
        {
          date: "2016-05-03",
          name: "冯绍峰",
          result: "完成",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          result: "完成",
        },
        {
          date: "2016-05-04",
          name: "罗斯福",
          result: "失败",
        },
        {
          date: "2016-05-01",
          name: "斯拉夫",
          result: "完成",
        },
        {
          date: "2016-05-03",
          name: "冯绍峰",
          result: "完成",
        },
      ],
    };
  },
};
</script>

<style>
</style>