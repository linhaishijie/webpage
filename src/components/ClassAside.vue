<template>
  <div id="ClassAside">
    <div id="box">
      <router-link active-class="active" to="/ProjectIntroduce">
        <span class="iconfont icon-shuba"></span>
        <span>项目简介</span>
      </router-link>
      <router-link active-class="active" to="/TeachersIntroduce">
        <span class="iconfont icon-laoshi"></span>
        <span>师资介绍</span>
      </router-link>
      <router-link active-class="active" to="/ExperimentalGuide">
        <span class="iconfont icon-banshizhinan"></span>
        <span>实验指南</span>
      </router-link>
      <router-link active-class="active" to="/CourseMaterials">
        <span class="iconfont icon-kecheng"></span>
        <span>课程资料</span>
      </router-link>
      <router-link active-class="active" to="/ExperimentalResources">
        <span class="iconfont icon-shiyan"></span>
        <span>实验资源</span>
      </router-link>
      <router-link active-class="active" to="/AssessmentRequirement">
        <span class="iconfont icon-kaohe"></span>
        <span>考核要求</span>
      </router-link>
      <router-link active-class="active" to="/ExcellentCase">
        <span class="iconfont icon-icon_xinyong_xianxing_jijin-"></span>
        <span>优秀案例</span>
      </router-link>
      <router-link active-class="active" to="/LearningRecord">
        <span class="iconfont icon-anli-A"></span>
        <span>学习记录</span>
      </router-link>
      <router-link active-class="active" to="/QuestionsAnswers">
        <span class="iconfont icon-wenda"></span>
        <span>互动问答</span>
      </router-link>
      <router-link active-class="active" to="/DataAnalysis">
        <span class="iconfont icon-shujufenxi-liuliangfenxi"></span>
        <span>数据分析</span>
      </router-link>
      <router-link active-class="active" to="/CurriculumReview">
        <span class="iconfont icon-hetongpingshen"></span>
        <span>课程评审</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#ClassAside {
  flex: 20%;
  box-sizing: border-box;
  height: 35rem;
  padding: 1.875rem 1.875rem 1.875rem 1.875rem;
  background-color: #ffffff;
  margin-left: 2.0625rem;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
  .iconfont {
    margin-right: 0.1875rem;
    font-size: 1.125rem;
  }
  #box {
    height: 31.25rem;
    background-color: #ffffff;
    a {
      display: block;
      height: 2.5rem;
      text-decoration: none;
      text-align: center;
      line-height: 2.5rem;
      margin-bottom: 1.25rem;
      background: #fff;
      font-size: 1.1rem;
      color: #777777;
      border-radius: 0.375rem;
    }
    .active {
      background: #3d84ff;
      color: #fff;
    }
  }
}
</style>