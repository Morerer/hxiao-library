<template>
  <div class="main-container">
    <!-- 使用 v-if 判断是否显示导航栏 -->
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view />
    </main>
  </div>
</template>

<script>
import BHeader from './components/BHeader.vue'

export default {
  name: 'App',
  components: {
    BHeader
  },
  computed: {
    showHeader() {
      // 确保路由名称正确匹配 "CountBookAPI"
      return this.$route.name !== 'CountBookAPI'
    }
  }
}
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-box {
  flex-grow: 1;
}
</style>
