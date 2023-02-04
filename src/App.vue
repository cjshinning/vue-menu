<template>
  <div id="app">
    <!-- 根据不同的属性生成不同的h标签 -->
    <level type="1"><span slot="default">ok</span></level>
    <level type="2">ok</level>

    <hr>

    <my-menu :data="tree"></my-menu>
  </div>
</template>

<script>
import level from './components/level.js'
import myMenu from './components/my-menu.vue';
export default {
  data() {
    return {
      tree: [
        {
          title: '菜单1',
          children: [
            {
              title: '菜单1-1',
            }
          ]
        },
        {
          title: '菜单2',
          children: [
            {
              title: '菜单2-1',
              children: [
                {
                  title: '菜单2-1-1',
                }
              ]
            }
          ]
        },
        {
          title: '菜单3'
        }
      ]
    }
  },
  components: {
    level,
    myMenu
  }
}
</script>

<style>

</style>
