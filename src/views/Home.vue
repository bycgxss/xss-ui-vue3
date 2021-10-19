<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1>Xss-UI for Vue3</h1>
      <h2>仅供学习参考</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  name: "Home",
  components: { TopNav },
};
</script>