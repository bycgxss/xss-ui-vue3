<template>
  <div>
    导航栏 |
    <router-link to="/">Xss</router-link> |
    <router-link to="/xxx">Xss2</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
