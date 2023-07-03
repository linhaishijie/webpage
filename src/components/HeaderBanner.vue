<template>
  <div class="HeaderBanner">
    <a href="#">虚拟实验</a>
    <span>“恰同学少年”虚拟仿真实验</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.HeaderBanner {
  height: 3.125rem;
  line-height: 3.125rem;
  a {
    font-size: 0.875rem;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    &::after {
      content: ">";
      font-size: 1.0625rem;
      margin-left: 0.6875rem;
    }
  }

  span {
    font-size: 0.875rem;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>