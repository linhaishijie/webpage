// 学习记录
<template>
  <div id="LearningRecord">
    <RecordHeader1 />
    <RecordHeader2 />
    <RecordHeader3 />
  </div>
</template>

<script>
import RecordHeader1 from "../components/RecordHeader1.vue";
import RecordHeader2 from "../components/RecordHeader2.vue";
import RecordHeader3 from "../components/RecordHeader3.vue";
export default {
  components: {
    RecordHeader1,
    RecordHeader2,
    RecordHeader3,
  },
};
</script>

<style>
#LearningRecord {
  text-align: center;
}
</style>