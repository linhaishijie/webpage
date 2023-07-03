<template>
  <div class="ClassHeader">
    <HeaderBanner />
    <div id="hh">
      <HeaderLeft />
      <HeaderRight />
    </div>
  </div>
</template>

<script>
import HeaderBanner from "./HeaderBanner.vue";
import HeaderLeft from "./HeaderLeft.vue";
import HeaderRight from "./HeaderRight.vue";
export default {
  components: {
    HeaderBanner,
    HeaderLeft,
    HeaderRight,
  },
};
</script>
 
<style lang="less" scoped>
.ClassHeader {
  margin-bottom: 1.125rem;
  padding: 0 2.0625rem 1.875rem 2.0625rem;
  #hh {
    display: flex;
  }
}
</style>>