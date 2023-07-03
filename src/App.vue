<template>
  <div id="app">
    <div id="gg">
      <ClassHeader />
    </div>
    <div id="flex">
      <ClassAside />
      <ClassMain />
    </div>
  </div>
</template>

<script>
import ClassHeader from "./components/ClassHeader.vue";
import ClassAside from "./components/ClassAside.vue";
import ClassMain from "./components/ClassMain.vue";

export default {
  name: "App",
  components: {
    ClassHeader,
    ClassAside,
    ClassMain,
  },
};
</script>

<style>
#app {
  font-family: "iconfont";
}
#gg {
  background-color: #9e988b;
}
#flex {
  display: flex;
}
</style>
