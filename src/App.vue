<template>
<!-- 加上keep-alive使它有缓存提升性能 -->
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>

  
</style>
