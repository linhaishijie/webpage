<template>
  <div class="HeaderRight">
    <div class="box1">
      <!-- 标题栏 -->
      <h3>“恰同学少年”虚拟仿真实验</h3>
      <ul>
        <li>实验学时：8</li>
        <li>学科：法学 / 马克思主义理论类 / 思想政治教育</li>
        <li>负责人：李伏清</li>
        <li>学校：湘潭大学</li>
      </ul>
      <div style="clear: both"></div>
    </div>
    <!-- 数据 -->
    <div class="box2">
      <dl>
        <dt>103571</dt>
        <dd>累计访问量</dd>
      </dl>
      <dl>
        <dt>16051</dt>
        <dd>累计学生数</dd>
      </dl>
      <dl>
        <dt>170143</dt>
        <dd>累计练习数</dd>
      </dl>
      <dl>
        <dt>19460</dt>
        <dd>累计实验结果</dd>
      </dl>
      <div style="clear: both"></div>
    </div>
    <!-- 底部 -->
    <div class="box3">
      <div id="tt">
        <span>当前暂无学习期次</span>
      </div>
      <span id="dd">开始实验</span>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.HeaderRight {
  flex: 60%;
  .box1 {
    margin-bottom: 1.25rem;
    h3 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.0625rem;
      margin-bottom: 1.25rem;
    }

    ul li {
      float: left;
      width: 50%;
      color: #fff;
      font-size: 0.75rem;
      line-height: 1.125rem;
      opacity: 0.75;
      height: 2.25rem;
      list-style-type: none;
    }
  }

  .box2 {
    margin-bottom: 3.125rem;
    dl {
      float: left;
      margin-right: 3.75rem;

      dt {
        color: #fff;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5625rem;
        margin-bottom: 0.3125rem;
      }

      dd {
        font-size: 0.75rem;
        color: #fff;
        opacity: 0.75;
        line-height: 1.125rem;
      }
    }
  }

  .box3 {
    #tt {
      position: relative;
      float: left;
      width: 18.75rem;
      height: 2.5rem;
      line-height: 2.5rem;
      padding: 0 0 0 0.625rem;
      border: 0.0625rem solid #888;
      border-radius: 1.25rem;
      color: #fff;
      font-size: 0.75rem;
      text-align: center;
      &::after {
        content: "\e67e";
        position: absolute;
        right: 0;
        font-size: 1.9375rem;
      }
    }

    #dd {
      float: right;
      margin-right: 0.3125rem;
      width: 7.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      color: #fff;
      background-color: #3d84ff;
      border-radius: 1.25rem;
      font-size: 1rem;
      cursor: pointer;
    }
  }
}
</style>