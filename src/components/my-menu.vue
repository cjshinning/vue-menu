<template>
  <el-menu>

    <template v-for="item in data">
      <!-- {{ item }} -->
      <resub :data="item" :key="item.title"></resub>
    </template>

  </el-menu>
</template>

<script>
import ElMenu from './el-menu.vue';
import resub from './resub.vue';
export default {
  props: {
    data: {}
  },
  components: {
    ElMenu,
    resub
  }
}
</script>